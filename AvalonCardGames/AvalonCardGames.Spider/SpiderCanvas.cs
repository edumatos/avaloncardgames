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

namespace AvalonCardGames.Spider.Shared
{
	[Script]
	public partial class SpiderCanvas : Canvas
	{
		public const int DefaultWidth = 800;
		public const int DefaultHeight = 600;


		public CardDeck MyDeck = new CardDeck
		{
		};

		BindingList<CardStack> DealStacks;
		BindingList<CardStack> PlayStacks;

		BindingList<CardStack> DeadStacks;


		#region levels
		static CardInfo.SuitEnum[] LevelEasy = new CardInfo.SuitEnum[]
            {
                CardInfo.SuitEnum.Club,
                CardInfo.SuitEnum.Club,
                CardInfo.SuitEnum.Club,
                CardInfo.SuitEnum.Club,
            };

		static CardInfo.SuitEnum[] LevelMedium = new CardInfo.SuitEnum[]
            {
                CardInfo.SuitEnum.Club,
                CardInfo.SuitEnum.Heart,
                CardInfo.SuitEnum.Club,
                CardInfo.SuitEnum.Heart,
            };

		static CardInfo.SuitEnum[] LevelHard = new CardInfo.SuitEnum[]
            {
                CardInfo.SuitEnum.Club,
                CardInfo.SuitEnum.Heart,
                CardInfo.SuitEnum.Spade,
                CardInfo.SuitEnum.Diamond,
            };
		#endregion



		public Sounds Sounds = new Sounds();

		public SpiderCanvas()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			this.ClipTo(0, 0, DefaultWidth, DefaultHeight);


			new TiledBackgroundImage(
				(KnownAssets.Path.DefaultCards + "/felt.png").ToSource(),
					64, 64,
					14, 10
			).AttachContainerTo(this);

			// add autoscroll ?
			this.MyDeck.SizeTo(DefaultWidth, DefaultHeight);
			this.MyDeck.AttachContainerTo(this);
			this.MyDeck.GetRank = e => (int)RankMapping[e];
			this.MyDeck.CardCustomBackground = KnownAssets.Path.DefaultCards + "/spider.png";

			System.Console.WriteLine("--- spider ---");

			var level = LevelEasy;




			System.Console.WriteLine("adding card infos... ");

			MyDeck.UnusedCards.AddRange(CardInfo.By(2, level));

			//MyDeck.RankConverter = RankConverter;



			System.Console.WriteLine("creating stacklists... ");

			DealStacks = MyDeck.CreateStackList();
			PlayStacks = MyDeck.CreateStackList();
			DeadStacks = MyDeck.CreateStackList();

			PlayStacks.ListChanged +=
				(sender, args) =>
				{
					if (args.ListChangedType == ListChangedType.ItemAdded)
					{
						var s = PlayStacks[args.NewIndex];


					}
				};

			DeadStacks.ListChanged +=
				(sender, args) =>
				{
					if (args.ListChangedType == ListChangedType.ItemAdded)
					{
						var s = DeadStacks[args.NewIndex];

						//s.Control.Hide();

						s.CardMargin = new Vector { X = 2, Y = 0 };

						s.Cards.ListChanged +=
							(sender2, args2) =>
							{
								if (args2.ListChangedType == ListChangedType.ItemAdded)
								{
									//s[args2.NewIndex].Enabled = false;
								}

							};

					}
				};


			#region drag rules
			MyDeck.ApplyCardRules += delegate(Card c)
			{
				c.ValidateDragStart +=
					delegate
					{
						var Rank = c.Rank;

						return c.StackedCards.All(
							k =>
							{
								Rank++;

								return k.Rank == Rank;
							}
						);
					};

				c.ValidateDragStop +=
					CandidateStack =>
					{
						if (PlayStacks.Contains(CandidateStack))
						{
							if (CandidateStack.Cards.Count == 0)
								return true;

							var CandidateRank = CandidateStack.Last().Rank;

							if (c.Rank == CandidateRank + 1)
								return true;

							return false;
						}

						return false;
					};
			};

			#endregion

			System.Console.WriteLine("creating playstack... ");

			var Margin = (DefaultWidth - CardInfo.Width * 10) / 11;


			PlayStacks.AddRange(
				Enumerable.Range(0, 10).ToArray(
				i =>
					new CardStack().MoveTo(
						Margin + i * (CardInfo.Width + Margin),
						Margin
					).Apply(
						s =>
						{
							if (i < 4)
								s.Cards.AddRange(MyDeck.FetchCards(5));
							else
								s.Cards.AddRange(MyDeck.FetchCards(4));
						}
					)
				)
			);



