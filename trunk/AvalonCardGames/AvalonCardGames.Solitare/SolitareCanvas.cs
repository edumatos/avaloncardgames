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

namespace AvalonCardGames.Solitare.Shared
{
	[Script]
	public class SolitareCanvas : Canvas
	{
		public const int DefaultWidth = 600;
		public const int DefaultHeight = 600;

		CardDeck MyDeck = new CardDeck
		{
		};

		//List<CardStack> TempStacks;
		BindingList<CardStack> GoalStacks;
		BindingList<CardStack> PlayStacks;

		public SolitareCanvas()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			System.Console.WriteLine("--- solitare ---");

			new TiledBackgroundImage(
				(KnownAssets.Path.DefaultCards + "/felt.png").ToSource(),
					64, 64,
					14, 10
			).AttachContainerTo(this);

			// add autoscroll ?
			this.MyDeck.SizeTo(DefaultWidth, DefaultHeight);
			this.MyDeck.AttachContainerTo(this);


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
			//TempStacks = MyDeck.CreateStackList();
			GoalStacks = MyDeck.CreateStackList();




			System.Console.WriteLine("creating goalstack... ");

			var Margin = (DefaultWidth - CardInfo.Width * 7) / 8;

			GoalStacks.AddRange(
				Enumerable.Range(0, 4).ToArray(
					i => new CardStack().MoveTo(DefaultWidth - ((CardInfo.Width + Margin) * 4) + i * (CardInfo.Width + Margin), Margin)
				)
			);

			System.Console.WriteLine("creating playstack... ");

			PlayStacks.AddRange(
				Enumerable.Range(0, 7).ToArray(
					i => new CardStack().MoveTo(Margin + i * (CardInfo.Width + Margin), Margin * 3 + CardInfo.Height).Apply(s => s.Cards.AddRange(MyDeck.FetchCards(i)))
				)
			);

		}
	}
}
