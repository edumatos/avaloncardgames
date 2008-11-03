using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ScriptCoreLib;
using ScriptCoreLib.JavaScript.Extensions;
using ScriptCoreLib.JavaScript.DOM.HTML;
using ScriptCoreLib.JavaScript;

namespace AvalonCardGames.FreeCell.JavaScript
{
	using TargetCanvas = global::AvalonCardGames.FreeCell.Shared.FreeCellCanvas;
	using ScriptCoreLib.Shared.Drawing;

	[Script, ScriptApplicationEntryPoint]
	public class FreeCellDocument
	{
		public FreeCellDocument(IHTMLElement e)
		{
			Native.Document.body.style.backgroundColor = Color.Black;

			// wpf here
			var clip = new IHTMLDiv();

			clip.style.position = ScriptCoreLib.JavaScript.DOM.IStyle.PositionEnum.relative;
			clip.style.SetSize(TargetCanvas.DefaultWidth, TargetCanvas.DefaultHeight);
			clip.style.overflow = ScriptCoreLib.JavaScript.DOM.IStyle.OverflowEnum.hidden;

			var c = new IHTMLElement(IHTMLElement.HTMLElementEnum.center, clip);

			if (e == null)
				c.AttachToDocument();
			else
				e.insertPreviousSibling(c);

			new TargetCanvas().AttachToContainer(clip);

		}

		static FreeCellDocument()
		{
			typeof(FreeCellDocument).SpawnTo(i => new FreeCellDocument(i));
		}

	}
}
