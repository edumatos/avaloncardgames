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
	public partial class SpiderGame : Canvas
	{
		public const int DefaultWidth = 800;
		public const int DefaultHeight = 600;


		public CardDeck MyDeck = new CardDeck
		{
		};

		BindingList<CardStack> DealStacks;
		BindingList<CardStack> PlayStacks;

		BindingList<CardStack> DeadStacks;




		public SpiderGame(CardInfo.SuitEnum[] level)
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			this.ClipTo(0, 0, DefaultWidth, DefaultHeight);




			// add autoscroll ?
			this.MyDeck.SizeTo(DefaultWidth, DefaultHeight);
			this.MyDeck.AttachContainerTo(this);
			this.MyDeck.GetRank = e => (int)RankMapping[e];
			this.MyDeck.CardCustomBackground = global::ScriptCoreLib.Shared.Avalon.Cards.KnownAssets.Path.DefaultCards + "/spider.png";

			System.Console.WriteLine("--- spider ---");





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
				c.Moved +=
					 delegate
					 {
						 CheckForGoodSuit(c.CurrentStack);
					 };

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

							var Candidate = CandidateStack.Last();

							if (c.Rank == Candidate.Rank + 1)
								if (c.Info.Suit == Candidate.Info.Suit)
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
					new CardStack
					{
						Name = "PlayStack " + i
					}.MoveTo(
						Margin + i * (CardInfo.Width + Margin),
						Margin * 2
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

				s.Name = "DealStack";

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




	}
}
