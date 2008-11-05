using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Navigation;
using System.Windows.Media;
using AvalonCardGames.FreeCell.Shared;

namespace AvalonCardGames.FreeCell.XBAP
{
	class Program
	{
		[STAThread]
		public static void Main()
		{
			ScriptCoreLib.CSharp.Avalon.Extensions.AvalonExtensions.ToApplication<FreeCellCanvas>();
		}
	}
}
