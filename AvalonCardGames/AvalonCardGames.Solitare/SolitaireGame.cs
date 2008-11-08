using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Shapes;
using AvalonCardGames.Menu.Shared;
using ScriptCoreLib;
using ScriptCoreLib.Shared.Avalon.Cards;
using ScriptCoreLib.Shared.Avalon.Controls;
using ScriptCoreLib.Shared.Avalon.Extensions;
using ScriptCoreLib.Shared.Lambda;

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
		readonly StatusControl MyStatus;
		public event Action GameOver;

		public SolitaireGame()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			System.Console.WriteLine("--- solitare ---");

			this.MyStatus = new StatusControl().AttachContainerTo(this).MoveContainerTo(
				(DefaultWidth - StatusControl.Width) / 2,
				(DefaultHeight - StatusControl.Height)
			);


			var GameOverBox = new TextBox
			{
				Width = DefaultWidth,
				TextAlignment = System.Windows.TextAlignment.Center,
				Foreground = Brushes.White,
				Background = Brushes.Transparent,
				BorderThickness = new Thickness(0),
				IsReadOnly = true,
				FontSize = 24,
			}.MoveTo(0, DefaultHeight / 2).AttachTo(this);


			// add autoscroll ?
			this.MyDeck.SizeTo(DefaultWidth, DefaultHeight);
			this.MyDeck.AttachContainerTo(this);
			this.MyDeck.GetRank = e => (int)RankMapping[e];


			System.Console.WriteLine("adding card infos... ");

			MyDeck.UnusedCards.AddRange(CardInfo.FullDeck());

			this.MyStatus.Score = -1;
			this.MyStatus.CardsLeft = this.MyDeck.UnusedCards.Count;
			this.MyStatus.Update();


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
								s.RevealLastCard();
						};

				}
			);



			GameOver += delegate
			{
				GameOverBox.Text = "Congratulations! You Won!";
			};


			System.Console.WriteLine("creating goalstack... ");

			var Margin = (DefaultWidth - CardInfo.Width * 7) / 8;

			var ReserveStack = new CardStack().MoveTo(Margin, Margin);
			var UsedChoiceStack = new CardStack().MoveTo(Margin + CardInfo.Width + Margin, Margin);
			var ChoiceStack = new CardStack().MoveTo(Margin + CardInfo.Width + Margin, Margin);


			TempStacks.AddRange(
				ReserveStack,
				UsedChoiceStack,
				ChoiceStack
			);


			ReserveStack.CardMargin.X = 0;
			ReserveStack.CardMargin.Y = 0;

			UsedChoiceStack.CardMargin.X = 0;
			UsedChoiceStack.CardMargin.Y = 0;

			ChoiceStack.CardMargin.X = 20;
			ChoiceStack.CardMargin.Y = 0;



			#region rules
			Func<bool> Rule_WinConditionMet =
				delegate
				{
					if (PlayStacks.All(s => s.Cards.Count > 0))
						return false;

					if (TempStacks.All(s => s.Cards.Count == 0))
						return false;

					return true;
				};

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

			#endregion

			MyDeck.ApplyCardRules += delegate(Card card)
			{
				card.MovedByLocalPlayer +=
					delegate
					{
						MyStatus.Moves++;
						MyStatus.Update();

					};

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
								return card.Info.Rank == CardInfo.RankEnum.RankKing;


							return (RuleForStackingCardsInPlayStack(CandidateStack.Cards.Last(), card));
						}

						if (GoalStacks.Contains(CandidateStack))
						{
							return (RuleForStackingCardsInGoalStack(CandidateStack.Cards.LastOrDefault(), card));

						}

						return false;
					};
			};



			GoalStacks.ForEachNewItem(
				s =>
				{
					s.CardMargin.X = 0;
					s.CardMargin.Y = 0;

					s.Cards.ForEachNewItem(
						card =>
						{
							this.MyStatus.CardsLeft--;
							this.MyStatus.Update();

							if (card.Info.Rank == CardInfo.RankEnum.RankKing)
							{

								card.VisibleSide = Card.SideEnum.BackSide;


								if (Rule_WinConditionMet())
								{
									// winner!
									MyDeck.Sounds.win();

									if (this.GameOver != null)
										this.GameOver();
								}
							}
						}
					);
				}
			);
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

			ChoiceStack.Click +=
				delegate
				{
					ChoiceStack.Update();
				}
			;

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
						MyDeck.Sounds.deal();

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


						ChoiceStack.Cards.ToArray().ForEach(
							card =>
							{
								card.AttachToStack(UsedChoiceStack);
							}
						);
						UsedChoiceStack.Update();

						3.Times(
							SignalNext =>
								ReserveStack.LastOrDefault().Apply(
									card =>
									{
										card.BringToFront();

										Console.WriteLine(card.ToString());

										card.AnimatedMoveToStack(ChoiceStack, null, null);

										MyDeck.Sounds.deal();

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
