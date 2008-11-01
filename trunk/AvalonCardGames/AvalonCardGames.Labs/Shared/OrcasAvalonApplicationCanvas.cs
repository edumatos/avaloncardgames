using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;
using ScriptCoreLib;
using ScriptCoreLib.Shared.Avalon.Cards;
using ScriptCoreLib.Shared.Avalon.Extensions;
using ScriptCoreLib.Shared.Lambda;

namespace AvalonCardGames.Labs.Shared
{
	[Script]
	public class OrcasAvalonApplicationCanvas : Canvas
	{
		public const int DefaultWidth = 600;
		public const int DefaultHeight = 400;

		public OrcasAvalonApplicationCanvas()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;

			new[] {
				Colors.Black,
				Colors.Green,
				Colors.Black
			}.ToGradient(DefaultHeight / 4).Select(
				(c, i) =>
					new Rectangle
					{
						Fill = new SolidColorBrush(c),
						Width = DefaultWidth,
						Height = 4,
					}.MoveTo(0, i * 4).AttachTo(this)
			).ToArray();


			// step 1 - can we show a card?
			// step 2 drag the cards around

			var deck = new CardDeck().AttachContainerTo(this);

			deck.SizeTo(DefaultWidth, DefaultHeight);

			deck.UnusedCards.AddRange(CardInfo.FullDeck());


			var PlayStack = deck.CreateStackList();

			{
				PlayStack.Add(
					new CardStack
					{

					}.MoveContainerTo(64, 64)
				);

				PlayStack.Add(
					new CardStack
					{

					}.MoveContainerTo(64 + CardInfo.Width, 64)
				);

				var s3 =
					new CardStack
					{
						deck.FetchCard,
						deck.FetchCard,
						deck.FetchCard,
					}.MoveTo(64 + CardInfo.Width * 2, 64);

				PlayStack.Add(s3);

				s3.RevealLastCard();
			}


			{
				PlayStack.Add(
					new CardStack
					{

					}.MoveContainerTo(64, 264)
				);

				PlayStack.Add(
					new CardStack
					{

					}.MoveContainerTo(64 + CardInfo.Width, 264)
				);

				var s3 =
					new CardStack
					{
						deck.FetchCard,
						deck.FetchCard,
						deck.FetchCard,
					}.MoveTo(64 + CardInfo.Width * 2, 264);

				PlayStack.Add(s3);

				s3.RevealLastCard();
			}

			// step 3 drag cards from stack to stack
		}
	}

}

