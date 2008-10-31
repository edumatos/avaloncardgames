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
using ScriptCoreLib.Shared.Avalon.Extensions;

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

			new [] {
				Colors.Black,
				Colors.Green,
				Colors.Black
			}.ToGradient( DefaultHeight / 4).Select(
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

			var deck = new CardDeck { Container = this };

			var PlayStack = deck.CreateStackList();

			{
				PlayStack.Add(
					new CardStack
					{

					}.MoveContainerTo(64, 64).AttachContainerTo(this)
				);

				PlayStack.Add(
					new CardStack
					{

					}.MoveContainerTo(64 + CardInfo.Width, 64).AttachContainerTo(this)
				);

				PlayStack.Add(
					new CardStack
					{
						new Card(null,
							new CardInfo(CardInfo.SuitEnum.Spade, CardInfo.RankEnum.Rank9)
							{
								Visible = false
							}
						)
						{
							AnimatedOpacity = 1
						},
						new Card(null,
							new CardInfo(CardInfo.SuitEnum.Spade, CardInfo.RankEnum.Rank10)
							{
								Visible = true
							}
						)
						{
							AnimatedOpacity = 1
						}
					}.MoveTo(64 + CardInfo.Width * 2, 64).AttachContainerTo(this).Update()
				);
			}

			{
				var card = new Card(null,
					new CardInfo(CardInfo.SuitEnum.Heart, CardInfo.RankEnum.Rank9)
					{
						Visible = true
					}
				);

				card.Container.AttachTo(this).MoveTo(
					CardInfo.Width * 2, 0);

				new DragHelper(card.Container, this);
			}

			{
				var card = new Card(null,
					new CardInfo(CardInfo.SuitEnum.Spade, CardInfo.RankEnum.Rank9)
					{
						Visible = true
					}
				)
				{
					AnimatedOpacity = 1
				};

				card.Container.AttachTo(this).MoveTo(
					CardInfo.Width * 3, 0);

				card.Container.MouseEnter +=
					delegate
					{
						card.AnimatedOpacity = 0.5;
					};


				card.Container.MouseLeave +=
					delegate
					{
						card.AnimatedOpacity = 1;
					};

				new DragHelper(card.Container, this);
			}

			{
				var card = new Card(null,
					new CardInfo(CardInfo.SuitEnum.Spade, CardInfo.RankEnum.RankAce)
					{
						Visible = true
					}
				)
				{
					AnimatedOpacity = 1,
					VisibleSide = Card.SideEnum.BackSide
				};

				card.Container.AttachTo(this).MoveTo(
					CardInfo.Width * 4, 0);

				card.Container.MouseEnter +=
					delegate
					{
						card.AnimatedOpacity = 0.5;
					};


				card.Container.MouseLeave +=
					delegate
					{
						card.AnimatedOpacity = 1;
					};

				new DragHelper(card.Container, this);
			}

			
			// step 3 drag cards from stack to stack
		}
	}

	[Script]
	public class DragHelper
	{
		public DragHelper(FrameworkElement Target, Canvas Container)
		{

			var offset = new Point();
			var drag = false;

			Target.MouseLeftButtonDown +=
				(sender, args) =>
				{
					offset = args.GetPosition(Target);
					drag = true;

					Target.Orphanize();
					Target.AttachTo(Container);

					args.Handled = true;
				};

			Container.MouseMove +=
				(sender, args) =>
				{
					if (drag)
					{
						var p = args.GetPosition(Container) - offset;


						Target.MoveTo(Convert.ToInt32(p.X), Convert.ToInt32(p.Y));
					}
				};

			Container.MouseLeftButtonUp +=
				delegate
				{
					drag = false;

				};
		}
	}
}