			PlayStacks.ForEach(
				(System.Action<CardStack>)
				delegate(CardStack s)
				{
					s.Cards.ListChanged +=
						(sender, args) =>
						{
							if (args.ListChangedType == ListChangedType.ItemDeleted)
								//if (MyStatus.Ready)
								s.RevealLastCard();
						};


					//s.CardsMovedToStack +=
					//    delegate
					//    {
					//        //if (MyStatus.Ready)
					//        //{
					//        //    MyStatus.Score--;
					//        //    MyStatus.Moves++;

					//        //    MyStatus.Update();
					//        //}
					//    };
				}
			);



			DealStacks.ListChanged +=
				(sender, args) =>
				{
					if (args.ListChangedType == ListChangedType.ItemAdded)
					{
						var s = DealStacks[args.NewIndex];

						s.CardMargin = new Vector { Y = 0, X = 0 };
						s.Update();

						s.Click +=
							delegate
							{
								if (DealStacks.Contains(s))
								{
									//if (MyStatus.Ready)
									DealRow(null);
								}
								else
								{
									System.Console.WriteLine("whoops wrong stack click ");

								}
							};
					}
				};


			System.Console.WriteLine("creating dealstack... ");

			var dealpoint = new Point
			{
				X = DefaultWidth - CardInfo.Width - Margin,
				Y = DefaultHeight - CardInfo.Height - Margin
			};


			while (MyDeck.UnusedCards.Count > 0)
			{
				var s = new CardStack { MyDeck.FetchCards(10) };

				DealStacks.Add(
					s.MoveTo(Convert.ToInt32(dealpoint.X), Convert.ToInt32(dealpoint.Y))
				);

				dealpoint.X -= 10;
			}

			// we will collect cards here
			DeadStacks.Add(new CardStack().MoveTo(Margin, Convert.ToInt32(dealpoint.Y)));



			DealRow(
				delegate
				{

					//MyStatus.Ready = true;
					//MyStatus.Score = 500;
					//MyStatus.Moves = 0;
					//MyStatus.Visible = true;
					//MyStatus.Update();
				}
			);
		}


		public void DealRow(Action done)
		{

			var DealingStack = DealStacks.LastOrDefault();

			if (DealingStack == null)
			{
				System.Console.WriteLine("whoops, no more stacks left, but a click was made?");

				return;
			}

			DealStacks.Remove(DealingStack);

			// correct translation?
			if (PlayStacks.Any(t => t.Cards.Count == 0))
			{
				// ??
				System.Console.WriteLine("no move found!");

				//this.MySounds.PlaySoundNoMoveFound();

				return;
			}

			//MyStatus.Ready = false;

			System.Console.WriteLine("dealing new row of cards...");

			//Console.Log("deal last stack of " + DealingStack.Cards.Count + " to " + PlayStacks.Count + " stacks");

			if (DealingStack.Cards.Count == PlayStacks.Count)
			{
				// AddScore(- PlayStacks.Count);

				var ToBeAnimated = new Queue<Card>();

				foreach (CardStack v in PlayStacks)
				{
					var c = DealingStack.Cards.Last();

					c.VisibleSide = Card.SideEnum.TopSide;
					//c.Enabled = true;
					//c.Drag.Enabled = false;

					// could  be rewritten?

					c.AttachToStack(v);

					c.Overlay.Orphanize();
					c.Overlay.AttachTo(c.CurrentDeck.Overlay);

					ToBeAnimated.Enqueue(c);

				}

				System.Console.WriteLine("reordering cards, and animating...");

				ToBeAnimated.ForEachReversed((c) => c.BringToFront());

				Console.WriteLine("cards to be animated: " + ToBeAnimated.Count);

				Action NextCard = null;

				NextCard =
					delegate
					{
						if (ToBeAnimated.Count > 0)
						{
							var c = ToBeAnimated.Dequeue();

							this.MyDeck.Sounds.deal();

							//MySounds.PlaySoundDeal();

							var p = c.LocationInStack;

							c.AnimatedMoveTo(

								Convert.ToInt32(p.X),
								Convert.ToInt32(p.Y)
								);


							//delegate
							//{
							//    c.Drag.Enabled = true;
							//    CheckForGoodSuit(c.CurrentStack);

							if (ToBeAnimated.Count == 0)
							{
								DealingStack.Container.Hide();

								//MyStatus.Ready = true;

								System.Console.WriteLine("done...");

								if (done != null)
									done();
								//Helper.Invoke(done);
							}
							else
							{
								300.AtDelay(NextCard);
							}
							//});
						}


					};

				NextCard();

			}
		}


	}
}
