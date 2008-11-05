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
using ScriptCoreLib.Shared.Avalon.TiledImageButton;
using AvalonCardGames.Menu.Shared;

namespace AvalonCardGames.FreeCell.Shared
{
	[Script]
	public partial class FreeCellGame : Canvas
	{
		public const int DefaultWidth = 800;
		public const int DefaultHeight = 600;

		public AeroNavigationBar History { get; set; }

		public readonly CardDeck MyDeck = new CardDeck
		{
		};

		BindingList<CardStack> TempStacks;
		BindingList<CardStack> GoalStacks;
		BindingList<CardStack> PlayStacks;

		readonly StatusControl MyStatus;

		public FreeCellGame()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;


			var Margin = (DefaultWidth - CardInfo.Width * 8) / 9;

			#region king
			var KingCanvas = new Canvas
			{
				Width = 96,
				Height = 96
			}.AttachTo(this).MoveTo(
				(DefaultWidth - 32) / 2,
				Margin * 2 + (CardInfo.Height - 32) / 2
			);

			var KingRight = new Image
			{
				Source = (KnownAssets.Path.Assets + "/kingbitm.png").ToSource(),
				Width = 32,
				Height = 32
			}.AttachTo(KingCanvas);

			var KingLeft = new Image
			{
				Source = (KnownAssets.Path.Assets + "/kingleft.png").ToSource(),
				Width = 32,
				Height = 32
			}.AttachTo(KingCanvas);

			var KingSmile = new Image
			{
				Source = (KnownAssets.Path.Assets + "/kingleft.png").ToSource(),
				Width = 32,
				Height = 32,
				Visibility = Visibility.Hidden
			}.AttachTo(KingCanvas);
			#endregion

			this.MyDeck.Overlay.MouseMove +=
				(sender, args) =>
				{
					var p = args.GetPosition(this.MyDeck.Overlay);

					if (p.X < DefaultWidth / 2)
					{
						KingLeft.Show();
						KingRight.Hide();
					}
					else
					{
						KingLeft.Hide();
						KingRight.Show();
					}
				};

			this.MyStatus = new StatusControl().AttachContainerTo(this).MoveContainerTo(
				(DefaultWidth - StatusControl.Width) / 2,
				(DefaultHeight - StatusControl.Height)
			);
			//this.MyStatus.Container.Hide();

			// add autoscroll ?
			this.MyDeck.SizeTo(DefaultWidth, DefaultHeight);
			this.MyDeck.AttachContainerTo(this);
			this.MyDeck.GetRank = e => (int)RankMapping[e];

			System.Console.WriteLine("--- freecell ---");

			System.Console.WriteLine("adding card infos... ");

			MyDeck.UnusedCards.AddRange(CardInfo.FullDeck());





			System.Console.WriteLine("creating stacklists... ");

			PlayStacks = MyDeck.CreateStackList();
			PlayStacks.ForEachNewItem(
				k =>
				{
					k.CardMargin = new Vector { Y = 20 };
					k.Update();
				}
			);

			TempStacks = MyDeck.CreateStackList();

			GoalStacks = MyDeck.CreateStackList();
			GoalStacks.ForEachNewItem(
				k =>
				{

					k.CardMargin = new Vector();
				}
			);

			Func<Card, Card, bool> RuleForStackingCardsInGoalStack =
				(Previous, Current) =>
				{
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
					if (Previous.Info.SuitColor == Current.Info.SuitColor)
						return false;

					if (Previous.Rank + 1 != Current.Rank)
						return false;

					return true;
				};


			#region rules
			MyDeck.ApplyCardRules += delegate(Card card)
			{

				card.MovedByLocalPlayer +=
					delegate
					{
						var FrozenTokens = new
						{
							card.CurrentStack,
							card.PreviousStack
						};

						Console.WriteLine(new { HistoryMove = card, StackedCards = card.StackedCards.Length, Previous = card.PreviousStack, Current = card.CurrentStack }.ToString());

						History.History.Add(
							delegate
							{
								// we already are at the state we want to be
								if (card.CurrentStack == FrozenTokens.PreviousStack)
									return;

								card.AnimatedMoveToStack(FrozenTokens.PreviousStack, null);
								
								this.MyDeck.Sounds.deal();
							},
							delegate
							{
								// we already are at the state we want to be
								if (card.CurrentStack == FrozenTokens.CurrentStack)
									return;

								card.AnimatedMoveToStack(FrozenTokens.CurrentStack, null);
								this.MyDeck.Sounds.deal();
							}
						);
					};

				card.VisibleSide = Card.SideEnum.TopSide;

				card.ValidateDragStart =
					delegate
					{
						// cannot remove cards from goal stack
						if (GoalStacks.Contains(card))
							return false;

						// cannot drag a pile of cards unless alternate colors and descending numbers
						return card.SelectedCards.AllWithPrevious(RuleForStackingCardsInPlayStack);
					};

				card.ValidateDragStop =
					CandidateStack =>
					{
						if (TempStacks.Contains(CandidateStack))
						{
							// temp only holds one card
							if (CandidateStack.Cards.Count > 0)
								return false;

							// and only one card can be inserted
							if (card.StackedCards.Length > 0)
								return false;

							return true;
						}

						if (PlayStacks.Contains(CandidateStack))
						{
							if (CandidateStack.Cards.Count == 0)
								return true;


							return (RuleForStackingCardsInPlayStack(CandidateStack.Cards.Last(), card));
						}

						if (GoalStacks.Contains(CandidateStack))
						{
							if (CandidateStack.Cards.Count == 0)
							{

								return (RuleForStackingCardsInGoalStack(null, card));
							}

							return (RuleForStackingCardsInGoalStack(CandidateStack.Cards.Last(), card));

						}

						return false;
					};
			};
			#endregion


			System.Console.WriteLine("creating goalstack... ");


			GoalStacks.AddRange(
				Enumerable.Range(0, 4).ToArray(
					i =>
						new CardStack
						{
							Name = "GoalStack " + i
						}.MoveTo(
							DefaultWidth - Margin / 2 - ((CardInfo.Width + Margin / 2) * 4) + i * (CardInfo.Width + Margin / 2),
							Margin * 2
						)
				)
			);

			System.Console.WriteLine("creating tempstack... ");


			TempStacks.AddRange(
				Enumerable.Range(0, 4).ToArray(
					i => new CardStack
					{
						Name = "TempStack " + i
					}.MoveTo(
						Margin + i * (CardInfo.Width + Margin / 2),
						Margin * 2
					)
				)
			);

			System.Console.WriteLine("creating playstack... ");

			PlayStacks.AddRange(
				Enumerable.Range(0, 8).ToArray(
					i => new CardStack
					{
						Name = "PlayStack " + i
					}.MoveTo(
						Margin + (i) * (CardInfo.Width + Margin),
						Margin * 4 + CardInfo.Height
					).Apply(
						s =>
						{
							var Count = 6;

							if (i < 4)
								Count = 7;

							s.Cards.AddRange(MyDeck.FetchCards(Count));
						}
					)
				)
			);

		}
	}
}
