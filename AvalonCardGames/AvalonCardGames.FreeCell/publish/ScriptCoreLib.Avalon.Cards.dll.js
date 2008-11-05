  var fW7kjxxmukG2yHVFfd1FGg = {Name:{Name:"ScriptCoreLib.Avalon.Cards",FullName:"ScriptCoreLib.Avalon.Cards, Version\x3d1.0.0.0, Culture\x3dneutral, PublicKeyToken\x3dnull"}};
  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag
  function HUq0v7ZRhzyCDMJfeGaooQ(){};
  HUq0v7ZRhzyCDMJfeGaooQ.TypeName = "CardDrag";
  HUq0v7ZRhzyCDMJfeGaooQ.Assembly = fW7kjxxmukG2yHVFfd1FGg;
  var type$HUq0v7ZRhzyCDMJfeGaooQ = HUq0v7ZRhzyCDMJfeGaooQ.prototype;
  type$HUq0v7ZRhzyCDMJfeGaooQ.constructor = HUq0v7ZRhzyCDMJfeGaooQ;
  var basector$HUq0v7ZRhzyCDMJfeGaooQ = $ctor$(null, null, type$HUq0v7ZRhzyCDMJfeGaooQ);
  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag..ctor
  type$HUq0v7ZRhzyCDMJfeGaooQ.AQAABrZRhzyCDMJfeGaooQ = function (b)
  {
    var a = this, c, d;

    d = /* DOMCreateType */new YhXq_aiFJzD6C5tVRlCAEDw();
    d.card = b;
    c = /* DOMCreateType */new k2C4COuckziRC0GcUcro7A();
    c.CS___8__localsc = d;
    
    c.drag = 0;
    c.OverlayContainer = d.card.CurrentDeck.NAAABnxaFjWXUEhutPG9kQ();
    d.card.RwAABq3ydziJJQjrYNUi_aQ().FQAABlVNcDa86VHOtLThag(new ctor$_6gEABuL9XjqWIV_aAkZPK3w(c, '__ctor_b__1'));
    c.CandidateStack = null;
    c.OverlayContainer.DwAABlVNcDa86VHOtLThag(new ctor$QQEABvFj1zCw7fmFw_bi94g(c, '__ctor_b__4'));
    c.OverlayContainer.FwAABlVNcDa86VHOtLThag(new ctor$_6gEABuL9XjqWIV_aAkZPK3w(c, '__ctor_b__7'));
  };
  var ctor$AQAABrZRhzyCDMJfeGaooQ = $ctor$(null, 'AQAABrZRhzyCDMJfeGaooQ', type$HUq0v7ZRhzyCDMJfeGaooQ);

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack
  function xUS_aJTWnHjui8XnJJ2N5oA(){};
  xUS_aJTWnHjui8XnJJ2N5oA.TypeName = "CardStack";
  xUS_aJTWnHjui8XnJJ2N5oA.Assembly = fW7kjxxmukG2yHVFfd1FGg;
  var type$xUS_aJTWnHjui8XnJJ2N5oA = xUS_aJTWnHjui8XnJJ2N5oA.prototype;
  type$xUS_aJTWnHjui8XnJJ2N5oA.constructor = xUS_aJTWnHjui8XnJJ2N5oA;
  type$xUS_aJTWnHjui8XnJJ2N5oA.Click = null;
  type$xUS_aJTWnHjui8XnJJ2N5oA.CurrentDeck = null;
  type$xUS_aJTWnHjui8XnJJ2N5oA.Cards = null;
  type$xUS_aJTWnHjui8XnJJ2N5oA.LocationX = 0;
  type$xUS_aJTWnHjui8XnJJ2N5oA.LocationY = 0;
  type$xUS_aJTWnHjui8XnJJ2N5oA.HitRange = 0;
  type$xUS_aJTWnHjui8XnJJ2N5oA.CardMargin = null;
  type$xUS_aJTWnHjui8XnJJ2N5oA._Name_k__BackingField = null;
  type$xUS_aJTWnHjui8XnJJ2N5oA._Container_k__BackingField = null;
  var basector$xUS_aJTWnHjui8XnJJ2N5oA = $ctor$(null, null, type$xUS_aJTWnHjui8XnJJ2N5oA);
  // ScriptCoreLib.Shared.Avalon.Cards.CardStack..ctor
  type$xUS_aJTWnHjui8XnJJ2N5oA.CgAABjWnHjui8XnJJ2N5oA = function ()
  {
    var a = this, b, c, d, e, f;

    e = null;
    a.CurrentDeck = new ctor$hgAABsouJj63d8Z1Bh_amow();
    a.Cards = new ctor$QwgABr5jNDK9zhmrNkcmyg();
    a.HitRange = 32;
    f = new ctor$mQIABvwiPzaM0k_aS9hKUkw();
    d = f;
    d.lAIABvwiPzaM0k_aS9hKUkw(0);
    d.lgIABvwiPzaM0k_aS9hKUkw(12);
    a.CardMargin = d;
    b = new ctor$WwAABh5ySTCeEJNh8DuEYg();
    b.MwAABpJ65jyB21eK1VwRQA(GQAABmrUKTyVHTEYLmsu2g());
    b.NQAABpJ65jyB21eK1VwRQA(GgAABmrUKTyVHTEYLmsu2g());
    a.CQAABjWnHjui8XnJJ2N5oA(b);
    c = new ctor$fAIABrhSLzuJ75ou_ayKGnQ();
    c.gAIABrhSLzuJ75ou_ayKGnQ(bwIABsRwlTqY1HAn8xDgVQ(IgAABmrUKTyVHTEYLmsu2g('assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards', 0, 0, 'spider.empty', 0)));
    c.MwAABpJ65jyB21eK1VwRQA(GQAABmrUKTyVHTEYLmsu2g());
    c.NQAABpJ65jyB21eK1VwRQA(GgAABmrUKTyVHTEYLmsu2g());
    _9QEABr_bLWDe9OgfD0W3O7Q(c, a);

    if (!e)
    {
      e = new ctor$fxEABsV_bHje7HMBqh73wBw(a, 'FAAABjWnHjui8XnJJ2N5oA');
    }

    a.Cards.SAgABr5jNDK9zhmrNkcmyg(e);
  };
  var ctor$CgAABjWnHjui8XnJJ2N5oA = xUS_aJTWnHjui8XnJJ2N5oA.ctor = $ctor$(null, 'CgAABjWnHjui8XnJJ2N5oA', type$xUS_aJTWnHjui8XnJJ2N5oA);

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.System.Collections.IEnumerable.GetEnumerator
  type$xUS_aJTWnHjui8XnJJ2N5oA.EwAABjWnHjui8XnJJ2N5oA = function ()
  {
    var a = this, b;

    b = a.Cards.QQgABj1h1jWisfyZw_a9KnQ();
    return b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.get_Name
  type$xUS_aJTWnHjui8XnJJ2N5oA.AgAABjWnHjui8XnJJ2N5oA = function ()
  {
    return this._Name_k__BackingField;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.set_Name
  type$xUS_aJTWnHjui8XnJJ2N5oA.AwAABjWnHjui8XnJJ2N5oA = function (b)
  {
    var a = this;

    a._Name_k__BackingField = b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.ToString
  type$xUS_aJTWnHjui8XnJJ2N5oA.toString /* ScriptCoreLib.Shared.Avalon.Cards.CardStack.ToString */ = function ()
  {
    var a = this, b;

    b = a.AgAABjWnHjui8XnJJ2N5oA();
    return b;
  };
    xUS_aJTWnHjui8XnJJ2N5oA.prototype.toString /* System.Object.ToString */ = xUS_aJTWnHjui8XnJJ2N5oA.prototype.toString /* ScriptCoreLib.Shared.Avalon.Cards.CardStack.ToString */;

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.add_Click
  type$xUS_aJTWnHjui8XnJJ2N5oA.BQAABjWnHjui8XnJJ2N5oA = function (b)
  {
    var a = this;

    a.Click = TAoABhNbrTK2juX6Wf4PnQ(a.Click, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.remove_Click
  type$xUS_aJTWnHjui8XnJJ2N5oA.BgAABjWnHjui8XnJJ2N5oA = function (b)
  {
    var a = this;

    a.Click = TgoABhNbrTK2juX6Wf4PnQ(a.Click, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.RaiseClick
  type$xUS_aJTWnHjui8XnJJ2N5oA.BwAABjWnHjui8XnJJ2N5oA = function (b)
  {
    var a = this, c;

    c = (a.Click == null);

    if (!c)
    {
      a.Click.Invoke(b);
    }

  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.get_Container
  type$xUS_aJTWnHjui8XnJJ2N5oA.CAAABjWnHjui8XnJJ2N5oA = function ()
  {
    return this._Container_k__BackingField;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.set_Container
  type$xUS_aJTWnHjui8XnJJ2N5oA.CQAABjWnHjui8XnJJ2N5oA = function (b)
  {
    var a = this;

    a._Container_k__BackingField = b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.get_Location
  type$xUS_aJTWnHjui8XnJJ2N5oA.CwAABjWnHjui8XnJJ2N5oA = function ()
  {
    var a = this, b, c, d;

    d = new ctor$WgEABv73RTWSJr0jb0lPAg();
    b = d;
    b.VgEABv73RTWSJr0jb0lPAg(a.LocationX);
    b.WAEABv73RTWSJr0jb0lPAg(a.LocationY);
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.get_FreeLocation
  type$xUS_aJTWnHjui8XnJJ2N5oA.DAAABjWnHjui8XnJJ2N5oA = function ()
  {
    var a = this, b, c, d;

    d = new ctor$WgEABv73RTWSJr0jb0lPAg();
    b = d;
    b.VgEABv73RTWSJr0jb0lPAg((a.LocationX + (a.CardMargin.kwIABvwiPzaM0k_aS9hKUkw() * a.Cards.PwgABj1h1jWisfyZw_a9KnQ())));
    b.WAEABv73RTWSJr0jb0lPAg((a.LocationY + (a.CardMargin.lQIABvwiPzaM0k_aS9hKUkw() * a.Cards.PwgABj1h1jWisfyZw_a9KnQ())));
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.MoveTo
  type$xUS_aJTWnHjui8XnJJ2N5oA.DQAABjWnHjui8XnJJ2N5oA = function (b, c)
  {
    var a = this, d;

    a.LocationX = b;
    a.LocationY = c;
    _7wEABr_bLWDe9OgfD0W3O7Q(a.CAAABjWnHjui8XnJJ2N5oA(), b, c);
    a.DgAABjWnHjui8XnJJ2N5oA();
    d = a;
    return d;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.Update
  type$xUS_aJTWnHjui8XnJJ2N5oA.DgAABjWnHjui8XnJJ2N5oA = function ()
  {
    var a = this, b, c;

    b = null;
    c = (a.CurrentDeck.ggAABsouJj63d8Z1Bh_amow() == null);

    if (!c)
    {

      if (!b)
      {
        b = new ctor$VQUABrMP7z_aQVJdqUhThFA(a, 'FQAABjWnHjui8XnJJ2N5oA');
      }

      yQEABl964D_aaiuMHdBpszA(a.Cards, b);
    }

  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.Add
  type$xUS_aJTWnHjui8XnJJ2N5oA.DwAABjWnHjui8XnJJ2N5oA = function (b)
  {
    var a = this;

    a.Cards.MggABj1h1jWisfyZw_a9KnQ(b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.Add
  type$xUS_aJTWnHjui8XnJJ2N5oA.EAAABjWnHjui8XnJJ2N5oA = function (b)
  {
    var a = this;

    ywEABl964D_aaiuMHdBpszA(b, new ctor$TQUABmdYmDufdNSm2oh5Bw(a, 'DwAABjWnHjui8XnJJ2N5oA'));
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.RevealLastCard
  type$xUS_aJTWnHjui8XnJJ2N5oA.EQAABjWnHjui8XnJJ2N5oA = function ()
  {
    var a = this, b, c;

    c = !!a.Cards.PwgABj1h1jWisfyZw_a9KnQ();

    if (!c)
    {
      return;
    }

    b = FAAABkAVcDWPnLAqFK62WA(a.Cards);
    c = !(b.WgAABq3ydziJJQjrYNUi_aQ() == 1);

    if (!c)
    {
      b.WwAABq3ydziJJQjrYNUi_aQ(0);
    }

  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.GetEnumerator
  type$xUS_aJTWnHjui8XnJJ2N5oA.EgAABjWnHjui8XnJJ2N5oA = function ()
  {
    var a = this, b;

    b = a.Cards.QQgABj1h1jWisfyZw_a9KnQ();
    return b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.<.ctor>b__3
  type$xUS_aJTWnHjui8XnJJ2N5oA.FAAABjWnHjui8XnJJ2N5oA = function (b, c)
  {
    var a = this, d;

    d = !(c.pQEABuUm6T6SExZbuoZS9Q() == 1);

    if (!d)
    {
      a.Cards.OwgABj1h1jWisfyZw_a9KnQ(c.pgEABuUm6T6SExZbuoZS9Q()).TAAABq3ydziJJQjrYNUi_aQ(a);
    }

  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardStack.<Update>b__7
  type$xUS_aJTWnHjui8XnJJ2N5oA.FQAABjWnHjui8XnJJ2N5oA = function (b, c)
  {
    var a = this;

    b.ZAAABq3ydziJJQjrYNUi_aQ();
    b.XwAABq3ydziJJQjrYNUi_aQ(ihAABg2tKzmLMekm9HOjrw((a.LocationX + (a.CardMargin.kwIABvwiPzaM0k_aS9hKUkw() * c))), ihAABg2tKzmLMekm9HOjrw((a.LocationY + (a.CardMargin.lQIABvwiPzaM0k_aS9hKUkw() * c))));
  };

  // ScriptCoreLib.Shared.Avalon.Extensions.ISupportsContainer
  // ScriptCoreLib.Shared.Avalon.Cards.CardStack
  (function (i)  {
    i.PQEABh9EsjiMjQuHaf_bBRw = i.CAAABjWnHjui8XnJJ2N5oA;
    // System.Collections.Generic.IEnumerable`1[[ScriptCoreLib.Shared.Avalon.Cards.Card, ScriptCoreLib.Avalon.Cards, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]
    i.NgEABnMeWzaNooAKOmFm5g = i.EgAABjWnHjui8XnJJ2N5oA;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.EwAABjWnHjui8XnJJ2N5oA;
  }
  )(type$xUS_aJTWnHjui8XnJJ2N5oA);
  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo
  function zDbZPWrUKTyVHTEYLmsu2g(){};
  zDbZPWrUKTyVHTEYLmsu2g.TypeName = "CardInfo";
  zDbZPWrUKTyVHTEYLmsu2g.Assembly = fW7kjxxmukG2yHVFfd1FGg;
  var type$zDbZPWrUKTyVHTEYLmsu2g = zDbZPWrUKTyVHTEYLmsu2g.prototype;
  type$zDbZPWrUKTyVHTEYLmsu2g.constructor = zDbZPWrUKTyVHTEYLmsu2g;
  type$zDbZPWrUKTyVHTEYLmsu2g.Visible = false;
  type$zDbZPWrUKTyVHTEYLmsu2g.IsBlackDeck = false;
  type$zDbZPWrUKTyVHTEYLmsu2g.CustomBackground = null;
  type$zDbZPWrUKTyVHTEYLmsu2g.Rank = 0;
  type$zDbZPWrUKTyVHTEYLmsu2g.Suit = 0;
  var basector$zDbZPWrUKTyVHTEYLmsu2g = $ctor$(null, null, type$zDbZPWrUKTyVHTEYLmsu2g);
  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo..ctor
  type$zDbZPWrUKTyVHTEYLmsu2g.FgAABmrUKTyVHTEYLmsu2g = function (b, c)
  {
    var a = this;

    a.Suit = b;
    a.Rank = c;
  };
  var ctor$FgAABmrUKTyVHTEYLmsu2g = $ctor$(null, 'FgAABmrUKTyVHTEYLmsu2g', type$zDbZPWrUKTyVHTEYLmsu2g);

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.get_ResourceIndex
  type$zDbZPWrUKTyVHTEYLmsu2g.FwAABmrUKTyVHTEYLmsu2g = function ()
  {
    var a = this, b, c;

    b = (((a.Rank - 1) * 4) + a.Suit);
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.get_Description
  type$zDbZPWrUKTyVHTEYLmsu2g.GAAABmrUKTyVHTEYLmsu2g = function ()
  {
    var a = this, b, c, d;

    b = new ctor$_2A8ABndY2TiACykjvGGDOg();
    d = !(a.Rank == 14);

    if (!d)
    {
      b._3Q8ABndY2TiACykjvGGDOg('Joker');
    }
    else
    {
      d = !(a.Rank == 1);

      if (!d)
      {
        b._3Q8ABndY2TiACykjvGGDOg('Ace');
      }
      else
      {
        d = !(a.Rank == 2);

        if (!d)
        {
          b._3Q8ABndY2TiACykjvGGDOg('King');
        }
        else
        {
          d = !(a.Rank == 3);

          if (!d)
          {
            b._3Q8ABndY2TiACykjvGGDOg('Queen');
          }
          else
          {
            d = !(a.Rank == 4);

            if (!d)
            {
              b._3Q8ABndY2TiACykjvGGDOg('Jack');
            }
            else
            {
              b._3Q8ABndY2TiACykjvGGDOg(XxEABrA3fT6ZrCN3llKJ_aA(new Number((15 - a.Rank))));
            }

          }

        }

      }

      b._3Q8ABndY2TiACykjvGGDOg(' Of ');
      d = !(a.Suit == 4);

      if (!d)
      {
        b._3Q8ABndY2TiACykjvGGDOg('Diamonds');
      }

      d = !(a.Suit == 3);

      if (!d)
      {
        b._3Q8ABndY2TiACykjvGGDOg('Hearts');
      }

      d = !(a.Suit == 1);

      if (!d)
      {
        b._3Q8ABndY2TiACykjvGGDOg('Spades');
      }

      d = !(a.Suit == 2);

      if (!d)
      {
        b._3Q8ABndY2TiACykjvGGDOg('Clubs');
      }

    }

    c = (b+'');
    return c;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.get_Width
  function GQAABmrUKTyVHTEYLmsu2g()
  {
    var b;

    b = 72;
    return b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.get_Height
  function GgAABmrUKTyVHTEYLmsu2g()
  {
    var b;

    b = 96;
    return b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.By
  function GwAABmrUKTyVHTEYLmsu2g(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new BogKoyweCjirP_bsY7V1NbA();
    d.suit = b;
    e = mwEABl964D_aaiuMHdBpszA(c, new ctor$YQEABkOkJjGPtTLmBuq5mg(d, '_By_b__0'));
    return e;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.By
  function HAAABmrUKTyVHTEYLmsu2g(b, c)
  {
    var d, e, f;

    d = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    while ((b > 0))
    {
      d.pgAABvqMgj2CW8U7T0nhxg(HQAABmrUKTyVHTEYLmsu2g(c));
      b = (b - 1);
    }
    e = d.ngAABvqMgj2CW8U7T0nhxg();
    return e;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.By
  function HQAABmrUKTyVHTEYLmsu2g(b)
  {
    var c, d, e, f, g, h, i;

    c = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    f = b;

    for (g = 0; (g < f.length); g++)
    {
      d = f[g];
      h = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13
      ];
      c.pgAABvqMgj2CW8U7T0nhxg(GwAABmrUKTyVHTEYLmsu2g(d, h));
    }

    e = c.ngAABvqMgj2CW8U7T0nhxg();
    return e;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.DualDeck
  function HgAABmrUKTyVHTEYLmsu2g()
  {
    var b, c;

    b = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    b.pgAABvqMgj2CW8U7T0nhxg(IAAABmrUKTyVHTEYLmsu2g(0));
    b.pgAABvqMgj2CW8U7T0nhxg(IAAABmrUKTyVHTEYLmsu2g(1));
    c = b.ngAABvqMgj2CW8U7T0nhxg();
    return c;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.FullDeck
  function HwAABmrUKTyVHTEYLmsu2g()
  {
    var b;

    b = IAAABmrUKTyVHTEYLmsu2g(0);
    return b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.FullDeck
  function IAAABmrUKTyVHTEYLmsu2g(b)
  {
    var c, d, e, f, g, h, i;

    f = [
      1,
      2,
      3,
      4
    ];
    c = HQAABmrUKTyVHTEYLmsu2g(f);
    g = c;

    for (h = 0; (h < g.length); h++)
    {
      d = g[h];
      d.IsBlackDeck = b;
    }

    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.GetImagePath
  type$zDbZPWrUKTyVHTEYLmsu2g.IQAABmrUKTyVHTEYLmsu2g = function (b)
  {
    var a = this, c;

    c = IgAABmrUKTyVHTEYLmsu2g(b, a.Visible, a.FwAABmrUKTyVHTEYLmsu2g(), a.CustomBackground, a.IsBlackDeck);
    return c;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.GetImagePath
  function IgAABmrUKTyVHTEYLmsu2g(b, c, d, e, f)
  {
    var g, h, i;

    g = YhEABrA3fT6ZrCN3llKJ_aA(b, '\u002f');
    i = !c;

    if (!i)
    {
      g = YBEABrA3fT6ZrCN3llKJ_aA(g, new Number(d));
    }
    else
    {
      i = (e == null);

      if (!i)
      {
        g = YhEABrA3fT6ZrCN3llKJ_aA(g, e);
      }
      else
      {
        i = !f;

        if (!i)
        {
          g = YhEABrA3fT6ZrCN3llKJ_aA(g, 'b1fv');
        }
        else
        {
          g = YhEABrA3fT6ZrCN3llKJ_aA(g, 'b2fv');
        }

      }

    }

    g = YhEABrA3fT6ZrCN3llKJ_aA(g, '.png');
    h = g;
    return h;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo.get_SuitColor
  type$zDbZPWrUKTyVHTEYLmsu2g.IwAABmrUKTyVHTEYLmsu2g = function ()
  {
    var a = this, b, c;

    c = !(a.Suit == 4);

    if (!c)
    {
      b = 1;
      return b;
    }

    c = !(a.Suit == 3);

    if (!c)
    {
      b = 1;
      return b;
    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.JavaScript.Avalon.Cards.__AssetsImplementationDetails
  function kIBaWHgIozyqk8B6E0aQEQ(){};
  kIBaWHgIozyqk8B6E0aQEQ.TypeName = "AssetsImplementationDetails";
  kIBaWHgIozyqk8B6E0aQEQ.Assembly = fW7kjxxmukG2yHVFfd1FGg;
  var type$kIBaWHgIozyqk8B6E0aQEQ = kIBaWHgIozyqk8B6E0aQEQ.prototype;
  type$kIBaWHgIozyqk8B6E0aQEQ.constructor = kIBaWHgIozyqk8B6E0aQEQ;
  var basector$kIBaWHgIozyqk8B6E0aQEQ = $ctor$(null, null, type$kIBaWHgIozyqk8B6E0aQEQ);
  // ScriptCoreLib.JavaScript.Avalon.Cards.__AssetsImplementationDetails..ctor
  type$kIBaWHgIozyqk8B6E0aQEQ.KQAABngIozyqk8B6E0aQEQ = function ()
  {
    var a = this;

  };
  var ctor$KQAABngIozyqk8B6E0aQEQ = kIBaWHgIozyqk8B6E0aQEQ.ctor = $ctor$(null, 'KQAABngIozyqk8B6E0aQEQ', type$kIBaWHgIozyqk8B6E0aQEQ);

  // ScriptCoreLib.JavaScript.Avalon.Cards.__AssetsImplementationDetails.get_FileNames
  type$kIBaWHgIozyqk8B6E0aQEQ.KAAABngIozyqk8B6E0aQEQ = function ()
  {
    return [
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb2pl.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb1pl.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f6.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f52.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f41.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f30.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fSounds\u002fdrag.mp3',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f7.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f53.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f42.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f31.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f20.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fSounds\u002fhint.mp3',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f8.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f54.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f43.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f32.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f21.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f10.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb2fv.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb1fv.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f9.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f44.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f33.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f22.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f11.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002ffelt.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f45.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f34.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f23.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f12.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fSounds\u002fclick.mp3',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f46.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f35.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f24.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f13.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb2pr.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb2fh.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb1pr.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb1fh.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f47.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f36.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f25.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f14.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fspider.empty.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb2pb.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb1pb.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f48.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f37.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f26.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f15.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fspider.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb2pt.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002fb1pt.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f49.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f38.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f27.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f16.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f39.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f28.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f17.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fSounds\u002flose.mp3',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f29.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f18.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f19.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fSounds\u002fwin.mp3',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f1.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f2.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fSounds\u002fdeal.mp3',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f3.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f50.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f4.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f51.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f5.png',
    'assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards\u002f40.png'
    ];
  };

  // ScriptCoreLib.Shared.Avalon.Cards.KnownAssets
  function M56QnJTMUTCFp_b61Vu973Q(){};
  M56QnJTMUTCFp_b61Vu973Q.TypeName = "KnownAssets";
  M56QnJTMUTCFp_b61Vu973Q.Assembly = fW7kjxxmukG2yHVFfd1FGg;
  var type$M56QnJTMUTCFp_b61Vu973Q = M56QnJTMUTCFp_b61Vu973Q.prototype = new kIBaWHgIozyqk8B6E0aQEQ();
  type$M56QnJTMUTCFp_b61Vu973Q.constructor = M56QnJTMUTCFp_b61Vu973Q;
  var KAAABJTMUTCFp_b61Vu973Q = null;
  var basector$M56QnJTMUTCFp_b61Vu973Q = $ctor$(basector$kIBaWHgIozyqk8B6E0aQEQ, null, type$M56QnJTMUTCFp_b61Vu973Q);
  // ScriptCoreLib.Shared.Avalon.Cards.KnownAssets..ctor
  type$M56QnJTMUTCFp_b61Vu973Q.JgAABpTMUTCFp_b61Vu973Q = function ()
  {
    var a = this;

    a.KQAABngIozyqk8B6E0aQEQ();
  };
  var ctor$JgAABpTMUTCFp_b61Vu973Q = M56QnJTMUTCFp_b61Vu973Q.ctor = $ctor$(basector$kIBaWHgIozyqk8B6E0aQEQ, 'JgAABpTMUTCFp_b61Vu973Q', type$M56QnJTMUTCFp_b61Vu973Q);

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck
  function ErZATnxaFjWXUEhutPG9kQ(){};
  ErZATnxaFjWXUEhutPG9kQ.TypeName = "CardDeck";
  ErZATnxaFjWXUEhutPG9kQ.Assembly = fW7kjxxmukG2yHVFfd1FGg;
  var type$ErZATnxaFjWXUEhutPG9kQ = ErZATnxaFjWXUEhutPG9kQ.prototype;
  type$ErZATnxaFjWXUEhutPG9kQ.constructor = ErZATnxaFjWXUEhutPG9kQ;
  var NwAABHxaFjWXUEhutPG9kQ = null;
  type$ErZATnxaFjWXUEhutPG9kQ.GetRank = null;
  type$ErZATnxaFjWXUEhutPG9kQ.Sounds = null;
  type$ErZATnxaFjWXUEhutPG9kQ.Stacks = null;
  type$ErZATnxaFjWXUEhutPG9kQ.UnusedCards = null;
  type$ErZATnxaFjWXUEhutPG9kQ.CardCustomBackground = null;
  type$ErZATnxaFjWXUEhutPG9kQ.ApplyCardRules = null;
  type$ErZATnxaFjWXUEhutPG9kQ.Cards = null;
  type$ErZATnxaFjWXUEhutPG9kQ.AnimatedMoveToChain = null;
  type$ErZATnxaFjWXUEhutPG9kQ._Container_k__BackingField = null;
  type$ErZATnxaFjWXUEhutPG9kQ._Content_k__BackingField = null;
  type$ErZATnxaFjWXUEhutPG9kQ._Overlay_k__BackingField = null;
  var basector$ErZATnxaFjWXUEhutPG9kQ = $ctor$(null, null, type$ErZATnxaFjWXUEhutPG9kQ);
  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck..ctor
  type$ErZATnxaFjWXUEhutPG9kQ.PAAABnxaFjWXUEhutPG9kQ = function ()
  {
    var a = this, b, c, d, e;

    e = null;
    a.Sounds = new ctor$QAAABuQpAz_avXyXWgz7ifQ();
    a.Stacks = new ctor$QwgABr5jNDK9zhmrNkcmyg();
    a.UnusedCards = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    a.Cards = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    a.AnimatedMoveToChain = new ctor$iwAABp8OAzGU490a8p5wuQ();

    if (!(NwAABHxaFjWXUEhutPG9kQ))
    {
      NwAABHxaFjWXUEhutPG9kQ = new ctor$TQUABmdYmDufdNSm2oh5Bw(null, 'PgAABnxaFjWXUEhutPG9kQ');
    }

    a.AnimatedMoveToChain.jAAABp8OAzGU490a8p5wuQ(NwAABHxaFjWXUEhutPG9kQ).Invoke();
    b = new ctor$WwAABh5ySTCeEJNh8DuEYg();
    b.MwAABpJ65jyB21eK1VwRQA(200);
    b.NQAABpJ65jyB21eK1VwRQA(200);
    a.MQAABnxaFjWXUEhutPG9kQ(b);
    c = new ctor$WwAABh5ySTCeEJNh8DuEYg();
    c.MwAABpJ65jyB21eK1VwRQA(200);
    c.NQAABpJ65jyB21eK1VwRQA(200);
    a.MwAABnxaFjWXUEhutPG9kQ(_9QEABr_bLWDe9OgfD0W3O7Q(c, a));
    d = new ctor$WwAABh5ySTCeEJNh8DuEYg();
    d.UwAABgsbBT_aZtqyqH0ZSXA(YQEABmKK1T2V_bGW3f5LeNA());
    d.MwAABpJ65jyB21eK1VwRQA(200);
    d.NQAABpJ65jyB21eK1VwRQA(200);
    d.DgAABlVNcDa86VHOtLThag(0);
    a.NQAABnxaFjWXUEhutPG9kQ(_9QEABr_bLWDe9OgfD0W3O7Q(d, a));

    if (!e)
    {
      e = new ctor$fxEABsV_bHje7HMBqh73wBw(a, 'PwAABnxaFjWXUEhutPG9kQ');
    }

    a.Stacks.SAgABr5jNDK9zhmrNkcmyg(e);
  };
  var ctor$PAAABnxaFjWXUEhutPG9kQ = ErZATnxaFjWXUEhutPG9kQ.ctor = $ctor$(null, 'PAAABnxaFjWXUEhutPG9kQ', type$ErZATnxaFjWXUEhutPG9kQ);

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.get_Container
  type$ErZATnxaFjWXUEhutPG9kQ.MAAABnxaFjWXUEhutPG9kQ = function ()
  {
    return this._Container_k__BackingField;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.set_Container
  type$ErZATnxaFjWXUEhutPG9kQ.MQAABnxaFjWXUEhutPG9kQ = function (b)
  {
    var a = this;

    a._Container_k__BackingField = b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.get_Content
  type$ErZATnxaFjWXUEhutPG9kQ.MgAABnxaFjWXUEhutPG9kQ = function ()
  {
    return this._Content_k__BackingField;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.set_Content
  type$ErZATnxaFjWXUEhutPG9kQ.MwAABnxaFjWXUEhutPG9kQ = function (b)
  {
    var a = this;

    a._Content_k__BackingField = b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.get_Overlay
  type$ErZATnxaFjWXUEhutPG9kQ.NAAABnxaFjWXUEhutPG9kQ = function ()
  {
    return this._Overlay_k__BackingField;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.set_Overlay
  type$ErZATnxaFjWXUEhutPG9kQ.NQAABnxaFjWXUEhutPG9kQ = function (b)
  {
    var a = this;

    a._Overlay_k__BackingField = b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.get_Fetch
  type$ErZATnxaFjWXUEhutPG9kQ.NgAABnxaFjWXUEhutPG9kQ = function ()
  {
    var a = this, b, c, d;

    d = !!a.UnusedCards.qgAABvqMgj2CW8U7T0nhxg();

    if (!d)
    {
      c = null;
      return c;
    }

    b = xwEABl964D_aaiuMHdBpszA(a.UnusedCards);
    a.UnusedCards.rAAABvqMgj2CW8U7T0nhxg(b);
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.FetchCards
  type$ErZATnxaFjWXUEhutPG9kQ.NwAABnxaFjWXUEhutPG9kQ = function (b)
  {
    var a = this, c, d, e, f;

    c = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    while ((b > 0))
    {
      d = a.OgAABnxaFjWXUEhutPG9kQ();
      f = (d == null);

      if (!f)
      {
        c.pQAABvqMgj2CW8U7T0nhxg(d);
      }

      b = (b - 1);
    }
    e = c.ngAABvqMgj2CW8U7T0nhxg();
    return e;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.add_ApplyCardRules
  type$ErZATnxaFjWXUEhutPG9kQ.OAAABnxaFjWXUEhutPG9kQ = function (b)
  {
    var a = this;

    a.ApplyCardRules = TAoABhNbrTK2juX6Wf4PnQ(a.ApplyCardRules, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.remove_ApplyCardRules
  type$ErZATnxaFjWXUEhutPG9kQ.OQAABnxaFjWXUEhutPG9kQ = function (b)
  {
    var a = this;

    a.ApplyCardRules = TgoABhNbrTK2juX6Wf4PnQ(a.ApplyCardRules, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.get_FetchCard
  type$ErZATnxaFjWXUEhutPG9kQ.OgAABnxaFjWXUEhutPG9kQ = function ()
  {
    var a = this, b, c, d, e;

    b = a.NgAABnxaFjWXUEhutPG9kQ();
    e = (b == null);

    if (!e)
    {
      c = new ctor$XAAABq3ydziJJQjrYNUi_aQ(a, b);
      e = (a.ApplyCardRules == null);

      if (!e)
      {
        a.ApplyCardRules.Invoke(c);
      }

      a.Cards.pQAABvqMgj2CW8U7T0nhxg(c);
      d = c;
      return d;
    }

    d = null;
    return d;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.SizeTo
  type$ErZATnxaFjWXUEhutPG9kQ.OwAABnxaFjWXUEhutPG9kQ = function (b, c)
  {
    var a = this;

    a.MAAABnxaFjWXUEhutPG9kQ().MwAABpJ65jyB21eK1VwRQA(b);
    a.MAAABnxaFjWXUEhutPG9kQ().NQAABpJ65jyB21eK1VwRQA(c);
    a.MgAABnxaFjWXUEhutPG9kQ().MwAABpJ65jyB21eK1VwRQA(b);
    a.MgAABnxaFjWXUEhutPG9kQ().NQAABpJ65jyB21eK1VwRQA(c);
    a.NAAABnxaFjWXUEhutPG9kQ().MwAABpJ65jyB21eK1VwRQA(b);
    a.NAAABnxaFjWXUEhutPG9kQ().NQAABpJ65jyB21eK1VwRQA(c);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.CreateStackList
  type$ErZATnxaFjWXUEhutPG9kQ.PQAABnxaFjWXUEhutPG9kQ = function ()
  {
    var a = this, b, c;

    b = /* DOMCreateType */new eJEfpCB3ODGVjeq3aH_bDVA();
    b.__4__this = a;
    b.p = new ctor$QwgABr5jNDK9zhmrNkcmyg();
    b.s = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    b.p.SAgABr5jNDK9zhmrNkcmyg(new ctor$fxEABsV_bHje7HMBqh73wBw(b, '_CreateStackList_b__7'));
    c = b.p;
    return c;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.<.ctor>b__3
  function PgAABnxaFjWXUEhutPG9kQ(b)
  {
    b.Invoke();
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck.<.ctor>b__4
  type$ErZATnxaFjWXUEhutPG9kQ.PwAABnxaFjWXUEhutPG9kQ = function (b, c)
  {
    var a = this, d, e;

    e = !(c.pQEABuUm6T6SExZbuoZS9Q() == 1);

    if (!e)
    {
      d = a.Stacks.OwgABj1h1jWisfyZw_a9KnQ(c.pgEABuUm6T6SExZbuoZS9Q());
      d.CurrentDeck.gwAABsouJj63d8Z1Bh_amow(a);
      _9wEABr_bLWDe9OgfD0W3O7Q(d);
      _8wEABr_bLWDe9OgfD0W3O7Q(d, a.MgAABnxaFjWXUEhutPG9kQ());
      d.DgAABjWnHjui8XnJJ2N5oA();
    }

  };

  // ScriptCoreLib.Shared.Avalon.Extensions.ISupportsContainer
  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck
  (function (i)  {
    i.PQEABh9EsjiMjQuHaf_bBRw = i.MAAABnxaFjWXUEhutPG9kQ;
  }
  )(type$ErZATnxaFjWXUEhutPG9kQ);
  // ScriptCoreLib.Shared.Avalon.Cards.Sounds
  function BVc_aduQpAz_avXyXWgz7ifQ(){};
  BVc_aduQpAz_avXyXWgz7ifQ.TypeName = "Sounds";
  BVc_aduQpAz_avXyXWgz7ifQ.Assembly = fW7kjxxmukG2yHVFfd1FGg;
  var type$BVc_aduQpAz_avXyXWgz7ifQ = BVc_aduQpAz_avXyXWgz7ifQ.prototype;
  type$BVc_aduQpAz_avXyXWgz7ifQ.constructor = BVc_aduQpAz_avXyXWgz7ifQ;
  var PAAABOQpAz_avXyXWgz7ifQ = null;
  var PQAABOQpAz_avXyXWgz7ifQ = null;
  var PgAABOQpAz_avXyXWgz7ifQ = null;
  var PwAABOQpAz_avXyXWgz7ifQ = null;
  type$BVc_aduQpAz_avXyXWgz7ifQ.deal = null;
  type$BVc_aduQpAz_avXyXWgz7ifQ.click = null;
  type$BVc_aduQpAz_avXyXWgz7ifQ.drag = null;
  type$BVc_aduQpAz_avXyXWgz7ifQ.win = null;
  var basector$BVc_aduQpAz_avXyXWgz7ifQ = $ctor$(null, null, type$BVc_aduQpAz_avXyXWgz7ifQ);
  // ScriptCoreLib.Shared.Avalon.Cards.Sounds..ctor
  type$BVc_aduQpAz_avXyXWgz7ifQ.QAAABuQpAz_avXyXWgz7ifQ = function ()
  {
    var a = this;


    if (!(PAAABOQpAz_avXyXWgz7ifQ))
    {
      PAAABOQpAz_avXyXWgz7ifQ = new ctor$UQUABuzqfTWQzxgi2Ip02g(null, 'QQAABuQpAz_avXyXWgz7ifQ');
    }

    a.deal = PAAABOQpAz_avXyXWgz7ifQ;

    if (!(PQAABOQpAz_avXyXWgz7ifQ))
    {
      PQAABOQpAz_avXyXWgz7ifQ = new ctor$UQUABuzqfTWQzxgi2Ip02g(null, 'QgAABuQpAz_avXyXWgz7ifQ');
    }

    a.click = PQAABOQpAz_avXyXWgz7ifQ;

    if (!(PgAABOQpAz_avXyXWgz7ifQ))
    {
      PgAABOQpAz_avXyXWgz7ifQ = new ctor$UQUABuzqfTWQzxgi2Ip02g(null, 'QwAABuQpAz_avXyXWgz7ifQ');
    }

    a.drag = PgAABOQpAz_avXyXWgz7ifQ;

    if (!(PwAABOQpAz_avXyXWgz7ifQ))
    {
      PwAABOQpAz_avXyXWgz7ifQ = new ctor$UQUABuzqfTWQzxgi2Ip02g(null, 'RAAABuQpAz_avXyXWgz7ifQ');
    }

    a.win = PwAABOQpAz_avXyXWgz7ifQ;
  };
  var ctor$QAAABuQpAz_avXyXWgz7ifQ = BVc_aduQpAz_avXyXWgz7ifQ.ctor = $ctor$(null, 'QAAABuQpAz_avXyXWgz7ifQ', type$BVc_aduQpAz_avXyXWgz7ifQ);

  // ScriptCoreLib.Shared.Avalon.Cards.Sounds.<.ctor>b__0
  function QQAABuQpAz_avXyXWgz7ifQ()
  {
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Sounds.<.ctor>b__1
  function QgAABuQpAz_avXyXWgz7ifQ()
  {
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Sounds.<.ctor>b__2
  function QwAABuQpAz_avXyXWgz7ifQ()
  {
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Sounds.<.ctor>b__3
  function RAAABuQpAz_avXyXWgz7ifQ()
  {
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card
  function vkDFSa3ydziJJQjrYNUi_aQ(){};
  vkDFSa3ydziJJQjrYNUi_aQ.TypeName = "Card";
  vkDFSa3ydziJJQjrYNUi_aQ.Assembly = fW7kjxxmukG2yHVFfd1FGg;
  var type$vkDFSa3ydziJJQjrYNUi_aQ = vkDFSa3ydziJJQjrYNUi_aQ.prototype;
  type$vkDFSa3ydziJJQjrYNUi_aQ.constructor = vkDFSa3ydziJJQjrYNUi_aQ;
  type$vkDFSa3ydziJJQjrYNUi_aQ.Info = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.CurrentDeck = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.Click = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.DoubleClick = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.Moved = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.MovedByLocalPlayer = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.ValidateDragStart = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.ValidateDragStop = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.ImageTopSide = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.ImageBackSide = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ._VisibleSide = 0;
  type$vkDFSa3ydziJJQjrYNUi_aQ.Drag = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ.LocationX = 0;
  type$vkDFSa3ydziJJQjrYNUi_aQ.LocationY = 0;
  type$vkDFSa3ydziJJQjrYNUi_aQ.ApprovedLocationX = 0;
  type$vkDFSa3ydziJJQjrYNUi_aQ.ApprovedLocationY = 0;
  type$vkDFSa3ydziJJQjrYNUi_aQ.AnimatedMoveToActive = false;
  type$vkDFSa3ydziJJQjrYNUi_aQ.AnimatedOpacityEmitter = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ._Container_k__BackingField = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ._Overlay_k__BackingField = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ._PreviousStack_k__BackingField = null;
  type$vkDFSa3ydziJJQjrYNUi_aQ._CurrentStack_k__BackingField = null;
  var basector$vkDFSa3ydziJJQjrYNUi_aQ = $ctor$(null, null, type$vkDFSa3ydziJJQjrYNUi_aQ);
  // ScriptCoreLib.Shared.Avalon.Cards.Card..ctor
  type$vkDFSa3ydziJJQjrYNUi_aQ.XAAABq3ydziJJQjrYNUi_aQ = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j;

    i = null;
    a.AnimatedMoveToActive = 0;
    j = !(b == null);

    if (!j)
    {
      throw uQAABk_asWDSwkuY60zLcKw('deck');
    }

    e = new ctor$WwAABh5ySTCeEJNh8DuEYg();
    e.MwAABpJ65jyB21eK1VwRQA(GQAABmrUKTyVHTEYLmsu2g());
    e.NQAABpJ65jyB21eK1VwRQA(GgAABmrUKTyVHTEYLmsu2g());
    a.RgAABq3ydziJJQjrYNUi_aQ(e);
    f = new ctor$_5gIABpYTujiF_bhfs_aAk4qg();
    f.ngIABlpSSjOkUWo5xp7BBA(XQEABmKK1T2V_bGW3f5LeNA());
    f.MwAABpJ65jyB21eK1VwRQA(GQAABmrUKTyVHTEYLmsu2g());
    f.NQAABpJ65jyB21eK1VwRQA(GgAABmrUKTyVHTEYLmsu2g());
    a.SAAABq3ydziJJQjrYNUi_aQ(f);
    d = b.CardCustomBackground;
    j = !(d == null);

    if (!j)
    {
      d = IgAABmrUKTyVHTEYLmsu2g('assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards', 0, 0, null, 0);
    }

    g = new ctor$fAIABrhSLzuJ75ou_ayKGnQ();
    g.gAIABrhSLzuJ75ou_ayKGnQ(bwIABsRwlTqY1HAn8xDgVQ(d));
    g.MwAABpJ65jyB21eK1VwRQA(GQAABmrUKTyVHTEYLmsu2g());
    g.NQAABpJ65jyB21eK1VwRQA(GgAABmrUKTyVHTEYLmsu2g());
    a.ImageBackSide = _9QEABr_bLWDe9OgfD0W3O7Q(g, a);
    c.Visible = 1;
    h = new ctor$fAIABrhSLzuJ75ou_ayKGnQ();
    h.gAIABrhSLzuJ75ou_ayKGnQ(bwIABsRwlTqY1HAn8xDgVQ(c.IQAABmrUKTyVHTEYLmsu2g('assets\u002fScriptCoreLib.Avalon.Cards\u002fDefaultCards')));
    h.MwAABpJ65jyB21eK1VwRQA(GQAABmrUKTyVHTEYLmsu2g());
    h.NQAABpJ65jyB21eK1VwRQA(GgAABmrUKTyVHTEYLmsu2g());
    a.ImageTopSide = _9QEABr_bLWDe9OgfD0W3O7Q(h, a);
    a.WwAABq3ydziJJQjrYNUi_aQ(1);
    a.CurrentDeck = b;
    _8gEABr_bLWDe9OgfD0W3O7Q(a.RwAABq3ydziJJQjrYNUi_aQ(), b.NAAABnxaFjWXUEhutPG9kQ());
    a.Drag = new ctor$AQAABrZRhzyCDMJfeGaooQ(a);
    a.Info = c;

    if (!i)
    {
      i = new ctor$_6gEABuL9XjqWIV_aAkZPK3w(a, 'bAAABq3ydziJJQjrYNUi_aQ');
    }

    a.RwAABq3ydziJJQjrYNUi_aQ().FwAABlVNcDa86VHOtLThag(i);
    a.agAABq3ydziJJQjrYNUi_aQ(1);
  };
  var ctor$XAAABq3ydziJJQjrYNUi_aQ = $ctor$(null, 'XAAABq3ydziJJQjrYNUi_aQ', type$vkDFSa3ydziJJQjrYNUi_aQ);

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_Container
  type$vkDFSa3ydziJJQjrYNUi_aQ.RQAABq3ydziJJQjrYNUi_aQ = function ()
  {
    return this._Container_k__BackingField;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.set_Container
  type$vkDFSa3ydziJJQjrYNUi_aQ.RgAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a._Container_k__BackingField = b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_Overlay
  type$vkDFSa3ydziJJQjrYNUi_aQ.RwAABq3ydziJJQjrYNUi_aQ = function ()
  {
    return this._Overlay_k__BackingField;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.set_Overlay
  type$vkDFSa3ydziJJQjrYNUi_aQ.SAAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a._Overlay_k__BackingField = b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_PreviousStack
  type$vkDFSa3ydziJJQjrYNUi_aQ.SQAABq3ydziJJQjrYNUi_aQ = function ()
  {
    return this._PreviousStack_k__BackingField;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.set_PreviousStack
  type$vkDFSa3ydziJJQjrYNUi_aQ.SgAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a._PreviousStack_k__BackingField = b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_CurrentStack
  type$vkDFSa3ydziJJQjrYNUi_aQ.SwAABq3ydziJJQjrYNUi_aQ = function ()
  {
    return this._CurrentStack_k__BackingField;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.set_CurrentStack
  type$vkDFSa3ydziJJQjrYNUi_aQ.TAAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a._CurrentStack_k__BackingField = b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.op_Implicit
  function TQAABq3ydziJJQjrYNUi_aQ(b)
  {
    var c;

    c = b.SwAABq3ydziJJQjrYNUi_aQ();
    return c;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.ToString
  type$vkDFSa3ydziJJQjrYNUi_aQ.toString /* ScriptCoreLib.Shared.Avalon.Cards.Card.ToString */ = function ()
  {
    var a = this, b;

    b = a.Info.GAAABmrUKTyVHTEYLmsu2g();
    return b;
  };
    vkDFSa3ydziJJQjrYNUi_aQ.prototype.toString /* System.Object.ToString */ = vkDFSa3ydziJJQjrYNUi_aQ.prototype.toString /* ScriptCoreLib.Shared.Avalon.Cards.Card.ToString */;

  // ScriptCoreLib.Shared.Avalon.Cards.Card.add_Click
  type$vkDFSa3ydziJJQjrYNUi_aQ.TwAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.Click = TAoABhNbrTK2juX6Wf4PnQ(a.Click, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.remove_Click
  type$vkDFSa3ydziJJQjrYNUi_aQ.UAAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.Click = TgoABhNbrTK2juX6Wf4PnQ(a.Click, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.add_DoubleClick
  type$vkDFSa3ydziJJQjrYNUi_aQ.UQAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.DoubleClick = TAoABhNbrTK2juX6Wf4PnQ(a.DoubleClick, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.remove_DoubleClick
  type$vkDFSa3ydziJJQjrYNUi_aQ.UgAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.DoubleClick = TgoABhNbrTK2juX6Wf4PnQ(a.DoubleClick, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.add_Moved
  type$vkDFSa3ydziJJQjrYNUi_aQ.UwAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.Moved = TAoABhNbrTK2juX6Wf4PnQ(a.Moved, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.remove_Moved
  type$vkDFSa3ydziJJQjrYNUi_aQ.VAAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.Moved = TgoABhNbrTK2juX6Wf4PnQ(a.Moved, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.add_MovedByLocalPlayer
  type$vkDFSa3ydziJJQjrYNUi_aQ.VQAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.MovedByLocalPlayer = TAoABhNbrTK2juX6Wf4PnQ(a.MovedByLocalPlayer, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.remove_MovedByLocalPlayer
  type$vkDFSa3ydziJJQjrYNUi_aQ.VgAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.MovedByLocalPlayer = TgoABhNbrTK2juX6Wf4PnQ(a.MovedByLocalPlayer, b);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.AttachToStack
  type$vkDFSa3ydziJJQjrYNUi_aQ.VwAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.WAAABq3ydziJJQjrYNUi_aQ(b, null);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.AttachToStack
  type$vkDFSa3ydziJJQjrYNUi_aQ.WAAABq3ydziJJQjrYNUi_aQ = function (b, c)
  {
    var a = this, d, e;

    d = a;
    e = (d.SwAABq3ydziJJQjrYNUi_aQ() == null);

    if (!e)
    {
      d.SwAABq3ydziJJQjrYNUi_aQ().Cards.NQgABj1h1jWisfyZw_a9KnQ(d);
    }

    d.SgAABq3ydziJJQjrYNUi_aQ(d.SwAABq3ydziJJQjrYNUi_aQ());
    d.TAAABq3ydziJJQjrYNUi_aQ(b);
    b.Cards.MggABj1h1jWisfyZw_a9KnQ(d);
    e = (a.Moved == null);

    if (!e)
    {
      a.Moved.Invoke();
    }

    e = (c == null);

    if (!e)
    {
      jgAABlEkXDuoViPsjb55BQ(c, new ctor$UQUABuzqfTWQzxgi2Ip02g(a, 'awAABq3ydziJJQjrYNUi_aQ'));
    }

  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_Rank
  type$vkDFSa3ydziJJQjrYNUi_aQ.WQAABq3ydziJJQjrYNUi_aQ = function ()
  {
    var a = this, b, c;

    c = !(a.CurrentDeck.GetRank == null);

    if (!c)
    {
      b = a.Info.Rank;
      return b;
    }

    b = a.CurrentDeck.GetRank.Invoke(a.Info.Rank);
    return b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_VisibleSide
  type$vkDFSa3ydziJJQjrYNUi_aQ.WgAABq3ydziJJQjrYNUi_aQ = function ()
  {
    var a = this, b;

    b = a._VisibleSide;
    return b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.set_VisibleSide
  type$vkDFSa3ydziJJQjrYNUi_aQ.WwAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this, c;

    a._VisibleSide = b;
    c = !!b;

    if (!c)
    {
      a.ImageTopSide.IAAABlVNcDa86VHOtLThag(0);
      a.ImageBackSide.IAAABlVNcDa86VHOtLThag(1);
      a.RwAABq3ydziJJQjrYNUi_aQ().OAAABpJ65jyB21eK1VwRQA(WAIABvpQnzqubdqD6reqmg());
      return;
    }

    a.ImageTopSide.IAAABlVNcDa86VHOtLThag(1);
    a.ImageBackSide.IAAABlVNcDa86VHOtLThag(0);
    a.RwAABq3ydziJJQjrYNUi_aQ().OAAABpJ65jyB21eK1VwRQA(WgIABvpQnzqubdqD6reqmg());
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_LocationInStack
  type$vkDFSa3ydziJJQjrYNUi_aQ.XQAABq3ydziJJQjrYNUi_aQ = function ()
  {
    var a = this, b, c, d, e;

    b = new ctor$WgEABv73RTWSJr0jb0lPAg();
    c = a.SwAABq3ydziJJQjrYNUi_aQ();
    e = (c == null);

    if (!e)
    {
      b.VgEABv73RTWSJr0jb0lPAg((c.LocationX + (c.CardMargin.kwIABvwiPzaM0k_aS9hKUkw() * c.Cards.OAgABj1h1jWisfyZw_a9KnQ(a))));
      b.WAEABv73RTWSJr0jb0lPAg((c.LocationY + (c.CardMargin.lQIABvwiPzaM0k_aS9hKUkw() * c.Cards.OAgABj1h1jWisfyZw_a9KnQ(a))));
    }

    d = b;
    return d;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.MoveSelectionTo
  type$vkDFSa3ydziJJQjrYNUi_aQ.XgAABq3ydziJJQjrYNUi_aQ = function (b, c)
  {
    var a = this, d;

    d = /* DOMCreateType */new R_bxJvXxtMTe_ai5HJpFG7Vg();
    d.x = b;
    d.y = c;
    d.__4__this = a;
    a.XwAABq3ydziJJQjrYNUi_aQ(d.x, d.y);
    yQEABl964D_aaiuMHdBpszA(a.ZwAABq3ydziJJQjrYNUi_aQ(), new ctor$VQUABrMP7z_aQVJdqUhThFA(d, '_MoveSelectionTo_b__7'));
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.MoveTo
  type$vkDFSa3ydziJJQjrYNUi_aQ.XwAABq3ydziJJQjrYNUi_aQ = function (b, c)
  {
    var a = this;

    a.LocationX = b;
    a.LocationY = c;
    _7wEABr_bLWDe9OgfD0W3O7Q(a.RwAABq3ydziJJQjrYNUi_aQ(), b, c);
    _7wEABr_bLWDe9OgfD0W3O7Q(a.RQAABq3ydziJJQjrYNUi_aQ(), b, c);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.AnimatedMoveTo
  type$vkDFSa3ydziJJQjrYNUi_aQ.YAAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this;

    a.YgAABq3ydziJJQjrYNUi_aQ(ihAABg2tKzmLMekm9HOjrw(b.VQEABv73RTWSJr0jb0lPAg()), ihAABg2tKzmLMekm9HOjrw(b.VwEABv73RTWSJr0jb0lPAg()));
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.AnimatedMoveTo
  type$vkDFSa3ydziJJQjrYNUi_aQ.YQAABq3ydziJJQjrYNUi_aQ = function (b, c)
  {
    var a = this;

    a.YwAABq3ydziJJQjrYNUi_aQ(ihAABg2tKzmLMekm9HOjrw(b.VQEABv73RTWSJr0jb0lPAg()), ihAABg2tKzmLMekm9HOjrw(b.VwEABv73RTWSJr0jb0lPAg()), c);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.AnimatedMoveTo
  type$vkDFSa3ydziJJQjrYNUi_aQ.YgAABq3ydziJJQjrYNUi_aQ = function (b, c)
  {
    var a = this, d;

    d = /* DOMCreateType */new Pom_beyFR5Dyee8wBDYmTVg();
    d.LocationX = b;
    d.LocationY = c;
    d.__4__this = a;
    a.CurrentDeck.AnimatedMoveToChain.jAAABp8OAzGU490a8p5wuQ(new ctor$TQUABmdYmDufdNSm2oh5Bw(d, '_AnimatedMoveTo_b__a'));
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.AnimatedMoveTo
  type$vkDFSa3ydziJJQjrYNUi_aQ.YwAABq3ydziJJQjrYNUi_aQ = function (b, c, d)
  {
    var a = this, e, f;

    f = /* DOMCreateType */new _7fy6Vua_a5zylhApuV43AOg();
    f.LocationX = b;
    f.LocationY = c;
    f.SignalNext = d;
    f.__4__this = a;
    f.ox = a.LocationX;
    f.oy = a.LocationY;
    e = wgAABpnjETylN96cbaLm9w(NAEABp8FRDmHYGOgHrnIbg(new ctor$VQUABrMP7z_aQVJdqUhThFA(f, '_AnimatedMoveTo_b__d')));
    a.AnimatedMoveToActive = 1;
    e.Invoke(f.ox, f.oy);
    e.Invoke(f.LocationX, f.LocationY);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.BringToFront
  type$vkDFSa3ydziJJQjrYNUi_aQ.ZAAABq3ydziJJQjrYNUi_aQ = function ()
  {
    var a = this;

    _9gEABr_bLWDe9OgfD0W3O7Q(a.RQAABq3ydziJJQjrYNUi_aQ());
    _8gEABr_bLWDe9OgfD0W3O7Q(a.RQAABq3ydziJJQjrYNUi_aQ(), a.CurrentDeck.MgAABnxaFjWXUEhutPG9kQ());
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.BringOverlayToFront
  type$vkDFSa3ydziJJQjrYNUi_aQ.ZQAABq3ydziJJQjrYNUi_aQ = function ()
  {
    var a = this;

    _9gEABr_bLWDe9OgfD0W3O7Q(a.RwAABq3ydziJJQjrYNUi_aQ());
    _8gEABr_bLWDe9OgfD0W3O7Q(a.RwAABq3ydziJJQjrYNUi_aQ(), a.CurrentDeck.NAAABnxaFjWXUEhutPG9kQ());
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_SelectedCards
  type$vkDFSa3ydziJJQjrYNUi_aQ.ZgAABq3ydziJJQjrYNUi_aQ = function ()
  {
    var a = this, b, c;

    c = [
      a
    ];
    b = AwAABkAVcDWPnLAqFK62WA(c, a.ZwAABq3ydziJJQjrYNUi_aQ());
    return b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_StackedCards
  type$vkDFSa3ydziJJQjrYNUi_aQ.ZwAABq3ydziJJQjrYNUi_aQ = function ()
  {
    var a = this, b, c, d, e, f;

    b = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    f = (a.SwAABq3ydziJJQjrYNUi_aQ() == null);

    if (!f)
    {
      c = a.SwAABq3ydziJJQjrYNUi_aQ().Cards.OAgABj1h1jWisfyZw_a9KnQ(a);
      f = !(c > -1);

      if (!f)
      {

        for (d = (c + 1); (d < a.SwAABq3ydziJJQjrYNUi_aQ().Cards.PwgABj1h1jWisfyZw_a9KnQ()); d++)
        {
          b.pQAABvqMgj2CW8U7T0nhxg(a.SwAABq3ydziJJQjrYNUi_aQ().Cards.OwgABj1h1jWisfyZw_a9KnQ(d));
        }

      }

    }

    e = b.ngAABvqMgj2CW8U7T0nhxg();
    return e;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.AnimatedMoveToStack
  type$vkDFSa3ydziJJQjrYNUi_aQ.aAAABq3ydziJJQjrYNUi_aQ = function (b, c)
  {
    var a = this, d;

    d = /* DOMCreateType */new KbmazXNMrj24H58MgBNz8g();
    d.CandidateStack = b;
    d.GroupMovedByLocalPlayer = c;
    d.__4__this = a;
    a.CurrentDeck.AnimatedMoveToChain.jAAABp8OAzGU490a8p5wuQ(new ctor$TQUABmdYmDufdNSm2oh5Bw(d, '_AnimatedMoveToStack_b__10'));
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.get_AnimatedOpacity
  type$vkDFSa3ydziJJQjrYNUi_aQ.aQAABq3ydziJJQjrYNUi_aQ = function ()
  {
    var a = this, b;

    b = a.RQAABq3ydziJJQjrYNUi_aQ().DQAABlVNcDa86VHOtLThag();
    return b;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.set_AnimatedOpacity
  type$vkDFSa3ydziJJQjrYNUi_aQ.agAABq3ydziJJQjrYNUi_aQ = function (b)
  {
    var a = this, c, d;

    c = null;
    d = !(a.AnimatedOpacityEmitter == null);

    if (!d)
    {

      if (!c)
      {
        c = new ctor$VQUABrMP7z_aQVJdqUhThFA(a, 'bQAABq3ydziJJQjrYNUi_aQ');
      }

      a.AnimatedOpacityEmitter = wgAABpnjETylN96cbaLm9w(NAEABp8FRDmHYGOgHrnIbg(c));
    }

    a.AnimatedOpacityEmitter.Invoke(ihAABg2tKzmLMekm9HOjrw((b * 100)), 0);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.<AttachToStack>b__0
  type$vkDFSa3ydziJJQjrYNUi_aQ.awAABq3ydziJJQjrYNUi_aQ = function ()
  {
    var a = this, b;

    b = (a.MovedByLocalPlayer == null);

    if (!b)
    {
      a.MovedByLocalPlayer.Invoke();
    }

  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.<.ctor>b__5
  type$vkDFSa3ydziJJQjrYNUi_aQ.bAAABq3ydziJJQjrYNUi_aQ = function (b, c)
  {
    var a = this, d;

    a.CurrentDeck.Sounds.click.Invoke();
    d = (a.Click == null);

    if (!d)
    {
      a.Click.Invoke();
    }

    d = (a.SwAABq3ydziJJQjrYNUi_aQ() == null);

    if (!d)
    {
      a.SwAABq3ydziJJQjrYNUi_aQ().BwAABjWnHjui8XnJJ2N5oA(a);
    }

  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card.<set_AnimatedOpacity>b__18
  type$vkDFSa3ydziJJQjrYNUi_aQ.bQAABq3ydziJJQjrYNUi_aQ = function (b, c)
  {
    var a = this;

    a.RQAABq3ydziJJQjrYNUi_aQ().DgAABlVNcDa86VHOtLThag((b * 0.01));
  };

  // ScriptCoreLib.Shared.Avalon.Extensions.ISupportsContainer
  // ScriptCoreLib.Shared.Avalon.Cards.Card
  (function (i)  {
    i.PQEABh9EsjiMjQuHaf_bBRw = i.RQAABq3ydziJJQjrYNUi_aQ;
  }
  )(type$vkDFSa3ydziJJQjrYNUi_aQ);
  // Anonymous type
  function hW4mKYNsBDmVk00wZ1hiWg() {}  var type$hW4mKYNsBDmVk00wZ1hiWg = hW4mKYNsBDmVk00wZ1hiWg.prototype;
  type$hW4mKYNsBDmVk00wZ1hiWg.constructor = hW4mKYNsBDmVk00wZ1hiWg;
  type$hW4mKYNsBDmVk00wZ1hiWg._x_i__Field = null;
  type$hW4mKYNsBDmVk00wZ1hiWg._y_i__Field = null;
  type$hW4mKYNsBDmVk00wZ1hiWg._CandidateStack_i__Field = null;
  type$hW4mKYNsBDmVk00wZ1hiWg._CurrentStack_i__Field = null;
  // <>f__AnonymousType0`4.get_x
  type$hW4mKYNsBDmVk00wZ1hiWg.get_x = function ()
  {
    return this._x_i__Field;
  };

  // <>f__AnonymousType0`4.get_y
  type$hW4mKYNsBDmVk00wZ1hiWg.get_y = function ()
  {
    return this._y_i__Field;
  };

  // <>f__AnonymousType0`4.get_CandidateStack
  type$hW4mKYNsBDmVk00wZ1hiWg.get_CandidateStack = function ()
  {
    return this._CandidateStack_i__Field;
  };

  // <>f__AnonymousType0`4.get_CurrentStack
  type$hW4mKYNsBDmVk00wZ1hiWg.get_CurrentStack = function ()
  {
    return this._CurrentStack_i__Field;
  };

  // <>f__AnonymousType0`4.ToString
  type$hW4mKYNsBDmVk00wZ1hiWg.toString /* <>f__AnonymousType0`4.ToString */ = function ()
  {
    var a = this, b, c;

    b = new ctor$_2A8ABndY2TiACykjvGGDOg();
    b._3Q8ABndY2TiACykjvGGDOg('{ x = ');
    b._3g8ABndY2TiACykjvGGDOg(a._x_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(', y = ');
    b._3g8ABndY2TiACykjvGGDOg(a._y_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(', CandidateStack = ');
    b._3g8ABndY2TiACykjvGGDOg(a._CandidateStack_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(', CurrentStack = ');
    b._3g8ABndY2TiACykjvGGDOg(a._CurrentStack_i__Field);
    b._3Q8ABndY2TiACykjvGGDOg(' }');
    c = (b+'');
    return c;
  };
    hW4mKYNsBDmVk00wZ1hiWg.prototype.toString /* System.Object.ToString */ = hW4mKYNsBDmVk00wZ1hiWg.prototype.toString /* <>f__AnonymousType0`4.ToString */;

  // <>f__AnonymousType0`4.Equals
  type$hW4mKYNsBDmVk00wZ1hiWg.Equals = function (b)
  {
    throw 'Not implemented, Equals';
  };
    hW4mKYNsBDmVk00wZ1hiWg.prototype.AwAABnwCHD6Y1dqcmGKqIQ = hW4mKYNsBDmVk00wZ1hiWg.prototype.Equals;

  // <>f__AnonymousType0`4.GetHashCode
  type$hW4mKYNsBDmVk00wZ1hiWg.GetHashCode = function ()
  {
    throw 'Not implemented, GetHashCode';
  };
    hW4mKYNsBDmVk00wZ1hiWg.prototype.BwAABnwCHD6Y1dqcmGKqIQ = hW4mKYNsBDmVk00wZ1hiWg.prototype.GetHashCode;

  // <>f__AnonymousType0`4..ctor
  type$hW4mKYNsBDmVk00wZ1hiWg.bgAABoNsBDmVk00wZ1hiWg = function (b, c, d, e)
  {
    var a = this;

    a._x_i__Field = b;
    a._y_i__Field = c;
    a._CandidateStack_i__Field = d;
    a._CurrentStack_i__Field = e;
  };
  var ctor$bgAABoNsBDmVk00wZ1hiWg = $ctor$(null, 'bgAABoNsBDmVk00wZ1hiWg', type$hW4mKYNsBDmVk00wZ1hiWg);
  // Closure type
  function YhXq_aiFJzD6C5tVRlCAEDw() {}  var type$YhXq_aiFJzD6C5tVRlCAEDw = YhXq_aiFJzD6C5tVRlCAEDw.prototype;
  type$YhXq_aiFJzD6C5tVRlCAEDw.constructor = YhXq_aiFJzD6C5tVRlCAEDw;
  type$YhXq_aiFJzD6C5tVRlCAEDw.card = null;
  // Closure type
  function k2C4COuckziRC0GcUcro7A() {}  var type$k2C4COuckziRC0GcUcro7A = k2C4COuckziRC0GcUcro7A.prototype;
  type$k2C4COuckziRC0GcUcro7A.constructor = k2C4COuckziRC0GcUcro7A;
  var YwAABOuckziRC0GcUcro7A = null;
  var ZAAABOuckziRC0GcUcro7A = null;
  type$k2C4COuckziRC0GcUcro7A.CS___8__localsc = null;
  type$k2C4COuckziRC0GcUcro7A.offset = null;
  type$k2C4COuckziRC0GcUcro7A.drag = false;
  type$k2C4COuckziRC0GcUcro7A.OverlayContainer = null;
  type$k2C4COuckziRC0GcUcro7A.CandidateStack = null;
  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd.<.ctor>b__1
  type$k2C4COuckziRC0GcUcro7A.__ctor_b__1 = function (b, c)
  {
    var a = this, d, e, f;

    e = !a.drag;

    if (!e)
    {
      return;
    }

    e = !(a.CS___8__localsc.card.WgAABq3ydziJJQjrYNUi_aQ() == 1);

    if (!e)
    {
      return;
    }


    if (!(YwAABOuckziRC0GcUcro7A))
    {
      YwAABOuckziRC0GcUcro7A = new ctor$YQEABkOkJjGPtTLmBuq5mg(null, 'ewAABuuckziRC0GcUcro7A');
    }

    e = !CwAABkAVcDWPnLAqFK62WA(a.CS___8__localsc.card.ZgAABq3ydziJJQjrYNUi_aQ(), YwAABOuckziRC0GcUcro7A);

    if (!e)
    {
      return;
    }

    e = (a.CS___8__localsc.card.ValidateDragStart == null);

    if (!e)
    {
      e = a.CS___8__localsc.card.ValidateDragStart.Invoke();

      if (!e)
      {
        return;
      }

    }

    a.offset = c.GAIABh93Pj2k8gEjdybf_aQ(a.CS___8__localsc.card.RwAABq3ydziJJQjrYNUi_aQ());
    a.drag = 1;

    if (!(ZAAABOuckziRC0GcUcro7A))
    {
      ZAAABOuckziRC0GcUcro7A = new ctor$TQUABmdYmDufdNSm2oh5Bw(null, 'fAAABuuckziRC0GcUcro7A');
    }

    ywEABl964D_aaiuMHdBpszA(a.CS___8__localsc.card.ZgAABq3ydziJJQjrYNUi_aQ(), ZAAABOuckziRC0GcUcro7A);
    f = a.CS___8__localsc.card.CurrentDeck.Cards.rgAABvqMgj2CW8U7T0nhxg();
    try
    {
      while (f.tgAABt8ofjiNPMazKb_brOQ())
      {
        d = f.swAABt8ofjiNPMazKb_brOQ();
        e = (d == a.CS___8__localsc.card);

        if (!e)
        {
          d.RwAABq3ydziJJQjrYNUi_aQ().ngIABlpSSjOkUWo5xp7BBA(ZQEABmKK1T2V_bGW3f5LeNA());
          gAEABpXXHje8G4fO36pHiQ(d.RwAABq3ydziJJQjrYNUi_aQ());
        }

      }
    }
    finally
    {
      ;
      f.xAAABq_bUDz_aWf_aXPRTEtLA();
    }
    a.CS___8__localsc.card.RwAABq3ydziJJQjrYNUi_aQ().ngIABlpSSjOkUWo5xp7BBA(XQEABmKK1T2V_bGW3f5LeNA());
    a.CS___8__localsc.card.CurrentDeck.Sounds.drag.Invoke();
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd.<.ctor>b__4
  type$k2C4COuckziRC0GcUcro7A.__ctor_b__4 = function (b, c)
  {
    var a = this, d, e, f, g, h, i, j, k, l, m;

    k = null;
    l = !a.drag;

    if (!l)
    {
      j = /* DOMCreateType */new yHt6kaMyEjymg0pdgL75jA();
      j.CS___8__localse = a;
      j.CS___8__localsc = a.CS___8__localsc;
      d = WQEABv73RTWSJr0jb0lPAg(c.GAIABh93Pj2k8gEjdybf_aQ(a.OverlayContainer), a.offset);
      e = ihAABg2tKzmLMekm9HOjrw(d.kwIABvwiPzaM0k_aS9hKUkw());
      f = ihAABg2tKzmLMekm9HOjrw(d.lQIABvwiPzaM0k_aS9hKUkw());
      m = new ctor$WgEABv73RTWSJr0jb0lPAg();
      i = m;
      i.VgEABv73RTWSJr0jb0lPAg(e);
      i.WAEABv73RTWSJr0jb0lPAg(f);
      j.p = i;

      if (!k)
      {
        k = new ctor$YQEABkOkJjGPtTLmBuq5mg(a, '__ctor_b__5');
      }

      g = GAAABkAVcDWPnLAqFK62WA(AQAABkAVcDWPnLAqFK62WA(a.CS___8__localsc.card.CurrentDeck.Stacks, k), new ctor$YQEABkOkJjGPtTLmBuq5mg(j, '__ctor_b__6'));
      l = (a.CandidateStack == null);

      if (!l)
      {
        l = (g == null);

        if (!l)
        {
          l = !(a.CandidateStack == g);

          if (!l)
          {
            return;
          }

        }

      }

      a.CandidateStack = g;
      l = (a.CandidateStack == null);

      if (!l)
      {
        l = (a.CS___8__localsc.card.ValidateDragStop == null);

        if (!l)
        {
          l = a.CS___8__localsc.card.ValidateDragStop.Invoke(a.CandidateStack);

          if (!l)
          {
            a.CandidateStack = null;
          }

        }

      }

      l = !(a.CandidateStack == null);

      if (!l)
      {
        a.CS___8__localsc.card.agAABq3ydziJJQjrYNUi_aQ(0.7);
        a.CS___8__localsc.card.XgAABq3ydziJJQjrYNUi_aQ(e, f);
      }
      else
      {
        og0ABvmt_aT2hLXIgzD4eQw(new ctor$bgAABoNsBDmVk00wZ1hiWg(e, f, a.CandidateStack, a.CS___8__localsc.card.SwAABq3ydziJJQjrYNUi_aQ()));
        a.CS___8__localsc.card.agAABq3ydziJJQjrYNUi_aQ(1);
        h = a.CandidateStack.DAAABjWnHjui8XnJJ2N5oA();
        a.CS___8__localsc.card.XgAABq3ydziJJQjrYNUi_aQ(ihAABg2tKzmLMekm9HOjrw(h.VQEABv73RTWSJr0jb0lPAg()), ihAABg2tKzmLMekm9HOjrw(h.VwEABv73RTWSJr0jb0lPAg()));
      }

    }

  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd.<.ctor>b__7
  type$k2C4COuckziRC0GcUcro7A.__ctor_b__7 = function (b, c)
  {
    var a = this, d, e, f, g;

    e = null;
    f = !a.drag;

    if (!f)
    {
      a.drag = 0;
      g = a.CS___8__localsc.card.CurrentDeck.Cards.rgAABvqMgj2CW8U7T0nhxg();
      try
      {
        while (g.tgAABt8ofjiNPMazKb_brOQ())
        {
          d = g.swAABt8ofjiNPMazKb_brOQ();
          f = (d == a.CS___8__localsc.card);

          if (!f)
          {
            fwEABpXXHje8G4fO36pHiQ(d.RwAABq3ydziJJQjrYNUi_aQ());
          }

        }
      }
      finally
      {
        ;
        g.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

      if (!e)
      {
        e = new ctor$TQUABmdYmDufdNSm2oh5Bw(a, '__ctor_b__8');
      }

      a.CS___8__localsc.card.CurrentDeck.AnimatedMoveToChain.jAAABp8OAzGU490a8p5wuQ(e);
    }

  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd.<.ctor>b__2
  function ewAABuuckziRC0GcUcro7A(b)
  {
    return b.AnimatedMoveToActive;
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd.<.ctor>b__3
  function fAAABuuckziRC0GcUcro7A(b)
  {
    b.ZAAABq3ydziJJQjrYNUi_aQ();
    b.ApprovedLocationX = b.LocationX;
    b.ApprovedLocationY = b.LocationY;
    b.agAABq3ydziJJQjrYNUi_aQ(0.7);
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd.<.ctor>b__5
  type$k2C4COuckziRC0GcUcro7A.__ctor_b__5 = function (b)
  {
    return !(b == this.CS___8__localsc.card.SwAABq3ydziJJQjrYNUi_aQ());
  };

  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd.<.ctor>b__8
  type$k2C4COuckziRC0GcUcro7A.__ctor_b__8 = function (b)
  {
    var a = this, c, d, e, f;

    e = /* DOMCreateType */new _69T0wRx6ITi0IwtKV6AUGw();
    e.CS___8__localse = a;
    e.CS___8__localsc = a.CS___8__localsc;
    e.SelectedCards = HQAABkAVcDWPnLAqFK62WA(a.CS___8__localsc.card.ZgAABq3ydziJJQjrYNUi_aQ());
    e.SignalNextDelayed = kAEABl964D_aaiuMHdBpszA(b, new ctor$YQEABkOkJjGPtTLmBuq5mg(e, '__ctor_b__9'));
    c = null;
    d = /* DOMCreateType */new vndItcXqMTuwO11hunWcNw();
    d.CS___8__locals16 = e;
    d.CS___8__localse = a;
    d.CS___8__localsc = a.CS___8__localsc;
    d.GroupMovedByLocalPlayer = new ctor$fgAABuB0iTWwwR4dEcfbmQ();
    try
    {

      if (!c)
      {
        c = new ctor$VQUABrMP7z_aQVJdqUhThFA(d, '__ctor_b__a');
      }

      yQEABl964D_aaiuMHdBpszA(e.SelectedCards, c);
    }
    finally
    {
      f = (d.GroupMovedByLocalPlayer == null);

      if (!f)
      {
        d.GroupMovedByLocalPlayer.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
  };

  // Closure type
  function yHt6kaMyEjymg0pdgL75jA() {}  var type$yHt6kaMyEjymg0pdgL75jA = yHt6kaMyEjymg0pdgL75jA.prototype;
  type$yHt6kaMyEjymg0pdgL75jA.constructor = yHt6kaMyEjymg0pdgL75jA;
  type$yHt6kaMyEjymg0pdgL75jA.CS___8__localse = null;
  type$yHt6kaMyEjymg0pdgL75jA.CS___8__localsc = null;
  type$yHt6kaMyEjymg0pdgL75jA.p = null;
  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd+<>c__DisplayClass12.<.ctor>b__6
  type$yHt6kaMyEjymg0pdgL75jA.__ctor_b__6 = function (b)
  {
    var a = this, c, d, e;

    e = WQEABv73RTWSJr0jb0lPAg(b.DAAABjWnHjui8XnJJ2N5oA(), a.p);
    c = e.lwIABvwiPzaM0k_aS9hKUkw();
    d = (c < b.HitRange);
    return d;
  };

  // Closure type
  function _69T0wRx6ITi0IwtKV6AUGw() {}  var type$_69T0wRx6ITi0IwtKV6AUGw = _69T0wRx6ITi0IwtKV6AUGw.prototype;
  type$_69T0wRx6ITi0IwtKV6AUGw.constructor = _69T0wRx6ITi0IwtKV6AUGw;
  type$_69T0wRx6ITi0IwtKV6AUGw.CS___8__localse = null;
  type$_69T0wRx6ITi0IwtKV6AUGw.CS___8__localsc = null;
  type$_69T0wRx6ITi0IwtKV6AUGw.SelectedCards = null;
  type$_69T0wRx6ITi0IwtKV6AUGw.SignalNextDelayed = null;
  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd+<>c__DisplayClass15.<.ctor>b__9
  type$_69T0wRx6ITi0IwtKV6AUGw.__ctor_b__9 = function (b)
  {
    return (b == (this.SelectedCards.length - 1));
  };

  // Closure type
  function vndItcXqMTuwO11hunWcNw() {}  var type$vndItcXqMTuwO11hunWcNw = vndItcXqMTuwO11hunWcNw.prototype;
  type$vndItcXqMTuwO11hunWcNw.constructor = vndItcXqMTuwO11hunWcNw;
  type$vndItcXqMTuwO11hunWcNw.CS___8__locals16 = null;
  type$vndItcXqMTuwO11hunWcNw.CS___8__localse = null;
  type$vndItcXqMTuwO11hunWcNw.CS___8__localsc = null;
  type$vndItcXqMTuwO11hunWcNw.GroupMovedByLocalPlayer = null;
  // ScriptCoreLib.Shared.Avalon.Cards.CardDrag+<>c__DisplayClassd+<>c__DisplayClass18.<.ctor>b__a
  type$vndItcXqMTuwO11hunWcNw.__ctor_b__a = function (b, c)
  {
    var a = this, d;

    b.ZAAABq3ydziJJQjrYNUi_aQ();
    b.ZQAABq3ydziJJQjrYNUi_aQ();
    d = !(a.CS___8__localse.CandidateStack == null);

    if (!d)
    {
      b.YwAABq3ydziJJQjrYNUi_aQ(b.ApprovedLocationX, b.ApprovedLocationY, a.CS___8__locals16.SignalNextDelayed);
    }
    else
    {
      d = !!c;

      if (!d)
      {
        b.WAAABq3ydziJJQjrYNUi_aQ(a.CS___8__localse.CandidateStack, a.GroupMovedByLocalPlayer);
      }
      else
      {
        b.VwAABq3ydziJJQjrYNUi_aQ(a.CS___8__localse.CandidateStack);
      }

      b.YQAABq3ydziJJQjrYNUi_aQ(b.XQAABq3ydziJJQjrYNUi_aQ(), a.CS___8__locals16.SignalNextDelayed);
    }

    b.agAABq3ydziJJQjrYNUi_aQ(1);
  };

  // Closure type
  function BogKoyweCjirP_bsY7V1NbA() {}  var type$BogKoyweCjirP_bsY7V1NbA = BogKoyweCjirP_bsY7V1NbA.prototype;
  type$BogKoyweCjirP_bsY7V1NbA.constructor = BogKoyweCjirP_bsY7V1NbA;
  type$BogKoyweCjirP_bsY7V1NbA.suit = 0;
  // ScriptCoreLib.Shared.Avalon.Cards.CardInfo+<>c__DisplayClass1.<By>b__0
  type$BogKoyweCjirP_bsY7V1NbA._By_b__0 = function (b)
  {
    return new ctor$FgAABmrUKTyVHTEYLmsu2g(this.suit, b);
  };

  // Closure type
  function eJEfpCB3ODGVjeq3aH_bDVA() {}  var type$eJEfpCB3ODGVjeq3aH_bDVA = eJEfpCB3ODGVjeq3aH_bDVA.prototype;
  type$eJEfpCB3ODGVjeq3aH_bDVA.constructor = eJEfpCB3ODGVjeq3aH_bDVA;
  type$eJEfpCB3ODGVjeq3aH_bDVA.p = null;
  type$eJEfpCB3ODGVjeq3aH_bDVA.s = null;
  type$eJEfpCB3ODGVjeq3aH_bDVA.__4__this = null;
  // ScriptCoreLib.Shared.Avalon.Cards.CardDeck+<>c__DisplayClass8.<CreateStackList>b__7
  type$eJEfpCB3ODGVjeq3aH_bDVA._CreateStackList_b__7 = function (b, c)
  {
    var a = this, d, e;

    e = !(c.pQEABuUm6T6SExZbuoZS9Q() == 1);

    if (!e)
    {
      d = a.p.OwgABj1h1jWisfyZw_a9KnQ(c.pgEABuUm6T6SExZbuoZS9Q());
      a.s.pQAABvqMgj2CW8U7T0nhxg(d);
      a.__4__this.Stacks.MggABj1h1jWisfyZw_a9KnQ(d);
      return;
    }

    e = !(c.pQEABuUm6T6SExZbuoZS9Q() == 2);

    if (!e)
    {
      d = a.s.ogAABvqMgj2CW8U7T0nhxg(c.pgEABuUm6T6SExZbuoZS9Q());
      a.s.rAAABvqMgj2CW8U7T0nhxg(d);
      a.__4__this.Stacks.NQgABj1h1jWisfyZw_a9KnQ(d);
    }

  };

  // Closure type
  function R_bxJvXxtMTe_ai5HJpFG7Vg() {}  var type$R_bxJvXxtMTe_ai5HJpFG7Vg = R_bxJvXxtMTe_ai5HJpFG7Vg.prototype;
  type$R_bxJvXxtMTe_ai5HJpFG7Vg.constructor = R_bxJvXxtMTe_ai5HJpFG7Vg;
  type$R_bxJvXxtMTe_ai5HJpFG7Vg.__4__this = null;
  type$R_bxJvXxtMTe_ai5HJpFG7Vg.x = 0;
  type$R_bxJvXxtMTe_ai5HJpFG7Vg.y = 0;
  // ScriptCoreLib.Shared.Avalon.Cards.Card+<>c__DisplayClass8.<MoveSelectionTo>b__7
  type$R_bxJvXxtMTe_ai5HJpFG7Vg._MoveSelectionTo_b__7 = function (b, c)
  {
    var a = this;

    b.XwAABq3ydziJJQjrYNUi_aQ(ihAABg2tKzmLMekm9HOjrw((a.x + (a.__4__this.SwAABq3ydziJJQjrYNUi_aQ().CardMargin.kwIABvwiPzaM0k_aS9hKUkw() * (c + 1)))), ihAABg2tKzmLMekm9HOjrw((a.y + (a.__4__this.SwAABq3ydziJJQjrYNUi_aQ().CardMargin.lQIABvwiPzaM0k_aS9hKUkw() * (c + 1)))));
  };

  // Closure type
  function Pom_beyFR5Dyee8wBDYmTVg() {}  var type$Pom_beyFR5Dyee8wBDYmTVg = Pom_beyFR5Dyee8wBDYmTVg.prototype;
  type$Pom_beyFR5Dyee8wBDYmTVg.constructor = Pom_beyFR5Dyee8wBDYmTVg;
  type$Pom_beyFR5Dyee8wBDYmTVg.__4__this = null;
  type$Pom_beyFR5Dyee8wBDYmTVg.LocationX = 0;
  type$Pom_beyFR5Dyee8wBDYmTVg.LocationY = 0;
  // ScriptCoreLib.Shared.Avalon.Cards.Card+<>c__DisplayClassb.<AnimatedMoveTo>b__a
  type$Pom_beyFR5Dyee8wBDYmTVg._AnimatedMoveTo_b__a = function (b)
  {
    var a = this;

    a.__4__this.YwAABq3ydziJJQjrYNUi_aQ(a.LocationX, a.LocationY, b);
  };

  // Closure type
  function _7fy6Vua_a5zylhApuV43AOg() {}  var type$_7fy6Vua_a5zylhApuV43AOg = _7fy6Vua_a5zylhApuV43AOg.prototype;
  type$_7fy6Vua_a5zylhApuV43AOg.constructor = _7fy6Vua_a5zylhApuV43AOg;
  type$_7fy6Vua_a5zylhApuV43AOg.ox = 0;
  type$_7fy6Vua_a5zylhApuV43AOg.oy = 0;
  type$_7fy6Vua_a5zylhApuV43AOg.__4__this = null;
  type$_7fy6Vua_a5zylhApuV43AOg.LocationX = 0;
  type$_7fy6Vua_a5zylhApuV43AOg.LocationY = 0;
  type$_7fy6Vua_a5zylhApuV43AOg.SignalNext = null;
  // ScriptCoreLib.Shared.Avalon.Cards.Card+<>c__DisplayClasse.<AnimatedMoveTo>b__d
  type$_7fy6Vua_a5zylhApuV43AOg._AnimatedMoveTo_b__d = function (b, c)
  {
    var a = this, d;

    d = a.__4__this.AnimatedMoveToActive;

    if (!d)
    {
      return;
    }

    d = !(a.ox == a.__4__this.LocationX);

    if (!d)
    {
      d = !(a.oy == a.__4__this.LocationY);

      if (!d)
      {
        a.__4__this.XwAABq3ydziJJQjrYNUi_aQ(b, c);
        a.ox = b;
        a.oy = c;
        d = !(b == a.LocationX);

        if (!d)
        {
          d = !(c == a.LocationY);

          if (!d)
          {
            a.__4__this.AnimatedMoveToActive = 0;
            a.SignalNext.Invoke();
          }

        }

        return;
      }

    }

    a.__4__this.AnimatedMoveToActive = 0;
    a.SignalNext.Invoke();
  };

  // Closure type
  function KbmazXNMrj24H58MgBNz8g() {}  var type$KbmazXNMrj24H58MgBNz8g = KbmazXNMrj24H58MgBNz8g.prototype;
  type$KbmazXNMrj24H58MgBNz8g.constructor = KbmazXNMrj24H58MgBNz8g;
  type$KbmazXNMrj24H58MgBNz8g.__4__this = null;
  type$KbmazXNMrj24H58MgBNz8g.CandidateStack = null;
  type$KbmazXNMrj24H58MgBNz8g.GroupMovedByLocalPlayer = null;
  // ScriptCoreLib.Shared.Avalon.Cards.Card+<>c__DisplayClass13.<AnimatedMoveToStack>b__10
  type$KbmazXNMrj24H58MgBNz8g._AnimatedMoveToStack_b__10 = function (b)
  {
    var a = this, c, d, e, f;

    c = null;
    d = /* DOMCreateType */new xZmMToQCUjGDe0jeiErGww();
    d.CS___8__locals14 = a;
    d.SelectedCards = HQAABkAVcDWPnLAqFK62WA(a.__4__this.ZgAABq3ydziJJQjrYNUi_aQ());
    d.SignalNextDelayed = kAEABl964D_aaiuMHdBpszA(b, new ctor$YQEABkOkJjGPtTLmBuq5mg(d, '_AnimatedMoveToStack_b__11'));
    e = a.GroupMovedByLocalPlayer;
    try
    {

      if (!c)
      {
        c = new ctor$VQUABrMP7z_aQVJdqUhThFA(d, '_AnimatedMoveToStack_b__12');
      }

      yQEABl964D_aaiuMHdBpszA(d.SelectedCards, c);
    }
    finally
    {
      f = (e == null);

      if (!f)
      {
        e.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
  };

  // Closure type
  function xZmMToQCUjGDe0jeiErGww() {}  var type$xZmMToQCUjGDe0jeiErGww = xZmMToQCUjGDe0jeiErGww.prototype;
  type$xZmMToQCUjGDe0jeiErGww.constructor = xZmMToQCUjGDe0jeiErGww;
  type$xZmMToQCUjGDe0jeiErGww.CS___8__locals14 = null;
  type$xZmMToQCUjGDe0jeiErGww.SelectedCards = null;
  type$xZmMToQCUjGDe0jeiErGww.SignalNextDelayed = null;
  // ScriptCoreLib.Shared.Avalon.Cards.Card+<>c__DisplayClass13+<>c__DisplayClass16.<AnimatedMoveToStack>b__11
  type$xZmMToQCUjGDe0jeiErGww._AnimatedMoveToStack_b__11 = function (b)
  {
    return (b == (this.SelectedCards.length - 1));
  };

  // ScriptCoreLib.Shared.Avalon.Cards.Card+<>c__DisplayClass13+<>c__DisplayClass16.<AnimatedMoveToStack>b__12
  type$xZmMToQCUjGDe0jeiErGww._AnimatedMoveToStack_b__12 = function (b, c)
  {
    var a = this, d;

    b.ZAAABq3ydziJJQjrYNUi_aQ();
    b.ZQAABq3ydziJJQjrYNUi_aQ();
    d = !!c;

    if (!d)
    {
      b.WAAABq3ydziJJQjrYNUi_aQ(a.CS___8__locals14.CandidateStack, a.CS___8__locals14.GroupMovedByLocalPlayer);
    }
    else
    {
      b.VwAABq3ydziJJQjrYNUi_aQ(a.CS___8__locals14.CandidateStack);
    }

    b.YQAABq3ydziJJQjrYNUi_aQ(b.XQAABq3ydziJJQjrYNUi_aQ(), a.SignalNextDelayed);
    b.agAABq3ydziJJQjrYNUi_aQ(1);
  };

  // Are the references up to date?
  // Are they imported in the dependency sort order?
  // reference ScriptCoreLib - _5Ab28nwLIEWdGNMb6EqeCw
  // reference ScriptCoreLib.Query - BaJOV6PUu0uhcv4u1emKog
  // reference ScriptCoreLib.Net - _4OPuXvHExkC1N7_bnlmuJvg
  // reference ScriptCoreLib.Avalon - QoxbVsWRmUqAJTApL1vPIw
  fW7kjxxmukG2yHVFfd1FGg.Types = [HUq0v7ZRhzyCDMJfeGaooQ,xUS_aJTWnHjui8XnJJ2N5oA,zDbZPWrUKTyVHTEYLmsu2g,kIBaWHgIozyqk8B6E0aQEQ,M56QnJTMUTCFp_b61Vu973Q,ErZATnxaFjWXUEhutPG9kQ,BVc_aduQpAz_avXyXWgz7ifQ,vkDFSa3ydziJJQjrYNUi_aQ];
  fW7kjxxmukG2yHVFfd1FGg.References = [_5Ab28nwLIEWdGNMb6EqeCw,BaJOV6PUu0uhcv4u1emKog,_4OPuXvHExkC1N7_bnlmuJvg,QoxbVsWRmUqAJTApL1vPIw];

  (function()
  {
    KAAABJTMUTCFp_b61Vu973Q = new ctor$JgAABpTMUTCFp_b61Vu973Q();
  }
  )();

