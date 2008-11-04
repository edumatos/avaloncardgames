using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;
using ScriptCoreLib;
using ScriptCoreLib.Shared.Avalon.Carousel;
using ScriptCoreLib.Shared.Avalon.Extensions;
using ScriptCoreLib.Shared.Avalon.Tween;

namespace AvalonCardGames.Menu.Shared
{
	[Script]
	public class GameMenu : ISupportsContainer
	{
		public Canvas Container { get; set; }

		//public event Action Easy;
		//public event Action Medium;
		//public event Action Hard;

		public GameMenu(int Width, int Height, int ShadowHeight)
		{
			var ContentHeight = Height * 2 / 3;

			this.Container = new Canvas
			{
				Width = Width,
				Height = ContentHeight + ShadowHeight
			};

			var ShadowContainer = new Canvas
			{
				Width = Width,
				Height = ContentHeight + ShadowHeight,
				Opacity = 0.5
			}.AttachTo(this.Container);

			new Rectangle
		   {
			   Fill = Brushes.Black,
			   Width = Width,
			   Height = ContentHeight,
		   }.MoveTo(0, 0).AttachTo(ShadowContainer);

	

			Colors.Black.ToTransparentGradient(ShadowHeight).Select(
				(c, i) =>
				{
					return new Rectangle
					{
						Fill = new SolidColorBrush(c),
						Width = Width,
						Height = 1,
						Opacity = c.A / 255.0
					}.MoveTo(0, ContentHeight + i).AttachTo(ShadowContainer);
				}
			).ToArray();



			var Carousel = new SimpleCarouselControl(Width, ContentHeight).MoveContainerTo(0, 0);

			var Idle = "Select a difficulty for a new game!";

			Carousel.Caption.FontSize = 36;
			Carousel.Caption.Height = 60;
			Carousel.Caption.Text = Idle;

			Action<int, int> AnimatedShadowOpacity = NumericEmitter.Of(
				(x, y) => ShadowContainer.Opacity = x * 0.01
			);

			AnimatedShadowOpacity(50, 0);

			Carousel.Hover +=
				delegate
				{
					//AnimatedShadowOpacity(70, 0);
				};

			Carousel.Idle +=
				delegate
				{
					Carousel.Caption.Text = Idle;
					//AnimatedShadowOpacity(50, 0);
				};

			//Carousel.AddEntry(
			//    new SimpleCarouselControl.EntryInfo
			//    {
			//        Source =( KnownAssets.Path.Assets + "/PreviewEasy.png").ToSource(),
			//        Text = "Play with easy difficulty",
			//        Position = Math.PI *0,
			//        Click = () => this.Easy()
			//    }
			//);

			//Carousel.AddEntry(
			//    new SimpleCarouselControl.EntryInfo
			//    {
			//        Source = (KnownAssets.Path.Assets + "/PreviewMedium.png").ToSource(),
			//        Text = "Play with medium difficulty",
			//        Position = Math.PI * 0.3,
			//        Click = () => this.Medium()
			//    }
			//);

			//Carousel.AddEntry(
			//    new SimpleCarouselControl.EntryInfo
			//    {
			//        Source = (KnownAssets.Path.Assets + "/PreviewHard.png").ToSource(),
			//        Text = "Play with hard difficulty",
			//        Position = Math.PI * 0.3 * 2,
			//        Click = () => this.Hard()
			//    }
			//);

			var GameCounter = 0;
		
			//Action<string, string, string> AddGame =
			//    (Text, Image, Target) =>
			//    {
			//        GameCounter++;

			//        Carousel.AddEntry(
			//            new SimpleCarouselControl.EntryInfo
			//            {
			//                Source = (KnownAssets.Path.Assets + "/" + Image  + ".png").ToSource(),
			//                Text = "Play " + Text + "!",
			//                Position = Math.PI * (0.9 + 0.2 * GameCounter),
			//                Click = () => new Uri(Target).NavigateTo(this.Container)
			//            }
			//        );
			//    };

			//AddGame("Treasure Hunt", "Preview_TreasureHunt",  "http://nonoba.com/zproxy/treasure-hunt");
			//AddGame("FlashMinesweeper:MP", "Preview_Minesweeper", "http://nonoba.com/zproxy/flashminesweepermp");
			//AddGame("Multiplayer Mahjong", "Preview_Mahjong", "http://nonoba.com/zproxy/mahjong-multiplayer");
			//AddGame("Multiplayer SpaceInvaders", "Preview_SpaceInvaders", "http://nonoba.com/zproxy/flashspaceinvaders");

			Carousel.AttachContainerTo(this);

			Carousel.Overlay.AttachTo(this);

			//var NavBar = new AeroNavigationBar().MoveContainerTo(4, 4);

			//NavBar.AttachContainerTo(this);

			Action<int, int> AnimatedTop = NumericEmitter.Of(
				(x, y) => this.Container.MoveTo(0, y)
			);

			this.MoveContainerTo(0, -ContentHeight);
			AnimatedTop(0, -ContentHeight);

			this.Container.MouseLeave +=
				delegate
				{
					if (!ValidateHide())
						return;

					Carousel.Hide();
					AnimatedTop(0, -ContentHeight);
					AnimatedShadowOpacity(0, 0);
				};

			Show =
				delegate
				{
					Carousel.Show();
					AnimatedTop(0, 0);
					AnimatedShadowOpacity(50, 0);
				};

			this.Container.MouseEnter +=
				delegate
				{
					Show();
				};
		}

		public readonly Action Show;

		public Func<bool> ValidateHide = () => true;
	}
}
