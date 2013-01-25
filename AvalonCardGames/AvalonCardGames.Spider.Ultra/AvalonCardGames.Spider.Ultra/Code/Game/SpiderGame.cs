using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;
using ScriptCoreLib;
using ScriptCoreLib.Shared.Avalon.Cards;
using ScriptCoreLib.Shared.Avalon.Controls;
using ScriptCoreLib.Shared.Avalon.Extensions;
using ScriptCoreLib.Shared.Lambda;

namespace AvalonCardGames.Spider.Shared
{
    public partial class SpiderGame : Canvas
    {
        public const int DefaultWidth = 800;
        public const int DefaultHeight = 600;


        public CardDeck MyDeck = new CardDeck
        {
        };

        BindingList<CardStack> DealStacks;
        BindingList<CardStack> PlayStacks;

        BindingList<CardStack> DeadStacks;



        readonly StatusControl MyStatus;

        public event Action GameOver;

        public bool Cheat = false;

        public SpiderGame(CardInfo.SuitEnum[] level)
        {
            Width = DefaultWidth;
            Height = DefaultHeight;

            this.ClipTo(0, 0, DefaultWidth, DefaultHeight);

            var GameOverBox = new TextBox
            {
                Width = DefaultWidth,
                TextAlignment = System.Windows.TextAlignment.Center,
                Foreground = Brushes.White,
                Background = Brushes.Transparent,
                BorderThickness = new Thickness(0),
                IsReadOnly = true,
                FontSize = 24,
            }.MoveTo(0, DefaultHeight / 2).AttachTo(this);

            GameOver += delegate
            {
                GameOverBox.Text = "Congratulations! You Won!";
            };


            // add autoscroll ?
            this.MyDeck.SizeTo(DefaultWidth, DefaultHeight);
            this.MyDeck.AttachContainerTo(this);
            this.MyDeck.GetRank = e => (int)RankMapping[e];
            this.MyDeck.CardCustomBackgroundSource = new Abstractatech.Avalon.Cards.Avalon.Images.spider().Source;


            //this.MyDeck.Overlay.Opacity = 0.6;

            MyStatus = new StatusControl().AttachContainerTo(this).MoveContainerTo(
                (DefaultWidth - StatusControl.Width) / 2,
                (DefaultHeight - StatusControl.Height)
            );
            MyStatus.Container.Hide();

            System.Console.WriteLine("--- spider ---");






            System.Console.WriteLine("adding card infos... ");

            MyDeck.UnusedCards.AddRange(CardInfo.By(2, level));




            System.Console.WriteLine("creating stacklists... ");

            DealStacks = MyDeck.CreateStackList();
            PlayStacks = MyDeck.CreateStackList();
            DeadStacks = MyDeck.CreateStackList();

            PlayStacks.ListChanged +=
                (sender, args) =>
                {
                    if (args.ListChangedType == ListChangedType.ItemAdded)
                    {
                        var s = PlayStacks[args.NewIndex];


                    }

                };



            DeadStacks.ListChanged +=
                (sender, args) =>
                {
                    if (args.ListChangedType == ListChangedType.ItemAdded)
                    {
                        var s = DeadStacks[args.NewIndex];

                        //s.Control.Hide();

                        s.CardMargin = new Vector { X = 2, Y = 0 };

                        s.Cards.ListChanged +=
                            (sender2, args2) =>
                            {
                                if (args2.ListChangedType == ListChangedType.ItemAdded)
                                {
                                    //s[args2.NewIndex].Enabled = false;
                                }

                            };

                    }
                };


            #region drag rules
            MyDeck.ApplyCardRules += delegate(Card c)
            {
                c.Moved +=
                     delegate
                     {
                         if (c.StackedCards.Length == 0)
                         {
                             CheckForGoodSuit(c.CurrentStack);

                             MyStatus.Moves++;
                             MyStatus.Score--;

                             MyStatus.Update();
                         }

                         CheckForWin();
                     };

                c.ValidateDragStart +=
                    delegate
                    {
                        if (Cheat)
                            return true;

                        return c.SelectedCards.AllWithPrevious(
                            (Previous, Current) =>
                            {
                                if (Previous.Info.Suit != Current.Info.Suit)
                                    return false;

                                return Previous.Rank + 1 == Current.Rank;
                            }
                        );
                    };

                c.ValidateDragStop +=
                    CandidateStack =>
                    {
                        if (Cheat)
                            return true;


                        if (PlayStacks.Contains(CandidateStack))
                        {
                            if (CandidateStack.Cards.Count == 0)
                                return true;

                            var Candidate = CandidateStack.Last();

                            // we do not care about the suit

                            if (c.Rank == Candidate.Rank + 1)
                                //if (c.Info.Suit == Candidate.Info.Suit)
                                return true;

                            return false;
                        }

                        return false;
                    };
            };

            #endregion

            System.Console.WriteLine("creating playstack... ");

            var Margin = (DefaultWidth - CardInfo.Width * 10) / 11;


            PlayStacks.AddRange(
                Enumerable.Range(0, 10).ToArray(
                i =>
                    new CardStack
                    {
                        Name = "PlayStack " + i,
                        CardMargin = new Vector { Y = 20 }
                    }.MoveTo(
                        Margin + i * (CardInfo.Width + Margin),
                        Margin + 40
                    ).Apply(
                        s =>
                        {
                            if (i < 4)
                                s.Cards.AddRange(MyDeck.FetchCards(5));
                            else
                                s.Cards.AddRange(MyDeck.FetchCards(4));

                            if (Cheat)
                                s.Cards.ForEach(k => k.VisibleSide = Card.SideEnum.TopSide);

                        }
                    )
                )
            );


            PlayStacks.ForEach(
                delegate(CardStack s)
                {

                    s.Cards.ListChanged +=
                        (sender, args) =>
                        {
                            if (args.ListChangedType == ListChangedType.ItemDeleted)
                                //if (MyStatus.Ready)
                                s.RevealLastCard();
                        };

                }
            );


            DealStacks.ListChanged +=
                (sender, args) =>
                {
                    if (args.ListChangedType == ListChangedType.ItemAdded)
                    {
                        var s = DealStacks[args.NewIndex];

                        s.CardMargin = new Vector { Y = 0, X = 0 };
                        s.Update();

                        s.Click +=
                            delegate
                            {
                                if (DealStacks.Contains(s))
                                {
                                    //if (MyStatus.Ready)
                                    DealRow(null);
                                }
                                else
                                {
                                    System.Console.WriteLine("whoops wrong stack click - " + args.NewIndex);

                                }
                            };
                    }
                };


            System.Console.WriteLine("creating dealstack... ");

            var dealpoint = new Point
            {
                X = DefaultWidth - CardInfo.Width - Margin,
                Y = DefaultHeight - CardInfo.Height - Margin - 17 - Margin
            };


            while (MyDeck.UnusedCards.Count > 0)
            {
                var s = new CardStack { MyDeck.FetchCards(10) };
                //s.Overlay.Opacity = 1;
                s.Name = "DealStack";

                DealStacks.Add(
                    s.MoveTo(Convert.ToInt32(dealpoint.X), Convert.ToInt32(dealpoint.Y))
                );

                dealpoint.X -= 10;
            }

            // we will collect cards here
            DeadStacks.Add(new CardStack().MoveTo(Margin, Convert.ToInt32(dealpoint.Y)));



            DealRow(
                delegate
                {

                    MyStatus.Score = 500;
                    MyStatus.Moves = 0;
                    MyStatus.Update();
                    MyStatus.Container.Show();
                }
            );



        }




    }
}
