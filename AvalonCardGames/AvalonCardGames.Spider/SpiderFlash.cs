using ScriptCoreLib;
using ScriptCoreLib.ActionScript.flash.display;
using ScriptCoreLib.ActionScript.flash.text;
using System.Collections.Generic;
using System;
using ScriptCoreLib.ActionScript;
using ScriptCoreLib.ActionScript.Extensions;

namespace AvalonCardGames.Spider.ActionScript
{
	using TargetCanvas = global::AvalonCardGames.Spider.Shared.SpiderCanvas;

	/// <summary>
	/// Default flash player entrypoint class. See 'tools/build.bat' for adding more entrypoints.
	/// </summary>
	[Script, ScriptApplicationEntryPoint(Width = TargetCanvas.DefaultWidth, Height = TargetCanvas.DefaultHeight)]
	[SWF(width = TargetCanvas.DefaultWidth, height = TargetCanvas.DefaultHeight, backgroundColor = 0)]
	public class SpiderFlash : Sprite
	{
		public SpiderFlash()
		{
			// spawn the wpf control
			var c = new TargetCanvas();

			Func<string, Class> f =
				e =>  KnownEmbeddedResources.Default[ScriptCoreLib.Shared.Avalon.Cards.KnownAssets.Path.Sounds + "/" + e + ".mp3"];

			var deal = f("deal");
			var click = f("click");
			var drag = f("drag");

			c.MyDeck.Sounds.deal = () => deal.ToSoundAsset().play();
			c.MyDeck.Sounds.click = () => click.ToSoundAsset().play();
			c.MyDeck.Sounds.drag = () => drag.ToSoundAsset().play();


			AvalonExtensions.AttachToContainer(c, this);
		}

		static SpiderFlash()
		{
			// add resources to be found by ImageSource
			KnownEmbeddedAssets.RegisterTo(
				KnownEmbeddedResources.Default.Handlers
			);

		}
	}

	[Script]
	public class KnownEmbeddedAssets
	{
		[EmbedByFileName]
		public static Class ByFileName(string e)
		{
			throw new NotImplementedException();
		}

		public static void RegisterTo(List<Converter<string, Class>> Handlers)
		{
			// assets from current assembly
			Handlers.Add(e => ByFileName(e));

			global::ScriptCoreLib.ActionScript.Avalon.Cards.KnownEmbeddedAssets.RegisterTo(Handlers);

			//// assets from referenced assemblies
			//Handlers.Add(e => global::ScriptCoreLib.ActionScript.Avalon.Cursors.EmbeddedAssets.Default[e]);
			//Handlers.Add(e => global::ScriptCoreLib.ActionScript.Avalon.TiledImageButton.Assets.Default[e]);

		}
	}
}