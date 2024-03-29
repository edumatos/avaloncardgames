﻿using System;
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
using Abstractatech.Avalon.Cards.Avalon.Images;
using AvalonCardGames.AIRSolitaire.Avalon.Images;

namespace AvalonCardGames.Solitaire.Shared
{
    [Script]
    public class SolitaireCanvas : Canvas
    {
        Preview128 ref1;

        public const int DefaultWidth = 800;
        public const int DefaultHeight = 600;

        Preview96 ref0;


        public GameMenu Menu { get; set; }
        public readonly Sounds Sounds = new Sounds();

        public SolitaireCanvas()
        {
            Width = DefaultWidth;
            Height = DefaultHeight;

            this.ClipToBounds = true;

            new TiledBackgroundImage(
                new felt().Source,
                    64, 64,

                    // repeaters
                    x: 32,
                    y: 24
            ).AttachContainerTo(this);

            var ShadowSize = 40;

            new GameBorders(DefaultWidth, DefaultHeight, ShadowSize, this).AttachContainerTo(this);

            //new Image
            //{
            //    Source = (KnownAssets.Path.Assets + "/jsc.png").ToSource(),
            //    Width = 96,
            //    Height = 96
            //}.MoveTo(DefaultWidth - 96, DefaultHeight - 96).AttachTo(this);

            var Content = new Canvas
            {
                Width = DefaultWidth,
                Height = DefaultHeight
            }.AttachTo(this);


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
            //            MarginAfter = Math.PI / 6
            //        };

            var Game = default(SolitaireGame);
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

            this.Menu = new GameMenu(DefaultWidth, DefaultHeight, ShadowSize, this)
			{
				new GameMenuOption
				{
					Text = "Solitaire - medium difficulty",
					Source = new Preview120x90().Source,
					MarginAfter = 3 * Math.PI / 6,
					Click =
						delegate
						{
							GameFocusBoost = true;

							Game.Orphanize();
							Game = new SolitaireGame().AttachTo(Content);
							Game.MyDeck.Sounds = this.Sounds;

                            AtSizeChanged();

							this.Menu.Hide();

					

							500.AtDelay(() => GameFocusBoost = false);
						}
				},
                //Option("FreeCell", "Preview_FreeCell",  "http://nonoba.com/zproxy/avalon-freecell"),
                //Option("Spider Solitaire", "Preview_Spider",  "http://nonoba.com/zproxy/avalon-spider-solitaire"),
                //Option("Treasure Hunt", "Preview_TreasureHunt",  "http://nonoba.com/zproxy/treasure-hunt"),
                //Option("FlashMinesweeper:MP", "Preview_Minesweeper", "http://nonoba.com/zproxy/flashminesweepermp"),
                //Option("Multiplayer Mahjong", "Preview_Mahjong", "http://nonoba.com/zproxy/mahjong-multiplayer"),
                //Option("Multiplayer SpaceInvaders", "Preview_SpaceInvaders", "http://nonoba.com/zproxy/flashspaceinvaders"),

				
			};

            this.Menu.ValidateHide = () => Game != null;
            this.Menu.ValidateShow = () => !GameFocusBoost;

            this.Menu.AttachContainerTo(this);

            this.Menu.Show();
        }
    }
}
