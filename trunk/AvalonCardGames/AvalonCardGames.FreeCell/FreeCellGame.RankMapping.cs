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

namespace AvalonCardGames.FreeCell.Shared
{
	partial class FreeCellGame
	{


		public enum FreeCellRankEnum
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

		public Dictionary<CardInfo.RankEnum, FreeCellRankEnum> RankMapping = new Dictionary<CardInfo.RankEnum, FreeCellRankEnum>
		{
			{ CardInfo.RankEnum.RankKing, FreeCellRankEnum.RankKing },
			{ CardInfo.RankEnum.RankQueen, FreeCellRankEnum.RankQueen },
			{ CardInfo.RankEnum.RankJack, FreeCellRankEnum.RankJack },
			{ CardInfo.RankEnum.Rank10, FreeCellRankEnum.Rank10 },
			{ CardInfo.RankEnum.Rank9, FreeCellRankEnum.Rank9 },
			{ CardInfo.RankEnum.Rank8, FreeCellRankEnum.Rank8 },
			{ CardInfo.RankEnum.Rank7, FreeCellRankEnum.Rank7 },
			{ CardInfo.RankEnum.Rank6, FreeCellRankEnum.Rank6 },
			{ CardInfo.RankEnum.Rank5, FreeCellRankEnum.Rank5 },
			{ CardInfo.RankEnum.Rank4, FreeCellRankEnum.Rank4 },
			{ CardInfo.RankEnum.Rank3, FreeCellRankEnum.Rank3 },
			{ CardInfo.RankEnum.Rank2, FreeCellRankEnum.Rank2 },
			{ CardInfo.RankEnum.RankAce, FreeCellRankEnum.RankAce },
		};

		


	}
}
