using mochi.as3;
using ScriptCoreLib.ActionScript;
using ScriptCoreLib.ActionScript.Extensions;
using ScriptCoreLib.ActionScript.flash.display;
using ScriptCoreLib.ActionScript.flash.system;
using ScriptCoreLib.Extensions;
using ScriptCoreLib.Shared.Avalon.Extensions;
using ScriptCoreLib.Shared.Avalon.Cards;
using System;
using System.Windows.Media;
using System.Windows.Shapes;

namespace AvalonCardGames.AIRFreeCell
{
    public sealed class ApplicationSprite : Sprite
    {
        public const int DefaultWidth = FreeCell.Shared.FreeCellGame.DefaultWidth;
        public const int DefaultHeight = FreeCell.Shared.FreeCellGame.DefaultHeight;

        public readonly ApplicationCanvas content = new ApplicationCanvas();

        public ApplicationSprite()
        {
            //Security.allowDomain("*");
            //Security.allowInsecureDomain("*");

            this.InvokeWhenStageIsReady(
                () =>
                {

                    var deal = KnownEmbeddedResources.Default[Sounds.Assets.deal];
                    var click = KnownEmbeddedResources.Default[Sounds.Assets.click];
                    var drag = KnownEmbeddedResources.Default[Sounds.Assets.drag];
                    var win = KnownEmbeddedResources.Default[Sounds.Assets.win];

                    content.Sounds.deal = () => deal.ToSoundAsset().play();
                    content.Sounds.click = () => click.ToSoundAsset().play();
                    content.Sounds.drag = () => drag.ToSoundAsset().play();
                    content.Sounds.win = () => win.ToSoundAsset().play();

                    content.AttachToContainer(this);
                    content.AutoSizeTo(this.stage);

                    if (Security.sandboxType == "application")
                    {
                        // AdMob!
                        // mochiAds wont work on Android!
                    }
                    else
                    {

                        var shadow = new Rectangle();

                        shadow.Fill = Brushes.Black;
                        shadow.Width = this.stage.stageWidth;
                        shadow.Height = this.stage.stageHeight;
                        shadow.Opacity = 0.5;

                        content.Children.Add(shadow);

                        var clip = new MovieClip().AttachTo(this);




                        //dynamic options = new object();

                        //options.clip = this;
                        //options.id = "47e72426ba7f4f3f";
                        //options.res = this.stage.stageWidth + "x" + this.stage.stageHeight;
                        //options.ad_finished = a;

                        // Error: MochiAd is missing the 'clip' parameter.  
                        // This should be a MovieClip, Sprite or an instance of a class that extends MovieClip or Sprite.

                        // https://www.mochimedia.com/community/forum/topic/desktop-air-application#46785de6

                        //                SecurityError: Error #2047: Security sandbox violation: parent: http://xs.mochiads.com/container/MochiAdsCDN-AS3.swf?do_init=1&cacheBust=1359132511880 cannot access app:/AvalonCardGames.AIRFreeCell.ApplicationSprite.swf.
                        //at flash.display::DisplayObject/get parent()
                        //at com.mochimedia.targeting::MochiAdsTargeting/removedFromStage()[/home/mochi/src/mochiads_erl/priv/as3/com/mochimedia/targeting/MochiAdsTargeting.as:128]
                        //at flash.display::DisplayObjectContainer/removeChildAt()
                        //at mochi.as3::MochiAd$/_cleanup()[W:\opensource\mochimedia.com\MochiAd.as:946]
                        //at Function/<anonymous>()[W:\opensource\mochimedia.com\MochiAd.as:195]
                        //at mochi.as3::MochiAd$/unload()[W:\opensource\mochimedia.com\MochiAd.as:924]
                        //at Function/<anonymous>()[W:\opensource\mochimedia.com\MochiAd.as:275]
                        //at Function/<anonymous>()[W:\opensource\mochimedia.com\MochiAd.as:41]


                        //                SecurityError: Error #2047: Security sandbox violation: parent: http://xs.mochiads.com/container/MochiAdsCDN-AS3.swf?do_init=1&cacheBust=1359134133659 cannot access app:/AvalonCardGames.AIRFreeCell.ApplicationSprite.swf.
                        //at flash.display::DisplayObject/get parent()
                        //at com.mochimedia.targeting::MochiAdsTargeting/removedFromStage()[/home/mochi/src/mochiads_erl/priv/as3/com/mochimedia/targeting/MochiAdsTargeting.as:128]
                        //at flash.display::DisplayObjectContainer/removeChildAt()
                        //at mochi.as3::MochiAd$/_cleanup()
                        //at MethodInfo-1806()
                        //at mochi.as3::MochiAd$/unload()
                        //at MethodInfo-1807()
                        //at MethodInfo-1793()

                        //    SecurityError: Error #2047: Security sandbox violation: parent: http://xs.mochiads.com/container/MochiAdsCDN-AS3.swf?do_init=1&cacheBust=1359134133659 cannot access app:/AvalonCardGames.AIRFreeCell.ApplicationSprite.swf.
                        //at flash.display::DisplayObject/get parent()
                        //at com.mochimedia.container::MochiAdsContainer/initalize()[/home/mochi/src/mochiads_erl/priv/as3/com/mochimedia/container/MochiAdsContainer.as:40]
                        //at com.mochimedia.targeting::MochiAdsTargeting/onJSONData()[/home/mochi/src/mochiads_erl/priv/as3/com/mochimedia/targeting/MochiAdsTargeting.as:780]
                        //at flash.events::EventDispatcher/dispatchEventFunction()
                        //at flash.events::EventDispatcher/dispatchEvent()
                        //at flash.net::URLLoader/onComplete()



                        var options = new MochiAdOptions
                        {

                            //TypeError: Error #1034: Type Coercion failed: cannot convert AvalonCardGames.AIRFreeCell::ApplicationSprite@14b37041 to flash.display.MovieClip.
                            //    at mochi.as3::MochiAd$/load()[W:\opensource\mochimedia.com\MochiAd.as:789]
                            //    at mochi.as3::MochiAd$/showPreGameAd()[W:\opensource\mochimedia.com\MochiAd.as:185]
                            //    at AvalonCardGames.AIRFreeCell::MochiAdOptions/showPreGameAd_100664136()[U:\web\AvalonCardGames\AIRFreeCell\MochiAdOptions.as:74]
                            //    at AvalonCardGames.AIRFreeCell::ApplicationSprite/__ctor_b__1_100663300()[U:\web\AvalonCardGames\AIRFreeCell\ApplicationSprite.as:82]

                            clip = clip,
                            id = _mochiads_game_id,
                            res = this.stage.stageWidth + "x" + this.stage.stageHeight,


                            ad_finished =
                             delegate
                             {
                                 this.removeChild(clip);

                                 shadow.Orphanize();

                                 {
                                     var now = DateTime.Now;
                                     Console.WriteLine(now + " ready! " + new { Security.sandboxType });
                                 }
                             }
                        };

                        {
                            var now = DateTime.Now;
                            Console.WriteLine(now + " can we get some ads? " + new { Security.sandboxType });
                        }
                        options.showPreGameAd();
                    }
                }
            );
        }

        //public string _mochiads_game_id = "test";
        public string _mochiads_game_id = "47e72426ba7f4f3f";
    }

    public sealed class MochiAdOptions
    {
        readonly DynamicContainer Data;

        public MochiAdOptions()
        {
            Data = new DynamicContainer { Subject = new object() };

            ad_finished = delegate { };
            ad_started = delegate { };
        }

        public bool no_bg
        {
            set { Data["no_bg"] = value; }
        }

        public string id
        {
            set { Data["id"] = value; }
        }

        public string res
        {
            set { Data["res"] = value; }
        }

        public Action ad_started
        {
            set { Data["ad_started"] = value.ToFunction(); }
        }

        public Action ad_finished
        {
            set { Data["ad_finished"] = value.ToFunction(); }
        }

        public object clip
        {
            set { Data["clip"] = value; }
        }

        public void showPreGameAd()
        {

            MochiAd.showPreGameAd(Data.Subject);
        }
    }
}
