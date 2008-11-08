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

		public GameMenu Menu { get; set; }
		public readonly Sounds Sounds = new Sounds();

		public SolitaireCanvas()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			this.ClipToBounds = true;


			new TiledBackgroundImage(
				(global::ScriptCoreLib.Shared.Avalon.Cards.KnownAssets.Path.DefaultCards + "/felt.png").ToSource(),
					64, 64,
					14, 10
			).AttachContainerTo(this);

			var ShadowSize = 40;

			new GameBorders(DefaultWidth, DefaultHeight, ShadowSize).AttachContainerTo(this);

			new Image
			{
				Source = (KnownAssets.Path.Assets + "/jsc.png").ToSource(),
				Width = 96,
				Height = 96
			}.MoveTo(DefaultWidth - 96, DefaultHeight - 96).AttachTo(this);

			var Content = new Canvas
			{
				Width = DefaultWidth,
				Height = DefaultHeight
			}.AttachTo(this);


			new GameSocialLinks(this)
			{
				new GameSocialLinks.Button { 
					Source = (KnownAssets.Path.Assets + "/plus_google.png").ToSource(),
					Width = 62,
					Height = 17,
					Hyperlink = new Uri(Info.GoogleGadgetAddLink)
				},
				new GameSocialLinks.Button { 
					Source = (KnownAssets.Path.Assets + "/su.png").ToSource(),
					Width = 16,
					Height = 16,
					Hyperlink = new Uri( "http://www.stumbleupon.com/submit?url=" + Info.URL)
				}
			};


			// redefine the ctor to fit our context
			Func<string, string, string, GameMenu.Option> Option =
				(Text, Image, href) =>
					new GameMenu.Option
					{
						Text = "Play " + Text + "!",
						Source = (KnownAssets.Path.SocialLinks + "/" + Image + ".png").ToSource(),
						Hyperlink = new Uri(href),
						MarginAfter = Math.PI / 6
					};

			var Game = default(SolitaireGame);
			var GameFocusBoost = false;



			this.Menu = new GameMenu(DefaultWidth, DefaultHeight, ShadowSize)
			{
				new GameMenu.Option
				{
					Text = "Solitaire - medium difficulty",
					Source = (KnownAssets.Path.Assets + "/Preview.png").ToSource(),
					MarginAfter = 3 * Math.PI / 6,
					Click =
						delegate
						{
							GameFocusBoost = true;

							this.Menu.Hide();

							Game.Orphanize();
							Game = new SolitaireGame().AttachTo(Content);
							Game.MyDeck.Sounds = this.Sounds;

							500.AtDelay(() => GameFocusBoost = false);
						}
				},
				Option("FreeCell", "Preview_FreeCell",  "http://nonoba.com/zproxy/avalon-freecell"),
				Option("Spider Solitaire", "Preview_Spider",  "http://nonoba.com/zproxy/avalon-spider-solitaire"),
				Option("Treasure Hunt", "Preview_TreasureHunt",  "http://nonoba.com/zproxy/treasure-hunt"),
				Option("FlashMinesweeper:MP", "Preview_Minesweeper", "http://nonoba.com/zproxy/flashminesweepermp"),
				Option("Multiplayer Mahjong", "Preview_Mahjong", "http://nonoba.com/zproxy/mahjong-multiplayer"),
				Option("Multiplayer SpaceInvaders", "Preview_SpaceInvaders", "http://nonoba.com/zproxy/flashspaceinvaders"),

				
			};

			this.Menu.ValidateHide = () => Game != null;
			this.Menu.ValidateShow = () => !GameFocusBoost;

			this.Menu.AttachContainerTo(this);

			this.Menu.Show();
		}
	}
}
