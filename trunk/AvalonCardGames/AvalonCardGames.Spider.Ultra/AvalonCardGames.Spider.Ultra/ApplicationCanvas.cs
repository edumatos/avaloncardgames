// For more information visit:
// http://studio.jsc-solutions.net/

using System;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using System.Windows.Media;
using System.Xml.Linq;
using AvalonCardGames.Spider.Ultra;
using ScriptCoreLib;
using ScriptCoreLib.Extensions;
using ScriptCoreLib.Shared.Avalon.Extensions;
using System.Windows.Shapes;
using AvalonCardGames.Spider.Ultra.Code;

namespace AvalonCardGames.Spider.Ultra
{
    public class ApplicationCanvas : Canvas
    {
        public const int DefaultWidth = SpiderCanvas.DefaultWidth;
        public const int DefaultHeight = SpiderCanvas.DefaultHeight;

        public SpiderCanvas Content;

        public ApplicationCanvas()
        {
            Width = DefaultWidth;
            Height = DefaultHeight;

            this.ClipToBounds = true;

            this.Content = new SpiderCanvas();
            this.Content.AttachTo(this);

#if DEBUG
            new Avalon.Images.white_jsc().AttachTo(this).MoveTo(
                DefaultWidth - Avalon.Images.white_jsc.ImageDefaultWidth,
                DefaultHeight - Avalon.Images.white_jsc.ImageDefaultHeight
            );
#endif


        }
    }
}
