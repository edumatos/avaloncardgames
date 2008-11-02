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
				};

			Menu.Medium +=
				delegate
				{
					if (Game != null)
						Game.Orphanize();

					Game = new SpiderGame(LevelMedium).AttachTo(Content);
				};

			Menu.Hard +=
				delegate
				{
					if (Game != null)
						Game.Orphanize();

					Game = new SpiderGame(LevelHard).AttachTo(Content);
				};

			Menu.Show();

		}




	}
}
