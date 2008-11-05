using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;
using AvalonCardGames.Menu.Shared;
using ScriptCoreLib;
using ScriptCoreLib.Shared.Avalon.Cards;
using ScriptCoreLib.Shared.Avalon.Controls;
using ScriptCoreLib.Shared.Avalon.Extensions;
using ScriptCoreLib.Shared.Avalon.TiledImageButton;
using ScriptCoreLib.Shared.Lambda;

namespace AvalonCardGames.FreeCell.Shared
{
	[Script]
	public partial class FreeCellCanvas : Canvas
	{
		public const int DefaultWidth = 800;
		public const int DefaultHeight = 600;

		public AeroNavigationBar History { get; set; }

		public readonly Sounds Sounds = new Sounds();

		public FreeCellCanvas()
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

			var Margin = (DefaultWidth - CardInfo.Width * 10) / 11;
			new Image
			{
				Source = (KnownAssets.Path.Assets + "/jsc.png").ToSource(),
				Width = 96,
				Height = 96
			}.MoveTo(DefaultWidth - 96, DefaultHeight - 96).AttachTo(this);

			this.History = new AeroNavigationBar().MoveContainerTo(4, 4);

			var game = new FreeCellGame()
			{
				History = History,
			};

			game.MyDeck.Sounds = this.Sounds;
			game.AttachTo(this);

			
			

			new GameSocialLinks(this)
			{
				new GameSocialLinks.Button { 
					Source = (KnownAssets.Path.Assets + "/plus_google.png").ToSource(),
					Width = 62,
					Height = 17,
					Hyperlink = new Uri("http://fusion.google.com")
				},
				new GameSocialLinks.Button { 
					Source = (KnownAssets.Path.Assets + "/su.png").ToSource(),
					Width = 16,
					Height = 16,
					Hyperlink = new Uri("http://www.stumbleupon.com/")
				}
			};

			// redefine the ctor to fit our context
			Func<string, string, string, GameMenu.Option> Option =
				(Text, Image, href) =>
					new GameMenu.Option
					{
						Text = Text,
						Source = (KnownAssets.Path.SocialLinks + "/" + Image + ".png").ToSource(),
						Hyperlink = new Uri(href),
						MarginAfter = Math.PI / 4
					};

			var menu = new GameMenu(DefaultWidth, DefaultHeight, ShadowSize)
			{
				Option("Spider Solitaire", "Preview_Spider",  "http://nonoba.com/zproxy/avalon-spider-solitaire"),
				Option("Treasure Hunt", "Preview_TreasureHunt",  "http://nonoba.com/zproxy/treasure-hunt"),
				Option("FlashMinesweeper:MP", "Preview_Minesweeper", "http://nonoba.com/zproxy/flashminesweepermp"),
				Option("Multiplayer Mahjong", "Preview_Mahjong", "http://nonoba.com/zproxy/mahjong-multiplayer"),
				Option("Multiplayer SpaceInvaders", "Preview_SpaceInvaders", "http://nonoba.com/zproxy/flashspaceinvaders"),
			};

			menu.AttachContainerTo(this);

			this.History.AttachContainerTo(this);
		}
	}
}
