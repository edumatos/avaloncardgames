﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;
using ScriptCoreLib;
using ScriptCoreLib.Shared.Avalon.Carousel;
using ScriptCoreLib.Shared.Avalon.Extensions;
using ScriptCoreLib.Shared.Avalon.Tween;
using ScriptCoreLib.Shared.Lambda;
using System.ComponentModel;

namespace AvalonCardGames.Menu.Shared
{
    [Script]
    public class GameMenuOption
    {
        public ImageSource Source;

        public string Text;

        public Action Click;

        public Uri Hyperlink;

        public double MarginBefore;
        public double MarginAfter;

        internal SimpleCarouselControl.EntryInfo CarouselEntry;


    }

    [Script]
    public class GameMenu : ISupportsContainer, IEnumerable<GameMenuOption>
    {
        public Canvas Container { get; set; }




        public string IdleText = "Select a difficulty for a new game!";

        internal readonly BindingList<GameMenuOption> Options = new BindingList<GameMenuOption>();

        public void Add(GameMenuOption e)
        {
            Options.Add(e);
        }

        public SimpleCarouselControl Carousel { get; set; }

        public GameMenu(int Width, int Height, int ShadowHeight, Canvas stage = null)
        {
            var ContentHeight = Height * 2 / 3;

            this.Container = new Canvas
            {
                Width = Width,
                Height = ContentHeight + ShadowHeight
            };

            var ShadowContainer = new Canvas
            {
                Width = Width,
                Height = ContentHeight + ShadowHeight,
                Opacity = 0.5
            }.AttachTo(this.Container);

            var ShadowContainerFill = new Rectangle
           {
               Fill = Brushes.Black,
               Width = Width,
               Height = ContentHeight,
           }.MoveTo(0, 0).AttachTo(ShadowContainer);



            var shadowbottom = Colors.Black.ToTransparentGradient(ShadowHeight).Select(
                (c, i) =>
                {
                    return new Rectangle
                    {
                        Fill = new SolidColorBrush(c),
                        Width = Width,
                        Height = 1,
                        Opacity = c.A / 255.0
                    }.MoveTo(0, ContentHeight + i).AttachTo(ShadowContainer);
                }
            ).ToArray();

            if (stage != null)
            {
                stage.SizeChanged +=
                    delegate
                    {
                        ShadowContainerFill.Width = stage.Width;

                        shadowbottom.ForEach(
                            (Rectangle c, int i) =>
                            {
                                c.Width = stage.Width;

                            }
                        );
                    };
            }

            this.Carousel = new SimpleCarouselControl(Width, ContentHeight).MoveContainerTo(0, 0);



            Carousel.Caption.FontSize = 36;
            Carousel.Caption.Height = 60;
            Carousel.Caption.Text = IdleText;

            Action<int, int> AnimatedShadowOpacity = NumericEmitter.Of(
                (x, y) => ShadowContainer.Opacity = x * 0.01
            );

            var ShadowOpacity = 50;

            AnimatedShadowOpacity(ShadowOpacity, 0);


            Carousel.Hover +=
                delegate
                {
                    ShadowOpacity = 70;
                    AnimatedShadowOpacity(ShadowOpacity, 0);
                };

            Carousel.Idle +=
                delegate
                {
                    Carousel.Caption.Text = IdleText;
                    ShadowOpacity = 50;
                    AnimatedShadowOpacity(ShadowOpacity, 0);
                };

            this.Options.ForEachNewItem(
                e =>
                {
                    double p = 0;

                    this.Where(k => k != e).LastOrDefault().Apply(k => p = k.CarouselEntry.Position + k.MarginAfter);

                    e.CarouselEntry = new SimpleCarouselControl.EntryInfo
                    {
                        Source = e.Source,
                        Text = e.Text,
                        Position = p + e.MarginBefore,
                        Click =
                            delegate
                            {
                                if (e.Click != null)
                                    e.Click();

                                if (e.Hyperlink != null)
                                    e.Hyperlink.NavigateTo();
                            }
                    };

                    Carousel.AddEntry(e.CarouselEntry);
                }
            );



            Carousel.AttachContainerTo(this);

            Carousel.Overlay.AttachTo(this);



            Action<int, int> AnimatedTop = NumericEmitter.Of(
                (x, y) => this.Container.MoveTo(0, y)
            );

            this.MoveContainerTo(0, -ContentHeight);
            AnimatedTop(0, -ContentHeight);

            this.Show = delegate
            {
                Carousel.Show();
                AnimatedTop(0, 0);

                AnimatedShadowOpacity(ShadowOpacity, 0);
            };

            this.Hide = delegate
            {
                Carousel.Hide();
                AnimatedTop(0, -ContentHeight);
                AnimatedShadowOpacity(0, 0);
            };

            var Delayed = this.Container.ToDelayedMouseEvents();

            Delayed.ValidateMouseEnter = () => ValidateShow();
            Delayed.ValidateMouseLeave = () => ValidateHide();
            Delayed.MouseEnter += Show;
            Delayed.MouseLeave += Hide;



            ShadowContainer.Opacity = 0;

        }

        public readonly Action Show;
        public readonly Action Hide;

        public Func<bool> ValidateHide = () => true;
        public Func<bool> ValidateShow = () => true;

        #region IEnumerable<Option> Members

        public IEnumerator<GameMenuOption> GetEnumerator()
        {
            return this.Options.GetEnumerator();
        }

        #endregion

        #region IEnumerable Members

        System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
        {
            return this.Options.GetEnumerator();
        }

        #endregion
    }
}
