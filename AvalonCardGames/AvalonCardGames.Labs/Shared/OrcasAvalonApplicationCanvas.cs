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



			// step 2 drag the cards around

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

			{
				var s = new CardStack
				{

				}.AttachContainerTo(this);
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

