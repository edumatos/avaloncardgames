  var TWymgcaHD0C5PL_a3VdT4GQ = {Name:{Name:"AvalonCardGames.FreeCell",FullName:"AvalonCardGames.FreeCell, Version\x3d1.0.0.0, Culture\x3dneutral, PublicKeyToken\x3dnull"}};
  // AvalonCardGames.FreeCell.Shared.FreeCellGame
  function _8c7oQzOrwDmkSdU0qNVKOw(){};
  _8c7oQzOrwDmkSdU0qNVKOw.TypeName = "FreeCellGame";
  _8c7oQzOrwDmkSdU0qNVKOw.Assembly = TWymgcaHD0C5PL_a3VdT4GQ;
  var type$_8c7oQzOrwDmkSdU0qNVKOw = _8c7oQzOrwDmkSdU0qNVKOw.prototype = new oayRPx5ySTCeEJNh8DuEYg();
  type$_8c7oQzOrwDmkSdU0qNVKOw.constructor = _8c7oQzOrwDmkSdU0qNVKOw;
  var DAAABDOrwDmkSdU0qNVKOw = null;
  var DQAABDOrwDmkSdU0qNVKOw = null;
  var DgAABDOrwDmkSdU0qNVKOw = null;
  type$_8c7oQzOrwDmkSdU0qNVKOw.MyDeck = null;
  type$_8c7oQzOrwDmkSdU0qNVKOw.TempStacks = null;
  type$_8c7oQzOrwDmkSdU0qNVKOw.GoalStacks = null;
  type$_8c7oQzOrwDmkSdU0qNVKOw.PlayStacks = null;
  type$_8c7oQzOrwDmkSdU0qNVKOw.MyStatus = null;
  type$_8c7oQzOrwDmkSdU0qNVKOw.GameOver = null;
  type$_8c7oQzOrwDmkSdU0qNVKOw.Cheat = false;
  type$_8c7oQzOrwDmkSdU0qNVKOw.RankMapping = null;
  type$_8c7oQzOrwDmkSdU0qNVKOw._History_k__BackingField = null;
  var basector$_8c7oQzOrwDmkSdU0qNVKOw = $ctor$(basector$oayRPx5ySTCeEJNh8DuEYg, null, type$_8c7oQzOrwDmkSdU0qNVKOw);
  // AvalonCardGames.FreeCell.Shared.FreeCellGame..ctor
  type$_8c7oQzOrwDmkSdU0qNVKOw.BQAABjOrwDmkSdU0qNVKOw = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l, m, n;

    j = null;
    k = null;
    l = null;
    m = null;
    n = null;
    a.MyDeck = new ctor$PAAABnxaFjWXUEhutPG9kQ();
    a.Cheat = 0;
    i = new ctor$__bQcABi2jPTeKcTsiTA1xiA();
    i.__bwcABi2jPTeKcTsiTA1xiA(2, 1);
    i.__bwcABi2jPTeKcTsiTA1xiA(3, 2);
    i.__bwcABi2jPTeKcTsiTA1xiA(4, 3);
    i.__bwcABi2jPTeKcTsiTA1xiA(5, 4);
    i.__bwcABi2jPTeKcTsiTA1xiA(6, 5);
    i.__bwcABi2jPTeKcTsiTA1xiA(7, 6);
    i.__bwcABi2jPTeKcTsiTA1xiA(8, 7);
    i.__bwcABi2jPTeKcTsiTA1xiA(9, 8);
    i.__bwcABi2jPTeKcTsiTA1xiA(10, 9);
    i.__bwcABi2jPTeKcTsiTA1xiA(11, 10);
    i.__bwcABi2jPTeKcTsiTA1xiA(12, 11);
    i.__bwcABi2jPTeKcTsiTA1xiA(13, 12);
    i.__bwcABi2jPTeKcTsiTA1xiA(1, 13);
    a.RankMapping = i;
    a.WwAABh5ySTCeEJNh8DuEYg();
    h = /* DOMCreateType */new _8A29TZT2IzabS8YA5zVPHQ();
    h.__4__this = a;
    a.MwAABpJ65jyB21eK1VwRQA(800);
    a.NQAABpJ65jyB21eK1VwRQA(600);
    h.Margin = ((800 - (GQAABmrUKTyVHTEYLmsu2g() * 8)) / 9);
    c = new ctor$_5QAABv_adLT6ZD2jUxEHFMw();
    c.MwAABpJ65jyB21eK1VwRQA(800);
    c.__awAABv_adLT6ZD2jUxEHFMw(2);
    c.zAAABvSp8ja4oJ6DUMp62Q(XQEABmKK1T2V_bGW3f5LeNA());
    c._0AAABvSp8ja4oJ6DUMp62Q(WwEABmKK1T2V_bGW3f5LeNA());
    c._1AAABvSp8ja4oJ6DUMp62Q(new ctor$_1QEABoYQZD_aEFXTSTSjrVw(0));
    c._4QAABjCJ_aj67rIJMixkVZw(1);
    c._2AAABvSp8ja4oJ6DUMp62Q(24);
    h.GameOverBox = _8gEABr_bLWDe9OgfD0W3O7Q(_7wEABr_bLWDe9OgfD0W3O7Q(c, 0, 300), a);
    a.GameOver = TAoABhNbrTK2juX6Wf4PnQ(a.GameOver, new ctor$UQUABuzqfTWQzxgi2Ip02g(h, '__ctor_b__a'));
    d = new ctor$WwAABh5ySTCeEJNh8DuEYg();
    d.MwAABpJ65jyB21eK1VwRQA(96);
    d.NQAABpJ65jyB21eK1VwRQA(96);
    b = _7wEABr_bLWDe9OgfD0W3O7Q(_8gEABr_bLWDe9OgfD0W3O7Q(d, a), 384, ((h.Margin * 2) + ((GgAABmrUKTyVHTEYLmsu2g() - 32) / 2)));
    e = new ctor$fAIABrhSLzuJ75ou_ayKGnQ();
    e.gAIABrhSLzuJ75ou_ayKGnQ(bwIABsRwlTqY1HAn8xDgVQ('assets\u002fAvalonCardGames.FreeCell\u002fkingbitm.png'));
    e.MwAABpJ65jyB21eK1VwRQA(32);
    e.NQAABpJ65jyB21eK1VwRQA(32);
    h.KingRight = _8gEABr_bLWDe9OgfD0W3O7Q(e, b);
    f = new ctor$fAIABrhSLzuJ75ou_ayKGnQ();
    f.gAIABrhSLzuJ75ou_ayKGnQ(bwIABsRwlTqY1HAn8xDgVQ('assets\u002fAvalonCardGames.FreeCell\u002fkingleft.png'));
    f.MwAABpJ65jyB21eK1VwRQA(32);
    f.NQAABpJ65jyB21eK1VwRQA(32);
    h.KingLeft = _8gEABr_bLWDe9OgfD0W3O7Q(f, b);
    g = new ctor$fAIABrhSLzuJ75ou_ayKGnQ();
    g.gAIABrhSLzuJ75ou_ayKGnQ(bwIABsRwlTqY1HAn8xDgVQ('assets\u002fAvalonCardGames.FreeCell\u002fkingsmil.png'));
    g.MwAABpJ65jyB21eK1VwRQA(32);
    g.NQAABpJ65jyB21eK1VwRQA(32);
    g.IAAABlVNcDa86VHOtLThag(1);
    h.KingSmile = _8gEABr_bLWDe9OgfD0W3O7Q(g, b);
    a.MyDeck.NAAABnxaFjWXUEhutPG9kQ().DwAABlVNcDa86VHOtLThag(new ctor$QQEABvFj1zCw7fmFw_bi94g(h, '__ctor_b__b'));
    a.MyStatus = _8AEABr_bLWDe9OgfD0W3O7Q(_8wEABr_bLWDe9OgfD0W3O7Q(new ctor$DgAABnQT3D_adJwRgdVeuKg(), a), 300, 540);
    a.MyDeck.OwAABnxaFjWXUEhutPG9kQ(800, 600);
    _8wEABr_bLWDe9OgfD0W3O7Q(a.MyDeck, a);

    if (!j)
    {
      j = new ctor$YQEABkOkJjGPtTLmBuq5mg(a, 'BgAABjOrwDmkSdU0qNVKOw');
    }

    a.MyDeck.GetRank = j;
    ow0ABvmt_aT2hLXIgzD4eQw('--- freecell ---');
    ow0ABvmt_aT2hLXIgzD4eQw('adding card infos... ');
    a.MyDeck.UnusedCards.pgAABvqMgj2CW8U7T0nhxg(HwAABmrUKTyVHTEYLmsu2g());
    a.MyStatus.FAAABnQT3D_adJwRgdVeuKg(a.MyDeck.UnusedCards.qgAABvqMgj2CW8U7T0nhxg());
    a.MyStatus.EgAABnQT3D_adJwRgdVeuKg(-1);
    a.MyStatus.Update.Invoke();
    ow0ABvmt_aT2hLXIgzD4eQw('creating stacklists... ');
    a.PlayStacks = a.MyDeck.PQAABnxaFjWXUEhutPG9kQ();

    if (!(DAAABDOrwDmkSdU0qNVKOw))
    {
      DAAABDOrwDmkSdU0qNVKOw = new ctor$TQUABmdYmDufdNSm2oh5Bw(null, 'BwAABjOrwDmkSdU0qNVKOw');
    }

    zgEABl964D_aaiuMHdBpszA(a.PlayStacks, DAAABDOrwDmkSdU0qNVKOw);
    a.TempStacks = a.MyDeck.PQAABnxaFjWXUEhutPG9kQ();

    if (!k)
    {
      k = new ctor$XQEABrN42zC9LggKQChbQQ(a, 'CAAABjOrwDmkSdU0qNVKOw');
    }

    h.Rule_WinConditionMet = k;

    if (!l)
    {
      l = new ctor$UQUABuzqfTWQzxgi2Ip02g(a, 'CQAABjOrwDmkSdU0qNVKOw');
    }

    h.MyStatus_UpdateCardsLeft = l;
    a.GoalStacks = a.MyDeck.PQAABnxaFjWXUEhutPG9kQ();
    zgEABl964D_aaiuMHdBpszA(a.GoalStacks, new ctor$TQUABmdYmDufdNSm2oh5Bw(h, '__ctor_b__14'));

    if (!m)
    {
      m = new ctor$ZQEABg7wAzm9J_bGHy6IBOQ(a, 'CgAABjOrwDmkSdU0qNVKOw');
    }

    h.RuleForStackingCardsInGoalStack = m;

    if (!n)
    {
      n = new ctor$ZQEABg7wAzm9J_bGHy6IBOQ(a, 'CwAABjOrwDmkSdU0qNVKOw');
    }

    h.RuleForStackingCardsInPlayStack = n;
    a.MyDeck.OAAABnxaFjWXUEhutPG9kQ(new ctor$TQUABmdYmDufdNSm2oh5Bw(h, '__ctor_b__18'));
    ow0ABvmt_aT2hLXIgzD4eQw('creating goalstack... ');
    kgEABl964D_aaiuMHdBpszA(a.GoalStacks, mwEABl964D_aaiuMHdBpszA(NAAABkAVcDWPnLAqFK62WA(0, 4), new ctor$YQEABkOkJjGPtTLmBuq5mg(h, '__ctor_b__1e')));
    ow0ABvmt_aT2hLXIgzD4eQw('creating tempstack... ');
    kgEABl964D_aaiuMHdBpszA(a.TempStacks, mwEABl964D_aaiuMHdBpszA(NAAABkAVcDWPnLAqFK62WA(0, 4), new ctor$YQEABkOkJjGPtTLmBuq5mg(h, '__ctor_b__1f')));
    ow0ABvmt_aT2hLXIgzD4eQw('creating playstack... ');
    kgEABl964D_aaiuMHdBpszA(a.PlayStacks, mwEABl964D_aaiuMHdBpszA(NAAABkAVcDWPnLAqFK62WA(0, 8), new ctor$YQEABkOkJjGPtTLmBuq5mg(h, '__ctor_b__20')));
  };
  var ctor$BQAABjOrwDmkSdU0qNVKOw = _8c7oQzOrwDmkSdU0qNVKOw.ctor = $ctor$(basector$oayRPx5ySTCeEJNh8DuEYg, 'BQAABjOrwDmkSdU0qNVKOw', type$_8c7oQzOrwDmkSdU0qNVKOw);

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.get_History
  type$_8c7oQzOrwDmkSdU0qNVKOw.AQAABjOrwDmkSdU0qNVKOw = function ()
  {
    return this._History_k__BackingField;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.set_History
  type$_8c7oQzOrwDmkSdU0qNVKOw.AgAABjOrwDmkSdU0qNVKOw = function (b)
  {
    var a = this;

    a._History_k__BackingField = b;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.add_GameOver
  type$_8c7oQzOrwDmkSdU0qNVKOw.AwAABjOrwDmkSdU0qNVKOw = function (b)
  {
    var a = this;

    a.GameOver = TAoABhNbrTK2juX6Wf4PnQ(a.GameOver, b);
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.remove_GameOver
  type$_8c7oQzOrwDmkSdU0qNVKOw.BAAABjOrwDmkSdU0qNVKOw = function (b)
  {
    var a = this;

    a.GameOver = TgoABhNbrTK2juX6Wf4PnQ(a.GameOver, b);
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__c
  type$_8c7oQzOrwDmkSdU0qNVKOw.BgAABjOrwDmkSdU0qNVKOw = function (b)
  {
    return this.RankMapping.BwgABi2jPTeKcTsiTA1xiA(b);
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__d
  function BwAABjOrwDmkSdU0qNVKOw(b)
  {
    var c, d;

    d = new ctor$mQIABvwiPzaM0k_aS9hKUkw();
    c = d;
    c.lgIABvwiPzaM0k_aS9hKUkw(20);
    b.CardMargin = c;
    b.DgAABjWnHjui8XnJJ2N5oA();
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__e
  type$_8c7oQzOrwDmkSdU0qNVKOw.CAAABjOrwDmkSdU0qNVKOw = function ()
  {
    var a = this, b, c;


    if (!(DQAABDOrwDmkSdU0qNVKOw))
    {
      DQAABDOrwDmkSdU0qNVKOw = new ctor$YQEABkOkJjGPtTLmBuq5mg(null, 'DAAABjOrwDmkSdU0qNVKOw');
    }

    c = !DAAABkAVcDWPnLAqFK62WA(a.PlayStacks, DQAABDOrwDmkSdU0qNVKOw);

    if (!c)
    {
      b = 0;
      return b;
    }


    if (!(DgAABDOrwDmkSdU0qNVKOw))
    {
      DgAABDOrwDmkSdU0qNVKOw = new ctor$YQEABkOkJjGPtTLmBuq5mg(null, 'DQAABjOrwDmkSdU0qNVKOw');
    }

    c = !DAAABkAVcDWPnLAqFK62WA(a.TempStacks, DgAABDOrwDmkSdU0qNVKOw);

    if (!c)
    {
      b = 0;
      return b;
    }

    b = 1;
    return b;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__11
  type$_8c7oQzOrwDmkSdU0qNVKOw.CQAABjOrwDmkSdU0qNVKOw = function ()
  {
    var a = this;

    a.MyStatus.FAAABnQT3D_adJwRgdVeuKg(0);
    ywEABl964D_aaiuMHdBpszA(a.PlayStacks, new ctor$TQUABmdYmDufdNSm2oh5Bw(a, 'DgAABjOrwDmkSdU0qNVKOw'));
    ywEABl964D_aaiuMHdBpszA(a.TempStacks, new ctor$TQUABmdYmDufdNSm2oh5Bw(a, 'DwAABjOrwDmkSdU0qNVKOw'));
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__16
  type$_8c7oQzOrwDmkSdU0qNVKOw.CgAABjOrwDmkSdU0qNVKOw = function (b, c)
  {
    var a = this, d, e;

    e = !a.Cheat;

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(b == null);

    if (!e)
    {
      d = (c.Info.Rank == 1);
      return d;
    }

    e = (b.Info.Suit == c.Info.Suit);

    if (!e)
    {
      d = 0;
      return d;
    }

    e = (b.WQAABq3ydziJJQjrYNUi_aQ() == (c.WQAABq3ydziJJQjrYNUi_aQ() + 1));

    if (!e)
    {
      d = 0;
      return d;
    }

    d = 1;
    return d;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__17
  type$_8c7oQzOrwDmkSdU0qNVKOw.CwAABjOrwDmkSdU0qNVKOw = function (b, c)
  {
    var a = this, d, e;

    e = !a.Cheat;

    if (!e)
    {
      d = 1;
      return d;
    }

    e = !(b.Info.IwAABmrUKTyVHTEYLmsu2g() == c.Info.IwAABmrUKTyVHTEYLmsu2g());

    if (!e)
    {
      d = 0;
      return d;
    }

    e = ((b.WQAABq3ydziJJQjrYNUi_aQ() + 1) == c.WQAABq3ydziJJQjrYNUi_aQ());

    if (!e)
    {
      d = 0;
      return d;
    }

    d = 1;
    return d;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__f
  function DAAABjOrwDmkSdU0qNVKOw(b)
  {
    return (b.Cards.PwgABj1h1jWisfyZw_a9KnQ() > 0);
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__10
  function DQAABjOrwDmkSdU0qNVKOw(b)
  {
    return !b.Cards.PwgABj1h1jWisfyZw_a9KnQ();
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__12
  type$_8c7oQzOrwDmkSdU0qNVKOw.DgAABjOrwDmkSdU0qNVKOw = function (b)
  {
    var a = this;

    a.MyStatus.FAAABnQT3D_adJwRgdVeuKg((a.MyStatus.EwAABnQT3D_adJwRgdVeuKg() + b.Cards.PwgABj1h1jWisfyZw_a9KnQ()));
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame.<.ctor>b__13
  type$_8c7oQzOrwDmkSdU0qNVKOw.DwAABjOrwDmkSdU0qNVKOw = function (b)
  {
    var a = this;

    a.MyStatus.FAAABnQT3D_adJwRgdVeuKg((a.MyStatus.EwAABnQT3D_adJwRgdVeuKg() + b.Cards.PwgABj1h1jWisfyZw_a9KnQ()));
  };

  // System.Windows.Media.Composition.DUCE+IResource
  // AvalonCardGames.FreeCell.Shared.FreeCellGame
  (function (i)  {
    i.UgUABjzhDj6xNVZgURdzBg = i._7gsABkU3sDKYObq2_baI69A;
    i.UwUABjzhDj6xNVZgURdzBg = i._8gsABkU3sDKYObq2_baI69A;
    i.VAUABjzhDj6xNVZgURdzBg = i._8wsABkU3sDKYObq2_baI69A;
    i.VQUABjzhDj6xNVZgURdzBg = i.CQwABkU3sDKYObq2_baI69A;
    i.VgUABjzhDj6xNVZgURdzBg = i._7AsABkU3sDKYObq2_baI69A;
    i.VwUABjzhDj6xNVZgURdzBg = i._7QsABkU3sDKYObq2_baI69A;
    i.WAUABjzhDj6xNVZgURdzBg = i._8QsABkU3sDKYObq2_baI69A;
    // System.Windows.Media.Animation.IAnimatable
    i.kg4ABqD2ZTSS3LtXeAwGBQ = i.bx8ABlsQ0jycRkqwQIYpnw;
    i.kw4ABqD2ZTSS3LtXeAwGBQ = i.cB8ABlsQ0jycRkqwQIYpnw;
    i.lA4ABqD2ZTSS3LtXeAwGBQ = i.cR8ABlsQ0jycRkqwQIYpnw;
    i.lQ4ABqD2ZTSS3LtXeAwGBQ = i.ch8ABlsQ0jycRkqwQIYpnw;
    i.lg4ABqD2ZTSS3LtXeAwGBQ = i.cx8ABlsQ0jycRkqwQIYpnw;
    i.lw4ABqD2ZTSS3LtXeAwGBQ = i.dB8ABlsQ0jycRkqwQIYpnw;
    // System.Windows.IInputElement
    i.WxsABhiyJz2zcyYQWRzIjw = i.fh8ABlsQ0jycRkqwQIYpnw;
    i.XBsABhiyJz2zcyYQWRzIjw = i.gx8ABlsQ0jycRkqwQIYpnw;
    i.XRsABhiyJz2zcyYQWRzIjw = i.hh8ABlsQ0jycRkqwQIYpnw;
    i.XhsABhiyJz2zcyYQWRzIjw = i.AiEABlsQ0jycRkqwQIYpnw;
    i.XxsABhiyJz2zcyYQWRzIjw = i._4h8ABlsQ0jycRkqwQIYpnw;
    i.YBsABhiyJz2zcyYQWRzIjw = i._4x8ABlsQ0jycRkqwQIYpnw;
    i.YRsABhiyJz2zcyYQWRzIjw = i._5R8ABlsQ0jycRkqwQIYpnw;
    i.YhsABhiyJz2zcyYQWRzIjw = i._5h8ABlsQ0jycRkqwQIYpnw;
    i.YxsABhiyJz2zcyYQWRzIjw = i._6B8ABlsQ0jycRkqwQIYpnw;
    i.ZBsABhiyJz2zcyYQWRzIjw = i._6R8ABlsQ0jycRkqwQIYpnw;
    i.ZRsABhiyJz2zcyYQWRzIjw = i._6x8ABlsQ0jycRkqwQIYpnw;
    i.ZhsABhiyJz2zcyYQWRzIjw = i._7B8ABlsQ0jycRkqwQIYpnw;
    i.ZxsABhiyJz2zcyYQWRzIjw = i._7h8ABlsQ0jycRkqwQIYpnw;
    i.aBsABhiyJz2zcyYQWRzIjw = i._7x8ABlsQ0jycRkqwQIYpnw;
    i.aRsABhiyJz2zcyYQWRzIjw = i._8R8ABlsQ0jycRkqwQIYpnw;
    i.ahsABhiyJz2zcyYQWRzIjw = i._8h8ABlsQ0jycRkqwQIYpnw;
    i.axsABhiyJz2zcyYQWRzIjw = i._9B8ABlsQ0jycRkqwQIYpnw;
    i.bBsABhiyJz2zcyYQWRzIjw = i._9R8ABlsQ0jycRkqwQIYpnw;
    i.bRsABhiyJz2zcyYQWRzIjw = i._9x8ABlsQ0jycRkqwQIYpnw;
    i.bhsABhiyJz2zcyYQWRzIjw = i.__aB8ABlsQ0jycRkqwQIYpnw;
    i.bxsABhiyJz2zcyYQWRzIjw = i.__ah8ABlsQ0jycRkqwQIYpnw;
    i.cBsABhiyJz2zcyYQWRzIjw = i.__ax8ABlsQ0jycRkqwQIYpnw;
    i.cRsABhiyJz2zcyYQWRzIjw = i.__bR8ABlsQ0jycRkqwQIYpnw;
    i.chsABhiyJz2zcyYQWRzIjw = i.__bh8ABlsQ0jycRkqwQIYpnw;
    i.cxsABhiyJz2zcyYQWRzIjw = i.ACAABlsQ0jycRkqwQIYpnw;
    i.dBsABhiyJz2zcyYQWRzIjw = i.ASAABlsQ0jycRkqwQIYpnw;
    i.dRsABhiyJz2zcyYQWRzIjw = i.AyAABlsQ0jycRkqwQIYpnw;
    i.dhsABhiyJz2zcyYQWRzIjw = i.BCAABlsQ0jycRkqwQIYpnw;
    i.dxsABhiyJz2zcyYQWRzIjw = i.__biAABlsQ0jycRkqwQIYpnw;
    i.eBsABhiyJz2zcyYQWRzIjw = i.BiAABlsQ0jycRkqwQIYpnw;
    i.eRsABhiyJz2zcyYQWRzIjw = i.ByAABlsQ0jycRkqwQIYpnw;
    i.ehsABhiyJz2zcyYQWRzIjw = i.CSAABlsQ0jycRkqwQIYpnw;
    i.exsABhiyJz2zcyYQWRzIjw = i.CiAABlsQ0jycRkqwQIYpnw;
    i.fBsABhiyJz2zcyYQWRzIjw = i.DCAABlsQ0jycRkqwQIYpnw;
    i.fRsABhiyJz2zcyYQWRzIjw = i.DSAABlsQ0jycRkqwQIYpnw;
    i.fhsABhiyJz2zcyYQWRzIjw = i.DyAABlsQ0jycRkqwQIYpnw;
    i.fxsABhiyJz2zcyYQWRzIjw = i.ECAABlsQ0jycRkqwQIYpnw;
    i.gBsABhiyJz2zcyYQWRzIjw = i.BSEABlsQ0jycRkqwQIYpnw;
    i.gRsABhiyJz2zcyYQWRzIjw = i.BiEABlsQ0jycRkqwQIYpnw;
    i.ghsABhiyJz2zcyYQWRzIjw = i.ByEABlsQ0jycRkqwQIYpnw;
    i.gxsABhiyJz2zcyYQWRzIjw = i.AyEABlsQ0jycRkqwQIYpnw;
    i.hBsABhiyJz2zcyYQWRzIjw = i.FSAABlsQ0jycRkqwQIYpnw;
    i.hRsABhiyJz2zcyYQWRzIjw = i.FiAABlsQ0jycRkqwQIYpnw;
    i.hhsABhiyJz2zcyYQWRzIjw = i.GCAABlsQ0jycRkqwQIYpnw;
    i.hxsABhiyJz2zcyYQWRzIjw = i.GSAABlsQ0jycRkqwQIYpnw;
    i.iBsABhiyJz2zcyYQWRzIjw = i.GyAABlsQ0jycRkqwQIYpnw;
    i.iRsABhiyJz2zcyYQWRzIjw = i.HCAABlsQ0jycRkqwQIYpnw;
    i.ihsABhiyJz2zcyYQWRzIjw = i.HiAABlsQ0jycRkqwQIYpnw;
    i.ixsABhiyJz2zcyYQWRzIjw = i.HyAABlsQ0jycRkqwQIYpnw;
    i.jBsABhiyJz2zcyYQWRzIjw = i.ISAABlsQ0jycRkqwQIYpnw;
    i.jRsABhiyJz2zcyYQWRzIjw = i.IiAABlsQ0jycRkqwQIYpnw;
    i.jhsABhiyJz2zcyYQWRzIjw = i.JCAABlsQ0jycRkqwQIYpnw;
    i.jxsABhiyJz2zcyYQWRzIjw = i.JSAABlsQ0jycRkqwQIYpnw;
    i.kBsABhiyJz2zcyYQWRzIjw = i.JyAABlsQ0jycRkqwQIYpnw;
    i.kRsABhiyJz2zcyYQWRzIjw = i.KCAABlsQ0jycRkqwQIYpnw;
    i.khsABhiyJz2zcyYQWRzIjw = i.KiAABlsQ0jycRkqwQIYpnw;
    i.kxsABhiyJz2zcyYQWRzIjw = i.KyAABlsQ0jycRkqwQIYpnw;
    i.lBsABhiyJz2zcyYQWRzIjw = i.LSAABlsQ0jycRkqwQIYpnw;
    i.lRsABhiyJz2zcyYQWRzIjw = i.LiAABlsQ0jycRkqwQIYpnw;
    i.lhsABhiyJz2zcyYQWRzIjw = i.MCAABlsQ0jycRkqwQIYpnw;
    i.lxsABhiyJz2zcyYQWRzIjw = i.MSAABlsQ0jycRkqwQIYpnw;
    i.mBsABhiyJz2zcyYQWRzIjw = i.MyAABlsQ0jycRkqwQIYpnw;
    i.mRsABhiyJz2zcyYQWRzIjw = i.NCAABlsQ0jycRkqwQIYpnw;
    i.mhsABhiyJz2zcyYQWRzIjw = i.NiAABlsQ0jycRkqwQIYpnw;
    i.mxsABhiyJz2zcyYQWRzIjw = i.NyAABlsQ0jycRkqwQIYpnw;
    i.nBsABhiyJz2zcyYQWRzIjw = i.OSAABlsQ0jycRkqwQIYpnw;
    i.nRsABhiyJz2zcyYQWRzIjw = i.OiAABlsQ0jycRkqwQIYpnw;
    i.nhsABhiyJz2zcyYQWRzIjw = i.PCAABlsQ0jycRkqwQIYpnw;
    i.nxsABhiyJz2zcyYQWRzIjw = i.PSAABlsQ0jycRkqwQIYpnw;
    i.oBsABhiyJz2zcyYQWRzIjw = i.PyAABlsQ0jycRkqwQIYpnw;
    i.oRsABhiyJz2zcyYQWRzIjw = i.QCAABlsQ0jycRkqwQIYpnw;
    i.ohsABhiyJz2zcyYQWRzIjw = i.QiAABlsQ0jycRkqwQIYpnw;
    i.oxsABhiyJz2zcyYQWRzIjw = i.QyAABlsQ0jycRkqwQIYpnw;
    i.pBsABhiyJz2zcyYQWRzIjw = i.SyAABlsQ0jycRkqwQIYpnw;
    i.pRsABhiyJz2zcyYQWRzIjw = i.TCAABlsQ0jycRkqwQIYpnw;
    i.phsABhiyJz2zcyYQWRzIjw = i.USAABlsQ0jycRkqwQIYpnw;
    i.pxsABhiyJz2zcyYQWRzIjw = i.UiAABlsQ0jycRkqwQIYpnw;
    i.qBsABhiyJz2zcyYQWRzIjw = i.VCAABlsQ0jycRkqwQIYpnw;
    i.qRsABhiyJz2zcyYQWRzIjw = i.VSAABlsQ0jycRkqwQIYpnw;
    i.qhsABhiyJz2zcyYQWRzIjw = i.TiAABlsQ0jycRkqwQIYpnw;
    i.qxsABhiyJz2zcyYQWRzIjw = i.TyAABlsQ0jycRkqwQIYpnw;
    i.rBsABhiyJz2zcyYQWRzIjw = i.CSEABlsQ0jycRkqwQIYpnw;
    i.rRsABhiyJz2zcyYQWRzIjw = i.RSAABlsQ0jycRkqwQIYpnw;
    i.rhsABhiyJz2zcyYQWRzIjw = i.RiAABlsQ0jycRkqwQIYpnw;
    i.rxsABhiyJz2zcyYQWRzIjw = i.SCAABlsQ0jycRkqwQIYpnw;
    i.sBsABhiyJz2zcyYQWRzIjw = i.SSAABlsQ0jycRkqwQIYpnw;
    i.sRsABhiyJz2zcyYQWRzIjw = i.CyEABlsQ0jycRkqwQIYpnw;
    i.shsABhiyJz2zcyYQWRzIjw = i.DCEABlsQ0jycRkqwQIYpnw;
    i.sxsABhiyJz2zcyYQWRzIjw = i.DSEABlsQ0jycRkqwQIYpnw;
    i.tBsABhiyJz2zcyYQWRzIjw = i.VyAABlsQ0jycRkqwQIYpnw;
    i.tRsABhiyJz2zcyYQWRzIjw = i.WCAABlsQ0jycRkqwQIYpnw;
    i.thsABhiyJz2zcyYQWRzIjw = i.WiAABlsQ0jycRkqwQIYpnw;
    i.txsABhiyJz2zcyYQWRzIjw = i.WyAABlsQ0jycRkqwQIYpnw;
    i.uBsABhiyJz2zcyYQWRzIjw = i.XSAABlsQ0jycRkqwQIYpnw;
    i.uRsABhiyJz2zcyYQWRzIjw = i.XiAABlsQ0jycRkqwQIYpnw;
    i.uhsABhiyJz2zcyYQWRzIjw = i.YCAABlsQ0jycRkqwQIYpnw;
    i.uxsABhiyJz2zcyYQWRzIjw = i.YSAABlsQ0jycRkqwQIYpnw;
    i.vBsABhiyJz2zcyYQWRzIjw = i.BCEABlsQ0jycRkqwQIYpnw;
    i.vRsABhiyJz2zcyYQWRzIjw = i.DyEABlsQ0jycRkqwQIYpnw;
    i.vhsABhiyJz2zcyYQWRzIjw = i.ESEABlsQ0jycRkqwQIYpnw;
    i.vxsABhiyJz2zcyYQWRzIjw = i.YyAABlsQ0jycRkqwQIYpnw;
    i.wBsABhiyJz2zcyYQWRzIjw = i.ZCAABlsQ0jycRkqwQIYpnw;
    i.wRsABhiyJz2zcyYQWRzIjw = i.ZiAABlsQ0jycRkqwQIYpnw;
    i.whsABhiyJz2zcyYQWRzIjw = i.ZyAABlsQ0jycRkqwQIYpnw;
    i.wxsABhiyJz2zcyYQWRzIjw = i.aSAABlsQ0jycRkqwQIYpnw;
    i.xBsABhiyJz2zcyYQWRzIjw = i.aiAABlsQ0jycRkqwQIYpnw;
    i.xRsABhiyJz2zcyYQWRzIjw = i.bCAABlsQ0jycRkqwQIYpnw;
    i.xhsABhiyJz2zcyYQWRzIjw = i.bSAABlsQ0jycRkqwQIYpnw;
    i.xxsABhiyJz2zcyYQWRzIjw = i.UiEABlsQ0jycRkqwQIYpnw;
    i.yBsABhiyJz2zcyYQWRzIjw = i.ZSEABlsQ0jycRkqwQIYpnw;
    i.yRsABhiyJz2zcyYQWRzIjw = i.ZiEABlsQ0jycRkqwQIYpnw;
    i.yhsABhiyJz2zcyYQWRzIjw = i.byAABlsQ0jycRkqwQIYpnw;
    i.yxsABhiyJz2zcyYQWRzIjw = i.cCAABlsQ0jycRkqwQIYpnw;
    i.zBsABhiyJz2zcyYQWRzIjw = i.ciAABlsQ0jycRkqwQIYpnw;
    i.zRsABhiyJz2zcyYQWRzIjw = i.cyAABlsQ0jycRkqwQIYpnw;
    // System.Windows.IFrameworkInputElement
    i.LwAABsibFz2BZoRUpw9_auA = i.gwQABtfo3jiXBvH7wsZPqQ;
    i.MAAABsibFz2BZoRUpw9_auA = i.hAQABtfo3jiXBvH7wsZPqQ;
    // System.ComponentModel.ISupportInitialize
    i.JAgABt25wjCkhDYK8UPCKA = i._1gQABtfo3jiXBvH7wsZPqQ;
    i.JQgABt25wjCkhDYK8UPCKA = i._1wQABtfo3jiXBvH7wsZPqQ;
    // System.Windows.Markup.IHaveResources
    i.FgQABjJLdjKowZhjw_bOcmA = i.PgQABtfo3jiXBvH7wsZPqQ;
    i.FwQABjJLdjKowZhjw_bOcmA = i.PwQABtfo3jiXBvH7wsZPqQ;
    // System.Windows.Markup.IAddChild
    i.iykABnBbcjGLJlnW_brxcag = i.EQYABicWozaA7_bI8Cc9BEQ;
    i.jCkABnBbcjGLJlnW_brxcag = i.EgYABicWozaA7_bI8Cc9BEQ;
  }
  )(type$_8c7oQzOrwDmkSdU0qNVKOw);
  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas
  function _9DJrdmY0gT2Wjn_a3kdqm6A(){};
  _9DJrdmY0gT2Wjn_a3kdqm6A.TypeName = "FreeCellCanvas";
  _9DJrdmY0gT2Wjn_a3kdqm6A.Assembly = TWymgcaHD0C5PL_a3VdT4GQ;
  var type$_9DJrdmY0gT2Wjn_a3kdqm6A = _9DJrdmY0gT2Wjn_a3kdqm6A.prototype = new oayRPx5ySTCeEJNh8DuEYg();
  type$_9DJrdmY0gT2Wjn_a3kdqm6A.constructor = _9DJrdmY0gT2Wjn_a3kdqm6A;
  var JwAABGY0gT2Wjn_a3kdqm6A = null;
  type$_9DJrdmY0gT2Wjn_a3kdqm6A.Sounds = null;
  type$_9DJrdmY0gT2Wjn_a3kdqm6A._History_k__BackingField = null;
  type$_9DJrdmY0gT2Wjn_a3kdqm6A._Menu_k__BackingField = null;
  var basector$_9DJrdmY0gT2Wjn_a3kdqm6A = $ctor$(basector$oayRPx5ySTCeEJNh8DuEYg, null, type$_9DJrdmY0gT2Wjn_a3kdqm6A);
  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas..ctor
  type$_9DJrdmY0gT2Wjn_a3kdqm6A.HAAABmY0gT2Wjn_a3kdqm6A = function ()
  {
    var a = this, b, c, d, e, f, g, h, i, j, k, l;

    a.Sounds = new ctor$QAAABuQpAz_avXyXWgz7ifQ();
    a.WwAABh5ySTCeEJNh8DuEYg();
    l = /* DOMCreateType */new aMKhlSYsdTKMSaPsGRzoOQ();
    l.__4__this = a;
    a.MwAABpJ65jyB21eK1VwRQA(800);
    a.NQAABpJ65jyB21eK1VwRQA(600);
    a.KwAABlVNcDa86VHOtLThag(1);
    _8wEABr_bLWDe9OgfD0W3O7Q(new ctor$QAEABt1OTTii6dJJyN3ctQ(bwIABsRwlTqY1HAn8xDgVQ('assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002ffelt.png'), 64, 64, 14, 10), a);
    b = 40;
    _8wEABr_bLWDe9OgfD0W3O7Q(new ctor$AwAABq88wji_alaNBkOY38Q(800, 600, b), a);
    c = ((800 - (GQAABmrUKTyVHTEYLmsu2g() * 10)) / 11);
    e = new ctor$fAIABrhSLzuJ75ou_ayKGnQ();
    e.gAIABrhSLzuJ75ou_ayKGnQ(bwIABsRwlTqY1HAn8xDgVQ('assets\u002fAvalonCardGames.FreeCell\u002fjsc.png'));
    e.MwAABpJ65jyB21eK1VwRQA(96);
    e.NQAABpJ65jyB21eK1VwRQA(96);
    _8gEABr_bLWDe9OgfD0W3O7Q(_7wEABr_bLWDe9OgfD0W3O7Q(e, 704, 504), a);
    a.GQAABmY0gT2Wjn_a3kdqm6A(_8AEABr_bLWDe9OgfD0W3O7Q(new ctor$EQAABoeZDj6AElTCJ2KFkQ(), 4, 4));
    f = new ctor$WwAABh5ySTCeEJNh8DuEYg();
    f.MwAABpJ65jyB21eK1VwRQA(800);
    f.NQAABpJ65jyB21eK1VwRQA(600);
    l.Content = _8gEABr_bLWDe9OgfD0W3O7Q(f, a);
    l.Game = null;
    l.GameFocusBoost = 0;
    l.CreateGame = new ctor$UQUABuzqfTWQzxgi2Ip02g(l, '__ctor_b__9');
    g = new ctor$BgAABuPT5zqxgW9jVQL6vw(a);
    h = new ctor$CwAABrKsTjOv4TwG1oxSHQ();
    h.Source = bwIABsRwlTqY1HAn8xDgVQ('assets\u002fAvalonCardGames.FreeCell\u002fplus_google.png');
    h.Width = 62;
    h.Height = 17;
    h.Hyperlink = new ctor$Cg0ABuz83jSW1hJ9dLbssA('http:\u002f\u002ffusion.google.com\u002fig\u002fadd?synd=open\u0026source=ggyp\u0026moduleurl=http:\u002f\u002fhosting.gmodules.com\u002fig\u002fgadgets\u002ffile\u002f112091410969506928037\u002fAvalonFreeCell.xml');
    g.BwAABuPT5zqxgW9jVQL6vw(h);
    i = new ctor$CwAABrKsTjOv4TwG1oxSHQ();
    i.Source = bwIABsRwlTqY1HAn8xDgVQ('assets\u002fAvalonCardGames.FreeCell\u002fsu.png');
    i.Width = 16;
    i.Height = 16;
    i.Hyperlink = new ctor$Cg0ABuz83jSW1hJ9dLbssA('http:\u002f\u002fwww.stumbleupon.com\u002fsubmit?url=http:\u002f\u002fnonoba.com\u002fzproxy\u002favalon-freecell');
    g.BwAABuPT5zqxgW9jVQL6vw(i);
    g;

    if (!(JwAABGY0gT2Wjn_a3kdqm6A))
    {
      JwAABGY0gT2Wjn_a3kdqm6A = new ctor$aQEABvmhrTKXcvbubqKx_ag(null, 'HQAABmY0gT2Wjn_a3kdqm6A');
    }

    d = JwAABGY0gT2Wjn_a3kdqm6A;
    j = new ctor$GgAABh8g9T2H_bkvpBkIyIw(800, 600, b);
    k = new ctor$IwAABoyytTy9aMIGs8TFYQ();
    k.Text = 'FreeCell - medium difficulty';
    k.Source = bwIABsRwlTqY1HAn8xDgVQ('assets\u002fAvalonCardGames.FreeCell\u002fPreview.png');
    k.MarginAfter = 1.5707963267949;
    k.Click = new ctor$UQUABuzqfTWQzxgi2Ip02g(l, '__ctor_b__d');
    j.FwAABh8g9T2H_bkvpBkIyIw(k);
    j.FwAABh8g9T2H_bkvpBkIyIw(d.Invoke('Spider Solitaire', 'Preview_Spider', 'http:\u002f\u002fnonoba.com\u002fzproxy\u002favalon-spider-solitaire'));
    j.FwAABh8g9T2H_bkvpBkIyIw(d.Invoke('Treasure Hunt', 'Preview_TreasureHunt', 'http:\u002f\u002fnonoba.com\u002fzproxy\u002ftreasure-hunt'));
    j.FwAABh8g9T2H_bkvpBkIyIw(d.Invoke('FlashMinesweeper:MP', 'Preview_Minesweeper', 'http:\u002f\u002fnonoba.com\u002fzproxy\u002fflashminesweepermp'));
    j.FwAABh8g9T2H_bkvpBkIyIw(d.Invoke('Multiplayer Mahjong', 'Preview_Mahjong', 'http:\u002f\u002fnonoba.com\u002fzproxy\u002fmahjong-multiplayer'));
    j.FwAABh8g9T2H_bkvpBkIyIw(d.Invoke('Multiplayer SpaceInvaders', 'Preview_SpaceInvaders', 'http:\u002f\u002fnonoba.com\u002fzproxy\u002fflashspaceinvaders'));
    a.GwAABmY0gT2Wjn_a3kdqm6A(j);
    a.GgAABmY0gT2Wjn_a3kdqm6A().ValidateHide = new ctor$XQEABrN42zC9LggKQChbQQ(l, '__ctor_b__f');
    a.GgAABmY0gT2Wjn_a3kdqm6A().ValidateShow = new ctor$XQEABrN42zC9LggKQChbQQ(l, '__ctor_b__10');
    _8wEABr_bLWDe9OgfD0W3O7Q(a.GgAABmY0gT2Wjn_a3kdqm6A(), a);
    _8wEABr_bLWDe9OgfD0W3O7Q(a.GAAABmY0gT2Wjn_a3kdqm6A(), a);
    a.GgAABmY0gT2Wjn_a3kdqm6A().Show.Invoke();
  };
  var ctor$HAAABmY0gT2Wjn_a3kdqm6A = _9DJrdmY0gT2Wjn_a3kdqm6A.ctor = $ctor$(basector$oayRPx5ySTCeEJNh8DuEYg, 'HAAABmY0gT2Wjn_a3kdqm6A', type$_9DJrdmY0gT2Wjn_a3kdqm6A);

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas.get_History
  type$_9DJrdmY0gT2Wjn_a3kdqm6A.GAAABmY0gT2Wjn_a3kdqm6A = function ()
  {
    return this._History_k__BackingField;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas.set_History
  type$_9DJrdmY0gT2Wjn_a3kdqm6A.GQAABmY0gT2Wjn_a3kdqm6A = function (b)
  {
    var a = this;

    a._History_k__BackingField = b;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas.get_Menu
  type$_9DJrdmY0gT2Wjn_a3kdqm6A.GgAABmY0gT2Wjn_a3kdqm6A = function ()
  {
    return this._Menu_k__BackingField;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas.set_Menu
  type$_9DJrdmY0gT2Wjn_a3kdqm6A.GwAABmY0gT2Wjn_a3kdqm6A = function (b)
  {
    var a = this;

    a._Menu_k__BackingField = b;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas.<.ctor>b__c
  function HQAABmY0gT2Wjn_a3kdqm6A(b, c, d)
  {
    var e, f;

    e = new ctor$IwAABoyytTy9aMIGs8TFYQ();
    e.Text = YxEABrA3fT6ZrCN3llKJ_aA('Play ', b, '\u0021');
    e.Source = bwIABsRwlTqY1HAn8xDgVQ(YxEABrA3fT6ZrCN3llKJ_aA('assets\u002fAvalonCardGames.SocialLinks\u002f', c, '.png'));
    e.Hyperlink = new ctor$Cg0ABuz83jSW1hJ9dLbssA(d);
    e.MarginAfter = 0.785398163397448;
    f = e;
    return f;
  };

  // System.Windows.Media.Composition.DUCE+IResource
  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas
  (function (i)  {
    i.UgUABjzhDj6xNVZgURdzBg = i._7gsABkU3sDKYObq2_baI69A;
    i.UwUABjzhDj6xNVZgURdzBg = i._8gsABkU3sDKYObq2_baI69A;
    i.VAUABjzhDj6xNVZgURdzBg = i._8wsABkU3sDKYObq2_baI69A;
    i.VQUABjzhDj6xNVZgURdzBg = i.CQwABkU3sDKYObq2_baI69A;
    i.VgUABjzhDj6xNVZgURdzBg = i._7AsABkU3sDKYObq2_baI69A;
    i.VwUABjzhDj6xNVZgURdzBg = i._7QsABkU3sDKYObq2_baI69A;
    i.WAUABjzhDj6xNVZgURdzBg = i._8QsABkU3sDKYObq2_baI69A;
    // System.Windows.Media.Animation.IAnimatable
    i.kg4ABqD2ZTSS3LtXeAwGBQ = i.bx8ABlsQ0jycRkqwQIYpnw;
    i.kw4ABqD2ZTSS3LtXeAwGBQ = i.cB8ABlsQ0jycRkqwQIYpnw;
    i.lA4ABqD2ZTSS3LtXeAwGBQ = i.cR8ABlsQ0jycRkqwQIYpnw;
    i.lQ4ABqD2ZTSS3LtXeAwGBQ = i.ch8ABlsQ0jycRkqwQIYpnw;
    i.lg4ABqD2ZTSS3LtXeAwGBQ = i.cx8ABlsQ0jycRkqwQIYpnw;
    i.lw4ABqD2ZTSS3LtXeAwGBQ = i.dB8ABlsQ0jycRkqwQIYpnw;
    // System.Windows.IInputElement
    i.WxsABhiyJz2zcyYQWRzIjw = i.fh8ABlsQ0jycRkqwQIYpnw;
    i.XBsABhiyJz2zcyYQWRzIjw = i.gx8ABlsQ0jycRkqwQIYpnw;
    i.XRsABhiyJz2zcyYQWRzIjw = i.hh8ABlsQ0jycRkqwQIYpnw;
    i.XhsABhiyJz2zcyYQWRzIjw = i.AiEABlsQ0jycRkqwQIYpnw;
    i.XxsABhiyJz2zcyYQWRzIjw = i._4h8ABlsQ0jycRkqwQIYpnw;
    i.YBsABhiyJz2zcyYQWRzIjw = i._4x8ABlsQ0jycRkqwQIYpnw;
    i.YRsABhiyJz2zcyYQWRzIjw = i._5R8ABlsQ0jycRkqwQIYpnw;
    i.YhsABhiyJz2zcyYQWRzIjw = i._5h8ABlsQ0jycRkqwQIYpnw;
    i.YxsABhiyJz2zcyYQWRzIjw = i._6B8ABlsQ0jycRkqwQIYpnw;
    i.ZBsABhiyJz2zcyYQWRzIjw = i._6R8ABlsQ0jycRkqwQIYpnw;
    i.ZRsABhiyJz2zcyYQWRzIjw = i._6x8ABlsQ0jycRkqwQIYpnw;
    i.ZhsABhiyJz2zcyYQWRzIjw = i._7B8ABlsQ0jycRkqwQIYpnw;
    i.ZxsABhiyJz2zcyYQWRzIjw = i._7h8ABlsQ0jycRkqwQIYpnw;
    i.aBsABhiyJz2zcyYQWRzIjw = i._7x8ABlsQ0jycRkqwQIYpnw;
    i.aRsABhiyJz2zcyYQWRzIjw = i._8R8ABlsQ0jycRkqwQIYpnw;
    i.ahsABhiyJz2zcyYQWRzIjw = i._8h8ABlsQ0jycRkqwQIYpnw;
    i.axsABhiyJz2zcyYQWRzIjw = i._9B8ABlsQ0jycRkqwQIYpnw;
    i.bBsABhiyJz2zcyYQWRzIjw = i._9R8ABlsQ0jycRkqwQIYpnw;
    i.bRsABhiyJz2zcyYQWRzIjw = i._9x8ABlsQ0jycRkqwQIYpnw;
    i.bhsABhiyJz2zcyYQWRzIjw = i.__aB8ABlsQ0jycRkqwQIYpnw;
    i.bxsABhiyJz2zcyYQWRzIjw = i.__ah8ABlsQ0jycRkqwQIYpnw;
    i.cBsABhiyJz2zcyYQWRzIjw = i.__ax8ABlsQ0jycRkqwQIYpnw;
    i.cRsABhiyJz2zcyYQWRzIjw = i.__bR8ABlsQ0jycRkqwQIYpnw;
    i.chsABhiyJz2zcyYQWRzIjw = i.__bh8ABlsQ0jycRkqwQIYpnw;
    i.cxsABhiyJz2zcyYQWRzIjw = i.ACAABlsQ0jycRkqwQIYpnw;
    i.dBsABhiyJz2zcyYQWRzIjw = i.ASAABlsQ0jycRkqwQIYpnw;
    i.dRsABhiyJz2zcyYQWRzIjw = i.AyAABlsQ0jycRkqwQIYpnw;
    i.dhsABhiyJz2zcyYQWRzIjw = i.BCAABlsQ0jycRkqwQIYpnw;
    i.dxsABhiyJz2zcyYQWRzIjw = i.__biAABlsQ0jycRkqwQIYpnw;
    i.eBsABhiyJz2zcyYQWRzIjw = i.BiAABlsQ0jycRkqwQIYpnw;
    i.eRsABhiyJz2zcyYQWRzIjw = i.ByAABlsQ0jycRkqwQIYpnw;
    i.ehsABhiyJz2zcyYQWRzIjw = i.CSAABlsQ0jycRkqwQIYpnw;
    i.exsABhiyJz2zcyYQWRzIjw = i.CiAABlsQ0jycRkqwQIYpnw;
    i.fBsABhiyJz2zcyYQWRzIjw = i.DCAABlsQ0jycRkqwQIYpnw;
    i.fRsABhiyJz2zcyYQWRzIjw = i.DSAABlsQ0jycRkqwQIYpnw;
    i.fhsABhiyJz2zcyYQWRzIjw = i.DyAABlsQ0jycRkqwQIYpnw;
    i.fxsABhiyJz2zcyYQWRzIjw = i.ECAABlsQ0jycRkqwQIYpnw;
    i.gBsABhiyJz2zcyYQWRzIjw = i.BSEABlsQ0jycRkqwQIYpnw;
    i.gRsABhiyJz2zcyYQWRzIjw = i.BiEABlsQ0jycRkqwQIYpnw;
    i.ghsABhiyJz2zcyYQWRzIjw = i.ByEABlsQ0jycRkqwQIYpnw;
    i.gxsABhiyJz2zcyYQWRzIjw = i.AyEABlsQ0jycRkqwQIYpnw;
    i.hBsABhiyJz2zcyYQWRzIjw = i.FSAABlsQ0jycRkqwQIYpnw;
    i.hRsABhiyJz2zcyYQWRzIjw = i.FiAABlsQ0jycRkqwQIYpnw;
    i.hhsABhiyJz2zcyYQWRzIjw = i.GCAABlsQ0jycRkqwQIYpnw;
    i.hxsABhiyJz2zcyYQWRzIjw = i.GSAABlsQ0jycRkqwQIYpnw;
    i.iBsABhiyJz2zcyYQWRzIjw = i.GyAABlsQ0jycRkqwQIYpnw;
    i.iRsABhiyJz2zcyYQWRzIjw = i.HCAABlsQ0jycRkqwQIYpnw;
    i.ihsABhiyJz2zcyYQWRzIjw = i.HiAABlsQ0jycRkqwQIYpnw;
    i.ixsABhiyJz2zcyYQWRzIjw = i.HyAABlsQ0jycRkqwQIYpnw;
    i.jBsABhiyJz2zcyYQWRzIjw = i.ISAABlsQ0jycRkqwQIYpnw;
    i.jRsABhiyJz2zcyYQWRzIjw = i.IiAABlsQ0jycRkqwQIYpnw;
    i.jhsABhiyJz2zcyYQWRzIjw = i.JCAABlsQ0jycRkqwQIYpnw;
    i.jxsABhiyJz2zcyYQWRzIjw = i.JSAABlsQ0jycRkqwQIYpnw;
    i.kBsABhiyJz2zcyYQWRzIjw = i.JyAABlsQ0jycRkqwQIYpnw;
    i.kRsABhiyJz2zcyYQWRzIjw = i.KCAABlsQ0jycRkqwQIYpnw;
    i.khsABhiyJz2zcyYQWRzIjw = i.KiAABlsQ0jycRkqwQIYpnw;
    i.kxsABhiyJz2zcyYQWRzIjw = i.KyAABlsQ0jycRkqwQIYpnw;
    i.lBsABhiyJz2zcyYQWRzIjw = i.LSAABlsQ0jycRkqwQIYpnw;
    i.lRsABhiyJz2zcyYQWRzIjw = i.LiAABlsQ0jycRkqwQIYpnw;
    i.lhsABhiyJz2zcyYQWRzIjw = i.MCAABlsQ0jycRkqwQIYpnw;
    i.lxsABhiyJz2zcyYQWRzIjw = i.MSAABlsQ0jycRkqwQIYpnw;
    i.mBsABhiyJz2zcyYQWRzIjw = i.MyAABlsQ0jycRkqwQIYpnw;
    i.mRsABhiyJz2zcyYQWRzIjw = i.NCAABlsQ0jycRkqwQIYpnw;
    i.mhsABhiyJz2zcyYQWRzIjw = i.NiAABlsQ0jycRkqwQIYpnw;
    i.mxsABhiyJz2zcyYQWRzIjw = i.NyAABlsQ0jycRkqwQIYpnw;
    i.nBsABhiyJz2zcyYQWRzIjw = i.OSAABlsQ0jycRkqwQIYpnw;
    i.nRsABhiyJz2zcyYQWRzIjw = i.OiAABlsQ0jycRkqwQIYpnw;
    i.nhsABhiyJz2zcyYQWRzIjw = i.PCAABlsQ0jycRkqwQIYpnw;
    i.nxsABhiyJz2zcyYQWRzIjw = i.PSAABlsQ0jycRkqwQIYpnw;
    i.oBsABhiyJz2zcyYQWRzIjw = i.PyAABlsQ0jycRkqwQIYpnw;
    i.oRsABhiyJz2zcyYQWRzIjw = i.QCAABlsQ0jycRkqwQIYpnw;
    i.ohsABhiyJz2zcyYQWRzIjw = i.QiAABlsQ0jycRkqwQIYpnw;
    i.oxsABhiyJz2zcyYQWRzIjw = i.QyAABlsQ0jycRkqwQIYpnw;
    i.pBsABhiyJz2zcyYQWRzIjw = i.SyAABlsQ0jycRkqwQIYpnw;
    i.pRsABhiyJz2zcyYQWRzIjw = i.TCAABlsQ0jycRkqwQIYpnw;
    i.phsABhiyJz2zcyYQWRzIjw = i.USAABlsQ0jycRkqwQIYpnw;
    i.pxsABhiyJz2zcyYQWRzIjw = i.UiAABlsQ0jycRkqwQIYpnw;
    i.qBsABhiyJz2zcyYQWRzIjw = i.VCAABlsQ0jycRkqwQIYpnw;
    i.qRsABhiyJz2zcyYQWRzIjw = i.VSAABlsQ0jycRkqwQIYpnw;
    i.qhsABhiyJz2zcyYQWRzIjw = i.TiAABlsQ0jycRkqwQIYpnw;
    i.qxsABhiyJz2zcyYQWRzIjw = i.TyAABlsQ0jycRkqwQIYpnw;
    i.rBsABhiyJz2zcyYQWRzIjw = i.CSEABlsQ0jycRkqwQIYpnw;
    i.rRsABhiyJz2zcyYQWRzIjw = i.RSAABlsQ0jycRkqwQIYpnw;
    i.rhsABhiyJz2zcyYQWRzIjw = i.RiAABlsQ0jycRkqwQIYpnw;
    i.rxsABhiyJz2zcyYQWRzIjw = i.SCAABlsQ0jycRkqwQIYpnw;
    i.sBsABhiyJz2zcyYQWRzIjw = i.SSAABlsQ0jycRkqwQIYpnw;
    i.sRsABhiyJz2zcyYQWRzIjw = i.CyEABlsQ0jycRkqwQIYpnw;
    i.shsABhiyJz2zcyYQWRzIjw = i.DCEABlsQ0jycRkqwQIYpnw;
    i.sxsABhiyJz2zcyYQWRzIjw = i.DSEABlsQ0jycRkqwQIYpnw;
    i.tBsABhiyJz2zcyYQWRzIjw = i.VyAABlsQ0jycRkqwQIYpnw;
    i.tRsABhiyJz2zcyYQWRzIjw = i.WCAABlsQ0jycRkqwQIYpnw;
    i.thsABhiyJz2zcyYQWRzIjw = i.WiAABlsQ0jycRkqwQIYpnw;
    i.txsABhiyJz2zcyYQWRzIjw = i.WyAABlsQ0jycRkqwQIYpnw;
    i.uBsABhiyJz2zcyYQWRzIjw = i.XSAABlsQ0jycRkqwQIYpnw;
    i.uRsABhiyJz2zcyYQWRzIjw = i.XiAABlsQ0jycRkqwQIYpnw;
    i.uhsABhiyJz2zcyYQWRzIjw = i.YCAABlsQ0jycRkqwQIYpnw;
    i.uxsABhiyJz2zcyYQWRzIjw = i.YSAABlsQ0jycRkqwQIYpnw;
    i.vBsABhiyJz2zcyYQWRzIjw = i.BCEABlsQ0jycRkqwQIYpnw;
    i.vRsABhiyJz2zcyYQWRzIjw = i.DyEABlsQ0jycRkqwQIYpnw;
    i.vhsABhiyJz2zcyYQWRzIjw = i.ESEABlsQ0jycRkqwQIYpnw;
    i.vxsABhiyJz2zcyYQWRzIjw = i.YyAABlsQ0jycRkqwQIYpnw;
    i.wBsABhiyJz2zcyYQWRzIjw = i.ZCAABlsQ0jycRkqwQIYpnw;
    i.wRsABhiyJz2zcyYQWRzIjw = i.ZiAABlsQ0jycRkqwQIYpnw;
    i.whsABhiyJz2zcyYQWRzIjw = i.ZyAABlsQ0jycRkqwQIYpnw;
    i.wxsABhiyJz2zcyYQWRzIjw = i.aSAABlsQ0jycRkqwQIYpnw;
    i.xBsABhiyJz2zcyYQWRzIjw = i.aiAABlsQ0jycRkqwQIYpnw;
    i.xRsABhiyJz2zcyYQWRzIjw = i.bCAABlsQ0jycRkqwQIYpnw;
    i.xhsABhiyJz2zcyYQWRzIjw = i.bSAABlsQ0jycRkqwQIYpnw;
    i.xxsABhiyJz2zcyYQWRzIjw = i.UiEABlsQ0jycRkqwQIYpnw;
    i.yBsABhiyJz2zcyYQWRzIjw = i.ZSEABlsQ0jycRkqwQIYpnw;
    i.yRsABhiyJz2zcyYQWRzIjw = i.ZiEABlsQ0jycRkqwQIYpnw;
    i.yhsABhiyJz2zcyYQWRzIjw = i.byAABlsQ0jycRkqwQIYpnw;
    i.yxsABhiyJz2zcyYQWRzIjw = i.cCAABlsQ0jycRkqwQIYpnw;
    i.zBsABhiyJz2zcyYQWRzIjw = i.ciAABlsQ0jycRkqwQIYpnw;
    i.zRsABhiyJz2zcyYQWRzIjw = i.cyAABlsQ0jycRkqwQIYpnw;
    // System.Windows.IFrameworkInputElement
    i.LwAABsibFz2BZoRUpw9_auA = i.gwQABtfo3jiXBvH7wsZPqQ;
    i.MAAABsibFz2BZoRUpw9_auA = i.hAQABtfo3jiXBvH7wsZPqQ;
    // System.ComponentModel.ISupportInitialize
    i.JAgABt25wjCkhDYK8UPCKA = i._1gQABtfo3jiXBvH7wsZPqQ;
    i.JQgABt25wjCkhDYK8UPCKA = i._1wQABtfo3jiXBvH7wsZPqQ;
    // System.Windows.Markup.IHaveResources
    i.FgQABjJLdjKowZhjw_bOcmA = i.PgQABtfo3jiXBvH7wsZPqQ;
    i.FwQABjJLdjKowZhjw_bOcmA = i.PwQABtfo3jiXBvH7wsZPqQ;
    // System.Windows.Markup.IAddChild
    i.iykABnBbcjGLJlnW_brxcag = i.EQYABicWozaA7_bI8Cc9BEQ;
    i.jCkABnBbcjGLJlnW_brxcag = i.EgYABicWozaA7_bI8Cc9BEQ;
  }
  )(type$_9DJrdmY0gT2Wjn_a3kdqm6A);
  // AvalonCardGames.FreeCell.JavaScript.FreeCellDocument
  function JtRsfpWKPDGpNhHomYGe_bQ(){};
  JtRsfpWKPDGpNhHomYGe_bQ.TypeName = "FreeCellDocument";
  JtRsfpWKPDGpNhHomYGe_bQ.Assembly = TWymgcaHD0C5PL_a3VdT4GQ;
  var type$JtRsfpWKPDGpNhHomYGe_bQ = JtRsfpWKPDGpNhHomYGe_bQ.prototype;
  type$JtRsfpWKPDGpNhHomYGe_bQ.constructor = JtRsfpWKPDGpNhHomYGe_bQ;
  var KAAABJWKPDGpNhHomYGe_bQ = null;
  var basector$JtRsfpWKPDGpNhHomYGe_bQ = $ctor$(null, null, type$JtRsfpWKPDGpNhHomYGe_bQ);
  // AvalonCardGames.FreeCell.JavaScript.FreeCellDocument..ctor
  type$JtRsfpWKPDGpNhHomYGe_bQ.HgAABpWKPDGpNhHomYGe_bQ = function (b)
  {
    var a = this, c, d, e, f;

    document.body.style.backgroundColor = EQUABhbTzzW3dl57Vk3E1Q(GAUABhbTzzW3dl57Vk3E1Q());
    c = cBAABv_bq1z2ru6_bwRm5O2g();
    c.style.position = 'relative';
    _9gsABjhHvTSVgi80ZSWjYA(c.style, 800, 600);
    c.style.overflow = 'hidden';
    e = [
      c
    ];
    d = PQAABt0vgDKY_bdDd18HTtA('center', e);
    f = !(b == null);

    if (!f)
    {
      QAoABnCdPTa79OFfezjtjQ(d);
    }
    else
    {
      JQAABkIyxTqdcJ7tkibuPw(b, d);
    }

    AQAABugFcT67T0t3P5jV5g(new ctor$HAAABmY0gT2Wjn_a3kdqm6A(), c);
  };
  var ctor$HgAABpWKPDGpNhHomYGe_bQ = $ctor$(null, 'HgAABpWKPDGpNhHomYGe_bQ', type$JtRsfpWKPDGpNhHomYGe_bQ);

  // AvalonCardGames.FreeCell.JavaScript.FreeCellDocument.<.cctor>b__0
  function IAAABpWKPDGpNhHomYGe_bQ(b)
  {
    new ctor$HgAABpWKPDGpNhHomYGe_bQ(b);
  };

  // AvalonCardGames.FreeCell.JavaScript.__AssetsImplementationDetails
  function gTDaSiSe4zONS5TxBAcPRw(){};
  gTDaSiSe4zONS5TxBAcPRw.TypeName = "AssetsImplementationDetails";
  gTDaSiSe4zONS5TxBAcPRw.Assembly = TWymgcaHD0C5PL_a3VdT4GQ;
  var type$gTDaSiSe4zONS5TxBAcPRw = gTDaSiSe4zONS5TxBAcPRw.prototype;
  type$gTDaSiSe4zONS5TxBAcPRw.constructor = gTDaSiSe4zONS5TxBAcPRw;
  var basector$gTDaSiSe4zONS5TxBAcPRw = $ctor$(null, null, type$gTDaSiSe4zONS5TxBAcPRw);
  // AvalonCardGames.FreeCell.JavaScript.__AssetsImplementationDetails..ctor
  type$gTDaSiSe4zONS5TxBAcPRw.KAAABiSe4zONS5TxBAcPRw = function ()
  {
    var a = this;

  };
  var ctor$KAAABiSe4zONS5TxBAcPRw = gTDaSiSe4zONS5TxBAcPRw.ctor = $ctor$(null, 'KAAABiSe4zONS5TxBAcPRw', type$gTDaSiSe4zONS5TxBAcPRw);

  // AvalonCardGames.FreeCell.JavaScript.__AssetsImplementationDetails.get_FileNames
  type$gTDaSiSe4zONS5TxBAcPRw.JwAABiSe4zONS5TxBAcPRw = function ()
  {
    return [
    'assets\u002fAvalonCardGames.FreeCell\u002fkingleft.png',
    'assets\u002fAvalonCardGames.FreeCell\u002fjsc.png',
    'assets\u002fAvalonCardGames.FreeCell\u002fPreview.png',
    'assets\u002fAvalonCardGames.FreeCell\u002fkingsmil.png',
    'assets\u002fAvalonCardGames.SocialLinks\u002fPreview_Spider.png',
    'assets\u002fAvalonCardGames.FreeCell\u002fkingbitm.png',
    'assets\u002fAvalonCardGames.FreeCell\u002fplus_google.png',
    'assets\u002fAvalonCardGames.FreeCell\u002fsu.png',
    'assets\u002fAvalonCardGames.SocialLinks\u002fPreview_TreasureHunt.png',
    'assets\u002fAvalonCardGames.SocialLinks\u002fPreview_Minesweeper.png',
    'assets\u002fAvalonCardGames.SocialLinks\u002fPreview_Mahjong.png',
    'assets\u002fAvalonCardGames.SocialLinks\u002fPreview_SpaceInvaders.png'
    ];
  };

  // AvalonCardGames.FreeCell.Shared.KnownAssets
  function YwfrgB3RXDe_aQSOwLeIWCw(){};
  YwfrgB3RXDe_aQSOwLeIWCw.TypeName = "KnownAssets";
  YwfrgB3RXDe_aQSOwLeIWCw.Assembly = TWymgcaHD0C5PL_a3VdT4GQ;
  var type$YwfrgB3RXDe_aQSOwLeIWCw = YwfrgB3RXDe_aQSOwLeIWCw.prototype = new gTDaSiSe4zONS5TxBAcPRw();
  type$YwfrgB3RXDe_aQSOwLeIWCw.constructor = YwfrgB3RXDe_aQSOwLeIWCw;
  var KQAABB3RXDe_aQSOwLeIWCw = null;
  var basector$YwfrgB3RXDe_aQSOwLeIWCw = $ctor$(basector$gTDaSiSe4zONS5TxBAcPRw, null, type$YwfrgB3RXDe_aQSOwLeIWCw);
  // AvalonCardGames.FreeCell.Shared.KnownAssets..ctor
  type$YwfrgB3RXDe_aQSOwLeIWCw.JQAABh3RXDe_aQSOwLeIWCw = function ()
  {
    var a = this;

    a.KAAABiSe4zONS5TxBAcPRw();
  };
  var ctor$JQAABh3RXDe_aQSOwLeIWCw = YwfrgB3RXDe_aQSOwLeIWCw.ctor = $ctor$(basector$gTDaSiSe4zONS5TxBAcPRw, 'JQAABh3RXDe_aQSOwLeIWCw', type$YwfrgB3RXDe_aQSOwLeIWCw);

  // Anonymous type
  function hfw6NZutYDavTpSisLijMw() {}  var type$hfw6NZutYDavTpSisLijMw = hfw6NZutYDavTpSisLijMw.prototype;
  type$hfw6NZutYDavTpSisLijMw.constructor = hfw6NZutYDavTpSisLijMw;
  type$hfw6NZutYDavTpSisLijMw._CurrentStack_i__Field = null;
  type$hfw6NZutYDavTpSisLijMw._PreviousStack_i__Field = null;
  // <>f__AnonymousType0`2.get_CurrentStack
  type$hfw6NZutYDavTpSisLijMw.get_CurrentStack = function ()
  {
    return this._CurrentStack_i__Field;
  };

  // <>f__AnonymousType0`2.get_PreviousStack
  type$hfw6NZutYDavTpSisLijMw.get_PreviousStack = function ()
  {
    return this._PreviousStack_i__Field;
  };

  // <>f__AnonymousType0`2.ToString
  type$hfw6NZutYDavTpSisLijMw.toString /* <>f__AnonymousType0`2.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$_2A8ABndY2TiACykjvGGDOg();
    b._3Q8ABndY2TiACykjvGGDOg('{ CurrentStack = ');
    b._3g8ABndY2TiACykjvGGDOg(a._CurrentStack_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(', PreviousStack = ');
    b._3g8ABndY2TiACykjvGGDOg(a._PreviousStack_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(' }');
    c = (b+'');
    return c;
  };
    hfw6NZutYDavTpSisLijMw.prototype.toString /* System.Object.ToString */ = hfw6NZutYDavTpSisLijMw.prototype.toString /* <>f__AnonymousType0`2.ToString */;

  // <>f__AnonymousType0`2.Equals
  type$hfw6NZutYDavTpSisLijMw.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    hfw6NZutYDavTpSisLijMw.prototype.AwAABnwCHD6Y1dqcmGKqIQ = hfw6NZutYDavTpSisLijMw.prototype.Equals;

  // <>f__AnonymousType0`2.GetHashCode
  type$hfw6NZutYDavTpSisLijMw.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    hfw6NZutYDavTpSisLijMw.prototype.BwAABnwCHD6Y1dqcmGKqIQ = hfw6NZutYDavTpSisLijMw.prototype.GetHashCode;

  // <>f__AnonymousType0`2..ctor
  type$hfw6NZutYDavTpSisLijMw.LAAABputYDavTpSisLijMw = function (b, c)
  {
    var a = this;

    a._CurrentStack_i__Field = b;
    a._PreviousStack_i__Field = c;
  };
  var ctor$LAAABputYDavTpSisLijMw = $ctor$(null, 'LAAABputYDavTpSisLijMw', type$hfw6NZutYDavTpSisLijMw);
  // Anonymous type
  function BLxXiWscJDSgJpSbVIcxPA() {}  var type$BLxXiWscJDSgJpSbVIcxPA = BLxXiWscJDSgJpSbVIcxPA.prototype;
  type$BLxXiWscJDSgJpSbVIcxPA.constructor = BLxXiWscJDSgJpSbVIcxPA;
  type$BLxXiWscJDSgJpSbVIcxPA._HistoryMove_i__Field = null;
  type$BLxXiWscJDSgJpSbVIcxPA._StackedCards_i__Field = null;
  type$BLxXiWscJDSgJpSbVIcxPA._Previous_i__Field = null;
  type$BLxXiWscJDSgJpSbVIcxPA._Current_i__Field = null;
  // <>f__AnonymousType1`4.get_HistoryMove
  type$BLxXiWscJDSgJpSbVIcxPA.get_HistoryMove = function ()
  {
    return this._HistoryMove_i__Field;
  };

  // <>f__AnonymousType1`4.get_StackedCards
  type$BLxXiWscJDSgJpSbVIcxPA.get_StackedCards = function ()
  {
    return this._StackedCards_i__Field;
  };

  // <>f__AnonymousType1`4.get_Previous
  type$BLxXiWscJDSgJpSbVIcxPA.get_Previous = function ()
  {
    return this._Previous_i__Field;
  };

  // <>f__AnonymousType1`4.get_Current
  type$BLxXiWscJDSgJpSbVIcxPA.get_Current = function ()
  {
    return this._Current_i__Field;
  };

  // <>f__AnonymousType1`4.ToString
  type$BLxXiWscJDSgJpSbVIcxPA.toString /* <>f__AnonymousType1`4.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$_2A8ABndY2TiACykjvGGDOg();
    b._3Q8ABndY2TiACykjvGGDOg('{ HistoryMove = ');
    b._3g8ABndY2TiACykjvGGDOg(a._HistoryMove_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(', StackedCards = ');
    b._3g8ABndY2TiACykjvGGDOg(a._StackedCards_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(', Previous = ');
    b._3g8ABndY2TiACykjvGGDOg(a._Previous_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(', Current = ');
    b._3g8ABndY2TiACykjvGGDOg(a._Current_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(' }');
    c = (b+'');
    return c;
  };
    BLxXiWscJDSgJpSbVIcxPA.prototype.toString /* System.Object.ToString */ = BLxXiWscJDSgJpSbVIcxPA.prototype.toString /* <>f__AnonymousType1`4.ToString */;

  // <>f__AnonymousType1`4.Equals
  type$BLxXiWscJDSgJpSbVIcxPA.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    BLxXiWscJDSgJpSbVIcxPA.prototype.AwAABnwCHD6Y1dqcmGKqIQ = BLxXiWscJDSgJpSbVIcxPA.prototype.Equals;

  // <>f__AnonymousType1`4.GetHashCode
  type$BLxXiWscJDSgJpSbVIcxPA.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    BLxXiWscJDSgJpSbVIcxPA.prototype.BwAABnwCHD6Y1dqcmGKqIQ = BLxXiWscJDSgJpSbVIcxPA.prototype.GetHashCode;

  // <>f__AnonymousType1`4..ctor
  type$BLxXiWscJDSgJpSbVIcxPA.MgAABmscJDSgJpSbVIcxPA = function (b, c, d, e)
  {
    var a = this;

    a._HistoryMove_i__Field = b;
    a._StackedCards_i__Field = c;
    a._Previous_i__Field = d;
    a._Current_i__Field = e;
  };
  var ctor$MgAABmscJDSgJpSbVIcxPA = $ctor$(null, 'MgAABmscJDSgJpSbVIcxPA', type$BLxXiWscJDSgJpSbVIcxPA);
  // Closure type
  function _8A29TZT2IzabS8YA5zVPHQ() {}  var type$_8A29TZT2IzabS8YA5zVPHQ = _8A29TZT2IzabS8YA5zVPHQ.prototype;
  type$_8A29TZT2IzabS8YA5zVPHQ.constructor = _8A29TZT2IzabS8YA5zVPHQ;
  type$_8A29TZT2IzabS8YA5zVPHQ.Margin = 0;
  type$_8A29TZT2IzabS8YA5zVPHQ.GameOverBox = null;
  type$_8A29TZT2IzabS8YA5zVPHQ.KingRight = null;
  type$_8A29TZT2IzabS8YA5zVPHQ.KingLeft = null;
  type$_8A29TZT2IzabS8YA5zVPHQ.KingSmile = null;
  type$_8A29TZT2IzabS8YA5zVPHQ.Rule_WinConditionMet = null;
  type$_8A29TZT2IzabS8YA5zVPHQ.MyStatus_UpdateCardsLeft = null;
  type$_8A29TZT2IzabS8YA5zVPHQ.RuleForStackingCardsInGoalStack = null;
  type$_8A29TZT2IzabS8YA5zVPHQ.RuleForStackingCardsInPlayStack = null;
  type$_8A29TZT2IzabS8YA5zVPHQ.__4__this = null;
  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28.<.ctor>b__a
  type$_8A29TZT2IzabS8YA5zVPHQ.__ctor_b__a = function ()
  {
    var a = this;

    a.GameOverBox._9AAABv_adLT6ZD2jUxEHFMw('Congratulations\u0021 You Won\u0021');
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28.<.ctor>b__b
  type$_8A29TZT2IzabS8YA5zVPHQ.__ctor_b__b = function (b, c)
  {
    var a = this, d, e;

    d = c.GAIABh93Pj2k8gEjdybf_aQ(a.__4__this.MyDeck.NAAABnxaFjWXUEhutPG9kQ());
    e = !(d.VQEABv73RTWSJr0jb0lPAg() < 400);

    if (!e)
    {
      fwEABpXXHje8G4fO36pHiQ(a.KingLeft);
      gAEABpXXHje8G4fO36pHiQ(a.KingRight);
      return;
    }

    gAEABpXXHje8G4fO36pHiQ(a.KingLeft);
    fwEABpXXHje8G4fO36pHiQ(a.KingRight);
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28.<.ctor>b__14
  type$_8A29TZT2IzabS8YA5zVPHQ.__ctor_b__14 = function (b)
  {
    var a = this;

    
    zgEABl964D_aaiuMHdBpszA(b.Cards, new ctor$TQUABmdYmDufdNSm2oh5Bw(a, '__ctor_b__15'));
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28.<.ctor>b__18
  type$_8A29TZT2IzabS8YA5zVPHQ.__ctor_b__18 = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new XPa9Ij3lGjS_bUgm3_aNoIuQ();
    c.CS___8__locals29 = a;
    c.card = b;
    c.card.VQAABq3ydziJJQjrYNUi_aQ(new ctor$UQUABuzqfTWQzxgi2Ip02g(c, '__ctor_b__19'));
    c.card.WwAABq3ydziJJQjrYNUi_aQ(0);
    c.card.ValidateDragStart = new ctor$XQEABrN42zC9LggKQChbQQ(c, '__ctor_b__1c');
    c.card.ValidateDragStop = new ctor$YQEABkOkJjGPtTLmBuq5mg(c, '__ctor_b__1d');
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28.<.ctor>b__1e
  type$_8A29TZT2IzabS8YA5zVPHQ.__ctor_b__1e = function (b)
  {
    var a = this, c, d;

    c = new ctor$CgAABjWnHjui8XnJJ2N5oA();
    c.AwAABjWnHjui8XnJJ2N5oA(YBEABrA3fT6ZrCN3llKJ_aA('GoalStack ', new Number(b)));
    d = c.DQAABjWnHjui8XnJJ2N5oA((((800 - (a.Margin / 2)) - ((GQAABmrUKTyVHTEYLmsu2g() + (a.Margin / 2)) * 4)) + (b * (GQAABmrUKTyVHTEYLmsu2g() + (a.Margin / 2)))), (a.Margin * 2));
    return d;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28.<.ctor>b__1f
  type$_8A29TZT2IzabS8YA5zVPHQ.__ctor_b__1f = function (b)
  {
    var a = this, c, d;

    c = new ctor$CgAABjWnHjui8XnJJ2N5oA();
    c.AwAABjWnHjui8XnJJ2N5oA(YBEABrA3fT6ZrCN3llKJ_aA('TempStack ', new Number(b)));
    d = c.DQAABjWnHjui8XnJJ2N5oA((a.Margin + (b * (GQAABmrUKTyVHTEYLmsu2g() + (a.Margin / 2)))), (a.Margin * 2));
    return d;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28.<.ctor>b__20
  type$_8A29TZT2IzabS8YA5zVPHQ.__ctor_b__20 = function (b)
  {
    var a = this, c, d, e;

    d = /* DOMCreateType */new VfulfyL_btzik_bTC7XwLM_bg();
    d.CS___8__locals29 = a;
    d.i = b;
    c = new ctor$CgAABjWnHjui8XnJJ2N5oA();
    c.AwAABjWnHjui8XnJJ2N5oA(YBEABrA3fT6ZrCN3llKJ_aA('PlayStack ', new Number(d.i)));
    e = pQEABl964D_aaiuMHdBpszA(c.DQAABjWnHjui8XnJJ2N5oA((a.Margin + (d.i * (GQAABmrUKTyVHTEYLmsu2g() + a.Margin))), ((a.Margin * 4) + GgAABmrUKTyVHTEYLmsu2g())), new ctor$TQUABmdYmDufdNSm2oh5Bw(d, '__ctor_b__21'));
    return e;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28.<.ctor>b__15
  type$_8A29TZT2IzabS8YA5zVPHQ.__ctor_b__15 = function (b)
  {
    var a = this, c;

    c = !(b.Info.Rank == 2);

    if (!c)
    {
      fwEABpXXHje8G4fO36pHiQ(a.KingSmile);
      b.WwAABq3ydziJJQjrYNUi_aQ(1);
      c = !a.Rule_WinConditionMet.Invoke();

      if (!c)
      {
        a.__4__this.MyDeck.Sounds.win.Invoke();
        c = (a.__4__this.GameOver == null);

        if (!c)
        {
          a.__4__this.GameOver.Invoke();
        }

      }
      else
      {
        jgEABpXXHje8G4fO36pHiQ(600, new ctor$UQUABuzqfTWQzxgi2Ip02g(a.KingSmile, 'gAEABpXXHje8G4fO36pHiQ').AsExtensionMethod());
      }

    }

    a.MyStatus_UpdateCardsLeft.Invoke();
    a.__4__this.MyStatus.Update.Invoke();
  };

  // Closure type
  function XPa9Ij3lGjS_bUgm3_aNoIuQ() {}  var type$XPa9Ij3lGjS_bUgm3_aNoIuQ = XPa9Ij3lGjS_bUgm3_aNoIuQ.prototype;
  type$XPa9Ij3lGjS_bUgm3_aNoIuQ.constructor = XPa9Ij3lGjS_bUgm3_aNoIuQ;
  type$XPa9Ij3lGjS_bUgm3_aNoIuQ.CS___8__locals29 = null;
  type$XPa9Ij3lGjS_bUgm3_aNoIuQ.card = null;
  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28+<>c__DisplayClass2c.<.ctor>b__19
  type$XPa9Ij3lGjS_bUgm3_aNoIuQ.__ctor_b__19 = function ()
  {
    var a = this, b;

    b = /* DOMCreateType */new _0e_bJu4s02ziYf8s_anRR4Aw();
    b.CS___8__locals2d = a;
    b.CS___8__locals29 = a.CS___8__locals29;
    b.FrozenTokens = new ctor$LAAABputYDavTpSisLijMw(a.card.SwAABq3ydziJJQjrYNUi_aQ(), a.card.SQAABq3ydziJJQjrYNUi_aQ());
    ow0ABvmt_aT2hLXIgzD4eQw((new ctor$MgAABmscJDSgJpSbVIcxPA(a.card, a.card.ZwAABq3ydziJJQjrYNUi_aQ().length, a.card.SQAABq3ydziJJQjrYNUi_aQ(), a.card.SwAABq3ydziJJQjrYNUi_aQ())+''));
    a.CS___8__locals29.__4__this.AQAABjOrwDmkSdU0qNVKOw().History.HQAABr6INzu22cEtID0gLg(new ctor$UQUABuzqfTWQzxgi2Ip02g(b, '__ctor_b__1a'), new ctor$UQUABuzqfTWQzxgi2Ip02g(b, '__ctor_b__1b'));
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28+<>c__DisplayClass2c.<.ctor>b__1c
  type$XPa9Ij3lGjS_bUgm3_aNoIuQ.__ctor_b__1c = function ()
  {
    var a = this, b, c;

    c = !a.CS___8__locals29.__4__this.Cheat;

    if (!c)
    {
      b = 1;
      return b;
    }

    c = !a.CS___8__locals29.__4__this.GoalStacks.PQgABj1h1jWisfyZw_a9KnQ(TQAABq3ydziJJQjrYNUi_aQ(a.card));

    if (!c)
    {
      b = 0;
      return b;
    }

    b = kQEABl964D_aaiuMHdBpszA(a.card.ZgAABq3ydziJJQjrYNUi_aQ(), a.CS___8__locals29.RuleForStackingCardsInPlayStack);
    return b;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28+<>c__DisplayClass2c.<.ctor>b__1d
  type$XPa9Ij3lGjS_bUgm3_aNoIuQ.__ctor_b__1d = function (b)
  {
    var a = this, c, d;

    d = !a.CS___8__locals29.__4__this.Cheat;

    if (!d)
    {
      c = 1;
      return c;
    }

    d = !a.CS___8__locals29.__4__this.TempStacks.PQgABj1h1jWisfyZw_a9KnQ(b);

    if (!d)
    {
      d = !(b.Cards.PwgABj1h1jWisfyZw_a9KnQ() > 0);

      if (!d)
      {
        c = 0;
        return c;
      }

      d = !(a.card.ZwAABq3ydziJJQjrYNUi_aQ().length > 0);

      if (!d)
      {
        c = 0;
        return c;
      }

      c = 1;
      return c;
    }

    d = !a.CS___8__locals29.__4__this.PlayStacks.PQgABj1h1jWisfyZw_a9KnQ(b);

    if (!d)
    {
      d = !!b.Cards.PwgABj1h1jWisfyZw_a9KnQ();

      if (!d)
      {
        c = 1;
        return c;
      }

      c = a.CS___8__locals29.RuleForStackingCardsInPlayStack.Invoke(FAAABkAVcDWPnLAqFK62WA(b.Cards), a.card);
      return c;
    }

    d = !a.CS___8__locals29.__4__this.GoalStacks.PQgABj1h1jWisfyZw_a9KnQ(b);

    if (!d)
    {
      d = !!b.Cards.PwgABj1h1jWisfyZw_a9KnQ();

      if (!d)
      {
        c = a.CS___8__locals29.RuleForStackingCardsInGoalStack.Invoke(null, a.card);
        return c;
      }

      c = a.CS___8__locals29.RuleForStackingCardsInGoalStack.Invoke(FAAABkAVcDWPnLAqFK62WA(b.Cards), a.card);
      return c;
    }

    c = 0;
    return c;
  };

  // Closure type
  function _0e_bJu4s02ziYf8s_anRR4Aw() {}  var type$_0e_bJu4s02ziYf8s_anRR4Aw = _0e_bJu4s02ziYf8s_anRR4Aw.prototype;
  type$_0e_bJu4s02ziYf8s_anRR4Aw.constructor = _0e_bJu4s02ziYf8s_anRR4Aw;
  type$_0e_bJu4s02ziYf8s_anRR4Aw.CS___8__locals2d = null;
  type$_0e_bJu4s02ziYf8s_anRR4Aw.CS___8__locals29 = null;
  type$_0e_bJu4s02ziYf8s_anRR4Aw.FrozenTokens = null;
  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28+<>c__DisplayClass2c+<>c__DisplayClass2e.<.ctor>b__1a
  type$_0e_bJu4s02ziYf8s_anRR4Aw.__ctor_b__1a = function ()
  {
    var a = this, b;

    b = !(a.CS___8__locals2d.card.SwAABq3ydziJJQjrYNUi_aQ() == a.FrozenTokens.get_PreviousStack());

    if (!b)
    {
      return;
    }

    a.CS___8__locals2d.card.WwAABq3ydziJJQjrYNUi_aQ(0);
    a.CS___8__locals2d.card.aAAABq3ydziJJQjrYNUi_aQ(a.FrozenTokens.get_PreviousStack(), null);
    a.CS___8__locals29.__4__this.MyDeck.Sounds.deal.Invoke();
    a.CS___8__locals29.__4__this.MyStatus.EAAABnQT3D_adJwRgdVeuKg((a.CS___8__locals29.__4__this.MyStatus.DwAABnQT3D_adJwRgdVeuKg() - 1));
    a.CS___8__locals29.MyStatus_UpdateCardsLeft.Invoke();
    a.CS___8__locals29.__4__this.MyStatus.Update.Invoke();
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28+<>c__DisplayClass2c+<>c__DisplayClass2e.<.ctor>b__1b
  type$_0e_bJu4s02ziYf8s_anRR4Aw.__ctor_b__1b = function ()
  {
    var a = this, b;

    a.CS___8__locals29.__4__this.MyStatus.EAAABnQT3D_adJwRgdVeuKg((a.CS___8__locals29.__4__this.MyStatus.DwAABnQT3D_adJwRgdVeuKg() + 1));
    a.CS___8__locals29.__4__this.MyStatus.Update.Invoke();
    b = !(a.CS___8__locals2d.card.SwAABq3ydziJJQjrYNUi_aQ() == a.FrozenTokens.get_CurrentStack());

    if (!b)
    {
      return;
    }

    a.CS___8__locals2d.card.aAAABq3ydziJJQjrYNUi_aQ(a.FrozenTokens.get_CurrentStack(), null);
    a.CS___8__locals29.__4__this.MyDeck.Sounds.deal.Invoke();
  };

  // Closure type
  function VfulfyL_btzik_bTC7XwLM_bg() {}  var type$VfulfyL_btzik_bTC7XwLM_bg = VfulfyL_btzik_bTC7XwLM_bg.prototype;
  type$VfulfyL_btzik_bTC7XwLM_bg.constructor = VfulfyL_btzik_bTC7XwLM_bg;
  type$VfulfyL_btzik_bTC7XwLM_bg.CS___8__locals29 = null;
  type$VfulfyL_btzik_bTC7XwLM_bg.i = 0;
  // AvalonCardGames.FreeCell.Shared.FreeCellGame+<>c__DisplayClass28+<>c__DisplayClass30.<.ctor>b__21
  type$VfulfyL_btzik_bTC7XwLM_bg.__ctor_b__21 = function (b)
  {
    var a = this, c, d;

    c = 6;
    d = !(a.i < 4);

    if (!d)
    {
      c = 7;
    }

    kgEABl964D_aaiuMHdBpszA(b.Cards, a.CS___8__locals29.__4__this.MyDeck.NwAABnxaFjWXUEhutPG9kQ(c));
  };

  // Closure type
  function aMKhlSYsdTKMSaPsGRzoOQ() {}  var type$aMKhlSYsdTKMSaPsGRzoOQ = aMKhlSYsdTKMSaPsGRzoOQ.prototype;
  type$aMKhlSYsdTKMSaPsGRzoOQ.constructor = aMKhlSYsdTKMSaPsGRzoOQ;
  type$aMKhlSYsdTKMSaPsGRzoOQ.Content = null;
  type$aMKhlSYsdTKMSaPsGRzoOQ.Game = null;
  type$aMKhlSYsdTKMSaPsGRzoOQ.GameFocusBoost = false;
  type$aMKhlSYsdTKMSaPsGRzoOQ.CreateGame = null;
  type$aMKhlSYsdTKMSaPsGRzoOQ.__4__this = null;
  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas+<>c__DisplayClass12.<.ctor>b__9
  type$aMKhlSYsdTKMSaPsGRzoOQ.__ctor_b__9 = function ()
  {
    var a = this, b, c;

    c = /* DOMCreateType */new AhoK7WfgqTuQLW1OZYLylA();
    c.CS___8__locals13 = a;
    c.PreviousGame = a.Game;
    _9gEABr_bLWDe9OgfD0W3O7Q(a.Game);
    b = new ctor$BQAABjOrwDmkSdU0qNVKOw();
    b.AgAABjOrwDmkSdU0qNVKOw(a.__4__this.GAAABmY0gT2Wjn_a3kdqm6A());
    a.Game = b;
    a.Game.MyDeck.Sounds = a.__4__this.Sounds;
    _8gEABr_bLWDe9OgfD0W3O7Q(a.Game, a.Content);
    c.CurrentGame = a.Game;
    a.__4__this.GAAABmY0gT2Wjn_a3kdqm6A().History.HQAABr6INzu22cEtID0gLg(new ctor$UQUABuzqfTWQzxgi2Ip02g(c, '__ctor_b__a'), new ctor$UQUABuzqfTWQzxgi2Ip02g(c, '__ctor_b__b'));
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas+<>c__DisplayClass12.<.ctor>b__d
  type$aMKhlSYsdTKMSaPsGRzoOQ.__ctor_b__d = function ()
  {
    var a = this;

    a.GameFocusBoost = 1;
    a.__4__this.GgAABmY0gT2Wjn_a3kdqm6A().Hide.Invoke();
    a.CreateGame.Invoke();
    jgEABpXXHje8G4fO36pHiQ(500, new ctor$UQUABuzqfTWQzxgi2Ip02g(a, '__ctor_b__e'));
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas+<>c__DisplayClass12.<.ctor>b__f
  type$aMKhlSYsdTKMSaPsGRzoOQ.__ctor_b__f = function ()
  {
    return !(this.Game == null);
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas+<>c__DisplayClass12.<.ctor>b__10
  type$aMKhlSYsdTKMSaPsGRzoOQ.__ctor_b__10 = function ()
  {
    return !this.GameFocusBoost;
  };

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas+<>c__DisplayClass12.<.ctor>b__e
  type$aMKhlSYsdTKMSaPsGRzoOQ.__ctor_b__e = function ()
  {
    var a = this;

    a.GameFocusBoost = 0;
  };

  // Closure type
  function AhoK7WfgqTuQLW1OZYLylA() {}  var type$AhoK7WfgqTuQLW1OZYLylA = AhoK7WfgqTuQLW1OZYLylA.prototype;
  type$AhoK7WfgqTuQLW1OZYLylA.constructor = AhoK7WfgqTuQLW1OZYLylA;
  type$AhoK7WfgqTuQLW1OZYLylA.CS___8__locals13 = null;
  type$AhoK7WfgqTuQLW1OZYLylA.PreviousGame = null;
  type$AhoK7WfgqTuQLW1OZYLylA.CurrentGame = null;
  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas+<>c__DisplayClass12+<>c__DisplayClass14.<.ctor>b__a
  type$AhoK7WfgqTuQLW1OZYLylA.__ctor_b__a = function ()
  {
    var a = this, b;

    b = !(a.CS___8__locals13.Game == a.PreviousGame);

    if (!b)
    {
      return;
    }

    _9gEABr_bLWDe9OgfD0W3O7Q(a.CS___8__locals13.Game);
    a.CS___8__locals13.Game = _8gEABr_bLWDe9OgfD0W3O7Q(a.PreviousGame, a.CS___8__locals13.Content);
    b = !(a.CS___8__locals13.Game == null);

    if (!b)
    {
      a.CS___8__locals13.__4__this.GgAABmY0gT2Wjn_a3kdqm6A().Show.Invoke();
    }

  };

  // AvalonCardGames.FreeCell.Shared.FreeCellCanvas+<>c__DisplayClass12+<>c__DisplayClass14.<.ctor>b__b
  type$AhoK7WfgqTuQLW1OZYLylA.__ctor_b__b = function ()
  {
    var a = this, b;

    b = !(a.CS___8__locals13.Game == a.CurrentGame);

    if (!b)
    {
      return;
    }

    _9gEABr_bLWDe9OgfD0W3O7Q(a.CS___8__locals13.Game);
    a.CS___8__locals13.Game = _8gEABr_bLWDe9OgfD0W3O7Q(a.CurrentGame, a.CS___8__locals13.Content);
    b = (a.CS___8__locals13.Game == null);

    if (!b)
    {
      a.CS___8__locals13.__4__this.GgAABmY0gT2Wjn_a3kdqm6A().Hide.Invoke();
    }

  };

  // Are the references up to date?
  // Are they imported in the dependency sort order?
  // reference ScriptCoreLib - _5Ab28nwLIEWdGNMb6EqeCw
  // reference ScriptCoreLib.Query - BaJOV6PUu0uhcv4u1emKog
  // reference ScriptCoreLib.Net - _4OPuXvHExkC1N7_bnlmuJvg
  // reference ScriptCoreLib.Avalon - QoxbVsWRmUqAJTApL1vPIw
  // reference ScriptCoreLib.Avalon.Cards - fW7kjxxmukG2yHVFfd1FGg
  // reference ScriptCoreLib.Avalon.TiledImageButton - _5T3nwDT210_aHxkzxjY70_bQ
  // reference ScriptCoreLib.Avalon.Carousel - HbjZq0grEkyrEFXX3bKKyw
  // reference AvalonCardGames.Menu - EbI_bSy_aLxUysb2KBsX_bmuQ
  TWymgcaHD0C5PL_a3VdT4GQ.Types = [_8c7oQzOrwDmkSdU0qNVKOw,_9DJrdmY0gT2Wjn_a3kdqm6A,JtRsfpWKPDGpNhHomYGe_bQ,gTDaSiSe4zONS5TxBAcPRw,YwfrgB3RXDe_aQSOwLeIWCw];
  TWymgcaHD0C5PL_a3VdT4GQ.References = [_5Ab28nwLIEWdGNMb6EqeCw,BaJOV6PUu0uhcv4u1emKog,_4OPuXvHExkC1N7_bnlmuJvg,QoxbVsWRmUqAJTApL1vPIw,fW7kjxxmukG2yHVFfd1FGg,_5T3nwDT210_aHxkzxjY70_bQ,HbjZq0grEkyrEFXX3bKKyw,EbI_bSy_aLxUysb2KBsX_bmuQ];

  (function()
  {

    if (!(KAAABJWKPDGpNhHomYGe_bQ))
    {
      KAAABJWKPDGpNhHomYGe_bQ = new ctor$TQUABmdYmDufdNSm2oh5Bw(null, 'IAAABpWKPDGpNhHomYGe_bQ');
    }

    RAoABnCdPTa79OFfezjtjQ(ehAABnERRz_aoaj_a1V3c8GQ(new ctor$QAMABrcAMzmfHBmvaPgiqw(type$JtRsfpWKPDGpNhHomYGe_bQ)), KAAABJWKPDGpNhHomYGe_bQ);
  }
  )();

  (function()
  {
    KQAABB3RXDe_aQSOwLeIWCw = new ctor$JQAABh3RXDe_aQSOwLeIWCw();
  }
  )();

