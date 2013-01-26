using ScriptCoreLib.ActionScript.Extensions;
using ScriptCoreLib.ActionScript.flash.display;
using ScriptCoreLib.Extensions;
using ScriptCoreLib.Shared.Avalon.Cards;

namespace AvalonCardGames.AIRSpider
{
    public sealed class ApplicationSprite : Sprite
    {
        public readonly ApplicationCanvas content = new ApplicationCanvas();

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
                }
            );
        }

    }
}
