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
	partial class SpiderCanvas 
	{
	

		public enum SpiderRankEnum
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

		public Dictionary<CardInfo.RankEnum, SpiderRankEnum> RankMapping = new Dictionary<CardInfo.RankEnum, SpiderRankEnum>
		{
			{ CardInfo.RankEnum.RankKing, SpiderRankEnum.RankKing },
			{ CardInfo.RankEnum.RankQueen, SpiderRankEnum.RankQueen },
			{ CardInfo.RankEnum.RankJack, SpiderRankEnum.RankJack },
			{ CardInfo.RankEnum.Rank10, SpiderRankEnum.Rank10 },
			{ CardInfo.RankEnum.Rank9, SpiderRankEnum.Rank9 },
			{ CardInfo.RankEnum.Rank8, SpiderRankEnum.Rank8 },
			{ CardInfo.RankEnum.Rank7, SpiderRankEnum.Rank7 },
			{ CardInfo.RankEnum.Rank6, SpiderRankEnum.Rank6 },
			{ CardInfo.RankEnum.Rank5, SpiderRankEnum.Rank5 },
			{ CardInfo.RankEnum.Rank4, SpiderRankEnum.Rank4 },
			{ CardInfo.RankEnum.Rank3, SpiderRankEnum.Rank3 },
			{ CardInfo.RankEnum.Rank2, SpiderRankEnum.Rank2 },
			{ CardInfo.RankEnum.RankAce, SpiderRankEnum.RankAce },
		};

		


	}
}
