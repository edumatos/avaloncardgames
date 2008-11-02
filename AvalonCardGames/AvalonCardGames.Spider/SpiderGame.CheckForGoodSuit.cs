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

		private void CheckForGoodSuit(CardStack s)
		{
			const int CardsInSuit = 3;

			if (s.Cards.Count < CardsInSuit)
				return;

			var a = Enumerable.Range(s.Cards.Count - CardsInSuit, CardsInSuit).ToArray(k => s.Cards[k]);

			Func<Card, Card, bool> IsNext =
				(Previous, Current) =>
				{
					if (Previous.Rank + 1 == Current.Rank)
						if (Previous.Info.Suit == Current.Info.Suit)
							return true;

					return false;
				};


			if (!a.All(k => k.VisibleSide == Card.SideEnum.TopSide))
				return;


			if (!a.AllWithPrevious(IsNext))
				return;

			System.Console.WriteLine("got good suit...");

			var Destination = DeadStacks.Last();

			a.Reverse().ForEach(
				(Current, SignalNext) =>
				{
					MyDeck.Sounds.deal();

					Current.BringToFront();

					Current.AttachToStack(Destination);

					Current.AnimatedMoveTo(Current.LocationInStack);

					200.AtDelay(SignalNext);
				}
			)(
				delegate
				{
					System.Console.WriteLine("good suit cleared from deck!");
				}
			);
		}


	}
}
