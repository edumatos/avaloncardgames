using Abstractatech.ConsoleFormPackage.Library;
using AvalonCardGames.AIRFreeCell.Design;
using AvalonCardGames.AIRFreeCell.HTML.Pages;
using ScriptCoreLib;
using ScriptCoreLib.Delegates;
using ScriptCoreLib.Extensions;
using ScriptCoreLib.JavaScript;
using ScriptCoreLib.JavaScript.Components;
using ScriptCoreLib.JavaScript.DOM;
using ScriptCoreLib.JavaScript.DOM.HTML;
using ScriptCoreLib.JavaScript.Extensions;
using System;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace AvalonCardGames.AIRFreeCell
{
    /// <summary>
    /// Your client side code running inside a web browser as JavaScript.
    /// </summary>
    public sealed class Application
    {
        public readonly ApplicationWebService service = new ApplicationWebService();

        public readonly ApplicationSprite sprite = new ApplicationSprite();

        /// <summary>
        /// This is a javascript application.
        /// </summary>
        /// <param name="page">HTML document rendered by the web server which can now be enhanced.</param>
        public Application(IApp page)
        {
            var con = new ConsoleForm();

            con.InitializeConsoleFormWriter();

            con.Show();

            con.Left = Native.Window.Width - con.Width;
            con.Top = 0;

            Native.Window.onresize +=
                  delegate
                  {
                      con.Left = Native.Window.Width - con.Width;
                      con.Top = 0;
                  };


            con.Opacity = 0.6;

            sprite.InitializeConsoleFormWriter(
           Console.Write,
           Console.WriteLine
       );

            sprite.AutoSizeSpriteTo(page.ContentSize);
            sprite.AttachSpriteTo(page.Content);
            @"Hello world".ToDocumentTitle();
            // Send data from JavaScript to the server tier
            service.WebMethod2(
                @"A string from JavaScript.",
                value => value.ToDocumentTitle()
            );
        }

    }
}
