using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using AvalonCardGames.FreeCell.Shared;
using ScriptCoreLib.CSharp.Avalon.Extensions;

namespace AvalonCardGames.FreeCell
{
	class Program
	{

		[STAThread]
		static public void Main(string[] args)
		{
			new FreeCellCanvas().ToWindow().ShowDialog();
		}
	}
}
