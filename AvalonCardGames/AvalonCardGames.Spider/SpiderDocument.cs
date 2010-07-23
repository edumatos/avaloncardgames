using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ScriptCoreLib;
using ScriptCoreLib.JavaScript.Extensions;
using ScriptCoreLib.JavaScript.DOM.HTML;
using ScriptCoreLib.JavaScript;

namespace AvalonCardGames.Spider.JavaScript
{
	using TargetCanvas = global::AvalonCardGames.Spider.Shared.SpiderCanvas;
	using ScriptCoreLib.Shared.Drawing;

	[Script, ScriptApplicationEntryPoint]
	public class SpiderDocument
	{
		public SpiderDocument(IHTMLElement e)
		{
			Native.Document.body.style.backgroundColor = Color.Black;

			// wpf here
			var clip = new IHTMLDiv();

			clip.style.position = ScriptCoreLib.JavaScript.DOM.IStyle.PositionEnum.relative;
			clip.style.SetSize(TargetCanvas.DefaultWidth, TargetCanvas.DefaultHeight);
			clip.style.overflow = ScriptCoreLib.JavaScript.DOM.IStyle.OverflowEnum.hidden;

            // todo: jsc bug: .ctor .params at rewrite
			var c = new IHTMLElement(IHTMLElement.HTMLElementEnum.center,
                new[] { clip }
            );

			if (e == null)
				c.AttachToDocument();
			else
				e.insertPreviousSibling(c);

			new TargetCanvas().AttachToContainer(clip);

		}

		static SpiderDocument()
		{
			typeof(SpiderDocument).SpawnTo(i => new SpiderDocument(i));
		}

	}
}
