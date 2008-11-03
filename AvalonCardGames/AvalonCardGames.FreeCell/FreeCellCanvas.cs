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

namespace AvalonCardGames.FreeCell.Shared
{
	[Script]
	public class FreeCellCanvas : Canvas
	{
		public const int DefaultWidth = 800;
		public const int DefaultHeight = 600;

		CardDeck MyDeck = new CardDeck
		{
		};

		BindingList<CardStack> TempStacks;
		BindingList<CardStack> GoalStacks;
		BindingList<CardStack> PlayStacks;

		public FreeCellCanvas()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;


			new TiledBackgroundImage(
				(KnownAssets.Path.DefaultCards + "/felt.png").ToSource(),
					64, 64,
					14, 10
			).AttachContainerTo(this);

			// add autoscroll ?
			this.MyDeck.SizeTo(DefaultWidth, DefaultHeight);
			this.MyDeck.AttachContainerTo(this);

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



			#region rules
			MyDeck.ApplyCardRules += delegate(Card e)
			{
				e.VisibleSide = Card.SideEnum.TopSide;
			};
			#endregion


			System.Console.WriteLine("creating goalstack... ");

			var Margin = (DefaultWidth - CardInfo.Width * 8) / 9;

			GoalStacks.AddRange(
				Enumerable.Range(0, 4).ToArray(
					i => new CardStack().MoveTo(DefaultWidth - Margin / 2 - ((CardInfo.Width + Margin / 2) * 4) + i * (CardInfo.Width + Margin / 2), Margin)
				)
			);

			System.Console.WriteLine("creating tempstack... ");


			TempStacks.AddRange(
				Enumerable.Range(0, 4).ToArray(
					i => new CardStack().MoveTo(
						Margin + i * (CardInfo.Width + Margin / 2),
						Margin
					)
				)
			);

			System.Console.WriteLine("creating playstack... ");

			PlayStacks.AddRange(
				Enumerable.Range(0, 8).ToArray(
					i => new CardStack().MoveTo(Margin + (i) * (CardInfo.Width + Margin), Margin * 3 + CardInfo.Height).Apply(
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
