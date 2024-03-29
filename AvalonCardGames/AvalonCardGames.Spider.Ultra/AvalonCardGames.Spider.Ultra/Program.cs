// For more information visit:
// http://studio.jsc-solutions.net/

using System;
using System.Text;
using System.Linq;
using System.Xml.Linq;
using ScriptCoreLib;
using ScriptCoreLib.JavaScript;
using ScriptCoreLib.JavaScript.DOM;
using ScriptCoreLib.JavaScript.DOM.HTML;
using ScriptCoreLib.JavaScript.Components;
using ScriptCoreLib.JavaScript.Extensions;
using ScriptCoreLib.Extensions;
using ScriptCoreLib.Shared.Avalon.Extensions;
using AvalonCardGames.Spider.Ultra.HTML.Pages;
using AvalonCardGames.Spider.Ultra;
using jsc.meta.Commands.Rewrite.RewriteToUltraApplication;
using ScriptCoreLib.CSharp.Avalon.Extensions;
using ScriptCoreLib.ActionScript.flash.display;
using ScriptCoreLib.ActionScript.Extensions;
using ScriptCoreLib.ActionScript;
using ScriptCoreLib.Shared.Avalon.Cards;

namespace AvalonCardGames.Spider.Ultra
{


    /// <summary>
    /// You can debug your application by hitting F5.
    /// </summary>
    public static class Program
    {
        /// <summary>
        /// In debug build you can just hit F5 and debug the server side code.
        /// </summary>
        /// <param name="args">Commandline arguments</param>
        [STAThread]
        public static void Main(string[] args)
        {
#if DEBUG
            new ApplicationCanvas().ToWindow().ShowDialog();
#else

            RewriteToUltraApplication.AsProgram.Launch(typeof(Application));
#endif
        }

    }

    #region default Browser Application implementation for release build testing
    /// <summary>
    /// This type can be used from javascript. The method calls will seamlessly be proxied to the server.
    /// </summary>
    public sealed class Application
    {
        /// <summary>
        /// This is a javascript application.
        /// </summary>
        /// <param name="page">HTML document rendered by the web server which can now be enhanced.</param>
        public Application(IDefaultPage page)
        {
            new ApplicationSprite().AttachSpriteTo(page.PageContainer);
        }

    }

    public sealed class ApplicationSprite : Sprite
    {
        public const int DefaultWidth = ApplicationCanvas.DefaultWidth;
        public const int DefaultHeight = ApplicationCanvas.DefaultHeight;

        public ApplicationSprite()
        {
            this.InvokeWhenStageIsReady(
                delegate
                {
                    var c = new ApplicationCanvas();



                    var deal = KnownEmbeddedResources.Default[Sounds.Assets.deal];
                    var click = KnownEmbeddedResources.Default[Sounds.Assets.click];
                    var drag = KnownEmbeddedResources.Default[Sounds.Assets.drag];
                    var win = KnownEmbeddedResources.Default[Sounds.Assets.win];

                    c.Content.Sounds.deal = () => deal.ToSoundAsset().play();
                    c.Content.Sounds.click = () => click.ToSoundAsset().play();
                    c.Content.Sounds.drag = () => drag.ToSoundAsset().play();
                    c.Content.Sounds.win = () => win.ToSoundAsset().play();

                    c.AttachToContainer(this);
                }
            );
        }
    }

    /// <summary>
    /// This type can be used from javascript. The method calls will seamlessly be proxied to the server.
    /// </summary>
    public sealed class ApplicationWebService
    {

    }

    #endregion
}
