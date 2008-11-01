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
using ScriptCoreLib.Shared.Avalon.Controls;
using ScriptCoreLib.Shared.Avalon.Cards;

namespace AvalonCardGames.Solitare.Shared
{
	[Script]
	public class SolitareCanvas : Canvas
	{
		public const int DefaultWidth = 600;
		public const int DefaultHeight = 600;

		public SolitareCanvas()
		{
			Width = DefaultWidth;
			Height = DefaultHeight;


			new TiledBackgroundImage(
				(KnownAssets.Path.DefaultCards + "/felt.png").ToSource(),
					64, 64,
					10, 10
			).AttachContainerTo(this);



		}
	}
}
