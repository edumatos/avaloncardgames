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
	public class SpiderCanvas : Canvas
	{
		public const int DefaultWidth = 800;
		public const int DefaultHeight = 600;


		CardDeck MyDeck = new CardDeck
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


		public enum SpiderRankEnum
		{
			Unknown,

			RankKing,
			RankQueen,
			RankJack,
			Rank10,
			Rank9,
			Rank8,
			Rank7,
			Rank6,
			Rank5,
			Rank4,
			Rank3,
			Rank2,
			RankAce,

		}

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

						//s.SetBackground(MyDeck.GfxPath + "/spider.empty.png");

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

						//s.Click +=
						//    delegate
						//    {
						//        if (DealStacks.Contains(s))
						//        {
						//            if (MyStatus.Ready)
						//                DealRow(null);
						//        }
						//        else
						//        {
						//            System.Console.WriteLine("whoops wrong stack click ");

						//        }
						//    };
					}
				};


			System.Console.WriteLine("creating dealstack... ");

			var dealpoint = new Point(DefaultWidth - CardInfo.Width - Margin, DefaultHeight - CardInfo.Height - Margin);


			while (MyDeck.UnusedCards.Count > 0)
			{
				var s = new CardStack { MyDeck.FetchCards(10) };

				DealStacks.Add(
					s.MoveTo(Convert.ToInt32( dealpoint.X), Convert.ToInt32( dealpoint.Y))
				);

				dealpoint.X -= 10;
			}

			DeadStacks.Add(new CardStack().MoveTo(Margin, Convert.ToInt32( dealpoint.Y)));
		}
	}
}
