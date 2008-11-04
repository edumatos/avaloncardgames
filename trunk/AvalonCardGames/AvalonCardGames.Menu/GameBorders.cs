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
	public class GameBorders : ISupportsContainer
	{
		public Canvas Container { get; set; }

	
		public GameBorders(int Width, int Height, int ShadowHeight)
		{
			this.Container = new Canvas
			{
				Width = Width,
				Height = Height
			};

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
				}.MoveTo(0, Height - i - 1).AttachTo(this);
			}
			).ToArray();
		}

	}
}
