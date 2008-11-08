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
using AvalonCardGames.Menu.Shared;

namespace AvalonCardGames.Solitaire.Shared
{
	[Script]
	public class SolitaireCanvas : Canvas
	{
		public const int DefaultWidth = 800;
		public const int DefaultHeight = 600;

		CardDeck MyDeck = new CardDeck
		{
		};

		//List<CardStack> TempStacks;
		BindingList<CardStack> GoalStacks;
		BindingList<CardStack> PlayStacks;

		public SolitaireCanvas()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			this.ClipToBounds = true;

			System.Console.WriteLine("--- solitare ---");

			new TiledBackgroundImage(
				(KnownAssets.Path.DefaultCards + "/felt.png").ToSource(),
					64, 64,
					14, 10
			).AttachContainerTo(this);

			new TiledBackgroundImage(
				(global::ScriptCoreLib.Shared.Avalon.Cards.KnownAssets.Path.DefaultCards + "/felt.png").ToSource(),
					64, 64,
					14, 10
			).AttachContainerTo(this);

			var ShadowSize = 40;

			new GameBorders(DefaultWidth, DefaultHeight, ShadowSize).AttachContainerTo(this);

			var Content = new Canvas
			{
				Width = DefaultWidth,
				Height = DefaultHeight
			}.AttachTo(this);

			new SolitaireGame().AttachTo(Content);



		}
	}
}
