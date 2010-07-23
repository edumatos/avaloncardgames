using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ScriptCoreLib;
using ScriptCoreLib.Shared.Avalon.Extensions;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows;

namespace AvalonCardGames.Spider.Shared
{
	public class StatusControl : ISupportsContainer
	{
		public Canvas Container { get; set; }

		public const int Width = 200;
		public const int Height = 60;

		public StatusControl()
		{
			Container = new Canvas
			{
				Width = Width,
				Height = Height
			};

			var ScoreBox = new TextBox
			{
				Width = Width,
				TextAlignment = System.Windows.TextAlignment.Center,
				Foreground = Brushes.White,
				Background = Brushes.Transparent,
				BorderThickness = new Thickness(0),
				IsReadOnly = true,

			}.MoveTo(0, 0).AttachTo(this);

			var MovesBox = new TextBox
			{
				Width = Width,
				TextAlignment = System.Windows.TextAlignment.Center,
				Foreground = Brushes.White,
				Background = Brushes.Transparent,
				BorderThickness = new Thickness(0),
				IsReadOnly = true,

			}.MoveTo(0, Height / 2).AttachTo(this);

			Update = delegate
			{
				ScoreBox.Text = "Score: " + Score;
				MovesBox.Text = "Moves: " + Moves;
			};
		}

		public int Moves { get; set; }
		public int Score { get; set; }

		public readonly Action Update;
	}
}
