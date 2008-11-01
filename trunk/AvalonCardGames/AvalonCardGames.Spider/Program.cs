using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using AvalonCardGames.Spider.Shared;
using ScriptCoreLib.CSharp.Avalon.Extensions;
using System.IO;
using System.Threading;

namespace AvalonCardGames.Spider
{
	class Program
	{

		[STAThread]
		static public void Main(string[] args)
		{
			var c = new SpiderCanvas();

			c.ToWindow().ShowDialog();
		}
	}
}
