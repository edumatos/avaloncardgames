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

namespace AvalonCardGames.Solitaire.Shared
{
	partial class SolitaireGame
	{


		public enum RankEnum
		{
			Unknown,

			RankKing,
			RankQueen,
			RankJack,
			Rank10,
			Rank9,
			Rank8,
			Rank7,
			Rank6,
			Rank5,
			Rank4,
			Rank3,
			Rank2,
			RankAce,

		}

		public Dictionary<CardInfo.RankEnum, RankEnum> RankMapping = new Dictionary<CardInfo.RankEnum, RankEnum>
		{
			{ CardInfo.RankEnum.RankKing, RankEnum.RankKing },
			{ CardInfo.RankEnum.RankQueen, RankEnum.RankQueen },
			{ CardInfo.RankEnum.RankJack, RankEnum.RankJack },
			{ CardInfo.RankEnum.Rank10, RankEnum.Rank10 },
			{ CardInfo.RankEnum.Rank9, RankEnum.Rank9 },
			{ CardInfo.RankEnum.Rank8, RankEnum.Rank8 },
			{ CardInfo.RankEnum.Rank7, RankEnum.Rank7 },
			{ CardInfo.RankEnum.Rank6, RankEnum.Rank6 },
			{ CardInfo.RankEnum.Rank5, RankEnum.Rank5 },
			{ CardInfo.RankEnum.Rank4, RankEnum.Rank4 },
			{ CardInfo.RankEnum.Rank3, RankEnum.Rank3 },
			{ CardInfo.RankEnum.Rank2, RankEnum.Rank2 },
			{ CardInfo.RankEnum.RankAce, RankEnum.RankAce },
		};

		


	}
}
