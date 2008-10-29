using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using ScriptCoreLib;
using ScriptCoreLib.Shared.Avalon.Extensions;
using System.Windows;
using System.Windows.Media;
using System.Windows.Shapes;
using ScriptCoreLib.Shared.Avalon.Cards;

namespace AvalonCardGames.Labs.Shared
{
	[Script]
	public class OrcasAvalonApplicationCanvas : Canvas
	{
		public const int DefaultWidth = 480;
		public const int DefaultHeight = 320;

		public OrcasAvalonApplicationCanvas()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			Colors.Blue.ToGradient(Colors.Red, DefaultHeight / 4).Select(
				(c, i) =>
					new Rectangle
					{
						Fill = new SolidColorBrush(c),
						Width = DefaultWidth,
						Height = 4,
					}.MoveTo(0, i * 4).AttachTo(this)
			).ToArray();


			// step 1 - can we show a card?

			{
				var card = new CardInfo(CardInfo.SuitEnum.Heart, CardInfo.RankEnum.Rank5)
				{
					IsBlackDeck = true
				};

				card.ToImage().AttachTo(this);
			}

			{
				var card = new CardInfo(CardInfo.SuitEnum.Heart, CardInfo.RankEnum.Rank5)
				{
					Visible = true
				};

				card.ToImage().AttachTo(this).MoveTo(
					CardInfo.Width, 0);
			}

			// step 2 drag the cards around
			// step 3 drag cards from stack to stack
		}
	}
}
