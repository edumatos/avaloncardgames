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
	partial class SpiderGame 
	{

		public void DealRow(Action done)
		{

			var DealingStack = DealStacks.LastOrDefault();

			if (DealingStack == null)
			{
				System.Console.WriteLine("whoops, no more stacks left, but a click was made?");

				return;
			}

			Console.WriteLine(new { Remove = DealingStack }.ToString());

			DealStacks.Remove(DealingStack);


			//MyStatus.Ready = false;

			System.Console.WriteLine("dealing new row of cards...");

			//Console.Log("deal last stack of " + DealingStack.Cards.Count + " to " + PlayStacks.Count + " stacks");

			if (DealingStack.Cards.Count != PlayStacks.Count)
				throw new Exception("Count mismatch");

			// AddScore(- PlayStacks.Count);

			var ToBeAnimated = new Queue<Card>();

			foreach (CardStack v in PlayStacks)
			{
				var c = DealingStack.Cards.Last();

				c.VisibleSide = Card.SideEnum.TopSide;

				this.MyStatus.Moves--;
				this.MyStatus.Score++;

				c.AttachToStack(v);

				c.Overlay.Orphanize();
				c.Overlay.AttachTo(c.CurrentDeck.Overlay);

				ToBeAnimated.Enqueue(c);


			}

			System.Console.WriteLine("reordering cards, and animating...");

			ToBeAnimated.ForEachReversed((c) => c.BringToFront());

			Console.WriteLine("cards to be animated: " + ToBeAnimated.Count);

			Action NextCard = null;

			NextCard =
				delegate
				{
					if (ToBeAnimated.Count > 0)
					{
						var c = ToBeAnimated.Dequeue();

						this.MyDeck.Sounds.deal();

						//MySounds.PlaySoundDeal();

						var p = c.LocationInStack;

						c.AnimatedMoveTo(

							Convert.ToInt32(p.X),
							Convert.ToInt32(p.Y)
							);


						//delegate
						//{
						//    c.Drag.Enabled = true;
						CheckForGoodSuit(c.CurrentStack);

						if (ToBeAnimated.Count == 0)
						{
							DealingStack.Container.Hide();

							//MyStatus.Ready = true;

							System.Console.WriteLine("done...");

							if (done != null)
								done();
							//Helper.Invoke(done);
						}
						else
						{
							300.AtDelay(NextCard);
						}
						//});
					}


				};

			NextCard();

		}


	}
}
