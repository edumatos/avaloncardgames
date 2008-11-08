using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;
using ScriptCoreLib;
using ScriptCoreLib.Shared.Avalon.Cards;
using ScriptCoreLib.Shared.Avalon.Controls;
using ScriptCoreLib.Shared.Avalon.Extensions;
using ScriptCoreLib.Shared.Lambda;
using System.Windows.Input;

namespace AvalonCardGames.Solitaire.Shared
{
	[Script]
	public partial class SolitaireGame : Canvas
	{
		public const int DefaultWidth = 800;
		public const int DefaultHeight = 600;

		public CardDeck MyDeck = new CardDeck
		{
		};

		BindingList<CardStack> TempStacks;
		BindingList<CardStack> GoalStacks;
		BindingList<CardStack> PlayStacks;
		public bool Cheat = false;

		public SolitaireGame()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			System.Console.WriteLine("--- solitare ---");



			// add autoscroll ?
			this.MyDeck.SizeTo(DefaultWidth, DefaultHeight);
			this.MyDeck.AttachContainerTo(this);
			this.MyDeck.GetRank = e => (int)RankMapping[e];

			System.Console.WriteLine("adding card infos... ");

			MyDeck.UnusedCards.AddRange(CardInfo.FullDeck());

			MyDeck.Stacks.ListChanged +=
				(sender, args) =>
				{
					if (args.ListChangedType == ListChangedType.ItemAdded)
					{
						// fixme: dynamically set backside for this card

						//var s = MyDeck.Stacks[args.NewIndex];
						//s.SetBackground(MyDeck.GfxPath + "/spider.empty.png");
					}
				};


			System.Console.WriteLine("creating stacklists... ");

			PlayStacks = MyDeck.CreateStackList();
			TempStacks = MyDeck.CreateStackList();
			GoalStacks = MyDeck.CreateStackList();

			PlayStacks.ForEachNewItem(
				delegate(CardStack s)
				{
					s.CardMargin = new Vector { Y = 20 };
					s.Update();

					s.Cards.ListChanged +=
						(sender, args) =>
						{
							if (args.ListChangedType == ListChangedType.ItemDeleted)
								//if (MyStatus.Ready)
								s.RevealLastCard();
						};

				}
			);


			GoalStacks.ForEachNewItem(
				Stack => Stack.CardMargin = new Vector()
			);


			System.Console.WriteLine("creating goalstack... ");

			var Margin = (DefaultWidth - CardInfo.Width * 7) / 8;

			var ReserveStack = new CardStack
			{
				CardMargin = new Vector()
			}.MoveTo(Margin, Margin);

			var UsedChoiceStack = new CardStack
			{
				CardMargin = new Vector()
			}.MoveTo(Margin + CardInfo.Width + Margin, Margin);


			var ChoiceStack = new CardStack
			{
				CardMargin = new Vector { X = 20 }
			}.MoveTo(Margin + CardInfo.Width + Margin, Margin);


			TempStacks.AddRange(
				ReserveStack,
				UsedChoiceStack,
				ChoiceStack
			);


			Func<Card, Card, bool> RuleForStackingCardsInGoalStack =
				(Previous, Current) =>
				{
					if (Cheat)
						return true;

					if (Previous == null)
						return Current.Info.Rank == CardInfo.RankEnum.RankAce;

					if (Previous.Info.Suit != Current.Info.Suit)
						return false;

					if (Previous.Rank != Current.Rank + 1)
						return false;

					return true;
				};

			Func<Card, Card, bool> RuleForStackingCardsInPlayStack =
				(Previous, Current) =>
				{
					if (Cheat)
						return true;

					if (Previous.Info.SuitColor == Current.Info.SuitColor)
						return false;

					if (Previous.Rank + 1 != Current.Rank)
						return false;

					return true;
				};



			MyDeck.ApplyCardRules += delegate(Card card)
			{
				card.ValidateDragStart =
					delegate
					{
						if (Cheat)
							return true;

						// cannot remove cards from goal stack
						if (GoalStacks.Contains(card))
							return false;

						if (TempStacks.Contains(card))
						{
							return (card == ChoiceStack.LastOrDefault());
						}

						// cannot drag a pile of cards unless alternate colors and descending numbers
						return card.SelectedCards.AllWithPrevious(RuleForStackingCardsInPlayStack);
					};


				card.ValidateDragStop =
					CandidateStack =>
					{
						if (Cheat)
							return true;

						if (TempStacks.Contains(CandidateStack))
						{
							return false;
						}

						if (PlayStacks.Contains(CandidateStack))
						{
							if (CandidateStack.Cards.Count == 0)
								return true;


							return (RuleForStackingCardsInPlayStack(CandidateStack.Cards.Last(), card));
						}

						if (GoalStacks.Contains(CandidateStack))
						{
				
							return (RuleForStackingCardsInGoalStack(CandidateStack.Cards.LastOrDefault(), card));

						}

						return false;
					};
			};

			GoalStacks.AddRange(
				Enumerable.Range(0, 4).ToArray(
					i => new CardStack().MoveTo(DefaultWidth - ((CardInfo.Width + Margin) * 4) + i * (CardInfo.Width + Margin), Margin)
				)
			);

			System.Console.WriteLine("creating playstack... ");

			PlayStacks.AddRange(
				Enumerable.Range(0, 7).ToArray(
					i => new CardStack().MoveTo(Margin + i * (CardInfo.Width + Margin), Margin * 3 + CardInfo.Height).Apply(s => s.Cards.AddRange(MyDeck.FetchCards(i + 1)))
				)
			);

			ReserveStack.Cards.AddRange(MyDeck.FetchCards(MyDeck.UnusedCards.Count));
			ReserveStack.Update();

			PlayStacks.ForEach(k => k.Last().VisibleSide = Card.SideEnum.TopSide);


			UsedChoiceStack.Cards.ForEachNewItem(
				card => card.VisibleSide = Card.SideEnum.BackSide
			);

			ChoiceStack.Cards.ForEachNewItem(
				card => card.VisibleSide = Card.SideEnum.TopSide
			);


			ReserveStack.Overlay.Cursor = Cursors.Hand;
			ReserveStack.Cards.ForEachNewItem(
				card => card.VisibleSide = Card.SideEnum.BackSide
			);


		
		

			var ReserveStackEnabled = true;

			ReserveStack.Click +=
				delegate
				{
					if (!ReserveStackEnabled)
						return;

					if (ReserveStack.Cards.Count == 0)
					{
						ChoiceStack.FirstOrDefault().Apply(
							card =>
							{

								card.AnimatedMoveToStack(ReserveStack, null, null);
							}
						);

						UsedChoiceStack.FirstOrDefault().Apply(
							card =>
							{

								card.AnimatedMoveToStack(ReserveStack, null, null);
							}
						);
					}
					else
					{
						ReserveStackEnabled = false;

						UsedChoiceStack.Update();
						ChoiceStack.FirstOrDefault().Apply(
							card =>
							{
								card.AnimatedMoveToStack(UsedChoiceStack, null, null);
							}
						);


						3.Times(
							SignalNext =>
								ReserveStack.LastOrDefault().Apply(
									card =>
									{
										card.BringToFront();

										Console.WriteLine(card.ToString());

										card.AnimatedMoveToStack(ChoiceStack, null, null);

										200.AtDelay(SignalNext);
									}
								)
						);

					}


					// a timepoint when movements are done.. this should ba an event actually
					2000.AtDelay(() => ReserveStackEnabled = true);

				};
		}
	}
}
