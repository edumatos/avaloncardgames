using mochi.as3;
using ScriptCoreLib.ActionScript.Extensions;
using ScriptCoreLib.ActionScript.flash.display;
using ScriptCoreLib.ActionScript.flash.system;
using ScriptCoreLib.Extensions;
using ScriptCoreLib.Shared.Avalon.Cards;
using System;
using System.Windows.Media;
using System.Windows.Shapes;

namespace AvalonCardGames.AIRSpider
{
    public sealed class ApplicationSprite : Sprite
    {
        public readonly ApplicationCanvas content = new ApplicationCanvas();

        public string _mochiads_game_id = "0d4494ec8fcc8cd1";

        public ApplicationSprite()
        {
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


                    var shadow = new Rectangle();

                    shadow.Fill = Brushes.Black;
                    shadow.Width = this.stage.stageWidth;
                    shadow.Height = this.stage.stageHeight;
                    shadow.Opacity = 0.5;

                    content.Children.Add(shadow);

                    var clip = new MovieClip().AttachTo(this);


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

                             content.Children.Remove(shadow);
                             //shadow.Orphanize();

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
            );
        }

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
