using ScriptCoreLib;
using ScriptCoreLib.ActionScript.flash.display;
using ScriptCoreLib.ActionScript.flash.text;
using System.Collections.Generic;
using System;
using ScriptCoreLib.ActionScript;
using ScriptCoreLib.ActionScript.Extensions;
using AvalonCardGames.Spider.Shared;

namespace AvalonCardGames.Spider.ActionScript
{
	[GoogleGadget(
	   author_email = Info.EMail,
	   author_link = Info.Blog,
	   author = Info.Author,
	   category = Info.Category1,
	   category2 = Info.Category2,
	   screenshot = Info.ScreenshotURL,
	   thumbnail = Info.ScreenshotSmallURL,
	   description = Info.Description,
	   width = SpiderCanvas.DefaultWidth,
	   height = SpiderCanvas.DefaultHeight,
	   title = Info.Title,
	   title_url = Info.URL

	)]
	partial class SpiderFlash 
	{
	}

}