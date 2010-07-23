using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ScriptCoreLib.Shared.Avalon.Cards;
using ScriptCoreLib.Shared.Avalon.Extensions;
using System.Windows.Controls;
using AvalonCardGames.Menu.Shared;
using ScriptCoreLib.Shared.Avalon.Controls;
using AvalonCardGames.Spider.Shared;
using AvalonCardGames.Spider.Ultra.Avalon.Images;

namespace AvalonCardGames.Spider.Ultra.Code
{
	public partial class SpiderCanvas : Canvas
	{
		public const int DefaultWidth = 800;
		public const int DefaultHeight = 600;




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

		public GameMenu Menu { get; set; }

		public SpiderCanvas()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			this.ClipTo(0, 0, DefaultWidth, DefaultHeight);


			new TiledBackgroundImage(
				(global::ScriptCoreLib.Shared.Avalon.Cards.KnownAssets.Path.DefaultCards + "/felt.png").ToSource(),
					64, 64,
					14, 10
			).AttachContainerTo(this);

			var ShadowHeight = 40;

			new GameBorders(DefaultWidth, DefaultHeight, ShadowHeight).AttachContainerTo(this);


			var Margin = (DefaultWidth - CardInfo.Width * 10) / 11;
            //new Image
            //{
            //    Source = (KnownAssets.Path.Assets + "/jsc.png").ToSource(),
            //    Width = 96,
            //    Height = 96
            //}.MoveTo(DefaultWidth - 96, DefaultHeight - 96 - 17 - Margin).AttachTo(this);

			var Content = new Canvas
			{
				Width = DefaultWidth,
				Height = DefaultHeight
			}.AttachTo(this);


			var Game = default(SpiderGame);

			var GameFocusBoost = false;


            //new GameSocialLinks(this)
            //{
            //    new GameSocialLinks.Button { 
            //        Source = (KnownAssets.Path.Assets + "/plus_google.png").ToSource(),
            //        Width = 62,
            //        Height = 17,
            //        Hyperlink = new Uri(Info.GoogleGadgetAddLink)
            //    },
            //    new GameSocialLinks.Button { 
            //        Source = (KnownAssets.Path.Assets + "/su.png").ToSource(),
            //        Width = 16,
            //        Height = 16,
            //        Hyperlink = new Uri( "http://www.stumbleupon.com/submit?url=" + Info.URL)
            //    }
            //};

			// Select a difficulty for a new game!

			// redefine the ctor to fit our context
            //Func<string, string, string, GameMenu.Option> Option =
            //    (Text, Image, href) =>
            //        new GameMenu.Option
            //        {
            //            Text = "Play " + Text + "!",
            //            Source = (KnownAssets.Path.Assets + "/" + Image + ".png").ToSource(),
            //            Hyperlink = new Uri(href),
            //            MarginAfter = Math.PI / 4
            //        };

			Func<string, Image, Func<SpiderGame>, GameMenu.Option> Level =
				(Text, Image, ctor) =>
					new GameMenu.Option
					{
						Text = Text,
						Source =  Image.Source,
						MarginAfter = Math.PI / 4,
						Click =
							delegate
							{
								GameFocusBoost = true;

								Game.Orphanize();
								Game = ctor();
								Game.AttachTo(Content);
								Game.MyDeck.Sounds = Sounds;

								Menu.Hide();

								500.AtDelay(() => GameFocusBoost = false);
							}
					};

			this.Menu = new GameMenu(DefaultWidth, DefaultHeight, ShadowHeight)
			{
				Level("Play easy Spider Solitaire!", new PreviewEasy(), () =>  new SpiderGame(LevelEasy)),
				Level("Play medium Spider Solitaire!", new PreviewMedium(), () =>  new SpiderGame(LevelMedium)),
				Level("Play hard Spider Solitaire!", new PreviewHard(), () =>  new SpiderGame(LevelHard)),
				
				//Option("Spider Solitaire", "Preview_Spider",  "http://nonoba.com/zproxy/avalon-spider-solitaire"),

                //Option("Treasure Hunt", "Preview_TreasureHunt",  "http://nonoba.com/zproxy/treasure-hunt").Apply(k => k.MarginBefore = Math.PI / 4),
                //Option("FlashMinesweeper:MP", "Preview_Minesweeper", "http://nonoba.com/zproxy/flashminesweepermp"),
                //Option("Multiplayer Mahjong", "Preview_Mahjong", "http://nonoba.com/zproxy/mahjong-multiplayer"),
                //Option("Multiplayer SpaceInvaders", "Preview_SpaceInvaders", "http://nonoba.com/zproxy/flashspaceinvaders"),

			};

			Menu.AttachContainerTo(this);


			Menu.ValidateHide = () => Game != null;
			Menu.ValidateShow = () => !GameFocusBoost;


			Menu.Show();

		}




	}
}
