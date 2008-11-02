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
using System.Windows.Input;

namespace AvalonCardGames.Spider.Shared
{
	[Script]
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
			Colors.Black.ToTransparentGradient(ShadowHeight).Select(
			(c, i) =>
			{
				return new Rectangle
				{
					Fill = new SolidColorBrush(c),
					Width = Width,
					Height = 1,
					Opacity = c.A / 2 / 255.0
				}.MoveTo(0, i).AttachTo(this);
			}
			).ToArray();

			Colors.Black.ToTransparentGradient(ShadowHeight).Select(
			(c, i) =>
			{
				return new Rectangle
				{
					Fill = new SolidColorBrush(c),
					Width = Width,
					Height = 1,
					Opacity = c.A / 2 / 255.0
				}.MoveTo(0, DefaultHeight - i - 1).AttachTo(this);
			}
			).ToArray();

			var Margin = (DefaultWidth - CardInfo.Width * 10) / 11;
			new Image
			{
				Source = (KnownAssets.Path.Assets + "/jsc.png").ToSource(),
				Width = 96,
				Height = 96
			}.MoveTo(DefaultWidth - 96, DefaultHeight - 96 - 17 - Margin).AttachTo(this);

			var Content = new Canvas
			{
				Width = DefaultWidth,
				Height = DefaultHeight
			}.AttachTo(this);

			var Menu = new GameMenu(DefaultWidth, DefaultHeight, ShadowHeight);

			Menu.AttachContainerTo(this);

			var Game = default(SpiderGame);
			Menu.ValidateHide = () => Game != null;


			Menu.Easy +=
				delegate
				{
					if (Game != null)
						Game.Orphanize();

					Game = new SpiderGame(LevelEasy).AttachTo(Content);
					Game.MyDeck.Sounds = Sounds;
				};

			Menu.Medium +=
				delegate
				{
					if (Game != null)
						Game.Orphanize();

					Game = new SpiderGame(LevelMedium).AttachTo(Content);
					Game.MyDeck.Sounds = Sounds;
				};

			Menu.Hard +=
				delegate
				{
					if (Game != null)
						Game.Orphanize();

					Game = new SpiderGame(LevelHard).AttachTo(Content);
					Game.MyDeck.Sounds = Sounds;
				};

			Menu.Show();

			Action<Image, string> ToLink =
				(img, href) =>
				{
					var r = new Rectangle
					{
						Fill = Brushes.Black,
						Width = img.Width,
						Height = img.Height,
						Opacity = 0,
						Cursor = Cursors.Hand
					}.AttachTo(this).MoveTo(img, new Vector());

					r.MouseEnter +=
						delegate
						{
							img.Opacity = 0.5;
						};

					r.MouseLeave +=
						delegate
						{
							img.Opacity = 1;
						};

					var uri = new Uri(href);

					r.MouseLeftButtonUp +=
						delegate
						{
							uri.NavigateTo(this);
						};
				};

			ToLink(
				new Image
				{
					Source = (KnownAssets.Path.Assets + "/plus_google.png").ToSource(),
					Width = 62,
					Height = 17
				}.AttachTo(this).MoveTo(Margin, DefaultHeight - Margin - 17),
				Info.GoogleGadgetAddLink
			);

			ToLink(
				new Image
				{
					Source = (KnownAssets.Path.Assets + "/su.png").ToSource(),
					Width = 16,
					Height = 16
				}.AttachTo(this).MoveTo(Margin + Margin + 62, DefaultHeight - Margin - 17),
				 "http://www.stumbleupon.com/submit?url=" + Info.URL
			);
		}




	}
}
