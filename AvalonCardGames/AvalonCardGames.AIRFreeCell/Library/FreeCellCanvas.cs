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
using Abstractatech.Avalon.Cards.Avalon.Images;
using AvalonCardGames.AIRFreeCell.Avalon.Images;

namespace AvalonCardGames.FreeCell.Shared
{
    [Script]
    public partial class FreeCellCanvas : Canvas
    {
        public const int DefaultWidth = 800;
        public const int DefaultHeight = 600;

        public AeroNavigationBar History { get; set; }

        public readonly Sounds Sounds = new Sounds();

        public GameMenu Menu { get; set; }

        public FreeCellCanvas()
        {
            this.Width = DefaultWidth;
            this.Height = DefaultHeight;

            // is this working?
            this.ClipToBounds = true;


            new TiledBackgroundImage(
                new felt().Source,
                //(global::ScriptCoreLib.Shared.Avalon.Cards.KnownAssets.Path.DefaultCards + "/felt.png").ToSource(),
                    64, 64,

                    // repeaters
                    x: 32,
                    y: 24
            ).AttachContainerTo(this);

            var ShadowSize = 40;

            new GameBorders(DefaultWidth, DefaultHeight, ShadowSize, this).AttachContainerTo(this);

            var Margin = (DefaultWidth - CardInfo.Width * 10) / 11;
            //new Image
            //{
            //    Source = (KnownAssets.Path.Assets + "/jsc.png").ToSource(),
            //    Width = 96,
            //    Height = 96
            //}.MoveTo(DefaultWidth - 96, DefaultHeight - 96).AttachTo(this);

            this.History = new AeroNavigationBar().MoveContainerTo(
                12,
                8
            );

            // make it bigger for android!
            //this.History.Container.RenderTransform = new ScaleTransform(2, 2);

            var Content = new Canvas
            {
                Width = DefaultWidth,
                Height = DefaultHeight
            }.AttachTo(this);

            var Game = default(FreeCellGame);
            var GameFocusBoost = false;

            Action AtSizeChanged = delegate
            {
                if (Game != null)
                    Game.MoveTo(
                        (this.Width - DefaultWidth) / 2,
                        (this.Height - DefaultHeight)
                    );
            };

            this.SizeChanged +=
                delegate
                {
                    AtSizeChanged();


                };

            Action CreateGame =
                delegate
                {
                    var PreviousGame = Game;

                    Game.Orphanize();
                    Game = new FreeCellGame()
                    {
                        History = History,
                    };

                    Game.MyDeck.Sounds = this.Sounds;
                    Game.AttachTo(Content);

                    AtSizeChanged();

                    var CurrentGame = Game;

                    this.History.History.Add(
                        delegate
                        {
                            if (Game == PreviousGame)
                                return;

                            Game.Orphanize();
                            Game = PreviousGame.AttachTo(Content);

                            if (Game == null)
                                this.Menu.Show();
                        },
                        delegate
                        {
                            if (Game == CurrentGame)
                                return;

                            Game.Orphanize();
                            Game = CurrentGame.AttachTo(Content);

                            if (Game != null)
                                this.Menu.Hide();
                        }
                    );
                };



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

            // redefine the ctor to fit our context
            //Func<string, string, string, GameMenuOption> Option =
            //    (Text, Image, href) =>
            //        new GameMenuOption
            //        {
            //            Text = "Play " + Text + "!",
            //            Source = (KnownAssets.Path.SocialLinks + "/" + Image + ".png").ToSource(),
            //            Hyperlink = new Uri(href),
            //            MarginAfter = Math.PI / 4
            //        };

            this.Menu = new GameMenu((int)this.Width, DefaultHeight, ShadowSize, this)
			{
				new GameMenuOption
				{
					Text = "FreeCell - medium difficulty",
					Source = new Preview().Source,
					MarginAfter = Math.PI / 2,
					Click =
						delegate
						{
							GameFocusBoost = true;


							CreateGame();
                            this.Menu.Hide();

							1000.AtDelay(() => GameFocusBoost = false);
						}
				},
                //Option("Spider Solitaire", "Preview_Spider",  "http://nonoba.com/zproxy/avalon-spider-solitaire"),
                //Option("Treasure Hunt", "Preview_TreasureHunt",  "http://nonoba.com/zproxy/treasure-hunt"),
                //Option("FlashMinesweeper:MP", "Preview_Minesweeper", "http://nonoba.com/zproxy/flashminesweepermp"),
                //Option("Multiplayer Mahjong", "Preview_Mahjong", "http://nonoba.com/zproxy/mahjong-multiplayer"),
                //Option("Multiplayer SpaceInvaders", "Preview_SpaceInvaders", "http://nonoba.com/zproxy/flashspaceinvaders"),
			};

            this.Menu.ValidateHide = () => Game != null;
            this.Menu.ValidateShow = () => !GameFocusBoost;

            this.Menu.AttachContainerTo(this);

            // QA: is this working correctly for flash?
#if DEBUG
            var HistoryNoZone = new Rectangle();

            HistoryNoZone.Fill = Brushes.Yellow;

            HistoryNoZone.Width = 96;
            HistoryNoZone.Height = 48;
            HistoryNoZone.Opacity = 0;
            HistoryNoZone.AttachTo(this);

            this.History.AttachContainerTo(this);
#endif

            this.Menu.Show();
        }
    }
}
