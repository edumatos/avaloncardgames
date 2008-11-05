  var BaJOV6PUu0uhcv4u1emKog = {Name:{Name:"ScriptCoreLib.Query",FullName:"ScriptCoreLib.Query, Version\x3d3.5.3231.18302, Culture\x3dneutral, PublicKeyToken\x3dnull"}};
  // ScriptCoreLib.Shared.Query.__Enumerable.Where
  function AQAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    e = !(c == null);

    if (!e)
    {
      throw uQAABk_asWDSwkuY60zLcKw('predicate');
    }

    e = !(b == null);

    if (!e)
    {
      throw uQAABk_asWDSwkuY60zLcKw('source');
    }

    d = AgAABkAVcDWPnLAqFK62WA(NgAABkAVcDWPnLAqFK62WA(b), c);
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.WhereIterator
  function AgAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    d = new ctor$NwAABq7RDTCUVPdLbzlytg(-2);
    d._3_source = b;
    d._3_predicate = c;
    e = d;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Concat
  function AwAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    e = !(b == null);

    if (!e)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('first');
    }

    e = !(c == null);

    if (!e)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('second');
    }

    d = BAAABkAVcDWPnLAqFK62WA(b, c);
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ConcatIterator
  function BAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    d = new ctor$RwAABtrn5zKx_borfa_aTZ_bw(-2);
    d.__3__first = NgAABkAVcDWPnLAqFK62WA(b);
    d.__3__second = NgAABkAVcDWPnLAqFK62WA(c);
    e = d;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.SelectMany
  function BQAABkAVcDWPnLAqFK62WA(b, c, d)
  {
    var e, f;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    f = !(c == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('collectionSelector');
    }

    f = !(d == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('resultSelector');
    }

    e = BgAABkAVcDWPnLAqFK62WA(b, c, d);
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.SelectManyIterator
  function BgAABkAVcDWPnLAqFK62WA(b, c, d)
  {
    var e, f;

    e = new ctor$TwAABgE7OTaQ4_bnELOATmA(-2);
    e.__3__source = b;
    e.__3__collectionSelector = c;
    e.__3__resultSelector = d;
    f = e;
    return f;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.SelectMany
  function BwAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    e = !(b == null);

    if (!e)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    e = !(c == null);

    if (!e)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('selector');
    }

    d = CAAABkAVcDWPnLAqFK62WA(b, c);
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.SelectManyIterator
  function CAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    d = new ctor$WQAABq_b_azTavpcWLP4fehw(-2);
    d.__3__source = NgAABkAVcDWPnLAqFK62WA(b);
    d.__3__selector = c;
    e = d;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Reverse
  function CQAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d;

    c = HgAABkAVcDWPnLAqFK62WA(b);
    c.sQAABvqMgj2CW8U7T0nhxg();
    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Any
  function CgAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f, g;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    c = 0;
    g = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (g.qAAABu7N0xGI6ACQJ1TEOg())
      {
        d = g.xQAABrYmRzSu_anO2U_bk1MA();
        c = 1;
        break;
      }
    }
    finally
    {
      f = (g == null);

      if (!f)
      {
        g.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Any
  function CwAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e, f, g, h;

    g = !(b == null);

    if (!g)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    g = !(c == null);

    if (!g)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('predicate');
    }

    d = 0;
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        e = h.xQAABrYmRzSu_anO2U_bk1MA();
        g = !c.Invoke(e);

        if (!g)
        {
          d = 1;
          break;
        }

      }
    }
    finally
    {
      g = (h == null);

      if (!g)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    f = d;
    return f;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.All
  function DAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e, f, g, h;

    g = !(b == null);

    if (!g)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    g = !(c == null);

    if (!g)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('predicate');
    }

    d = 1;
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        e = h.xQAABrYmRzSu_anO2U_bk1MA();
        g = c.Invoke(e);

        if (!g)
        {
          d = 0;
          break;
        }

      }
    }
    finally
    {
      g = (h == null);

      if (!g)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    f = d;
    return f;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Contains
  function DQAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e, f, g, h;

    g = !(b == null);

    if (!g)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    d = 0;
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        e = h.xQAABrYmRzSu_anO2U_bk1MA();
        g = !_4g8ABsnQVTWIrJdASKx9dw(e, c);

        if (!g)
        {
          d = 1;
          break;
        }

      }
    }
    finally
    {
      g = (h == null);

      if (!g)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    f = d;
    return f;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Count
  function EAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e, f, g, h;

    d = 0;
    g = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (g.qAAABu7N0xGI6ACQJ1TEOg())
      {
        e = g.xQAABrYmRzSu_anO2U_bk1MA();
        h = !c.Invoke(e);

        if (!h)
        {
          d++;
        }

      }
    }
    finally
    {
      h = (g == null);

      if (!h)
      {
        g.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    f = d;
    return f;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Count
  function EQAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f, g;

    c = 0;
    f = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (f.qAAABu7N0xGI6ACQJ1TEOg())
      {
        d = f.xQAABrYmRzSu_anO2U_bk1MA();
        c++;
      }
    }
    finally
    {
      g = (f == null);

      if (!g)
      {
        f.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ElementAt
  function EgAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e, f, g, h, i;

    d = -1;
    e = void(0);
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        f = h.xQAABrYmRzSu_anO2U_bk1MA();
        d++;
        i = !(d == c);

        if (!i)
        {
          e = f;
          break;
        }

      }
    }
    finally
    {
      i = (h == null);

      if (!i)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    g = e;
    return g;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.LastOrDefault
  function EwAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f, g;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    c = void(0);
    g = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (g.qAAABu7N0xGI6ACQJ1TEOg())
      {
        d = g.xQAABrYmRzSu_anO2U_bk1MA();
        c = d;
      }
    }
    finally
    {
      f = (g == null);

      if (!f)
      {
        g.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Last
  function FAAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    d = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      f = !d.qAAABu7N0xGI6ACQJ1TEOg();

      if (!f)
      {
        c = d.xQAABrYmRzSu_anO2U_bk1MA();
        while (d.qAAABu7N0xGI6ACQJ1TEOg())
        {
          c = d.xQAABrYmRzSu_anO2U_bk1MA();
        }
      }
      else
      {
        throw KwEABvRKRDCqE_bw5H_bdCOQ();
      }

    }
    finally
    {
      f = (d == null);

      if (!f)
      {
        d.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.First
  function FQAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d;

    d = FgAABkAVcDWPnLAqFK62WA(AQAABkAVcDWPnLAqFK62WA(b, c));
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.First
  function FgAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    d = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      f = !d.qAAABu7N0xGI6ACQJ1TEOg();

      if (!f)
      {
        c = d.xQAABrYmRzSu_anO2U_bk1MA();
      }
      else
      {
        throw KwEABvRKRDCqE_bw5H_bdCOQ();
      }

    }
    finally
    {
      f = (d == null);

      if (!f)
      {
        d.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.FirstOrDefault
  function FwAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    c = void(0);
    d = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      f = !d.qAAABu7N0xGI6ACQJ1TEOg();

      if (!f)
      {
        c = d.xQAABrYmRzSu_anO2U_bk1MA();
      }

    }
    finally
    {
      f = (d == null);

      if (!f)
      {
        d.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.FirstOrDefault
  function GAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e, f, g, h;

    g = !(b == null);

    if (!g)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    g = !(c == null);

    if (!g)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('predicate');
    }

    d = void(0);
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        e = h.xQAABrYmRzSu_anO2U_bk1MA();
        g = !c.Invoke(e);

        if (!g)
        {
          d = e;
          break;
        }

      }
    }
    finally
    {
      g = (h == null);

      if (!g)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    f = d;
    return f;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Single
  function GQAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d;

    d = GgAABkAVcDWPnLAqFK62WA(AQAABkAVcDWPnLAqFK62WA(b, c));
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Single
  function GgAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    d = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      f = d.qAAABu7N0xGI6ACQJ1TEOg();

      if (!f)
      {
        throw KwEABvRKRDCqE_bw5H_bdCOQ();
      }

      c = d.xQAABrYmRzSu_anO2U_bk1MA();
      f = !d.qAAABu7N0xGI6ACQJ1TEOg();

      if (!f)
      {
        throw LAEABvRKRDCqE_bw5H_bdCOQ();
      }

    }
    finally
    {
      f = (d == null);

      if (!f)
      {
        d.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.SingleOrDefault
  function GwAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d;

    d = HAAABkAVcDWPnLAqFK62WA(AQAABkAVcDWPnLAqFK62WA(b, c));
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.SingleOrDefault
  function HAAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    c = void(0);
    d = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      f = !d.qAAABu7N0xGI6ACQJ1TEOg();

      if (!f)
      {
        c = d.xQAABrYmRzSu_anO2U_bk1MA();
      }

    }
    finally
    {
      f = (d == null);

      if (!f)
      {
        d.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ToArray
  function HQAABkAVcDWPnLAqFK62WA(b)
  {
    var c;

    c = HgAABkAVcDWPnLAqFK62WA(b).ngAABvqMgj2CW8U7T0nhxg();
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ToList
  function HgAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d;

    d = !(b == null);

    if (!d)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    c = new ctor$nAAABvqMgj2CW8U7T0nhxg(b);
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Aggregate
  function HwAABkAVcDWPnLAqFK62WA(b, c, d)
  {
    var e, f, g, h, i;

    e = c;
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        f = h.xQAABrYmRzSu_anO2U_bk1MA();
        e = d.Invoke(e, f);
      }
    }
    finally
    {
      i = (h == null);

      if (!i)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    g = e;
    return g;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Select
  var IAAABkAVcDWPnLAqFK62WA = function () { return IwAABkAVcDWPnLAqFK62WA.apply(null, arguments); };
  // ScriptCoreLib.Shared.Query.__Enumerable.Select
  var IQAABkAVcDWPnLAqFK62WA = function () { return IgAABkAVcDWPnLAqFK62WA.apply(null, arguments); };
  // ScriptCoreLib.Shared.Query.__Enumerable.SelectIterator
  function IgAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    d = new ctor$YQAABsYynjKH_a9BWAXyyWQ(-2);
    d._3_source = b;
    d._3_selector = c;
    e = d;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.SelectIterator
  function IwAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    d = new ctor$aQAABramAzCum3aMmJl9kg(-2);
    d._3_source = b;
    d._3_selector = c;
    e = d;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ToDictionary
  function JAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d;

    d = JwAABkAVcDWPnLAqFK62WA(b, c, pAAABmO_ahzGpa166TZVW3Q(), null);
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ToDictionary
  function JQAABkAVcDWPnLAqFK62WA(b, c, d)
  {
    var e;

    e = JwAABkAVcDWPnLAqFK62WA(b, c, pAAABmO_ahzGpa166TZVW3Q(), d);
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ToDictionary
  function JgAABkAVcDWPnLAqFK62WA(b, c, d)
  {
    var e;

    e = JwAABkAVcDWPnLAqFK62WA(b, c, d, null);
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ToDictionary
  function JwAABkAVcDWPnLAqFK62WA(b, c, d, e)
  {
    var f, g, h, i, j;

    i = !(b == null);

    if (!i)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    i = !(c == null);

    if (!i)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('keySelector');
    }

    i = !(d == null);

    if (!i)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('elementSelector');
    }

    f = new ctor$__bgcABi2jPTeKcTsiTA1xiA(e);
    j = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (j.qAAABu7N0xGI6ACQJ1TEOg())
      {
        g = j.xQAABrYmRzSu_anO2U_bk1MA();
        f.__bwcABi2jPTeKcTsiTA1xiA(c.Invoke(g), d.Invoke(g));
      }
    }
    finally
    {
      i = (j == null);

      if (!i)
      {
        j.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    h = f;
    return h;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Sum
  function KAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e, f, g, h;

    d = 0;
    g = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (g.qAAABu7N0xGI6ACQJ1TEOg())
      {
        e = g.xQAABrYmRzSu_anO2U_bk1MA();
        d += c.Invoke(e);
      }
    }
    finally
    {
      h = (g == null);

      if (!h)
      {
        g.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    f = d;
    return f;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Take
  function KgAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    e = !(b == null);

    if (!e)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    d = KwAABkAVcDWPnLAqFK62WA(b, c);
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.TakeIterator
  function KwAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    d = new ctor$cQAABhyKcjqF1lxYSIuBWQ(-2);
    d.__3__source = b;
    d.__3__count = c;
    e = d;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.OrderBy
  function LAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d;

    d = new ctor$WAEABpr33DqIIsOoA4L3RQ(b, c, null, 0);
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.OrderByDescending
  function LQAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d;

    d = new ctor$WAEABpr33DqIIsOoA4L3RQ(b, c, null, 1);
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.OrderByDescending
  function LgAABkAVcDWPnLAqFK62WA(b, c, d)
  {
    var e;

    e = new ctor$WAEABpr33DqIIsOoA4L3RQ(b, c, d, 1);
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.OrderBy
  function LwAABkAVcDWPnLAqFK62WA(b, c, d)
  {
    var e;

    e = new ctor$WAEABpr33DqIIsOoA4L3RQ(b, c, d, 0);
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ThenBy
  function MAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    e = !(b == null);

    if (!e)
    {
      throw /* DOMCreateType */new Ldtxf6AerjyAhyYJX1IV5g();
    }

    d = b.__awUABjj0njK9JUKNqwYIpw(c, null, 0);
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ThenBy
  function MQAABkAVcDWPnLAqFK62WA(b, c, d)
  {
    var e, f;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    e = b.__awUABjj0njK9JUKNqwYIpw(c, d, 0);
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ThenByDescending
  function MgAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    e = !(b == null);

    if (!e)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    d = b.__awUABjj0njK9JUKNqwYIpw(c, null, 1);
    return d;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.ThenByDescending
  function MwAABkAVcDWPnLAqFK62WA(b, c, d)
  {
    var e, f;

    f = !(b == null);

    if (!f)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    e = b.__awUABjj0njK9JUKNqwYIpw(c, d, 1);
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.AsEnumerable
  function NgAABkAVcDWPnLAqFK62WA(b)
  {
    var c;

    c = _1xEABh9keTGQmJq3VxB33w(b);
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Min
  function DgAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f, g, h;

    g = !(b == null);

    if (!g)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    c = 0;
    d = 0;
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        e = h.xQAABrYmRzSu_anO2U_bk1MA();
        g = !d;

        if (!g)
        {
          g = !(e < c);

          if (!g)
          {
            c = e;
          }

          continue;
        }

        c = e;
        d = 1;
      }
    }
    finally
    {
      g = (h == null);

      if (!g)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    g = d;

    if (!g)
    {
      throw KwEABvRKRDCqE_bw5H_bdCOQ();
    }

    f = c;
    return f;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Max
  function DwAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f, g, h;

    g = !(b == null);

    if (!g)
    {
      throw KgEABvRKRDCqE_bw5H_bdCOQ('source');
    }

    c = 0;
    d = 0;
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        e = h.xQAABrYmRzSu_anO2U_bk1MA();
        g = !d;

        if (!g)
        {
          g = !(e > c);

          if (!g)
          {
            c = e;
          }

          continue;
        }

        c = e;
        d = 1;
      }
    }
    finally
    {
      g = (h == null);

      if (!g)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    g = d;

    if (!g)
    {
      throw KwEABvRKRDCqE_bw5H_bdCOQ();
    }

    f = c;
    return f;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Sum
  function KQAABkAVcDWPnLAqFK62WA(b)
  {
    var c, d, e, f, g;

    c = 0;
    f = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (f.qAAABu7N0xGI6ACQJ1TEOg())
      {
        d = f.xQAABrYmRzSu_anO2U_bk1MA();
        c += d;
      }
    }
    finally
    {
      g = (f == null);

      if (!g)
      {
        f.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = c;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.Range
  function NAAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e, f;

    d = ((b + c) - 1);
    f = !(c < 0);

    if (!f)
    {
    }
    else
    {
      f = (d > 2147483647);

      if (!f)
      {
        e = NQAABkAVcDWPnLAqFK62WA(b, c);
        return e;
      }

    }

    throw KQEABvRKRDCqE_bw5H_bdCOQ('count');
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable.RangeIterator
  function NQAABkAVcDWPnLAqFK62WA(b, c)
  {
    var d, e;

    d = new ctor$QAAABrTI5jKYlPPQ4BlzkQ(-2);
    d.__3__start = b;
    d.__3__count = c;
    e = d;
    return e;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1
  function _1ZJKoK7RDTCUVPdLbzlytg(){};
  _1ZJKoK7RDTCUVPdLbzlytg.TypeName = "_WhereIterator_d__0_1";
  _1ZJKoK7RDTCUVPdLbzlytg.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$_1ZJKoK7RDTCUVPdLbzlytg = _1ZJKoK7RDTCUVPdLbzlytg.prototype;
  type$_1ZJKoK7RDTCUVPdLbzlytg.constructor = _1ZJKoK7RDTCUVPdLbzlytg;
  type$_1ZJKoK7RDTCUVPdLbzlytg._1_state = 0;
  type$_1ZJKoK7RDTCUVPdLbzlytg._3_source = null;
  type$_1ZJKoK7RDTCUVPdLbzlytg._3_predicate = null;
  type$_1ZJKoK7RDTCUVPdLbzlytg.source = null;
  type$_1ZJKoK7RDTCUVPdLbzlytg.predicate = null;
  type$_1ZJKoK7RDTCUVPdLbzlytg._2_current = null;
  type$_1ZJKoK7RDTCUVPdLbzlytg._e_5 = null;
  type$_1ZJKoK7RDTCUVPdLbzlytg._7_wrap = null;
  var basector$_1ZJKoK7RDTCUVPdLbzlytg = $ctor$(null, null, type$_1ZJKoK7RDTCUVPdLbzlytg);
  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1..ctor
  type$_1ZJKoK7RDTCUVPdLbzlytg.NwAABq7RDTCUVPdLbzlytg = function (b)
  {
    var a = this;

    a._1_state = b;
  };
  var ctor$NwAABq7RDTCUVPdLbzlytg = $ctor$(null, 'NwAABq7RDTCUVPdLbzlytg', type$_1ZJKoK7RDTCUVPdLbzlytg);

  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1.System.Collections.Generic.IEnumerable<T>.GetEnumerator
  type$_1ZJKoK7RDTCUVPdLbzlytg.System_Collections_Generic_IEnumerable_T__GetEnumerator = function ()
  {
    var a = this, b, c, d;

    b = null;
    d = !(a._1_state == -2);

    if (!d)
    {
      a._1_state = 0;
      b = a;
    }
    else
    {
      b = new ctor$NwAABq7RDTCUVPdLbzlytg(0);
    }

    b.source = a._3_source;
    b.predicate = a._3_predicate;
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1.System.Collections.IEnumerable.GetEnumerator
  type$_1ZJKoK7RDTCUVPdLbzlytg.System_Collections_IEnumerable_GetEnumerator = function ()
  {
    var a = this, b;

    b = a.NgEABnMeWzaNooAKOmFm5g();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1.System.Collections.IEnumerator.get_Current
  type$_1ZJKoK7RDTCUVPdLbzlytg.System_Collections_IEnumerator_get_Current = function ()
  {
    var a = this, b;

    b = a.get_Current();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1.get_Current
  type$_1ZJKoK7RDTCUVPdLbzlytg.get_Current = function ()
  {
    var a = this, b;

    b = a._2_current;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1.Reset
  type$_1ZJKoK7RDTCUVPdLbzlytg.Reset = function ()
  {
    var a = this;

    throw LQEABvRKRDCqE_bw5H_bdCOQ();
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1.MoveNext
  type$_1ZJKoK7RDTCUVPdLbzlytg.MoveNext = function ()
  {
    var a = this, b, c;

    c = (a._1_state && !(a._1_state == 2));

    if (!c)
    {
      c = !!a._1_state;

      if (!c)
      {
        a._1_state = -1;
        a._7_wrap = a.source.NgEABnMeWzaNooAKOmFm5g();
      }

      a._1_state = 1;
      while (a._7_wrap.qAAABu7N0xGI6ACQJ1TEOg())
      {
        a._e_5 = a._7_wrap.xQAABrYmRzSu_anO2U_bk1MA();
        c = a.predicate.Invoke(a._e_5);

        if (!c)
        {
          continue;
        }

        a._2_current = a._e_5;
        a._1_state = 2;
        b = 1;
        return b;
      }
      a._1_state = -1;
    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1.Dispose
  type$_1ZJKoK7RDTCUVPdLbzlytg.Dispose = function ()
  {
    var a = this, b;

    b = !(a._1_state == 1);

    if (!b)
    {
      return;
    }

    b = !(a._1_state == 2);

    if (!b)
    {
      return;
    }

    a._1_state = -1;
    b = (a._7_wrap == null);

    if (!b)
    {
      a._7_wrap.xAAABq_bUDz_aWf_aXPRTEtLA();
    }

  };

  // 
  // ScriptCoreLib.Shared.Query.__Enumerable+_WhereIterator_d__0`1
  (function (i)  {
    i.NgEABnMeWzaNooAKOmFm5g = i.System_Collections_Generic_IEnumerable_T__GetEnumerator;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerable_GetEnumerator;
    // 
    i.xQAABrYmRzSu_anO2U_bk1MA = i.get_Current;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.Dispose;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.MoveNext;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerator_get_Current;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.Reset;
  }
  )(type$_1ZJKoK7RDTCUVPdLbzlytg);
  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91
  function _6_bib1rTI5jKYlPPQ4BlzkQ(){};
  _6_bib1rTI5jKYlPPQ4BlzkQ.TypeName = "_RangeIterator_d__91";
  _6_bib1rTI5jKYlPPQ4BlzkQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$_6_bib1rTI5jKYlPPQ4BlzkQ = _6_bib1rTI5jKYlPPQ4BlzkQ.prototype;
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.constructor = _6_bib1rTI5jKYlPPQ4BlzkQ;
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.__1__state = 0;
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.__3__start = 0;
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.__3__count = 0;
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.start = 0;
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.count = 0;
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.__2__current = 0;
  type$_6_bib1rTI5jKYlPPQ4BlzkQ._i_5__92 = 0;
  var basector$_6_bib1rTI5jKYlPPQ4BlzkQ = $ctor$(null, null, type$_6_bib1rTI5jKYlPPQ4BlzkQ);
  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91..ctor
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.QAAABrTI5jKYlPPQ4BlzkQ = function (b)
  {
    var a = this;

    a.__1__state = b;
  };
  var ctor$QAAABrTI5jKYlPPQ4BlzkQ = $ctor$(null, 'QAAABrTI5jKYlPPQ4BlzkQ', type$_6_bib1rTI5jKYlPPQ4BlzkQ);

  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91.System.Collections.IEnumerable.GetEnumerator
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.System_Collections_IEnumerable_GetEnumerator = function ()
  {
    var a = this, b;

    b = a.GetEnumerator();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91.System.Collections.IEnumerator.get_Current
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.System_Collections_IEnumerator_get_Current = function ()
  {
    var a = this, b;

    b = new Number(a.get_Current());
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91.MoveNext
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.MoveNext = function ()
  {
    var a = this, b, c;

    c = !!a.__1__state;

    if (!c)
    {
      a.__1__state = -1;
      a._i_5__92 = 0;
    }
    else
    {
      c = !(a.__1__state == 1);

      if (!c)
      {
        a.__1__state = -1;
        a._i_5__92 = (a._i_5__92 + 1);
      }
      else
      {
        b = 0;
        return b;
      }

    }

    c = !(a._i_5__92 < a.count);

    if (!c)
    {
      a.__2__current = (a.start + a._i_5__92);
      a.__1__state = 1;
      b = 1;
      return b;
    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91.GetEnumerator
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.GetEnumerator = function ()
  {
    var a = this, b, c, d;

    b = null;
    d = !(a.__1__state == -2);

    if (!d)
    {
      a.__1__state = 0;
      b = a;
    }
    else
    {
      b = new ctor$QAAABrTI5jKYlPPQ4BlzkQ(0);
    }

    b.start = a.__3__start;
    b.count = a.__3__count;
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91.get_Current
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.get_Current = function ()
  {
    var a = this, b;

    b = a.__2__current;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91.Dispose
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.Dispose = function ()
  {
    var a = this;

  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91.Reset
  type$_6_bib1rTI5jKYlPPQ4BlzkQ.Reset = function ()
  {
    var a = this;

    throw LQEABvRKRDCqE_bw5H_bdCOQ();
  };

  // System.Collections.Generic.IEnumerable`1[[System.Int32, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]
  // ScriptCoreLib.Shared.Query.__Enumerable+_RangeIterator_d__91
  (function (i)  {
    i.NgEABnMeWzaNooAKOmFm5g = i.GetEnumerator;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerable_GetEnumerator;
    // System.Collections.Generic.IEnumerator`1[[System.Int32, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]
    i.xQAABrYmRzSu_anO2U_bk1MA = i.get_Current;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.Dispose;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.MoveNext;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerator_get_Current;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.Reset;
  }
  )(type$_6_bib1rTI5jKYlPPQ4BlzkQ);
  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1
  function vFSL7Nrn5zKx_borfa_aTZ_bw(){};
  vFSL7Nrn5zKx_borfa_aTZ_bw.TypeName = "_ConcatIterator_d__5b_1";
  vFSL7Nrn5zKx_borfa_aTZ_bw.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$vFSL7Nrn5zKx_borfa_aTZ_bw = vFSL7Nrn5zKx_borfa_aTZ_bw.prototype;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.constructor = vFSL7Nrn5zKx_borfa_aTZ_bw;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.__1__state = 0;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.__2__current = null;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.__3__first = null;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.__3__second = null;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.__7__wrap5e = null;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.__7__wrap5f = null;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw._element_5__5c = null;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw._element_5__5d = null;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.first = null;
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.second = null;
  var basector$vFSL7Nrn5zKx_borfa_aTZ_bw = $ctor$(null, null, type$vFSL7Nrn5zKx_borfa_aTZ_bw);
  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1..ctor
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.RwAABtrn5zKx_borfa_aTZ_bw = function (b)
  {
    var a = this;

    a.__1__state = b;
  };
  var ctor$RwAABtrn5zKx_borfa_aTZ_bw = $ctor$(null, 'RwAABtrn5zKx_borfa_aTZ_bw', type$vFSL7Nrn5zKx_borfa_aTZ_bw);

  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1.System.Collections.IEnumerable.GetEnumerator
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.System_Collections_IEnumerable_GetEnumerator = function ()
  {
    var a = this, b;

    b = a.GetEnumerator();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1.System.Collections.IEnumerator.get_Current
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.System_Collections_IEnumerator_get_Current = function ()
  {
    var a = this, b;

    b = a.get_Current();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1.GetEnumerator
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.GetEnumerator = function ()
  {
    var a = this, b, c, d;

    b = null;
    d = !(a.__1__state == -2);

    if (!d)
    {
      a.__1__state = 0;
      b = a;
    }
    else
    {
      b = new ctor$RwAABtrn5zKx_borfa_aTZ_bw(0);
    }

    b.first = a.__3__first;
    b.second = a.__3__second;
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1.get_Current
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.get_Current = function ()
  {
    var a = this, b;

    b = a.__2__current;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1.Dispose
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.Dispose = function ()
  {
    var a = this, b;

    a.__1__state = -1;
    b = (a.__7__wrap5e == null);

    if (!b)
    {
      a.__7__wrap5e.xAAABq_bUDz_aWf_aXPRTEtLA();
    }

    a.__1__state = -1;
    b = (a.__7__wrap5f == null);

    if (!b)
    {
      a.__7__wrap5f.xAAABq_bUDz_aWf_aXPRTEtLA();
    }

  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1.MoveNext
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.MoveNext = function ()
  {
    var a = this, b, c;

    c = (a.__1__state && ((a.__1__state == 2) ? 0 : !(a.__1__state == 4)));

    if (!c)
    {
      c = (a.__1__state == 4);

      if (!c)
      {
        c = !!a.__1__state;

        if (!c)
        {
          a.__1__state = -1;
          a.__7__wrap5e = a.first.NgEABnMeWzaNooAKOmFm5g();
          a.__1__state = 1;
        }
        else
        {
          a.__1__state = 1;
        }

        while (a.__7__wrap5e.qAAABu7N0xGI6ACQJ1TEOg())
        {
          a._element_5__5c = a.__7__wrap5e.xQAABrYmRzSu_anO2U_bk1MA();
          a.__2__current = a._element_5__5c;
          a.__1__state = 2;
          b = 1;
          return b;
        }
        a.__1__state = -1;
        a.__7__wrap5f = a.second.NgEABnMeWzaNooAKOmFm5g();
        a.__1__state = 3;
      }
      else
      {
        a.__1__state = 3;
      }

      while (a.__7__wrap5f.qAAABu7N0xGI6ACQJ1TEOg())
      {
        a._element_5__5d = a.__7__wrap5f.xQAABrYmRzSu_anO2U_bk1MA();
        a.__2__current = a._element_5__5d;
        a.__1__state = 4;
        b = 1;
        return b;
      }
    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1.Reset
  type$vFSL7Nrn5zKx_borfa_aTZ_bw.Reset = function ()
  {
    var a = this;

    throw fwAABlCvizaBPZBMcbwXfw('The method or operation is not implemented.');
  };

  // 
  // ScriptCoreLib.Shared.Query.__Enumerable+_ConcatIterator_d__5b`1
  (function (i)  {
    i.NgEABnMeWzaNooAKOmFm5g = i.GetEnumerator;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerable_GetEnumerator;
    // 
    i.xQAABrYmRzSu_anO2U_bk1MA = i.get_Current;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.Dispose;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.MoveNext;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerator_get_Current;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.Reset;
  }
  )(type$vFSL7Nrn5zKx_borfa_aTZ_bw);
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3
  function DJXN8wE7OTaQ4_bnELOATmA(){};
  DJXN8wE7OTaQ4_bnELOATmA.TypeName = "_SelectManyIterator_d__37_3";
  DJXN8wE7OTaQ4_bnELOATmA.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$DJXN8wE7OTaQ4_bnELOATmA = DJXN8wE7OTaQ4_bnELOATmA.prototype;
  type$DJXN8wE7OTaQ4_bnELOATmA.constructor = DJXN8wE7OTaQ4_bnELOATmA;
  type$DJXN8wE7OTaQ4_bnELOATmA.__1__state = 0;
  type$DJXN8wE7OTaQ4_bnELOATmA.__2__current = null;
  type$DJXN8wE7OTaQ4_bnELOATmA.__3__collectionSelector = null;
  type$DJXN8wE7OTaQ4_bnELOATmA.__3__resultSelector = null;
  type$DJXN8wE7OTaQ4_bnELOATmA.__3__source = null;
  type$DJXN8wE7OTaQ4_bnELOATmA.__7__wrap3a = null;
  type$DJXN8wE7OTaQ4_bnELOATmA.__7__wrap3c = null;
  type$DJXN8wE7OTaQ4_bnELOATmA._element_5__38 = null;
  type$DJXN8wE7OTaQ4_bnELOATmA._subElement_5__39 = null;
  type$DJXN8wE7OTaQ4_bnELOATmA.collectionSelector = null;
  type$DJXN8wE7OTaQ4_bnELOATmA.resultSelector = null;
  type$DJXN8wE7OTaQ4_bnELOATmA.source = null;
  var basector$DJXN8wE7OTaQ4_bnELOATmA = $ctor$(null, null, type$DJXN8wE7OTaQ4_bnELOATmA);
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3..ctor
  type$DJXN8wE7OTaQ4_bnELOATmA.TwAABgE7OTaQ4_bnELOATmA = function (b)
  {
    var a = this;

    a.__1__state = b;
  };
  var ctor$TwAABgE7OTaQ4_bnELOATmA = $ctor$(null, 'TwAABgE7OTaQ4_bnELOATmA', type$DJXN8wE7OTaQ4_bnELOATmA);

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3.System.Collections.Generic.IEnumerable<TResult>.GetEnumerator
  type$DJXN8wE7OTaQ4_bnELOATmA.System_Collections_Generic_IEnumerable_TResult__GetEnumerator = function ()
  {
    var a = this, b, c, d;

    b = null;
    d = !(a.__1__state == -2);

    if (!d)
    {
      a.__1__state = 0;
      b = a;
    }
    else
    {
      b = new ctor$TwAABgE7OTaQ4_bnELOATmA(0);
    }

    b.source = a.__3__source;
    b.collectionSelector = a.__3__collectionSelector;
    b.resultSelector = a.__3__resultSelector;
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3.System.Collections.IEnumerable.GetEnumerator
  type$DJXN8wE7OTaQ4_bnELOATmA.System_Collections_IEnumerable_GetEnumerator = function ()
  {
    var a = this, b;

    b = a.NgEABnMeWzaNooAKOmFm5g();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3.System.Collections.IEnumerator.Reset
  type$DJXN8wE7OTaQ4_bnELOATmA.System_Collections_IEnumerator_Reset = function ()
  {
    var a = this;

    throw _9A8ABm73tjaZRrBwmVX_adg();
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3.System.IDisposable.Dispose
  type$DJXN8wE7OTaQ4_bnELOATmA.System_IDisposable_Dispose = function ()
  {
    var a = this;

    try
    {
      a.__m__Finally3d();
    }
    finally
    {
      a.__m__Finally3b();
    }
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3.System.Collections.Generic.IEnumerator<TResult>.get_Current
  type$DJXN8wE7OTaQ4_bnELOATmA.System_Collections_Generic_IEnumerator_TResult__get_Current = function ()
  {
    var a = this, b;

    b = a.__2__current;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3.System.Collections.IEnumerator.get_Current
  type$DJXN8wE7OTaQ4_bnELOATmA.System_Collections_IEnumerator_get_Current = function ()
  {
    var a = this, b;

    b = a.__2__current;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3.__m__Finally3b
  type$DJXN8wE7OTaQ4_bnELOATmA.__m__Finally3b = function ()
  {
    var a = this, b;

    a.__1__state = -1;
    b = (a.__7__wrap3a == null);

    if (!b)
    {
      a.__7__wrap3a.xAAABq_bUDz_aWf_aXPRTEtLA();
    }

  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3.__m__Finally3d
  type$DJXN8wE7OTaQ4_bnELOATmA.__m__Finally3d = function ()
  {
    var a = this, b;

    a.__1__state = 1;
    b = (a.__7__wrap3c == null);

    if (!b)
    {
      a.__7__wrap3c.xAAABq_bUDz_aWf_aXPRTEtLA();
    }

  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3.MoveNext
  type$DJXN8wE7OTaQ4_bnELOATmA.MoveNext = function ()
  {
    var a = this, b, c, d, e, f;

    try
    {
      b = 0;
      c = !a.__1__state;
      d = (a.__1__state == 3);
      f = (!c && !d);

      if (!f)
      {
        f = !d;

        if (!f)
        {
          b = 1;
        }

        f = (!b && !c);

        if (!f)
        {
          f = b;

          if (!f)
          {
            a.__1__state = -1;
            a.__7__wrap3a = NgAABkAVcDWPnLAqFK62WA(a.source).NgEABnMeWzaNooAKOmFm5g();
            a.__1__state = 1;
          }

          while ((b || a.__7__wrap3a.qAAABu7N0xGI6ACQJ1TEOg()))
          {
            f = b;

            if (!f)
            {
              a._element_5__38 = a.__7__wrap3a.xQAABrYmRzSu_anO2U_bk1MA();
              a.__7__wrap3c = NgAABkAVcDWPnLAqFK62WA(a.collectionSelector.Invoke(a._element_5__38)).NgEABnMeWzaNooAKOmFm5g();
            }

            b = 0;
            a.__1__state = 2;
            while (a.__7__wrap3c.qAAABu7N0xGI6ACQJ1TEOg())
            {
              a._subElement_5__39 = a.__7__wrap3c.xQAABrYmRzSu_anO2U_bk1MA();
              a.__2__current = a.resultSelector.Invoke(a._element_5__38, a._subElement_5__39);
              a.__1__state = 3;
              e = 1;
              return e;
            }
            a.__m__Finally3d();
          }
          a.__m__Finally3b();
        }

      }

      e = 0;
    }
    catch (__exc)
    {
      a.xAAABq_bUDz_aWf_aXPRTEtLA();
      throw __exc;
    }
    return e;
  };

  // 
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__37`3
  (function (i)  {
    i.NgEABnMeWzaNooAKOmFm5g = i.System_Collections_Generic_IEnumerable_TResult__GetEnumerator;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerable_GetEnumerator;
    // 
    i.xQAABrYmRzSu_anO2U_bk1MA = i.System_Collections_Generic_IEnumerator_TResult__get_Current;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.System_IDisposable_Dispose;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.MoveNext;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerator_get_Current;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerator_Reset;
  }
  )(type$DJXN8wE7OTaQ4_bnELOATmA);
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2
  function _2EvG8q_b_azTavpcWLP4fehw(){};
  _2EvG8q_b_azTavpcWLP4fehw.TypeName = "_SelectManyIterator_d__16_2";
  _2EvG8q_b_azTavpcWLP4fehw.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$_2EvG8q_b_azTavpcWLP4fehw = _2EvG8q_b_azTavpcWLP4fehw.prototype;
  type$_2EvG8q_b_azTavpcWLP4fehw.constructor = _2EvG8q_b_azTavpcWLP4fehw;
  type$_2EvG8q_b_azTavpcWLP4fehw.__1__state = 0;
  type$_2EvG8q_b_azTavpcWLP4fehw.__2__current = null;
  type$_2EvG8q_b_azTavpcWLP4fehw.__3__source = null;
  type$_2EvG8q_b_azTavpcWLP4fehw.__3__selector = null;
  type$_2EvG8q_b_azTavpcWLP4fehw.__7__wrap19 = null;
  type$_2EvG8q_b_azTavpcWLP4fehw.__7__wrap1a = null;
  type$_2EvG8q_b_azTavpcWLP4fehw.source = null;
  type$_2EvG8q_b_azTavpcWLP4fehw.selector = null;
  var basector$_2EvG8q_b_azTavpcWLP4fehw = $ctor$(null, null, type$_2EvG8q_b_azTavpcWLP4fehw);
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2..ctor
  type$_2EvG8q_b_azTavpcWLP4fehw.WQAABq_b_azTavpcWLP4fehw = function (b)
  {
    var a = this;

    a.__1__state = b;
  };
  var ctor$WQAABq_b_azTavpcWLP4fehw = $ctor$(null, 'WQAABq_b_azTavpcWLP4fehw', type$_2EvG8q_b_azTavpcWLP4fehw);

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2.System.Collections.IEnumerable.GetEnumerator
  type$_2EvG8q_b_azTavpcWLP4fehw.System_Collections_IEnumerable_GetEnumerator = function ()
  {
    var a = this, b;

    b = a.NgEABnMeWzaNooAKOmFm5g();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2.System.Collections.IEnumerator.get_Current
  type$_2EvG8q_b_azTavpcWLP4fehw.System_Collections_IEnumerator_get_Current = function ()
  {
    var a = this, b;

    b = a.get_Current();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2.GetEnumerator
  type$_2EvG8q_b_azTavpcWLP4fehw.GetEnumerator = function ()
  {
    var a = this, b, c, d;

    b = null;
    d = !(a.__1__state == -2);

    if (!d)
    {
      a.__1__state = 0;
      b = a;
    }
    else
    {
      b = new ctor$WQAABq_b_azTavpcWLP4fehw(0);
    }

    b.source = a.__3__source;
    b.selector = a.__3__selector;
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2.get_Current
  type$_2EvG8q_b_azTavpcWLP4fehw.get_Current = function ()
  {
    var a = this, b;

    b = a.__2__current;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2.Dispose
  type$_2EvG8q_b_azTavpcWLP4fehw.Dispose = function ()
  {
    var a = this, b;

    try
    {
      a.__1__state = 1;
      b = (a.__7__wrap1a == null);

      if (!b)
      {
        a.__7__wrap1a.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    finally
    {
      a.__1__state = -1;
      b = (a.__7__wrap19 == null);

      if (!b)
      {
        a.__7__wrap19.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2.MoveNext
  type$_2EvG8q_b_azTavpcWLP4fehw.MoveNext = function ()
  {
    var a = this, b, c, d;

    b = 0;
    d = !a.__1__state;

    if (!d)
    {
      d = !(a.__1__state == 3);

      if (!d)
      {
        b = 1;
      }
      else
      {
        c = 0;
        return c;
      }

    }

    d = b;

    if (!d)
    {
      a.__1__state = -1;
      a.__7__wrap19 = a.source.NgEABnMeWzaNooAKOmFm5g();
      a.__1__state = 1;
    }

    while ((b || a.__7__wrap19.qAAABu7N0xGI6ACQJ1TEOg()))
    {
      d = b;

      if (!d)
      {
        a.__7__wrap1a = NgAABkAVcDWPnLAqFK62WA(a.selector.Invoke(a.__7__wrap19.xQAABrYmRzSu_anO2U_bk1MA())).NgEABnMeWzaNooAKOmFm5g();
        a.__1__state = 2;
      }
      else
      {
        b = 0;
        a.__1__state = 2;
      }

      while (a.__7__wrap1a.qAAABu7N0xGI6ACQJ1TEOg())
      {
        a.__2__current = a.__7__wrap1a.xQAABrYmRzSu_anO2U_bk1MA();
        a.__1__state = 3;
        c = 1;
        return c;
      }
      a.__1__state = 1;
    }
    a.__1__state = -1;
    c = 0;
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2.Reset
  type$_2EvG8q_b_azTavpcWLP4fehw.Reset = function ()
  {
    var a = this;

    throw fwAABlCvizaBPZBMcbwXfw('The method or operation is not implemented.');
  };

  // 
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectManyIterator_d__16`2
  (function (i)  {
    i.NgEABnMeWzaNooAKOmFm5g = i.GetEnumerator;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerable_GetEnumerator;
    // 
    i.xQAABrYmRzSu_anO2U_bk1MA = i.get_Current;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.Dispose;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.MoveNext;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerator_get_Current;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.Reset;
  }
  )(type$_2EvG8q_b_azTavpcWLP4fehw);
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2
  function _7TKEHsYynjKH_a9BWAXyyWQ(){};
  _7TKEHsYynjKH_a9BWAXyyWQ.TypeName = "_SelectIterator_d__b_2";
  _7TKEHsYynjKH_a9BWAXyyWQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$_7TKEHsYynjKH_a9BWAXyyWQ = _7TKEHsYynjKH_a9BWAXyyWQ.prototype;
  type$_7TKEHsYynjKH_a9BWAXyyWQ.constructor = _7TKEHsYynjKH_a9BWAXyyWQ;
  type$_7TKEHsYynjKH_a9BWAXyyWQ._1_state = 0;
  type$_7TKEHsYynjKH_a9BWAXyyWQ._2_current = null;
  type$_7TKEHsYynjKH_a9BWAXyyWQ._3_source = null;
  type$_7TKEHsYynjKH_a9BWAXyyWQ._3_selector = null;
  type$_7TKEHsYynjKH_a9BWAXyyWQ._e_5 = null;
  type$_7TKEHsYynjKH_a9BWAXyyWQ._7_wrap = null;
  type$_7TKEHsYynjKH_a9BWAXyyWQ.source = null;
  type$_7TKEHsYynjKH_a9BWAXyyWQ.selector = null;
  var basector$_7TKEHsYynjKH_a9BWAXyyWQ = $ctor$(null, null, type$_7TKEHsYynjKH_a9BWAXyyWQ);
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2..ctor
  type$_7TKEHsYynjKH_a9BWAXyyWQ.YQAABsYynjKH_a9BWAXyyWQ = function (b)
  {
    var a = this;

    a._1_state = b;
  };
  var ctor$YQAABsYynjKH_a9BWAXyyWQ = $ctor$(null, 'YQAABsYynjKH_a9BWAXyyWQ', type$_7TKEHsYynjKH_a9BWAXyyWQ);

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2.System.Collections.Generic.IEnumerable<S>.GetEnumerator
  type$_7TKEHsYynjKH_a9BWAXyyWQ.System_Collections_Generic_IEnumerable_S__GetEnumerator = function ()
  {
    var a = this, b, c, d;

    b = null;
    d = !(a._1_state == -2);

    if (!d)
    {
      a._1_state = 0;
      b = a;
    }
    else
    {
      b = new ctor$YQAABsYynjKH_a9BWAXyyWQ(0);
    }

    b.source = a._3_source;
    b.selector = a._3_selector;
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2.System.Collections.IEnumerator.get_Current
  type$_7TKEHsYynjKH_a9BWAXyyWQ.System_Collections_IEnumerator_get_Current = function ()
  {
    var a = this, b;

    b = a.get_Current();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2.System.Collections.IEnumerable.GetEnumerator
  type$_7TKEHsYynjKH_a9BWAXyyWQ.System_Collections_IEnumerable_GetEnumerator = function ()
  {
    var a = this, b;

    b = a.NgEABnMeWzaNooAKOmFm5g();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2.Dispose
  type$_7TKEHsYynjKH_a9BWAXyyWQ.Dispose = function ()
  {
    var a = this, b;

    b = !(a._1_state == 1);

    if (!b)
    {
      return;
    }

    b = !(a._1_state == 2);

    if (!b)
    {
      return;
    }

    a._1_state = -1;
    b = (a._7_wrap == null);

    if (!b)
    {
      a._7_wrap.xAAABq_bUDz_aWf_aXPRTEtLA();
    }

  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2.get_Current
  type$_7TKEHsYynjKH_a9BWAXyyWQ.get_Current = function ()
  {
    var a = this, b;

    b = a._2_current;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2.MoveNext
  type$_7TKEHsYynjKH_a9BWAXyyWQ.MoveNext = function ()
  {
    var a = this, b, c;

    c = (a._1_state && !(a._1_state == 2));

    if (!c)
    {
      c = !!a._1_state;

      if (!c)
      {
        a._1_state = -1;
        a._7_wrap = NgAABkAVcDWPnLAqFK62WA(a.source).NgEABnMeWzaNooAKOmFm5g();
      }

      a._1_state = 1;
      while (a._7_wrap.qAAABu7N0xGI6ACQJ1TEOg())
      {
        a._e_5 = a._7_wrap.xQAABrYmRzSu_anO2U_bk1MA();
        a._2_current = a.selector.Invoke(a._e_5);
        a._1_state = 2;
        b = 1;
        return b;
      }
      a._1_state = -1;
    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2.Reset
  type$_7TKEHsYynjKH_a9BWAXyyWQ.Reset = function ()
  {
    var a = this;

    throw fwAABlCvizaBPZBMcbwXfw('The method or operation is not implemented.');
  };

  // 
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__b`2
  (function (i)  {
    i.NgEABnMeWzaNooAKOmFm5g = i.System_Collections_Generic_IEnumerable_S__GetEnumerator;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerable_GetEnumerator;
    // 
    i.xQAABrYmRzSu_anO2U_bk1MA = i.get_Current;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.Dispose;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.MoveNext;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerator_get_Current;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.Reset;
  }
  )(type$_7TKEHsYynjKH_a9BWAXyyWQ);
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2
  function KHsG07amAzCum3aMmJl9kg(){};
  KHsG07amAzCum3aMmJl9kg.TypeName = "_SelectIterator_d__13_2";
  KHsG07amAzCum3aMmJl9kg.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$KHsG07amAzCum3aMmJl9kg = KHsG07amAzCum3aMmJl9kg.prototype;
  type$KHsG07amAzCum3aMmJl9kg.constructor = KHsG07amAzCum3aMmJl9kg;
  type$KHsG07amAzCum3aMmJl9kg._1_state = 0;
  type$KHsG07amAzCum3aMmJl9kg._2_current = null;
  type$KHsG07amAzCum3aMmJl9kg._3_source = null;
  type$KHsG07amAzCum3aMmJl9kg._3_selector = null;
  type$KHsG07amAzCum3aMmJl9kg._e_5 = null;
  type$KHsG07amAzCum3aMmJl9kg._7_wrap = null;
  type$KHsG07amAzCum3aMmJl9kg.source = null;
  type$KHsG07amAzCum3aMmJl9kg.selector = null;
  type$KHsG07amAzCum3aMmJl9kg._index = 0;
  var basector$KHsG07amAzCum3aMmJl9kg = $ctor$(null, null, type$KHsG07amAzCum3aMmJl9kg);
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2..ctor
  type$KHsG07amAzCum3aMmJl9kg.aQAABramAzCum3aMmJl9kg = function (b)
  {
    var a = this;

    a._1_state = b;
  };
  var ctor$aQAABramAzCum3aMmJl9kg = $ctor$(null, 'aQAABramAzCum3aMmJl9kg', type$KHsG07amAzCum3aMmJl9kg);

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2.System.Collections.Generic.IEnumerable<S>.GetEnumerator
  type$KHsG07amAzCum3aMmJl9kg.System_Collections_Generic_IEnumerable_S__GetEnumerator = function ()
  {
    var a = this, b, c, d;

    b = null;
    d = !(a._1_state == -2);

    if (!d)
    {
      a._1_state = 0;
      b = a;
    }
    else
    {
      b = new ctor$aQAABramAzCum3aMmJl9kg(0);
    }

    b.source = a._3_source;
    b.selector = a._3_selector;
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2.System.Collections.IEnumerator.get_Current
  type$KHsG07amAzCum3aMmJl9kg.System_Collections_IEnumerator_get_Current = function ()
  {
    var a = this, b;

    b = a.get_Current();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2.System.Collections.IEnumerable.GetEnumerator
  type$KHsG07amAzCum3aMmJl9kg.System_Collections_IEnumerable_GetEnumerator = function ()
  {
    var a = this, b;

    b = a.NgEABnMeWzaNooAKOmFm5g();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2.Dispose
  type$KHsG07amAzCum3aMmJl9kg.Dispose = function ()
  {
    var a = this, b;

    b = !(a._1_state == 1);

    if (!b)
    {
      return;
    }

    b = !(a._1_state == 2);

    if (!b)
    {
      return;
    }

    a._1_state = -1;
    b = (a._7_wrap == null);

    if (!b)
    {
      a._7_wrap.xAAABq_bUDz_aWf_aXPRTEtLA();
    }

  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2.get_Current
  type$KHsG07amAzCum3aMmJl9kg.get_Current = function ()
  {
    var a = this, b;

    b = a._2_current;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2.MoveNext
  type$KHsG07amAzCum3aMmJl9kg.MoveNext = function ()
  {
    var a = this, b, c;

    c = (a._1_state && !(a._1_state == 2));

    if (!c)
    {
      c = !!a._1_state;

      if (!c)
      {
        a._1_state = -1;
        a._index = -1;
        a._7_wrap = NgAABkAVcDWPnLAqFK62WA(a.source).NgEABnMeWzaNooAKOmFm5g();
      }

      a._1_state = 1;
      while (a._7_wrap.qAAABu7N0xGI6ACQJ1TEOg())
      {
        a._e_5 = a._7_wrap.xQAABrYmRzSu_anO2U_bk1MA();
        a._index = (a._index + 1);
        a._2_current = a.selector.Invoke(a._e_5, a._index);
        a._1_state = 2;
        b = 1;
        return b;
      }
      a._1_state = -1;
    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2.Reset
  type$KHsG07amAzCum3aMmJl9kg.Reset = function ()
  {
    var a = this;

    throw fwAABlCvizaBPZBMcbwXfw('The method or operation is not implemented.');
  };

  // 
  // ScriptCoreLib.Shared.Query.__Enumerable+_SelectIterator_d__13`2
  (function (i)  {
    i.NgEABnMeWzaNooAKOmFm5g = i.System_Collections_Generic_IEnumerable_S__GetEnumerator;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerable_GetEnumerator;
    // 
    i.xQAABrYmRzSu_anO2U_bk1MA = i.get_Current;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.Dispose;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.MoveNext;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerator_get_Current;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.Reset;
  }
  )(type$KHsG07amAzCum3aMmJl9kg);
  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1
  function onx77RyKcjqF1lxYSIuBWQ(){};
  onx77RyKcjqF1lxYSIuBWQ.TypeName = "_TakeIterator_d__40_1";
  onx77RyKcjqF1lxYSIuBWQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$onx77RyKcjqF1lxYSIuBWQ = onx77RyKcjqF1lxYSIuBWQ.prototype;
  type$onx77RyKcjqF1lxYSIuBWQ.constructor = onx77RyKcjqF1lxYSIuBWQ;
  type$onx77RyKcjqF1lxYSIuBWQ.__1__state = 0;
  type$onx77RyKcjqF1lxYSIuBWQ.__2__current = null;
  type$onx77RyKcjqF1lxYSIuBWQ.__3__count = 0;
  type$onx77RyKcjqF1lxYSIuBWQ.__3__source = null;
  type$onx77RyKcjqF1lxYSIuBWQ.__7__wrap42 = null;
  type$onx77RyKcjqF1lxYSIuBWQ._element_5__41 = null;
  type$onx77RyKcjqF1lxYSIuBWQ.count = 0;
  type$onx77RyKcjqF1lxYSIuBWQ.source = null;
  var basector$onx77RyKcjqF1lxYSIuBWQ = $ctor$(null, null, type$onx77RyKcjqF1lxYSIuBWQ);
  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1..ctor
  type$onx77RyKcjqF1lxYSIuBWQ.cQAABhyKcjqF1lxYSIuBWQ = function (b)
  {
    var a = this;

    a.__1__state = b;
  };
  var ctor$cQAABhyKcjqF1lxYSIuBWQ = $ctor$(null, 'cQAABhyKcjqF1lxYSIuBWQ', type$onx77RyKcjqF1lxYSIuBWQ);

  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1.System.Collections.IEnumerable.GetEnumerator
  type$onx77RyKcjqF1lxYSIuBWQ.System_Collections_IEnumerable_GetEnumerator = function ()
  {
    var a = this, b;

    b = a.GetEnumerator();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1.System.Collections.IEnumerator.get_Current
  type$onx77RyKcjqF1lxYSIuBWQ.System_Collections_IEnumerator_get_Current = function ()
  {
    var a = this, b;

    b = a.get_Current();
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1.GetEnumerator
  type$onx77RyKcjqF1lxYSIuBWQ.GetEnumerator = function ()
  {
    var a = this, b, c, d;

    b = null;
    d = !(a.__1__state == -2);

    if (!d)
    {
      a.__1__state = 0;
      b = a;
    }
    else
    {
      b = new ctor$cQAABhyKcjqF1lxYSIuBWQ(0);
    }

    b.source = a.__3__source;
    b.count = a.__3__count;
    c = b;
    return c;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1.get_Current
  type$onx77RyKcjqF1lxYSIuBWQ.get_Current = function ()
  {
    var a = this, b;

    b = a.__2__current;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1.Dispose
  type$onx77RyKcjqF1lxYSIuBWQ.Dispose = function ()
  {
    var a = this;

    a.__m__Finally43();
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1.Reset
  type$onx77RyKcjqF1lxYSIuBWQ.Reset = function ()
  {
    var a = this;

    throw LQEABvRKRDCqE_bw5H_bdCOQ();
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1.MoveNext
  type$onx77RyKcjqF1lxYSIuBWQ.MoveNext = function ()
  {
    var a = this, b, c;

    c = (a.__1__state && !(a.__1__state == 2));

    if (!c)
    {
      c = !!a.__1__state;

      if (!c)
      {
        a.__1__state = -1;
        c = (a.count > 0);

        if (!c)
        {
          a.__m__Finally43();
          b = 0;
          return b;
        }

        a.__7__wrap42 = NgAABkAVcDWPnLAqFK62WA(a.source).NgEABnMeWzaNooAKOmFm5g();
      }
      else
      {
        c = !(a.__1__state == 2);

        if (!c)
        {
          a.__1__state = 1;
          a.count = (a.count - 1);
          c = !!a.count;

          if (!c)
          {
            a.__m__Finally43();
            b = 0;
            return b;
          }

        }

      }

      c = !a.__7__wrap42.qAAABu7N0xGI6ACQJ1TEOg();

      if (!c)
      {
        a._element_5__41 = a.__7__wrap42.xQAABrYmRzSu_anO2U_bk1MA();
        a.__2__current = a._element_5__41;
        a.__1__state = 2;
        b = 1;
        return b;
      }

    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1.__m__Finally43
  type$onx77RyKcjqF1lxYSIuBWQ.__m__Finally43 = function ()
  {
    var a = this, b;

    a.__1__state = -1;
    b = (a.__7__wrap42 == null);

    if (!b)
    {
      a.__7__wrap42.xAAABq_bUDz_aWf_aXPRTEtLA();
    }

  };

  // 
  // ScriptCoreLib.Shared.Query.__Enumerable+_TakeIterator_d__40`1
  (function (i)  {
    i.NgEABnMeWzaNooAKOmFm5g = i.GetEnumerator;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerable_GetEnumerator;
    // 
    i.xQAABrYmRzSu_anO2U_bk1MA = i.get_Current;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.Dispose;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.MoveNext;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.System_Collections_IEnumerator_get_Current;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.Reset;
  }
  )(type$onx77RyKcjqF1lxYSIuBWQ);
  // ScriptCoreLib.Shared.Lambda.Future
  function R2PC0uB0iTWwwR4dEcfbmQ(){};
  R2PC0uB0iTWwwR4dEcfbmQ.TypeName = "Future";
  R2PC0uB0iTWwwR4dEcfbmQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$R2PC0uB0iTWwwR4dEcfbmQ = R2PC0uB0iTWwwR4dEcfbmQ.prototype;
  type$R2PC0uB0iTWwwR4dEcfbmQ.constructor = R2PC0uB0iTWwwR4dEcfbmQ;
  type$R2PC0uB0iTWwwR4dEcfbmQ._Continue = null;
  var basector$R2PC0uB0iTWwwR4dEcfbmQ = $ctor$(null, null, type$R2PC0uB0iTWwwR4dEcfbmQ);
  // ScriptCoreLib.Shared.Lambda.Future..ctor
  type$R2PC0uB0iTWwwR4dEcfbmQ.fgAABuB0iTWwwR4dEcfbmQ = function ()
  {
    var a = this;

    a.fwAABuB0iTWwwR4dEcfbmQ(null);
  };
  var ctor$fgAABuB0iTWwwR4dEcfbmQ = R2PC0uB0iTWwwR4dEcfbmQ.ctor = $ctor$(null, 'fgAABuB0iTWwwR4dEcfbmQ', type$R2PC0uB0iTWwwR4dEcfbmQ);

  // ScriptCoreLib.Shared.Lambda.Future..ctor
  type$R2PC0uB0iTWwwR4dEcfbmQ.fwAABuB0iTWwwR4dEcfbmQ = function (b)
  {
    var a = this, c;

    a._Continue = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    c = (b == null);

    if (!c)
    {
      jgAABlEkXDuoViPsjb55BQ(a, b);
    }

  };
  var ctor$fwAABuB0iTWwwR4dEcfbmQ = $ctor$(null, 'fwAABuB0iTWwwR4dEcfbmQ', type$R2PC0uB0iTWwwR4dEcfbmQ);

  // ScriptCoreLib.Shared.Lambda.Future.InternalContinue
  type$R2PC0uB0iTWwwR4dEcfbmQ.ewAABuB0iTWwwR4dEcfbmQ = function (b)
  {
    var a = this, c;

    c = !(b == null);

    if (!c)
    {
      return;
    }

    c = (a._Continue == null);

    if (!c)
    {
      a._Continue.pQAABvqMgj2CW8U7T0nhxg(b);
      return;
    }

    b.Invoke();
  };

  // ScriptCoreLib.Shared.Lambda.Future.get_CanSignal
  type$R2PC0uB0iTWwwR4dEcfbmQ.fAAABuB0iTWwwR4dEcfbmQ = function ()
  {
    var a = this, b;

    b = !(a._Continue == null);
    return b;
  };

  // ScriptCoreLib.Shared.Lambda.Future.Signal
  type$R2PC0uB0iTWwwR4dEcfbmQ.fQAABuB0iTWwwR4dEcfbmQ = function ()
  {
    var a = this, b, c;

    c = !a.fAAABuB0iTWwwR4dEcfbmQ();

    if (!c)
    {
      b = a._Continue;
      a._Continue = null;
      pgEABl964D_aaiuMHdBpszA(b);
      b.pwAABvqMgj2CW8U7T0nhxg();
    }

  };

  // ScriptCoreLib.Shared.Lambda.Future.Dispose
  type$R2PC0uB0iTWwwR4dEcfbmQ.gAAABuB0iTWwwR4dEcfbmQ = function ()
  {
    var a = this;

    a.fQAABuB0iTWwwR4dEcfbmQ();
  };

  // ScriptCoreLib.Shared.Lambda.Future.op_Implicit
  function gQAABuB0iTWwwR4dEcfbmQ(b)
  {
    var c;

    c = new ctor$TQUABmdYmDufdNSm2oh5Bw(b, 'jgAABlEkXDuoViPsjb55BQ').AsExtensionMethod();
    return c;
  };

  // ScriptCoreLib.Shared.Lambda.IFutureContinue
  // ScriptCoreLib.Shared.Lambda.Future
  (function (i)  {
    i.egAABp7VWD613rhesAF0uQ = i.ewAABuB0iTWwwR4dEcfbmQ;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.gAAABuB0iTWwwR4dEcfbmQ;
  }
  )(type$R2PC0uB0iTWwwR4dEcfbmQ);
  // ScriptCoreLib.Shared.Lambda.Future`1
  function aXclwMouJj63d8Z1Bh_amow(){};
  aXclwMouJj63d8Z1Bh_amow.TypeName = "Future_1";
  aXclwMouJj63d8Z1Bh_amow.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$aXclwMouJj63d8Z1Bh_amow = aXclwMouJj63d8Z1Bh_amow.prototype = new R2PC0uB0iTWwwR4dEcfbmQ();
  type$aXclwMouJj63d8Z1Bh_amow.constructor = aXclwMouJj63d8Z1Bh_amow;
  type$aXclwMouJj63d8Z1Bh_amow._Value = null;
  var basector$aXclwMouJj63d8Z1Bh_amow = $ctor$(basector$R2PC0uB0iTWwwR4dEcfbmQ, null, type$aXclwMouJj63d8Z1Bh_amow);
  // ScriptCoreLib.Shared.Lambda.Future`1..ctor
  type$aXclwMouJj63d8Z1Bh_amow.hgAABsouJj63d8Z1Bh_amow = function ()
  {
    var a = this;

    a.fgAABuB0iTWwwR4dEcfbmQ();
  };
  var ctor$hgAABsouJj63d8Z1Bh_amow = aXclwMouJj63d8Z1Bh_amow.ctor = $ctor$(basector$R2PC0uB0iTWwwR4dEcfbmQ, 'hgAABsouJj63d8Z1Bh_amow', type$aXclwMouJj63d8Z1Bh_amow);

  // ScriptCoreLib.Shared.Lambda.Future`1.get_Value
  type$aXclwMouJj63d8Z1Bh_amow.ggAABsouJj63d8Z1Bh_amow = function ()
  {
    var a = this, b;

    b = a._Value;
    return b;
  };

  // ScriptCoreLib.Shared.Lambda.Future`1.set_Value
  type$aXclwMouJj63d8Z1Bh_amow.gwAABsouJj63d8Z1Bh_amow = function (b)
  {
    var a = this, c;

    c = a.fAAABuB0iTWwwR4dEcfbmQ();

    if (!c)
    {
      throw fwAABlCvizaBPZBMcbwXfw('Value can be set only once\u0021');
    }

    a._Value = b;
    a.fQAABuB0iTWwwR4dEcfbmQ();
  };

  // ScriptCoreLib.Shared.Lambda.Future`1.Continue
  type$aXclwMouJj63d8Z1Bh_amow.hAAABsouJj63d8Z1Bh_amow = function (b)
  {
    var a = this, c, d, e;

    c = null;
    d = /* DOMCreateType */new ZOCH2ys1_aj6RiiP5FfGBdA();
    d.e = b;
    d.__4__this = a;
    e = !a.fAAABuB0iTWwwR4dEcfbmQ();

    if (!e)
    {

      if (!c)
      {
        c = new ctor$UQUABuzqfTWQzxgi2Ip02g(d, '_Continue_b__0');
      }

      jgAABlEkXDuoViPsjb55BQ(a, c);
      return;
    }

    d.e.Invoke(a.ggAABsouJj63d8Z1Bh_amow());
  };

  // ScriptCoreLib.Shared.Lambda.Future`1.op_Implicit
  function hQAABsouJj63d8Z1Bh_amow(b)
  {
    var c, d;

    c = /* DOMCreateType */new XAPoN2PzFzSSME6ok46wsQ();
    c.e = b;
    d = new ctor$TQUABmdYmDufdNSm2oh5Bw(c, '_op_Implicit_b__4');
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.IFutureContinue
  // ScriptCoreLib.Shared.Lambda.Future`1
  (function (i)  {
    i.egAABp7VWD613rhesAF0uQ = i.ewAABuB0iTWwwR4dEcfbmQ;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.gAAABuB0iTWwwR4dEcfbmQ;
  }
  )(type$aXclwMouJj63d8Z1Bh_amow);
  // ScriptCoreLib.Shared.Lambda.FutureAction`1
  function WDCzzVwhBDaAYO3aS2mrZw(){};
  WDCzzVwhBDaAYO3aS2mrZw.TypeName = "FutureAction_1";
  WDCzzVwhBDaAYO3aS2mrZw.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$WDCzzVwhBDaAYO3aS2mrZw = WDCzzVwhBDaAYO3aS2mrZw.prototype = new aXclwMouJj63d8Z1Bh_amow();
  type$WDCzzVwhBDaAYO3aS2mrZw.constructor = WDCzzVwhBDaAYO3aS2mrZw;
  var basector$WDCzzVwhBDaAYO3aS2mrZw = $ctor$(basector$aXclwMouJj63d8Z1Bh_amow, null, type$WDCzzVwhBDaAYO3aS2mrZw);
  // ScriptCoreLib.Shared.Lambda.FutureAction`1..ctor
  type$WDCzzVwhBDaAYO3aS2mrZw.igAABlwhBDaAYO3aS2mrZw = function ()
  {
    var a = this;

    a.hgAABsouJj63d8Z1Bh_amow();
  };
  var ctor$igAABlwhBDaAYO3aS2mrZw = WDCzzVwhBDaAYO3aS2mrZw.ctor = $ctor$(basector$aXclwMouJj63d8Z1Bh_amow, 'igAABlwhBDaAYO3aS2mrZw', type$WDCzzVwhBDaAYO3aS2mrZw);

  // ScriptCoreLib.Shared.Lambda.FutureAction`1.Continue
  type$WDCzzVwhBDaAYO3aS2mrZw.hwAABlwhBDaAYO3aS2mrZw = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new mX4BU_bS4Ojm35bAzbCxgcw();
    c.e = b;
    a.hAAABsouJj63d8Z1Bh_amow(new ctor$TQUABmdYmDufdNSm2oh5Bw(c, '_Continue_b__0'));
  };

  // ScriptCoreLib.Shared.Lambda.FutureAction`1.op_Implicit
  function iAAABlwhBDaAYO3aS2mrZw(b)
  {
    var c;

    c = new ctor$TQUABmdYmDufdNSm2oh5Bw(b, 'hwAABlwhBDaAYO3aS2mrZw');
    return c;
  };

  // ScriptCoreLib.Shared.Lambda.FutureAction`1.get_Item
  type$WDCzzVwhBDaAYO3aS2mrZw.iQAABlwhBDaAYO3aS2mrZw = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new ZCfzchFlNj2LE8nxZcJ9tw();
    c.e = b;
    c.__4__this = a;
    d = new ctor$UQUABuzqfTWQzxgi2Ip02g(c, '_get_Item_b__3');
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.IFutureContinue
  // ScriptCoreLib.Shared.Lambda.FutureAction`1
  (function (i)  {
    i.egAABp7VWD613rhesAF0uQ = i.ewAABuB0iTWwwR4dEcfbmQ;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.gAAABuB0iTWwwR4dEcfbmQ;
  }
  )(type$WDCzzVwhBDaAYO3aS2mrZw);
  // ScriptCoreLib.Shared.Lambda.FutureStream
  function M4VUgp8OAzGU490a8p5wuQ(){};
  M4VUgp8OAzGU490a8p5wuQ.TypeName = "FutureStream";
  M4VUgp8OAzGU490a8p5wuQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$M4VUgp8OAzGU490a8p5wuQ = M4VUgp8OAzGU490a8p5wuQ.prototype;
  type$M4VUgp8OAzGU490a8p5wuQ.constructor = M4VUgp8OAzGU490a8p5wuQ;
  type$M4VUgp8OAzGU490a8p5wuQ.Gate = null;
  var basector$M4VUgp8OAzGU490a8p5wuQ = $ctor$(null, null, type$M4VUgp8OAzGU490a8p5wuQ);
  // ScriptCoreLib.Shared.Lambda.FutureStream..ctor
  type$M4VUgp8OAzGU490a8p5wuQ.iwAABp8OAzGU490a8p5wuQ = function ()
  {
    var a = this;

    a.Gate = new ctor$fgAABuB0iTWwwR4dEcfbmQ();
  };
  var ctor$iwAABp8OAzGU490a8p5wuQ = M4VUgp8OAzGU490a8p5wuQ.ctor = $ctor$(null, 'iwAABp8OAzGU490a8p5wuQ', type$M4VUgp8OAzGU490a8p5wuQ);

  // ScriptCoreLib.Shared.Lambda.FutureStream.Continue
  type$M4VUgp8OAzGU490a8p5wuQ.jAAABp8OAzGU490a8p5wuQ = function (b)
  {
    var a = this, c, d, e;

    d = /* DOMCreateType */new WFJTLha4Ij_aLuX6p1nMN3w();
    d.PublishSignalNext = b;
    d.Next = new ctor$fgAABuB0iTWwwR4dEcfbmQ();
    c = a.Gate;
    a.Gate = d.Next;
    jgAABlEkXDuoViPsjb55BQ(c, new ctor$UQUABuzqfTWQzxgi2Ip02g(d, '_Continue_b__0'));
    e = new ctor$UQUABuzqfTWQzxgi2Ip02g(c, 'fQAABuB0iTWwwR4dEcfbmQ');
    return e;
  };

  var SgAABFEkXDuoViPsjb55BQ = null;
  // ScriptCoreLib.Shared.Lambda.FutureExtensions.Continue
  function jgAABlEkXDuoViPsjb55BQ(b, c)
  {
    var d;

    d = (b == null);

    if (!d)
    {
      b.egAABp7VWD613rhesAF0uQ(c);
      return;
    }

    c.Invoke();
  };

  // ScriptCoreLib.Shared.Lambda.FutureExtensions.ForEach
  function jwAABlEkXDuoViPsjb55BQ(b, c, d, e)
  {
    var f, g;

    f = /* DOMCreateType */new _0nuzH0Qeozur1JSkXD98Ag();
    f.handler = d;
    g = kgAABlEkXDuoViPsjb55BQ(b, c, new ctor$WQUABsZFFjWpK15ZzhnSGw(f, '_ForEach_b__2'), e);
    return g;
  };

  // ScriptCoreLib.Shared.Lambda.FutureExtensions.ForEach
  function kAAABlEkXDuoViPsjb55BQ(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new YDv2jq56Gj6wkMR_aU5UdSA();
    d.handler = c;
    e = kgAABlEkXDuoViPsjb55BQ(b, null, new ctor$WQUABsZFFjWpK15ZzhnSGw(d, '_ForEach_b__5'), null);
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.FutureExtensions.ForEach
  function kQAABlEkXDuoViPsjb55BQ(b, c)
  {
    var d;

    d = kgAABlEkXDuoViPsjb55BQ(b, null, c, null);
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.FutureExtensions.ForEach
  function kgAABlEkXDuoViPsjb55BQ(b, c, d, e)
  {
    var f, g, h, i;

    g = /* DOMCreateType */new YPmR_aVCyoTqVi9Vk97MvaQ();
    g.source = b;
    g.handler = d;
    g.done = e;
    g.c = new ctor$iwAABp8OAzGU490a8p5wuQ();
    g.e = null;
    g.i = -1;
    g.r = new ctor$fgAABuB0iTWwwR4dEcfbmQ();
    g.MoveNext = null;
    g.MoveNext = new ctor$TQUABmdYmDufdNSm2oh5Bw(g, '_ForEach_b__8');
    f = g.c.jAAABp8OAzGU490a8p5wuQ(new ctor$TQUABmdYmDufdNSm2oh5Bw(g, '_ForEach_b__9'));
    i = (c == null);

    if (!i)
    {
      c.Invoke(f);
    }
    else
    {
      f.Invoke();
    }

    h = new ctor$TQUABmdYmDufdNSm2oh5Bw(g.r, 'jgAABlEkXDuoViPsjb55BQ').AsExtensionMethod();
    return h;
  };

  // ScriptCoreLib.Shared.Lambda.FutureExtensions.Continue
  function jQAABlEkXDuoViPsjb55BQ(b, c)
  {

    if (!(SgAABFEkXDuoViPsjb55BQ))
    {
      SgAABFEkXDuoViPsjb55BQ = new ctor$VQUABrMP7z_aQVJdqUhThFA(null, 'lAAABlEkXDuoViPsjb55BQ');
    }

    kAAABlEkXDuoViPsjb55BQ(b, SgAABFEkXDuoViPsjb55BQ).Invoke(c);
  };

  // ScriptCoreLib.Shared.Lambda.FutureExtensions.While
  function kwAABlEkXDuoViPsjb55BQ(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new MsK45xKIdDS6yF_bagUW8YA();
    d.e = b;
    d.condition = c;
    d.c = new ctor$iwAABp8OAzGU490a8p5wuQ();
    d.r = new ctor$fgAABuB0iTWwwR4dEcfbmQ();
    d.MoveNext = null;
    d.MoveNext = new ctor$TQUABmdYmDufdNSm2oh5Bw(d, '_While_b__c');
    d.c.jAAABp8OAzGU490a8p5wuQ(d.MoveNext).Invoke();
    e = new ctor$TQUABmdYmDufdNSm2oh5Bw(d.r, 'jgAABlEkXDuoViPsjb55BQ').AsExtensionMethod();
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.FutureExtensions.<Continue>b__0
  function lAAABlEkXDuoViPsjb55BQ(b, c)
  {
    jgAABlEkXDuoViPsjb55BQ(b, c);
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock
  function qD_aodB5_aCze8WXD54Nu1HA(){};
  qD_aodB5_aCze8WXD54Nu1HA.TypeName = "FutureLock";
  qD_aodB5_aCze8WXD54Nu1HA.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$qD_aodB5_aCze8WXD54Nu1HA = qD_aodB5_aCze8WXD54Nu1HA.prototype;
  type$qD_aodB5_aCze8WXD54Nu1HA.constructor = qD_aodB5_aCze8WXD54Nu1HA;
  type$qD_aodB5_aCze8WXD54Nu1HA.Lock = null;
  type$qD_aodB5_aCze8WXD54Nu1HA.ToBeReleased = null;
  type$qD_aodB5_aCze8WXD54Nu1HA.Released = null;
  type$qD_aodB5_aCze8WXD54Nu1HA.Acquired = null;
  type$qD_aodB5_aCze8WXD54Nu1HA.Pending = null;
  var basector$qD_aodB5_aCze8WXD54Nu1HA = $ctor$(null, null, type$qD_aodB5_aCze8WXD54Nu1HA);
  // ScriptCoreLib.Shared.Lambda.FutureLock..ctor
  type$qD_aodB5_aCze8WXD54Nu1HA.owAABh5_aCze8WXD54Nu1HA = function ()
  {
    var a = this;

    a.ToBeReleased = new ctor$_8xEABoxB_azqLxDNVEgOqvA();
  };
  var ctor$owAABh5_aCze8WXD54Nu1HA = qD_aodB5_aCze8WXD54Nu1HA.ctor = $ctor$(null, 'owAABh5_aCze8WXD54Nu1HA', type$qD_aodB5_aCze8WXD54Nu1HA);

  // ScriptCoreLib.Shared.Lambda.FutureLock.InternalContinue
  type$qD_aodB5_aCze8WXD54Nu1HA.lQAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this;

    a.lgAABh5_aCze8WXD54Nu1HA(b);
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.Continue
  type$qD_aodB5_aCze8WXD54Nu1HA.lgAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this;

    jgAABlEkXDuoViPsjb55BQ(a.Lock, b);
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.get_IsAcquired
  type$qD_aodB5_aCze8WXD54Nu1HA.lwAABh5_aCze8WXD54Nu1HA = function ()
  {
    var a = this, b;

    b = (a.ToBeReleased._9REABoxB_azqLxDNVEgOqvA() > 0);
    return b;
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.Acquire
  type$qD_aodB5_aCze8WXD54Nu1HA.mAAABh5_aCze8WXD54Nu1HA = function ()
  {
    var a = this, b, c;

    c = (a.Lock == null);

    if (!c)
    {
      throw fwAABlCvizaBPZBMcbwXfw('Cannot acquire this lock without waiting');
    }

    a.Lock = new ctor$fgAABuB0iTWwwR4dEcfbmQ();
    a.ToBeReleased.__ahEABoxB_azqLxDNVEgOqvA(new ctor$UQUABuzqfTWQzxgi2Ip02g(a.Lock, 'fQAABuB0iTWwwR4dEcfbmQ'));
    c = (a.Acquired == null);

    if (!c)
    {
      a.Acquired.Invoke();
    }

    b = a;
    return b;
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.Acquire
  type$qD_aodB5_aCze8WXD54Nu1HA.mQAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this, c, d, e;

    d = /* DOMCreateType */new UMEFhARzKT6ylMyC6GihzA();
    d.e = b;
    d.__4__this = a;
    c = a.Lock;
    a.Lock = new ctor$fgAABuB0iTWwwR4dEcfbmQ();
    a.ToBeReleased.__ahEABoxB_azqLxDNVEgOqvA(new ctor$UQUABuzqfTWQzxgi2Ip02g(a.Lock, 'fQAABuB0iTWwwR4dEcfbmQ'));
    e = (a.Pending == null);

    if (!e)
    {
      a.Pending.Invoke();
    }

    jgAABlEkXDuoViPsjb55BQ(c, new ctor$UQUABuzqfTWQzxgi2Ip02g(d, '_Acquire_b__0'));
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.Acquire
  type$qD_aodB5_aCze8WXD54Nu1HA.mgAABh5_aCze8WXD54Nu1HA = function (b, c)
  {
    var a = this, d, e;

    d = /* DOMCreateType */new zpjGeH5_aMTmgzlfn6QVPpg();
    d.e = b;
    d.dependencies = c;
    d.__4__this = a;
    d.u = a.Lock;
    a.Lock = new ctor$fgAABuB0iTWwwR4dEcfbmQ();
    a.ToBeReleased.__ahEABoxB_azqLxDNVEgOqvA(new ctor$UQUABuzqfTWQzxgi2Ip02g(a.Lock, 'fQAABuB0iTWwwR4dEcfbmQ'));
    e = (a.Pending == null);

    if (!e)
    {
      a.Pending.Invoke();
    }

    jQAABlEkXDuoViPsjb55BQ(d.dependencies, new ctor$UQUABuzqfTWQzxgi2Ip02g(d, '_Acquire_b__3'));
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.get_Item
  type$qD_aodB5_aCze8WXD54Nu1HA.mwAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this, c, d;

    c = /* DOMCreateType */new UWD_bM4LwGDuqVEf4_anOPRg();
    c.dependencies = b;
    c.__4__this = a;
    d = new ctor$TQUABmdYmDufdNSm2oh5Bw(c, '_get_Item_b__8');
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.Release
  type$qD_aodB5_aCze8WXD54Nu1HA.nAAABh5_aCze8WXD54Nu1HA = function ()
  {
    var a = this, b;

    b = !(a.ToBeReleased._9REABoxB_azqLxDNVEgOqvA() > 0);

    if (!b)
    {
      b = (a.Released == null);

      if (!b)
      {
        a.Released.Invoke();
      }

      a.ToBeReleased.__aREABoxB_azqLxDNVEgOqvA().Invoke();
      return;
    }

    throw fwAABlCvizaBPZBMcbwXfw('This lock is not yet acquired');
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.add_Released
  type$qD_aodB5_aCze8WXD54Nu1HA.nQAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this;

    a.Released = TAoABhNbrTK2juX6Wf4PnQ(a.Released, b);
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.remove_Released
  type$qD_aodB5_aCze8WXD54Nu1HA.ngAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this;

    a.Released = TgoABhNbrTK2juX6Wf4PnQ(a.Released, b);
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.add_Acquired
  type$qD_aodB5_aCze8WXD54Nu1HA.nwAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this;

    a.Acquired = TAoABhNbrTK2juX6Wf4PnQ(a.Acquired, b);
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.remove_Acquired
  type$qD_aodB5_aCze8WXD54Nu1HA.oAAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this;

    a.Acquired = TgoABhNbrTK2juX6Wf4PnQ(a.Acquired, b);
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.add_Pending
  type$qD_aodB5_aCze8WXD54Nu1HA.oQAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this;

    a.Pending = TAoABhNbrTK2juX6Wf4PnQ(a.Pending, b);
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock.remove_Pending
  type$qD_aodB5_aCze8WXD54Nu1HA.ogAABh5_aCze8WXD54Nu1HA = function (b)
  {
    var a = this;

    a.Pending = TgoABhNbrTK2juX6Wf4PnQ(a.Pending, b);
  };

  // ScriptCoreLib.Shared.Lambda.IFutureContinue
  // ScriptCoreLib.Shared.Lambda.FutureLock
  (function (i)  {
    i.egAABp7VWD613rhesAF0uQ = i.lQAABh5_aCze8WXD54Nu1HA;
  }
  )(type$qD_aodB5_aCze8WXD54Nu1HA);
  // ScriptCoreLib.Shared.Lambda.IdentityFunction`1
  function VFsQDWO_ahzGpa166TZVW3Q(){};
  VFsQDWO_ahzGpa166TZVW3Q.TypeName = "IdentityFunction_1";
  VFsQDWO_ahzGpa166TZVW3Q.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$VFsQDWO_ahzGpa166TZVW3Q = VFsQDWO_ahzGpa166TZVW3Q.prototype;
  type$VFsQDWO_ahzGpa166TZVW3Q.constructor = VFsQDWO_ahzGpa166TZVW3Q;
  var UAAABGO_ahzGpa166TZVW3Q = null;
  var basector$VFsQDWO_ahzGpa166TZVW3Q = $ctor$(null, null, type$VFsQDWO_ahzGpa166TZVW3Q);
  // ScriptCoreLib.Shared.Lambda.IdentityFunction`1..ctor
  type$VFsQDWO_ahzGpa166TZVW3Q.pQAABmO_ahzGpa166TZVW3Q = function ()
  {
    var a = this;

  };
  var ctor$pQAABmO_ahzGpa166TZVW3Q = VFsQDWO_ahzGpa166TZVW3Q.ctor = $ctor$(null, 'pQAABmO_ahzGpa166TZVW3Q', type$VFsQDWO_ahzGpa166TZVW3Q);

  // ScriptCoreLib.Shared.Lambda.IdentityFunction`1.get_Instance
  function pAAABmO_ahzGpa166TZVW3Q()
  {
    var b;


    if (!(UAAABGO_ahzGpa166TZVW3Q))
    {
      UAAABGO_ahzGpa166TZVW3Q = new ctor$YQEABkOkJjGPtTLmBuq5mg(null, 'pgAABmO_ahzGpa166TZVW3Q');
    }

    b = UAAABGO_ahzGpa166TZVW3Q;
    return b;
  };

  // ScriptCoreLib.Shared.Lambda.IdentityFunction`1.<get_Instance>b__0
  function pgAABmO_ahzGpa166TZVW3Q(b)
  {
    return b;
  };

  // ScriptCoreLib.Shared.Query.DefinedError.ArgumentOutOfRange
  function KQEABvRKRDCqE_bw5H_bdCOQ(b)
  {
    var c;

    c = fwAABlCvizaBPZBMcbwXfw(YhEABrA3fT6ZrCN3llKJ_aA('ArgumentOutOfRange: ', b));
    return c;
  };

  // ScriptCoreLib.Shared.Query.DefinedError.ArgumentNull
  function KgEABvRKRDCqE_bw5H_bdCOQ(b)
  {
    var c;

    c = fwAABlCvizaBPZBMcbwXfw(YhEABrA3fT6ZrCN3llKJ_aA('ArgumentNull: ', b));
    return c;
  };

  // ScriptCoreLib.Shared.Query.DefinedError.NoElements
  function KwEABvRKRDCqE_bw5H_bdCOQ()
  {
    var b;

    b = fwAABlCvizaBPZBMcbwXfw('Sequence contains no elements');
    return b;
  };

  // ScriptCoreLib.Shared.Query.DefinedError.MoreThanOneElement
  function LAEABvRKRDCqE_bw5H_bdCOQ()
  {
    var b;

    b = fwAABlCvizaBPZBMcbwXfw('Sequence contains more than one element');
    return b;
  };

  // ScriptCoreLib.Shared.Query.DefinedError.NotImplemented
  function LQEABvRKRDCqE_bw5H_bdCOQ()
  {
    throw fwAABlCvizaBPZBMcbwXfw('The method or operation is not implemented.');
  };

  // ScriptCoreLib.JavaScript.Query.DefaultComparer`1
  function CT68noUDaT62YZA3SAEicw(){};
  CT68noUDaT62YZA3SAEicw.TypeName = "DefaultComparer_1";
  CT68noUDaT62YZA3SAEicw.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$CT68noUDaT62YZA3SAEicw = CT68noUDaT62YZA3SAEicw.prototype;
  type$CT68noUDaT62YZA3SAEicw.constructor = CT68noUDaT62YZA3SAEicw;
  var basector$CT68noUDaT62YZA3SAEicw = $ctor$(null, null, type$CT68noUDaT62YZA3SAEicw);
  // ScriptCoreLib.JavaScript.Query.DefaultComparer`1..ctor
  type$CT68noUDaT62YZA3SAEicw.TwEABoUDaT62YZA3SAEicw = function ()
  {
    var a = this;

  };
  var ctor$TwEABoUDaT62YZA3SAEicw = CT68noUDaT62YZA3SAEicw.ctor = $ctor$(null, 'TwEABoUDaT62YZA3SAEicw', type$CT68noUDaT62YZA3SAEicw);

  // ScriptCoreLib.JavaScript.Query.DefaultComparer`1.Compare
  type$CT68noUDaT62YZA3SAEicw.TgEABoUDaT62YZA3SAEicw = function (b, c)
  {
    var a = this, d, e, f;

    d = -2;
    f = !_3xAABvkf7T2t3w0tonza2w(_6RAABvkf7T2t3w0tonza2w(b));

    if (!f)
    {
      d = xhAABvkf7T2t3w0tonza2w(b, c);
    }

    f = !_5BAABvkf7T2t3w0tonza2w(_6RAABvkf7T2t3w0tonza2w(b));

    if (!f)
    {
      d = xhAABvkf7T2t3w0tonza2w(b, c);
    }

    f = !_4RAABvkf7T2t3w0tonza2w(_6RAABvkf7T2t3w0tonza2w(b));

    if (!f)
    {
      d = xhAABvkf7T2t3w0tonza2w(b, c);
    }

    f = !(d == -2);

    if (!f)
    {
      throw _9A8ABm73tjaZRrBwmVX_adg();
    }

    e = d;
    return e;
  };

  // 
  // ScriptCoreLib.JavaScript.Query.DefaultComparer`1
  (function (i)  {
    i.mQAABpf0qD_arJIdqFekolg = i.TgEABoUDaT62YZA3SAEicw;
  }
  )(type$CT68noUDaT62YZA3SAEicw);
  // ScriptCoreLib.JavaScript.Query.LocalInternalEnumerableImplementation.GetDefaultComparer
  function UAEABmGSADWFb1cX3n6oYw()
  {
    var b;

    b = new ctor$TwEABoUDaT62YZA3SAEicw();
    return b;
  };

  // ScriptCoreLib.Shared.Query.OrderedEnumerable`1
  function mY3J76FlhDa_aI2NFJW8DzQ(){};
  mY3J76FlhDa_aI2NFJW8DzQ.TypeName = "OrderedEnumerable_1";
  mY3J76FlhDa_aI2NFJW8DzQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$mY3J76FlhDa_aI2NFJW8DzQ = mY3J76FlhDa_aI2NFJW8DzQ.prototype;
  type$mY3J76FlhDa_aI2NFJW8DzQ.constructor = mY3J76FlhDa_aI2NFJW8DzQ;
  type$mY3J76FlhDa_aI2NFJW8DzQ.prev = null;
  type$mY3J76FlhDa_aI2NFJW8DzQ.next = null;
  type$mY3J76FlhDa_aI2NFJW8DzQ.source = null;
  var basector$mY3J76FlhDa_aI2NFJW8DzQ = $ctor$(null, null, type$mY3J76FlhDa_aI2NFJW8DzQ);
  // ScriptCoreLib.Shared.Query.OrderedEnumerable`1..ctor
  type$mY3J76FlhDa_aI2NFJW8DzQ.VgEABqFlhDa_aI2NFJW8DzQ = function ()
  {
    var a = this;

  };
  var ctor$VgEABqFlhDa_aI2NFJW8DzQ = mY3J76FlhDa_aI2NFJW8DzQ.ctor = $ctor$(null, 'VgEABqFlhDa_aI2NFJW8DzQ', type$mY3J76FlhDa_aI2NFJW8DzQ);

  // ScriptCoreLib.Shared.Query.OrderedEnumerable`1.System.Collections.IEnumerable.GetEnumerator
  type$mY3J76FlhDa_aI2NFJW8DzQ.VQEABqFlhDa_aI2NFJW8DzQ = function ()
  {
    var a = this, b;

    b = a.VAEABqFlhDa_aI2NFJW8DzQ();
    return b;
  };

  // ScriptCoreLib.Shared.Query.OrderedEnumerable`1.CreateOrderedEnumerable
  type$mY3J76FlhDa_aI2NFJW8DzQ.UwEABqFlhDa_aI2NFJW8DzQ = function (b, c, d)
  {
    var a = this, e, f, g, h, i, j, k;

    i = new ctor$VwEABpr33DqIIsOoA4L3RQ();
    i.keySelector = b;
    i.comparer = c;
    i.descending = d;
    i.source = null;
    e = i;
    k = !(c == null);

    if (!k)
    {
      e.comparer = UAEABmGSADWFb1cX3n6oYw();
    }
    else
    {
      e.comparer = c;
    }

    f = e;
    g = a;
    while (!(g == null))
    {
      h = g.UQEABqFlhDa_aI2NFJW8DzQ();
      f.prev = h;
      h.next = f;
      g = g.prev;
      f = f.prev;
    }
    j = e;
    return j;
  };

  // ScriptCoreLib.Shared.Query.OrderedEnumerable`1.Clone
  type$mY3J76FlhDa_aI2NFJW8DzQ.UQEABqFlhDa_aI2NFJW8DzQ = function ()
  {
/* abstract */  };

  // ScriptCoreLib.Shared.Query.OrderedEnumerable`1.Compare
  type$mY3J76FlhDa_aI2NFJW8DzQ.UgEABqFlhDa_aI2NFJW8DzQ = function (b, c)
  {
/* abstract */  };

  // ScriptCoreLib.Shared.Query.OrderedEnumerable`1.GetEnumerator
  type$mY3J76FlhDa_aI2NFJW8DzQ.VAEABqFlhDa_aI2NFJW8DzQ = function ()
  {
    var a = this, b, c, d, e;

    c = /* DOMCreateType */new __aphGJcWy2D66gEnuW7eAgQ();

    for (c.p = a; !(c.p.prev == null); c.p = c.p.prev)
    {
    }

    b = HQAABkAVcDWPnLAqFK62WA(c.p.source);
    __ag8ABhOwdjmt91iLr9GTBw(b, new ctor$zw4ABgaQTzSWOyibt5ijoQ(c, '_GetEnumerator_b__1'));
    d = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    return d;
  };

  // 
  // ScriptCoreLib.Shared.Query.OrderedEnumerable`1
  (function (i)  {
    i.__awUABjj0njK9JUKNqwYIpw = i.UwEABqFlhDa_aI2NFJW8DzQ;
    // 
    i.NgEABnMeWzaNooAKOmFm5g = i.VAEABqFlhDa_aI2NFJW8DzQ;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.VQEABqFlhDa_aI2NFJW8DzQ;
  }
  )(type$mY3J76FlhDa_aI2NFJW8DzQ);
  // ScriptCoreLib.Shared.Query.OrderedEnumerable`2
  function cyZsApr33DqIIsOoA4L3RQ(){};
  cyZsApr33DqIIsOoA4L3RQ.TypeName = "OrderedEnumerable_2";
  cyZsApr33DqIIsOoA4L3RQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$cyZsApr33DqIIsOoA4L3RQ = cyZsApr33DqIIsOoA4L3RQ.prototype = new mY3J76FlhDa_aI2NFJW8DzQ();
  type$cyZsApr33DqIIsOoA4L3RQ.constructor = cyZsApr33DqIIsOoA4L3RQ;
  type$cyZsApr33DqIIsOoA4L3RQ.keySelector = null;
  type$cyZsApr33DqIIsOoA4L3RQ.comparer = null;
  type$cyZsApr33DqIIsOoA4L3RQ.descending = false;
  var basector$cyZsApr33DqIIsOoA4L3RQ = $ctor$(basector$mY3J76FlhDa_aI2NFJW8DzQ, null, type$cyZsApr33DqIIsOoA4L3RQ);
  // ScriptCoreLib.Shared.Query.OrderedEnumerable`2..ctor
  type$cyZsApr33DqIIsOoA4L3RQ.VwEABpr33DqIIsOoA4L3RQ = function ()
  {
    var a = this;

    a.VgEABqFlhDa_aI2NFJW8DzQ();
  };
  var ctor$VwEABpr33DqIIsOoA4L3RQ = cyZsApr33DqIIsOoA4L3RQ.ctor = $ctor$(basector$mY3J76FlhDa_aI2NFJW8DzQ, 'VwEABpr33DqIIsOoA4L3RQ', type$cyZsApr33DqIIsOoA4L3RQ);

  // ScriptCoreLib.Shared.Query.OrderedEnumerable`2..ctor
  type$cyZsApr33DqIIsOoA4L3RQ.WAEABpr33DqIIsOoA4L3RQ = function (b, c, d, e)
  {
    var a = this, f;

    a.VgEABqFlhDa_aI2NFJW8DzQ();
    a.keySelector = c;
    f = !(d == null);

    if (!f)
    {
      a.comparer = UAEABmGSADWFb1cX3n6oYw();
    }
    else
    {
      a.comparer = d;
    }

    a.descending = e;
    a.source = b;
  };
  var ctor$WAEABpr33DqIIsOoA4L3RQ = $ctor$(basector$mY3J76FlhDa_aI2NFJW8DzQ, 'WAEABpr33DqIIsOoA4L3RQ', type$cyZsApr33DqIIsOoA4L3RQ);

  // ScriptCoreLib.Shared.Query.OrderedEnumerable`2.Clone
  type$cyZsApr33DqIIsOoA4L3RQ.WQEABpr33DqIIsOoA4L3RQ = function ()
  {
    var a = this, b, c;

    b = new ctor$VwEABpr33DqIIsOoA4L3RQ();
    b.keySelector = a.keySelector;
    b.comparer = a.comparer;
    b.descending = a.descending;
    b.source = a.source;
    c = b;
    return c;
  };
    cyZsApr33DqIIsOoA4L3RQ.prototype.UQEABqFlhDa_aI2NFJW8DzQ = cyZsApr33DqIIsOoA4L3RQ.prototype.WQEABpr33DqIIsOoA4L3RQ;

  // ScriptCoreLib.Shared.Query.OrderedEnumerable`2.Compare
  type$cyZsApr33DqIIsOoA4L3RQ.WgEABpr33DqIIsOoA4L3RQ = function (b, c)
  {
    var a = this, d, e;

    e = !a.descending;

    if (!e)
    {
      d = a.comparer.mQAABpf0qD_arJIdqFekolg(a.keySelector.Invoke(c), a.keySelector.Invoke(b));
      return d;
    }

    d = a.comparer.mQAABpf0qD_arJIdqFekolg(a.keySelector.Invoke(b), a.keySelector.Invoke(c));
    return d;
  };
    cyZsApr33DqIIsOoA4L3RQ.prototype.UgEABqFlhDa_aI2NFJW8DzQ = cyZsApr33DqIIsOoA4L3RQ.prototype.WgEABpr33DqIIsOoA4L3RQ;

  // 
  // ScriptCoreLib.Shared.Query.OrderedEnumerable`2
  (function (i)  {
    i.__awUABjj0njK9JUKNqwYIpw = i.UwEABqFlhDa_aI2NFJW8DzQ;
    // 
    i.NgEABnMeWzaNooAKOmFm5g = i.VAEABqFlhDa_aI2NFJW8DzQ;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.VQEABqFlhDa_aI2NFJW8DzQ;
  }
  )(type$cyZsApr33DqIIsOoA4L3RQ);
  // delegate: () => T
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Func`1
  function Jwnow7N42zC9LggKQChbQQ(){};
  Jwnow7N42zC9LggKQChbQQ.TypeName = "Func_1";
  Jwnow7N42zC9LggKQChbQQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$Jwnow7N42zC9LggKQChbQQ = Jwnow7N42zC9LggKQChbQQ.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$Jwnow7N42zC9LggKQChbQQ.constructor = Jwnow7N42zC9LggKQChbQQ;
  type$Jwnow7N42zC9LggKQChbQQ.IsExtensionMethod = false;
  type$Jwnow7N42zC9LggKQChbQQ.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$Jwnow7N42zC9LggKQChbQQ.XQEABrN42zC9LggKQChbQQ = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$XQEABrN42zC9LggKQChbQQ = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, 'XQEABrN42zC9LggKQChbQQ', type$Jwnow7N42zC9LggKQChbQQ);
  type$Jwnow7N42zC9LggKQChbQQ.Invoke = function ()
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // delegate: (arg0) => TResult
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Func`2
  function HtxmgEOkJjGPtTLmBuq5mg(){};
  HtxmgEOkJjGPtTLmBuq5mg.TypeName = "Func_2";
  HtxmgEOkJjGPtTLmBuq5mg.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$HtxmgEOkJjGPtTLmBuq5mg = HtxmgEOkJjGPtTLmBuq5mg.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$HtxmgEOkJjGPtTLmBuq5mg.constructor = HtxmgEOkJjGPtTLmBuq5mg;
  type$HtxmgEOkJjGPtTLmBuq5mg.IsExtensionMethod = false;
  type$HtxmgEOkJjGPtTLmBuq5mg.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$HtxmgEOkJjGPtTLmBuq5mg.YQEABkOkJjGPtTLmBuq5mg = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$YQEABkOkJjGPtTLmBuq5mg = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, 'YQEABkOkJjGPtTLmBuq5mg', type$HtxmgEOkJjGPtTLmBuq5mg);
  type$HtxmgEOkJjGPtTLmBuq5mg.Invoke = function (b)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // delegate: (arg0, arg1) => TResult
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Func`3
  function aXvXoQ7wAzm9J_bGHy6IBOQ(){};
  aXvXoQ7wAzm9J_bGHy6IBOQ.TypeName = "Func_3";
  aXvXoQ7wAzm9J_bGHy6IBOQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$aXvXoQ7wAzm9J_bGHy6IBOQ = aXvXoQ7wAzm9J_bGHy6IBOQ.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$aXvXoQ7wAzm9J_bGHy6IBOQ.constructor = aXvXoQ7wAzm9J_bGHy6IBOQ;
  type$aXvXoQ7wAzm9J_bGHy6IBOQ.IsExtensionMethod = false;
  type$aXvXoQ7wAzm9J_bGHy6IBOQ.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$aXvXoQ7wAzm9J_bGHy6IBOQ.ZQEABg7wAzm9J_bGHy6IBOQ = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$ZQEABg7wAzm9J_bGHy6IBOQ = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, 'ZQEABg7wAzm9J_bGHy6IBOQ', type$aXvXoQ7wAzm9J_bGHy6IBOQ);
  type$aXvXoQ7wAzm9J_bGHy6IBOQ.Invoke = function (b, c)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // delegate: (arg0, arg1, arg2) => TResult
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Func`4
  function PMzKxfmhrTKXcvbubqKx_ag(){};
  PMzKxfmhrTKXcvbubqKx_ag.TypeName = "Func_4";
  PMzKxfmhrTKXcvbubqKx_ag.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$PMzKxfmhrTKXcvbubqKx_ag = PMzKxfmhrTKXcvbubqKx_ag.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$PMzKxfmhrTKXcvbubqKx_ag.constructor = PMzKxfmhrTKXcvbubqKx_ag;
  type$PMzKxfmhrTKXcvbubqKx_ag.IsExtensionMethod = false;
  type$PMzKxfmhrTKXcvbubqKx_ag.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$PMzKxfmhrTKXcvbubqKx_ag.aQEABvmhrTKXcvbubqKx_ag = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$aQEABvmhrTKXcvbubqKx_ag = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, 'aQEABvmhrTKXcvbubqKx_ag', type$PMzKxfmhrTKXcvbubqKx_ag);
  type$PMzKxfmhrTKXcvbubqKx_ag.Invoke = function (b, c, d)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // delegate: (arg0, arg1, arg2, arg3) => TResult
  // ScriptCoreLib.JavaScript.BCLImplementation.System.__Func`5
  function __adNhkYkODD_aby8Cz6QAvuQ(){};
  __adNhkYkODD_aby8Cz6QAvuQ.TypeName = "Func_5";
  __adNhkYkODD_aby8Cz6QAvuQ.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$__adNhkYkODD_aby8Cz6QAvuQ = __adNhkYkODD_aby8Cz6QAvuQ.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$__adNhkYkODD_aby8Cz6QAvuQ.constructor = __adNhkYkODD_aby8Cz6QAvuQ;
  type$__adNhkYkODD_aby8Cz6QAvuQ.IsExtensionMethod = false;
  type$__adNhkYkODD_aby8Cz6QAvuQ.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$__adNhkYkODD_aby8Cz6QAvuQ.bQEABokODD_aby8Cz6QAvuQ = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$bQEABokODD_aby8Cz6QAvuQ = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, 'bQEABokODD_aby8Cz6QAvuQ', type$__adNhkYkODD_aby8Cz6QAvuQ);
  type$__adNhkYkODD_aby8Cz6QAvuQ.Invoke = function (b, c, d, e)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // ScriptCoreLib.Shared.Lambda.CyclicEnumeratorExtensions.AsCyclicEnumerable
  function cQEABr_bPvzyzovTd_aQGEXw(b)
  {
    var c, d;

    c = /* DOMCreateType */new c6b6hUXDPzCBNIAn56Djag();
    c.source = b;
    d = new ctor$cwEABvZ3QTSgkJQTPRgBcA(new ctor$XQEABrN42zC9LggKQChbQQ(c, '_AsCyclicEnumerable_b__0'));
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.CyclicEnumeratorExtensions.AsCyclicEnumerable
  function cgEABr_bPvzyzovTd_aQGEXw(b)
  {
    var c;

    c = new ctor$cwEABvZ3QTSgkJQTPRgBcA(b);
    return c;
  };

  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1
  function HPAwYPZ3QTSgkJQTPRgBcA(){};
  HPAwYPZ3QTSgkJQTPRgBcA.TypeName = "CyclicEnumerator_1";
  HPAwYPZ3QTSgkJQTPRgBcA.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$HPAwYPZ3QTSgkJQTPRgBcA = HPAwYPZ3QTSgkJQTPRgBcA.prototype;
  type$HPAwYPZ3QTSgkJQTPRgBcA.constructor = HPAwYPZ3QTSgkJQTPRgBcA;
  type$HPAwYPZ3QTSgkJQTPRgBcA.Stream = null;
  type$HPAwYPZ3QTSgkJQTPRgBcA.GetSource = null;
  var basector$HPAwYPZ3QTSgkJQTPRgBcA = $ctor$(null, null, type$HPAwYPZ3QTSgkJQTPRgBcA);
  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1..ctor
  type$HPAwYPZ3QTSgkJQTPRgBcA.cwEABvZ3QTSgkJQTPRgBcA = function (b)
  {
    var a = this;

    a.GetSource = b;
  };
  var ctor$cwEABvZ3QTSgkJQTPRgBcA = $ctor$(null, 'cwEABvZ3QTSgkJQTPRgBcA', type$HPAwYPZ3QTSgkJQTPRgBcA);

  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1.System.Collections.IEnumerator.get_Current
  type$HPAwYPZ3QTSgkJQTPRgBcA.dgEABvZ3QTSgkJQTPRgBcA = function ()
  {
    var a = this, b;

    b = a.Stream.xQAABrYmRzSu_anO2U_bk1MA();
    return b;
  };

  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1.System.Collections.IEnumerable.GetEnumerator
  type$HPAwYPZ3QTSgkJQTPRgBcA.egEABvZ3QTSgkJQTPRgBcA = function ()
  {
    var a = this, b;

    b = a.eQEABvZ3QTSgkJQTPRgBcA();
    return b;
  };

  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1.get_Current
  type$HPAwYPZ3QTSgkJQTPRgBcA.dAEABvZ3QTSgkJQTPRgBcA = function ()
  {
    var a = this, b;

    b = a.Stream.xQAABrYmRzSu_anO2U_bk1MA();
    return b;
  };

  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1.Dispose
  type$HPAwYPZ3QTSgkJQTPRgBcA.dQEABvZ3QTSgkJQTPRgBcA = function ()
  {
    var a = this, b;

    b = (a.Stream == null);

    if (!b)
    {
      a.Stream.xAAABq_bUDz_aWf_aXPRTEtLA();
    }

  };

  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1.MoveNext
  type$HPAwYPZ3QTSgkJQTPRgBcA.dwEABvZ3QTSgkJQTPRgBcA = function ()
  {
    var a = this, b, c, d;

    d = !(a.Stream == null);

    if (!d)
    {
      b = a.GetSource.Invoke();
      d = !(b == null);

      if (!d)
      {
        c = 0;
        return c;
      }

      a.Stream = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    }

    d = !a.Stream.qAAABu7N0xGI6ACQJ1TEOg();

    if (!d)
    {
      c = 1;
      return c;
    }

    b = a.GetSource.Invoke();
    d = !(b == null);

    if (!d)
    {
      c = 0;
      return c;
    }

    a.Stream = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    d = !a.Stream.qAAABu7N0xGI6ACQJ1TEOg();

    if (!d)
    {
      c = 1;
      return c;
    }

    c = 0;
    return c;
  };

  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1.Reset
  type$HPAwYPZ3QTSgkJQTPRgBcA.eAEABvZ3QTSgkJQTPRgBcA = function ()
  {
    var a = this;

    throw hAAABrHRcju52KHi4IAnyg();
  };

  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1.GetEnumerator
  type$HPAwYPZ3QTSgkJQTPRgBcA.eQEABvZ3QTSgkJQTPRgBcA = function ()
  {
    var a = this, b;

    b = new ctor$cwEABvZ3QTSgkJQTPRgBcA(a.GetSource);
    return b;
  };

  // 
  // ScriptCoreLib.Shared.Lambda.CyclicEnumerator`1
  (function (i)  {
    i.xQAABrYmRzSu_anO2U_bk1MA = i.dAEABvZ3QTSgkJQTPRgBcA;
    // System.IDisposable
    i.xAAABq_bUDz_aWf_aXPRTEtLA = i.dQEABvZ3QTSgkJQTPRgBcA;
    // System.Collections.IEnumerator
    i.qAAABu7N0xGI6ACQJ1TEOg = i.dwEABvZ3QTSgkJQTPRgBcA;
    i.qQAABu7N0xGI6ACQJ1TEOg = i.dgEABvZ3QTSgkJQTPRgBcA;
    i.qgAABu7N0xGI6ACQJ1TEOg = i.eAEABvZ3QTSgkJQTPRgBcA;
    // 
    i.NgEABnMeWzaNooAKOmFm5g = i.eQEABvZ3QTSgkJQTPRgBcA;
    // System.Collections.IEnumerable
    i.EQAABu7N0xGI6ACQJ1TEOg = i.egEABvZ3QTSgkJQTPRgBcA;
  }
  )(type$HPAwYPZ3QTSgkJQTPRgBcA);
  var pQAABF964D_aaiuMHdBpszA = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.AllWithPrevious
  function kQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g, h, i, j;

    d = void(0);
    e = 0;
    f = 1;
    i = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (i.qAAABu7N0xGI6ACQJ1TEOg())
      {
        g = i.xQAABrYmRzSu_anO2U_bk1MA();
        j = !e;

        if (!j)
        {
          f = c.Invoke(d, g);
          j = f;

          if (!j)
          {
            break;
          }

        }

        e = 1;
        d = g;
      }
    }
    finally
    {
      j = (i == null);

      if (!j)
      {
        i.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    h = f;
    return h;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.AddRange
  function kgEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g;

    e = c;

    for (f = 0; (f < e.length); f++)
    {
      d = e[f];
      b.DhkABnTAkDm_aGe9ZbsQrAQ(d);
    }

  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Take
  function lQEABl964D_aaiuMHdBpszA(b)
  {
    var c, d;

    d = !b.qAAABu7N0xGI6ACQJ1TEOg();

    if (!d)
    {
      c = b.xQAABrYmRzSu_anO2U_bk1MA();
      return c;
    }

    throw fwAABlCvizaBPZBMcbwXfw('source is empty');
    return c;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Take
  function lgEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g;

    d = new Array(c);

    for (e = 0; (e < c); e++)
    {
      d[e] = lQEABl964D_aaiuMHdBpszA(b);
    }

    f = d;
    return f;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.TakeOrDefault
  function lwEABl964D_aaiuMHdBpszA(b)
  {
    var c, d, e;

    c = void(0);
    e = !b.qAAABu7N0xGI6ACQJ1TEOg();

    if (!e)
    {
      c = b.xQAABrYmRzSu_anO2U_bk1MA();
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Combine
  function mAEABl964D_aaiuMHdBpszA(b)
  {
    var c, d;

    c = /* DOMCreateType */new DIJlCvR1wTO3j7f6_aQM7Kw();
    c.source = b;
    d = new ctor$TQUABmdYmDufdNSm2oh5Bw(c, '_Combine_b__6');
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ToArray
  function mwEABl964D_aaiuMHdBpszA(b, c)
  {
    var d;

    d = HQAABkAVcDWPnLAqFK62WA(IQAABkAVcDWPnLAqFK62WA(b, c));
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.WhereNot
  function nAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new NyuZt1CCmjGEqRF8w12caA();
    d.filter = c;
    e = AQAABkAVcDWPnLAqFK62WA(b, new ctor$YQEABkOkJjGPtTLmBuq5mg(d, '_WhereNot_b__f'));
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ConcatSingle
  function oAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    e = [
      c
    ];
    d = AwAABkAVcDWPnLAqFK62WA(b, e);
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Replace
  function oQEABl964D_aaiuMHdBpszA(b, c, d)
  {
    var e, f, g, h;

    h = [
      c
    ];
    e = h;
    h = [
      d
    ];
    f = h;
    g = ogEABl964D_aaiuMHdBpszA(b, e, f);
    return g;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Replace
  function ogEABl964D_aaiuMHdBpszA(b, c, d)
  {
    var e, f;

    e = /* DOMCreateType */new dF84Gai8KjyuRXVn0tbi_aA();
    e.remove = c;
    f = AwAABkAVcDWPnLAqFK62WA(AQAABkAVcDWPnLAqFK62WA(b, new ctor$YQEABkOkJjGPtTLmBuq5mg(e, '_Replace_b__14')), d);
    return f;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Apply
  function pQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    e = (b == null);

    if (!e)
    {
      c.Invoke(b);
    }

    d = b;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.AtModulus
  function pwEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = HQAABkAVcDWPnLAqFK62WA(b);
    e = d[(c % d.length)];
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.AtOrDefault
  function qAEABl964D_aaiuMHdBpszA(b, c, d)
  {
    var e, f, g, h, i, j;

    e = 0;
    f = d;
    i = b.NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (i.qAAABu7N0xGI6ACQJ1TEOg())
      {
        g = i.xQAABrYmRzSu_anO2U_bk1MA();
        j = !(e == c);

        if (!j)
        {
          f = g;
          break;
        }

        e++;
      }
    }
    finally
    {
      j = (i == null);

      if (!j)
      {
        i.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    h = f;
    return h;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Previous
  function qQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g, h, i;

    d = FAAABkAVcDWPnLAqFK62WA(b);
    e = void(0);
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        f = h.xQAABrYmRzSu_anO2U_bk1MA();
        i = !c.Invoke(f);

        if (!i)
        {
          e = d;
          break;
        }

        d = f;
      }
    }
    finally
    {
      i = (h == null);

      if (!i)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    g = e;
    return g;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Next
  function qgEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g, h, i;

    d = FAAABkAVcDWPnLAqFK62WA(b);
    e = void(0);
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        f = h.xQAABrYmRzSu_anO2U_bk1MA();
        i = !c.Invoke(d);

        if (!i)
        {
          e = f;
          break;
        }

        d = f;
      }
    }
    finally
    {
      i = (h == null);

      if (!i)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    g = e;
    return g;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixParam
  function sAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new l3xs74edNzutpICAF_bRaSA();
    d.f = b;
    d.a = c;
    e = new ctor$_3AEABpGybT2cBn_bXtdam6g(d, '_FixParam_b__1a');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixParam
  function sQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d;

    d = sAEABl964D_aaiuMHdBpszA(c, b);
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixParam
  function sgEABl964D_aaiuMHdBpszA(b, c)
  {
    var d;

    d = swEABl964D_aaiuMHdBpszA(c, b);
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixParam
  function swEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new MBNpRqvhoTuxmLnIsDLGeg();
    d.f = b;
    d.a = c;
    e = new ctor$UQUABuzqfTWQzxgi2Ip02g(d, '_FixParam_b__1d');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixParam
  function tAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new UE3H0czrPDGe1Zj7FOoQZg();
    d.f = b;
    d.a = c;
    e = new ctor$XQEABrN42zC9LggKQChbQQ(d, '_FixParam_b__20');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixParam
  function tQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new zu13v4pW7D6_baVxE5Id8nw();
    d.f = b;
    d.b = c;
    e = new ctor$YQEABkOkJjGPtTLmBuq5mg(d, '_FixParam_b__23');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixFirstParam
  function tgEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new __bDGNflbm8zOeONVjQ8MRSg();
    d.f = b;
    d.a = c;
    e = new ctor$YQEABkOkJjGPtTLmBuq5mg(d, '_FixFirstParam_b__26');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixFirstParam
  function twEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new nu9b1qHvlzmNC0EF0x1cjA();
    d.f = b;
    d.a = c;
    e = new ctor$TQUABmdYmDufdNSm2oh5Bw(d, '_FixFirstParam_b__29');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixLastParam
  function uAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new oXLOm1mmGDiBs62tAPHBMg();
    d.f = b;
    d.b = c;
    e = new ctor$YQEABkOkJjGPtTLmBuq5mg(d, '_FixLastParam_b__2c');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixLastParam
  function uQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new tSmZ9Hj46D_aKZ2DMVCNIzA();
    d.f = b;
    d.b = c;
    e = new ctor$TQUABmdYmDufdNSm2oh5Bw(d, '_FixLastParam_b__2f');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixLastParam
  function ugEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new FxxSy2BTOzyWlJXAVoJWMA();
    d.f = b;
    d.c = c;
    e = new ctor$ZQEABg7wAzm9J_bGHy6IBOQ(d, '_FixLastParam_b__32');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.FixLastParam
  function uwEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new Tvd5gBO0Mj2MQBjKAHZhSQ();
    d.f = b;
    d.c = c;
    e = new ctor$VQUABrMP7z_aQVJdqUhThFA(d, '_FixLastParam_b__35');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.AsParamsAction
  function vAEABl964D_aaiuMHdBpszA(b)
  {
    var c, d;

    c = /* DOMCreateType */new UbRBBh8XUTKiC1XmDCs8cw();
    c.f = b;
    d = new ctor$_3AEABpGybT2cBn_bXtdam6g(c, '_AsParamsAction_b__38');
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.AsNegative
  function vQEABl964D_aaiuMHdBpszA(b)
  {
    var c, d;

    c = /* DOMCreateType */new I7MHdTfLGjeAhWlMzDwXZA();
    c.f = b;
    d = new ctor$YQEABkOkJjGPtTLmBuq5mg(c, '_AsNegative_b__3b');
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.AsAction
  function vgEABl964D_aaiuMHdBpszA(b)
  {
    var c, d;

    c = /* DOMCreateType */new NcUncGDyXjmKAOXcSHlS7Q();
    c.f = b;
    d = new ctor$TQUABmdYmDufdNSm2oh5Bw(c, '_AsAction_b__3e');
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.WithOffset
  function wAEABl964D_aaiuMHdBpszA(b, c, d)
  {
    var e, f;

    e = /* DOMCreateType */new _5q3dVjAisjaaQy26ECWDFQ();
    e.f = b;
    e.x = c;
    e.y = d;
    f = new ctor$ZQEABg7wAzm9J_bGHy6IBOQ(e, '_WithOffset_b__44');
    return f;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Y
  function wQEABl964D_aaiuMHdBpszA(b)
  {
    var c, d, e;

    c = /* DOMCreateType */new krsZL2vKPzuT0vi9o5YTcw();
    c.le = b;
    c.me = null;
    e = new ctor$YQEABkOkJjGPtTLmBuq5mg(c, '_Y_b__47');
    c.me = new ctor$YQEABkOkJjGPtTLmBuq5mg(c, '_Y_b__47');
    d = e;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Y
  function wgEABl964D_aaiuMHdBpszA(b)
  {
    var c, d, e;

    c = /* DOMCreateType */new _95guZ542DDKXY1EZASF69w();
    c.le = b;
    c.me = null;
    e = new ctor$ZQEABg7wAzm9J_bGHy6IBOQ(c, '_Y_b__4a');
    c.me = new ctor$ZQEABg7wAzm9J_bGHy6IBOQ(c, '_Y_b__4a');
    d = e;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Y
  function wwEABl964D_aaiuMHdBpszA(b)
  {
    var c, d, e;

    c = /* DOMCreateType */new iVpiQVIrajCShZaiFQAHrA();
    c.le = b;
    c.me = null;
    e = new ctor$TQUABmdYmDufdNSm2oh5Bw(c, '_Y_b__4d');
    c.me = new ctor$TQUABmdYmDufdNSm2oh5Bw(c, '_Y_b__4d');
    d = e;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Y
  function xAEABl964D_aaiuMHdBpszA(b)
  {
    var c, d, e;

    c = /* DOMCreateType */new XUzmm32Xtzu89jwHSQuH9w();
    c.le = b;
    c.me = null;
    e = new ctor$VQUABrMP7z_aQVJdqUhThFA(c, '_Y_b__50');
    c.me = new ctor$VQUABrMP7z_aQVJdqUhThFA(c, '_Y_b__50');
    d = e;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Aggregate
  function xQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d;

    c.Invoke(b);
    d = b;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Randomize
  function xgEABl964D_aaiuMHdBpszA(b)
  {
    var c, d, e, f, g, h;

    c = HgAABkAVcDWPnLAqFK62WA(b);
    d = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    e = new ctor$fwQABsXotjCp8ao7nga6mw();
    while ((c.qgAABvqMgj2CW8U7T0nhxg() > 0))
    {
      f = (e.gAQABsXotjCp8ao7nga6mw() % c.qgAABvqMgj2CW8U7T0nhxg());
      d.pQAABvqMgj2CW8U7T0nhxg(c.ogAABvqMgj2CW8U7T0nhxg(f));
      c.oQAABvqMgj2CW8U7T0nhxg(f);
    }
    g = d;
    return g;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Random
  function xwEABl964D_aaiuMHdBpszA(b)
  {
    var c;

    c = FgAABkAVcDWPnLAqFK62WA(xgEABl964D_aaiuMHdBpszA(b));
    return c;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Random
  function yAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d;

    d = FgAABkAVcDWPnLAqFK62WA(xgEABl964D_aaiuMHdBpszA(AQAABkAVcDWPnLAqFK62WA(b, c)));
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ForEach
  function yQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g, h;

    g = !(b == null);

    if (!g)
    {
      throw uQAABk_asWDSwkuY60zLcKw('array');
    }

    g = !(c == null);

    if (!g)
    {
      throw uQAABk_asWDSwkuY60zLcKw('action');
    }

    d = 0;
    h = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (h.qAAABu7N0xGI6ACQJ1TEOg())
      {
        e = h.xQAABrYmRzSu_anO2U_bk1MA();
        c.Invoke(e, d);
        d++;
      }
    }
    finally
    {
      g = (h == null);

      if (!g)
      {
        h.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    f = b;
    return f;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ForEach
  function ygEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g, h;

    d = c.NgEABnMeWzaNooAKOmFm5g();
    try
    {
      g = b.NgEABnMeWzaNooAKOmFm5g();
      try
      {
        while (g.qAAABu7N0xGI6ACQJ1TEOg())
        {
          e = g.xQAABrYmRzSu_anO2U_bk1MA();
          h = !d.qAAABu7N0xGI6ACQJ1TEOg();

          if (!h)
          {
            d.xQAABrYmRzSu_anO2U_bk1MA().Invoke(e);
          }

        }
      }
      finally
      {
        h = (g == null);

        if (!h)
        {
          g.xAAABq_bUDz_aWf_aXPRTEtLA();
        }

      }
    }
    finally
    {
      h = (d == null);

      if (!h)
      {
        d.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    f = b;
    return f;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ForEach
  function ywEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g;

    f = !(b == null);

    if (!f)
    {
      throw uQAABk_asWDSwkuY60zLcKw('array');
    }

    f = !(c == null);

    if (!f)
    {
      throw uQAABk_asWDSwkuY60zLcKw('action');
    }

    g = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (g.qAAABu7N0xGI6ACQJ1TEOg())
      {
        d = g.xQAABrYmRzSu_anO2U_bk1MA();
        c.Invoke(d);
      }
    }
    finally
    {
      f = (g == null);

      if (!f)
      {
        g.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
    e = b;
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ForEachReversed
  function zAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g;

    d = HQAABkAVcDWPnLAqFK62WA(b);

    for (e = (d.length - 1); !(e < 0); e--)
    {
      c.Invoke(d[e]);
    }

    f = b;
    return f;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ForEachWithPrevious
  function zQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g, h;

    d = void(0);
    e = 0;
    g = NgAABkAVcDWPnLAqFK62WA(b).NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (g.qAAABu7N0xGI6ACQJ1TEOg())
      {
        f = g.xQAABrYmRzSu_anO2U_bk1MA();
        h = !e;

        if (!h)
        {
          c.Invoke(d, f);
        }

        e = 1;
        d = f;
      }
    }
    finally
    {
      h = (g == null);

      if (!h)
      {
        g.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ForEachNewItem
  function zgEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new _7YG87qdbLTiuUKpeBZ7BhQ();
    d.source = b;
    d.handler = c;
    d.source.SAgABr5jNDK9zhmrNkcmyg(new ctor$fxEABsV_bHje7HMBqh73wBw(d, '_ForEachNewItem_b__53'));
    e = d.source;
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ToFiltered
  function jwEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new ur1g0wuswTu6dOoKDYnqvg();
    d.source = b;
    d.filter = c;
    e = new ctor$UQUABuzqfTWQzxgi2Ip02g(d, '_ToFiltered_b__0');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.WhereCounter
  function kAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new _8v6fq_bZ8ojOR37YTtav8RA();
    d.handler = b;
    d.filter = c;
    d.i = 0;
    e = new ctor$UQUABuzqfTWQzxgi2Ip02g(d, '_WhereCounter_b__3');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Times
  function kwEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;


    for (d = 0; (d < b); d++)
    {
      c.Invoke();
    }

  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Times
  function lAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;


    for (d = 0; (d < b); d++)
    {
      c.Invoke(d);
    }

  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.And
  function mQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new mgT5d4VTpTOZ3o_aINh0owA();
    d.a = b;
    d.b = c;
    e = new ctor$XQEABrN42zC9LggKQChbQQ(d, '_And_b__9');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Or
  function mgEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new fh9iPnmESTqd7NL7jhJs9g();
    d.a = b;
    d.b = c;
    e = new ctor$XQEABrN42zC9LggKQChbQQ(d, '_Or_b__c');
    return e;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.ConcatToLines
  function nQEABl964D_aaiuMHdBpszA(b)
  {
    var c;


    if (!(pQAABF964D_aaiuMHdBpszA))
    {
      pQAABF964D_aaiuMHdBpszA = new ctor$YQEABkOkJjGPtTLmBuq5mg(null, 'zwEABl964D_aaiuMHdBpszA');
    }

    c = ngEABl964D_aaiuMHdBpszA(IQAABkAVcDWPnLAqFK62WA(b, pQAABF964D_aaiuMHdBpszA));
    return c;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Concat
  function ngEABl964D_aaiuMHdBpszA(b)
  {
    var c;

    c = XREABrA3fT6ZrCN3llKJ_aA(HQAABkAVcDWPnLAqFK62WA(NgAABkAVcDWPnLAqFK62WA(b)));
    return c;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Count
  function nwEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g;

    d = WBEABrA3fT6ZrCN3llKJ_aA(b, c);
    e = 0;
    while (!(d < 0))
    {
      e++;
      d = WREABrA3fT6ZrCN3llKJ_aA(b, c, (d + WhEABrA3fT6ZrCN3llKJ_aA(c)));
    }
    f = e;
    return f;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Split
  function owEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g, h, i, j;

    d = new ctor$mwAABvqMgj2CW8U7T0nhxg();
    e = WhEABrA3fT6ZrCN3llKJ_aA(b);

    for (f = 0; (f < e); f += c)
    {
      g = c;
      h = (e - f);
      j = !(h < g);

      if (!j)
      {
        h = g;
      }

      d.pQAABvqMgj2CW8U7T0nhxg(dBEABrA3fT6ZrCN3llKJ_aA(b, f, g));
    }

    i = d.ngAABvqMgj2CW8U7T0nhxg();
    return i;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Split
  function pAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e, f, g, h, i, j;

    d = new ctor$mwAABvqMgj2CW8U7T0nhxg();

    for (e = 0; (e < b.length); e += c)
    {
      f = new Array(c);

      for (g = 0; (g < c); g++)
      {
        h = (e + g);
        j = !(h < b.length);

        if (!j)
        {
          f[g] = b[h];
        }

      }

      d.pQAABvqMgj2CW8U7T0nhxg(f);
    }

    i = d.ngAABvqMgj2CW8U7T0nhxg();
    return i;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Do
  function pgEABl964D_aaiuMHdBpszA(b)
  {
    var c, d, e;

    d = b.NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (d.qAAABu7N0xGI6ACQJ1TEOg())
      {
        c = d.xQAABrYmRzSu_anO2U_bk1MA();
        e = (c == null);

        if (!e)
        {
          c.Invoke();
        }

      }
    }
    finally
    {
      e = (d == null);

      if (!e)
      {
        d.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Max
  function qwEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    e = !(b > c);

    if (!e)
    {
      d = b;
      return d;
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Min
  function rAEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    e = !(b < c);

    if (!e)
    {
      d = b;
      return d;
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Min
  function rQEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    e = !(b < c);

    if (!e)
    {
      d = b;
      return d;
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.Max
  function rgEABl964D_aaiuMHdBpszA(b, c)
  {
    var d, e;

    e = !(b > c);

    if (!e)
    {
      d = b;
      return d;
    }

    d = c;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.AsCyclic
  function rwEABl964D_aaiuMHdBpszA(b)
  {
    var c, d;

    c = /* DOMCreateType */new XqoTMtuj4zGuWqvdIrIvHg();
    c.f = b;
    c.done = null;
    c.done = new ctor$UQUABuzqfTWQzxgi2Ip02g(c, '_AsCyclic_b__17');
    d = c.done;
    return d;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.WithOffset
  function vwEABl964D_aaiuMHdBpszA(b, c, d)
  {
    var e, f;

    e = /* DOMCreateType */new _3icO8kEixDqY2TPu6M8MHg();
    e.f = b;
    e.x = c;
    e.y = d;
    f = new ctor$VQUABrMP7z_aQVJdqUhThFA(e, '_WithOffset_b__41');
    return f;
  };

  // ScriptCoreLib.Shared.Lambda.LambdaExtensions.<ConcatToLines>b__12
  function zwEABl964D_aaiuMHdBpszA(b)
  {
    return YhEABrA3fT6ZrCN3llKJ_aA(b, TAUABuOHuD6HIRzAFgBV_aw());
  };

  // delegate: (e) => Func`2
  // ScriptCoreLib.Shared.Lambda.YFunc`2
  function kxtAdyxaNDecEwtBL3wV1w(){};
  kxtAdyxaNDecEwtBL3wV1w.TypeName = "YFunc_2";
  kxtAdyxaNDecEwtBL3wV1w.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$kxtAdyxaNDecEwtBL3wV1w = kxtAdyxaNDecEwtBL3wV1w.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$kxtAdyxaNDecEwtBL3wV1w.constructor = kxtAdyxaNDecEwtBL3wV1w;
  type$kxtAdyxaNDecEwtBL3wV1w.IsExtensionMethod = false;
  type$kxtAdyxaNDecEwtBL3wV1w.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$kxtAdyxaNDecEwtBL3wV1w._0AEABixaNDecEwtBL3wV1w = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$_0AEABixaNDecEwtBL3wV1w = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, '_0AEABixaNDecEwtBL3wV1w', type$kxtAdyxaNDecEwtBL3wV1w);
  type$kxtAdyxaNDecEwtBL3wV1w.Invoke = function (b)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // delegate: (e) => Func`3
  // ScriptCoreLib.Shared.Lambda.YFunc`3
  function F8T7klTnmDKStpfgBlUp_ag(){};
  F8T7klTnmDKStpfgBlUp_ag.TypeName = "YFunc_3";
  F8T7klTnmDKStpfgBlUp_ag.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$F8T7klTnmDKStpfgBlUp_ag = F8T7klTnmDKStpfgBlUp_ag.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$F8T7klTnmDKStpfgBlUp_ag.constructor = F8T7klTnmDKStpfgBlUp_ag;
  type$F8T7klTnmDKStpfgBlUp_ag.IsExtensionMethod = false;
  type$F8T7klTnmDKStpfgBlUp_ag.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$F8T7klTnmDKStpfgBlUp_ag._1AEABlTnmDKStpfgBlUp_ag = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$_1AEABlTnmDKStpfgBlUp_ag = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, '_1AEABlTnmDKStpfgBlUp_ag', type$F8T7klTnmDKStpfgBlUp_ag);
  type$F8T7klTnmDKStpfgBlUp_ag.Invoke = function (b)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // delegate: (a, b) => Void
  // ScriptCoreLib.Shared.Lambda.ParamsAction`2
  function t4jyly2_bSTCPrLsbyhsuRg(){};
  t4jyly2_bSTCPrLsbyhsuRg.TypeName = "ParamsAction_2";
  t4jyly2_bSTCPrLsbyhsuRg.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$t4jyly2_bSTCPrLsbyhsuRg = t4jyly2_bSTCPrLsbyhsuRg.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$t4jyly2_bSTCPrLsbyhsuRg.constructor = t4jyly2_bSTCPrLsbyhsuRg;
  type$t4jyly2_bSTCPrLsbyhsuRg.IsExtensionMethod = false;
  type$t4jyly2_bSTCPrLsbyhsuRg.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$t4jyly2_bSTCPrLsbyhsuRg._2AEABi2_bSTCPrLsbyhsuRg = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$_2AEABi2_bSTCPrLsbyhsuRg = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, '_2AEABi2_bSTCPrLsbyhsuRg', type$t4jyly2_bSTCPrLsbyhsuRg);
  type$t4jyly2_bSTCPrLsbyhsuRg.Invoke = function (b, c)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _target[f.Method].apply(_target, _arguments);
    }
  };

  // delegate: (a) => Void
  // ScriptCoreLib.Shared.Lambda.ParamsAction`1
  function WNTb8ZGybT2cBn_bXtdam6g(){};
  WNTb8ZGybT2cBn_bXtdam6g.TypeName = "ParamsAction_1";
  WNTb8ZGybT2cBn_bXtdam6g.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$WNTb8ZGybT2cBn_bXtdam6g = WNTb8ZGybT2cBn_bXtdam6g.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$WNTb8ZGybT2cBn_bXtdam6g.constructor = WNTb8ZGybT2cBn_bXtdam6g;
  type$WNTb8ZGybT2cBn_bXtdam6g.IsExtensionMethod = false;
  type$WNTb8ZGybT2cBn_bXtdam6g.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$WNTb8ZGybT2cBn_bXtdam6g._3AEABpGybT2cBn_bXtdam6g = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$_3AEABpGybT2cBn_bXtdam6g = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, '_3AEABpGybT2cBn_bXtdam6g', type$WNTb8ZGybT2cBn_bXtdam6g);
  type$WNTb8ZGybT2cBn_bXtdam6g.Invoke = function (b)
  {
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _target[f.Method].apply(_target, _arguments);
    }
  };

  // delegate: (a, b) => TReturn
  // ScriptCoreLib.Shared.Lambda.ParamsFunc`3
  function yDV46UUdQjG8NhHZFaqZ_aw(){};
  yDV46UUdQjG8NhHZFaqZ_aw.TypeName = "ParamsFunc_3";
  yDV46UUdQjG8NhHZFaqZ_aw.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$yDV46UUdQjG8NhHZFaqZ_aw = yDV46UUdQjG8NhHZFaqZ_aw.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$yDV46UUdQjG8NhHZFaqZ_aw.constructor = yDV46UUdQjG8NhHZFaqZ_aw;
  type$yDV46UUdQjG8NhHZFaqZ_aw.IsExtensionMethod = false;
  type$yDV46UUdQjG8NhHZFaqZ_aw.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$yDV46UUdQjG8NhHZFaqZ_aw._4AEABkUdQjG8NhHZFaqZ_aw = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$_4AEABkUdQjG8NhHZFaqZ_aw = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, '_4AEABkUdQjG8NhHZFaqZ_aw', type$yDV46UUdQjG8NhHZFaqZ_aw);
  type$yDV46UUdQjG8NhHZFaqZ_aw.Invoke = function (b, c)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // delegate: (a) => TReturn
  // ScriptCoreLib.Shared.Lambda.ParamsFunc`2
  function SHFXtjAZFjuZhdHnJICv5g(){};
  SHFXtjAZFjuZhdHnJICv5g.TypeName = "ParamsFunc_2";
  SHFXtjAZFjuZhdHnJICv5g.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$SHFXtjAZFjuZhdHnJICv5g = SHFXtjAZFjuZhdHnJICv5g.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$SHFXtjAZFjuZhdHnJICv5g.constructor = SHFXtjAZFjuZhdHnJICv5g;
  type$SHFXtjAZFjuZhdHnJICv5g.IsExtensionMethod = false;
  type$SHFXtjAZFjuZhdHnJICv5g.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$SHFXtjAZFjuZhdHnJICv5g._5AEABjAZFjuZhdHnJICv5g = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$_5AEABjAZFjuZhdHnJICv5g = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, '_5AEABjAZFjuZhdHnJICv5g', type$SHFXtjAZFjuZhdHnJICv5g);
  type$SHFXtjAZFjuZhdHnJICv5g.Invoke = function (b)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // delegate: (e) => Action`1
  // ScriptCoreLib.Shared.Lambda.YAction`1
  function xDhqnhM3gDqChmnr0TG3Zg(){};
  xDhqnhM3gDqChmnr0TG3Zg.TypeName = "YAction_1";
  xDhqnhM3gDqChmnr0TG3Zg.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$xDhqnhM3gDqChmnr0TG3Zg = xDhqnhM3gDqChmnr0TG3Zg.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$xDhqnhM3gDqChmnr0TG3Zg.constructor = xDhqnhM3gDqChmnr0TG3Zg;
  type$xDhqnhM3gDqChmnr0TG3Zg.IsExtensionMethod = false;
  type$xDhqnhM3gDqChmnr0TG3Zg.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$xDhqnhM3gDqChmnr0TG3Zg._6AEABhM3gDqChmnr0TG3Zg = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$_6AEABhM3gDqChmnr0TG3Zg = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, '_6AEABhM3gDqChmnr0TG3Zg', type$xDhqnhM3gDqChmnr0TG3Zg);
  type$xDhqnhM3gDqChmnr0TG3Zg.Invoke = function (b)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // delegate: (e) => Action`2
  // ScriptCoreLib.Shared.Lambda.YAction`2
  function LEv_bPmx65zSdueI_aAtw8XA(){};
  LEv_bPmx65zSdueI_aAtw8XA.TypeName = "YAction_2";
  LEv_bPmx65zSdueI_aAtw8XA.Assembly = BaJOV6PUu0uhcv4u1emKog;
  var type$LEv_bPmx65zSdueI_aAtw8XA = LEv_bPmx65zSdueI_aAtw8XA.prototype = new __a8cz79PJGDi0CgsvP_bWPaQ();
  type$LEv_bPmx65zSdueI_aAtw8XA.constructor = LEv_bPmx65zSdueI_aAtw8XA;
  type$LEv_bPmx65zSdueI_aAtw8XA.IsExtensionMethod = false;
  type$LEv_bPmx65zSdueI_aAtw8XA.AsExtensionMethod = function ()
  {
    this.IsExtensionMethod = true;
    return this;
  };
  type$LEv_bPmx65zSdueI_aAtw8XA._7AEABmx65zSdueI_aAtw8XA = type$__a8cz79PJGDi0CgsvP_bWPaQ.UwoABtPJGDi0CgsvP_bWPaQ;
  var ctor$_7AEABmx65zSdueI_aAtw8XA = $ctor$(basector$__a8cz79PJGDi0CgsvP_bWPaQ, '_7AEABmx65zSdueI_aAtw8XA', type$LEv_bPmx65zSdueI_aAtw8XA);
  type$LEv_bPmx65zSdueI_aAtw8XA.Invoke = function (b)
  {
    var _ = void(0);
    for (var i = 0; i < this.list.length; i++)
    {
      var f = this.list[i];
      var _arguments = Array.prototype.slice.call(arguments).slice(0);
      if(f.IsExtensionMethod) _arguments.splice(0, 0, f.Target);
      var _target = f.IsExtensionMethod ? window : f.Target;
      _ = _target[f.Method].apply(_target, _arguments);
    }
    return _;
  };

  // Closure type
  function ZOCH2ys1_aj6RiiP5FfGBdA() {}  var type$ZOCH2ys1_aj6RiiP5FfGBdA = ZOCH2ys1_aj6RiiP5FfGBdA.prototype;
  type$ZOCH2ys1_aj6RiiP5FfGBdA.constructor = ZOCH2ys1_aj6RiiP5FfGBdA;
  type$ZOCH2ys1_aj6RiiP5FfGBdA.__4__this = null;
  type$ZOCH2ys1_aj6RiiP5FfGBdA.e = null;
  // ScriptCoreLib.Shared.Lambda.Future`1+<>c__DisplayClass2.<Continue>b__0
  type$ZOCH2ys1_aj6RiiP5FfGBdA._Continue_b__0 = function ()
  {
    var a = this;

    a.e.Invoke(a.__4__this.ggAABsouJj63d8Z1Bh_amow());
  };

  // Closure type
  function XAPoN2PzFzSSME6ok46wsQ() {}  var type$XAPoN2PzFzSSME6ok46wsQ = XAPoN2PzFzSSME6ok46wsQ.prototype;
  type$XAPoN2PzFzSSME6ok46wsQ.constructor = XAPoN2PzFzSSME6ok46wsQ;
  type$XAPoN2PzFzSSME6ok46wsQ.e = null;
  // ScriptCoreLib.Shared.Lambda.Future`1+<>c__DisplayClass5.<op_Implicit>b__4
  type$XAPoN2PzFzSSME6ok46wsQ._op_Implicit_b__4 = function (b)
  {
    var a = this;

    a.e.gwAABsouJj63d8Z1Bh_amow(b);
  };

  // Closure type
  function mX4BU_bS4Ojm35bAzbCxgcw() {}  var type$mX4BU_bS4Ojm35bAzbCxgcw = mX4BU_bS4Ojm35bAzbCxgcw.prototype;
  type$mX4BU_bS4Ojm35bAzbCxgcw.constructor = mX4BU_bS4Ojm35bAzbCxgcw;
  type$mX4BU_bS4Ojm35bAzbCxgcw.e = null;
  // ScriptCoreLib.Shared.Lambda.FutureAction`1+<>c__DisplayClass1.<Continue>b__0
  type$mX4BU_bS4Ojm35bAzbCxgcw._Continue_b__0 = function (b)
  {
    var a = this;

    b.Invoke(a.e);
  };

  // Closure type
  function ZCfzchFlNj2LE8nxZcJ9tw() {}  var type$ZCfzchFlNj2LE8nxZcJ9tw = ZCfzchFlNj2LE8nxZcJ9tw.prototype;
  type$ZCfzchFlNj2LE8nxZcJ9tw.constructor = ZCfzchFlNj2LE8nxZcJ9tw;
  type$ZCfzchFlNj2LE8nxZcJ9tw.__4__this = null;
  type$ZCfzchFlNj2LE8nxZcJ9tw.e = null;
  // ScriptCoreLib.Shared.Lambda.FutureAction`1+<>c__DisplayClass4.<get_Item>b__3
  type$ZCfzchFlNj2LE8nxZcJ9tw._get_Item_b__3 = function ()
  {
    var a = this;

    a.__4__this.hwAABlwhBDaAYO3aS2mrZw(a.e);
  };

  // Closure type
  function WFJTLha4Ij_aLuX6p1nMN3w() {}  var type$WFJTLha4Ij_aLuX6p1nMN3w = WFJTLha4Ij_aLuX6p1nMN3w.prototype;
  type$WFJTLha4Ij_aLuX6p1nMN3w.constructor = WFJTLha4Ij_aLuX6p1nMN3w;
  type$WFJTLha4Ij_aLuX6p1nMN3w.Next = null;
  type$WFJTLha4Ij_aLuX6p1nMN3w.PublishSignalNext = null;
  // ScriptCoreLib.Shared.Lambda.FutureStream+<>c__DisplayClass1.<Continue>b__0
  type$WFJTLha4Ij_aLuX6p1nMN3w._Continue_b__0 = function ()
  {
    var a = this;

    a.PublishSignalNext.Invoke(new ctor$UQUABuzqfTWQzxgi2Ip02g(a.Next, 'fQAABuB0iTWwwR4dEcfbmQ'));
  };

  // Closure type
  function _0nuzH0Qeozur1JSkXD98Ag() {}  var type$_0nuzH0Qeozur1JSkXD98Ag = _0nuzH0Qeozur1JSkXD98Ag.prototype;
  type$_0nuzH0Qeozur1JSkXD98Ag.constructor = _0nuzH0Qeozur1JSkXD98Ag;
  type$_0nuzH0Qeozur1JSkXD98Ag.handler = null;
  // ScriptCoreLib.Shared.Lambda.FutureExtensions+<>c__DisplayClass3`1.<ForEach>b__2
  type$_0nuzH0Qeozur1JSkXD98Ag._ForEach_b__2 = function (b, c, d)
  {
    var a = this;

    a.handler.Invoke(b, d);
  };

  // Closure type
  function YDv2jq56Gj6wkMR_aU5UdSA() {}  var type$YDv2jq56Gj6wkMR_aU5UdSA = YDv2jq56Gj6wkMR_aU5UdSA.prototype;
  type$YDv2jq56Gj6wkMR_aU5UdSA.constructor = YDv2jq56Gj6wkMR_aU5UdSA;
  type$YDv2jq56Gj6wkMR_aU5UdSA.handler = null;
  // ScriptCoreLib.Shared.Lambda.FutureExtensions+<>c__DisplayClass6`1.<ForEach>b__5
  type$YDv2jq56Gj6wkMR_aU5UdSA._ForEach_b__5 = function (b, c, d)
  {
    var a = this;

    a.handler.Invoke(b, d);
  };

  // Closure type
  function YPmR_aVCyoTqVi9Vk97MvaQ() {}  var type$YPmR_aVCyoTqVi9Vk97MvaQ = YPmR_aVCyoTqVi9Vk97MvaQ.prototype;
  type$YPmR_aVCyoTqVi9Vk97MvaQ.constructor = YPmR_aVCyoTqVi9Vk97MvaQ;
  type$YPmR_aVCyoTqVi9Vk97MvaQ.c = null;
  type$YPmR_aVCyoTqVi9Vk97MvaQ.e = null;
  type$YPmR_aVCyoTqVi9Vk97MvaQ.i = 0;
  type$YPmR_aVCyoTqVi9Vk97MvaQ.r = null;
  type$YPmR_aVCyoTqVi9Vk97MvaQ.MoveNext = null;
  type$YPmR_aVCyoTqVi9Vk97MvaQ.source = null;
  type$YPmR_aVCyoTqVi9Vk97MvaQ.handler = null;
  type$YPmR_aVCyoTqVi9Vk97MvaQ.done = null;
  // ScriptCoreLib.Shared.Lambda.FutureExtensions+<>c__DisplayClassa`1.<ForEach>b__8
  type$YPmR_aVCyoTqVi9Vk97MvaQ._ForEach_b__8 = function (b)
  {
    var a = this, c;

    c = !a.e.qAAABu7N0xGI6ACQJ1TEOg();

    if (!c)
    {
      a.i = (a.i + 1);
      a.c.jAAABp8OAzGU490a8p5wuQ(a.MoveNext);
      a.handler.Invoke(a.e.xQAABrYmRzSu_anO2U_bk1MA(), a.i, b);
      return;
    }

    a.e.xAAABq_bUDz_aWf_aXPRTEtLA();
    a.e = null;
    a.c = null;
    a.MoveNext = null;
    c = (a.done == null);

    if (!c)
    {
      a.done.Invoke();
    }

    a.r.fQAABuB0iTWwwR4dEcfbmQ();
  };

  // ScriptCoreLib.Shared.Lambda.FutureExtensions+<>c__DisplayClassa`1.<ForEach>b__9
  type$YPmR_aVCyoTqVi9Vk97MvaQ._ForEach_b__9 = function (b)
  {
    var a = this;

    a.e = NgAABkAVcDWPnLAqFK62WA(a.source).NgEABnMeWzaNooAKOmFm5g();
    a.MoveNext.Invoke(b);
  };

  // Closure type
  function MsK45xKIdDS6yF_bagUW8YA() {}  var type$MsK45xKIdDS6yF_bagUW8YA = MsK45xKIdDS6yF_bagUW8YA.prototype;
  type$MsK45xKIdDS6yF_bagUW8YA.constructor = MsK45xKIdDS6yF_bagUW8YA;
  type$MsK45xKIdDS6yF_bagUW8YA.c = null;
  type$MsK45xKIdDS6yF_bagUW8YA.r = null;
  type$MsK45xKIdDS6yF_bagUW8YA.MoveNext = null;
  type$MsK45xKIdDS6yF_bagUW8YA.e = null;
  type$MsK45xKIdDS6yF_bagUW8YA.condition = null;
  // ScriptCoreLib.Shared.Lambda.FutureExtensions+<>c__DisplayClassd.<While>b__c
  type$MsK45xKIdDS6yF_bagUW8YA._While_b__c = function (b)
  {
    var a = this, c;

    c = !a.condition.Invoke();

    if (!c)
    {
      a.c.jAAABp8OAzGU490a8p5wuQ(a.MoveNext);
      a.e.Invoke(b);
      return;
    }

    a.r.fQAABuB0iTWwwR4dEcfbmQ();
  };

  // Closure type
  function UMEFhARzKT6ylMyC6GihzA() {}  var type$UMEFhARzKT6ylMyC6GihzA = UMEFhARzKT6ylMyC6GihzA.prototype;
  type$UMEFhARzKT6ylMyC6GihzA.constructor = UMEFhARzKT6ylMyC6GihzA;
  type$UMEFhARzKT6ylMyC6GihzA.__4__this = null;
  type$UMEFhARzKT6ylMyC6GihzA.e = null;
  // ScriptCoreLib.Shared.Lambda.FutureLock+<>c__DisplayClass1.<Acquire>b__0
  type$UMEFhARzKT6ylMyC6GihzA._Acquire_b__0 = function ()
  {
    var a = this, b;

    b = (a.__4__this.Acquired == null);

    if (!b)
    {
      a.__4__this.Acquired.Invoke();
    }

    a.e.Invoke();
  };

  // Closure type
  function zpjGeH5_aMTmgzlfn6QVPpg() {}  var type$zpjGeH5_aMTmgzlfn6QVPpg = zpjGeH5_aMTmgzlfn6QVPpg.prototype;
  type$zpjGeH5_aMTmgzlfn6QVPpg.constructor = zpjGeH5_aMTmgzlfn6QVPpg;
  type$zpjGeH5_aMTmgzlfn6QVPpg.u = null;
  type$zpjGeH5_aMTmgzlfn6QVPpg.__4__this = null;
  type$zpjGeH5_aMTmgzlfn6QVPpg.e = null;
  type$zpjGeH5_aMTmgzlfn6QVPpg.dependencies = null;
  // ScriptCoreLib.Shared.Lambda.FutureLock+<>c__DisplayClass6.<Acquire>b__3
  type$zpjGeH5_aMTmgzlfn6QVPpg._Acquire_b__3 = function ()
  {
    var a = this;

    jgAABlEkXDuoViPsjb55BQ(a.u, new ctor$UQUABuzqfTWQzxgi2Ip02g(a, '_Acquire_b__4'));
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock+<>c__DisplayClass6.<Acquire>b__4
  type$zpjGeH5_aMTmgzlfn6QVPpg._Acquire_b__4 = function ()
  {
    var a = this;

    jQAABlEkXDuoViPsjb55BQ(a.dependencies, new ctor$UQUABuzqfTWQzxgi2Ip02g(a, '_Acquire_b__5'));
  };

  // ScriptCoreLib.Shared.Lambda.FutureLock+<>c__DisplayClass6.<Acquire>b__5
  type$zpjGeH5_aMTmgzlfn6QVPpg._Acquire_b__5 = function ()
  {
    var a = this, b;

    b = (a.__4__this.Acquired == null);

    if (!b)
    {
      a.__4__this.Acquired.Invoke();
    }

    a.e.Invoke();
  };

  // Closure type
  function UWD_bM4LwGDuqVEf4_anOPRg() {}  var type$UWD_bM4LwGDuqVEf4_anOPRg = UWD_bM4LwGDuqVEf4_anOPRg.prototype;
  type$UWD_bM4LwGDuqVEf4_anOPRg.constructor = UWD_bM4LwGDuqVEf4_anOPRg;
  type$UWD_bM4LwGDuqVEf4_anOPRg.__4__this = null;
  type$UWD_bM4LwGDuqVEf4_anOPRg.dependencies = null;
  // ScriptCoreLib.Shared.Lambda.FutureLock+<>c__DisplayClass9.<get_Item>b__8
  type$UWD_bM4LwGDuqVEf4_anOPRg._get_Item_b__8 = function (b)
  {
    var a = this;

    a.__4__this.mgAABh5_aCze8WXD54Nu1HA(b, a.dependencies);
  };

  // Closure type
  function __aphGJcWy2D66gEnuW7eAgQ() {}  var type$__aphGJcWy2D66gEnuW7eAgQ = __aphGJcWy2D66gEnuW7eAgQ.prototype;
  type$__aphGJcWy2D66gEnuW7eAgQ.constructor = __aphGJcWy2D66gEnuW7eAgQ;
  type$__aphGJcWy2D66gEnuW7eAgQ.p = null;
  // ScriptCoreLib.Shared.Query.OrderedEnumerable`1+<>c__DisplayClass2.<GetEnumerator>b__1
  type$__aphGJcWy2D66gEnuW7eAgQ._GetEnumerator_b__1 = function (b, c)
  {
    var a = this, d, e, f, g;

    d = 0;
    e = a.p;
    while (!(e == null))
    {
      d = e.UgEABqFlhDa_aI2NFJW8DzQ(b, c);
      g = !d;

      if (!g)
      {
        break;
      }

      e = e.next;
    }
    f = d;
    return f;
  };

  // Closure type
  function c6b6hUXDPzCBNIAn56Djag() {}  var type$c6b6hUXDPzCBNIAn56Djag = c6b6hUXDPzCBNIAn56Djag.prototype;
  type$c6b6hUXDPzCBNIAn56Djag.constructor = c6b6hUXDPzCBNIAn56Djag;
  type$c6b6hUXDPzCBNIAn56Djag.source = null;
  // ScriptCoreLib.Shared.Lambda.CyclicEnumeratorExtensions+<>c__DisplayClass1`1.<AsCyclicEnumerable>b__0
  type$c6b6hUXDPzCBNIAn56Djag._AsCyclicEnumerable_b__0 = function ()
  {
    return this.source;
  };

  // Closure type
  function ur1g0wuswTu6dOoKDYnqvg() {}  var type$ur1g0wuswTu6dOoKDYnqvg = ur1g0wuswTu6dOoKDYnqvg.prototype;
  type$ur1g0wuswTu6dOoKDYnqvg.constructor = ur1g0wuswTu6dOoKDYnqvg;
  type$ur1g0wuswTu6dOoKDYnqvg.source = null;
  type$ur1g0wuswTu6dOoKDYnqvg.filter = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass1.<ToFiltered>b__0
  type$ur1g0wuswTu6dOoKDYnqvg._ToFiltered_b__0 = function ()
  {
    var a = this, b;

    b = !a.filter.Invoke();

    if (!b)
    {
      a.source.Invoke();
    }

  };

  // Closure type
  function _8v6fq_bZ8ojOR37YTtav8RA() {}  var type$_8v6fq_bZ8ojOR37YTtav8RA = _8v6fq_bZ8ojOR37YTtav8RA.prototype;
  type$_8v6fq_bZ8ojOR37YTtav8RA.constructor = _8v6fq_bZ8ojOR37YTtav8RA;
  type$_8v6fq_bZ8ojOR37YTtav8RA.i = 0;
  type$_8v6fq_bZ8ojOR37YTtav8RA.handler = null;
  type$_8v6fq_bZ8ojOR37YTtav8RA.filter = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass4.<WhereCounter>b__3
  type$_8v6fq_bZ8ojOR37YTtav8RA._WhereCounter_b__3 = function ()
  {
    var a = this, b;

    b = !a.filter.Invoke(a.i);

    if (!b)
    {
      a.handler.Invoke();
    }

    a.i = (a.i + 1);
  };

  // Closure type
  function DIJlCvR1wTO3j7f6_aQM7Kw() {}  var type$DIJlCvR1wTO3j7f6_aQM7Kw = DIJlCvR1wTO3j7f6_aQM7Kw.prototype;
  type$DIJlCvR1wTO3j7f6_aQM7Kw.constructor = DIJlCvR1wTO3j7f6_aQM7Kw;
  type$DIJlCvR1wTO3j7f6_aQM7Kw.source = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass7`1.<Combine>b__6
  type$DIJlCvR1wTO3j7f6_aQM7Kw._Combine_b__6 = function (b)
  {
    var a = this, c, d, e;

    d = a.source.NgEABnMeWzaNooAKOmFm5g();
    try
    {
      while (d.qAAABu7N0xGI6ACQJ1TEOg())
      {
        c = d.xQAABrYmRzSu_anO2U_bk1MA();
        c.Invoke(b);
      }
    }
    finally
    {
      e = (d == null);

      if (!e)
      {
        d.xAAABq_bUDz_aWf_aXPRTEtLA();
      }

    }
  };

  // Closure type
  function mgT5d4VTpTOZ3o_aINh0owA() {}  var type$mgT5d4VTpTOZ3o_aINh0owA = mgT5d4VTpTOZ3o_aINh0owA.prototype;
  type$mgT5d4VTpTOZ3o_aINh0owA.constructor = mgT5d4VTpTOZ3o_aINh0owA;
  type$mgT5d4VTpTOZ3o_aINh0owA.a = null;
  type$mgT5d4VTpTOZ3o_aINh0owA.b = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClassa.<And>b__9
  type$mgT5d4VTpTOZ3o_aINh0owA._And_b__9 = function ()
  {
    var a = this, b;

    b = (a.a.Invoke() && a.b.Invoke());
    return b;
  };

  // Closure type
  function fh9iPnmESTqd7NL7jhJs9g() {}  var type$fh9iPnmESTqd7NL7jhJs9g = fh9iPnmESTqd7NL7jhJs9g.prototype;
  type$fh9iPnmESTqd7NL7jhJs9g.constructor = fh9iPnmESTqd7NL7jhJs9g;
  type$fh9iPnmESTqd7NL7jhJs9g.a = null;
  type$fh9iPnmESTqd7NL7jhJs9g.b = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClassd.<Or>b__c
  type$fh9iPnmESTqd7NL7jhJs9g._Or_b__c = function ()
  {
    var a = this, b;

    b = (a.a.Invoke() || a.b.Invoke());
    return b;
  };

  // Closure type
  function NyuZt1CCmjGEqRF8w12caA() {}  var type$NyuZt1CCmjGEqRF8w12caA = NyuZt1CCmjGEqRF8w12caA.prototype;
  type$NyuZt1CCmjGEqRF8w12caA.constructor = NyuZt1CCmjGEqRF8w12caA;
  type$NyuZt1CCmjGEqRF8w12caA.filter = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass10`1.<WhereNot>b__f
  type$NyuZt1CCmjGEqRF8w12caA._WhereNot_b__f = function (b)
  {
    return !this.filter.Invoke(b);
  };

  // Closure type
  function dF84Gai8KjyuRXVn0tbi_aA() {}  var type$dF84Gai8KjyuRXVn0tbi_aA = dF84Gai8KjyuRXVn0tbi_aA.prototype;
  type$dF84Gai8KjyuRXVn0tbi_aA.constructor = dF84Gai8KjyuRXVn0tbi_aA;
  type$dF84Gai8KjyuRXVn0tbi_aA.remove = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass15`1.<Replace>b__14
  type$dF84Gai8KjyuRXVn0tbi_aA._Replace_b__14 = function (b)
  {
    return !DQAABkAVcDWPnLAqFK62WA(this.remove, b);
  };

  // Closure type
  function XqoTMtuj4zGuWqvdIrIvHg() {}  var type$XqoTMtuj4zGuWqvdIrIvHg = XqoTMtuj4zGuWqvdIrIvHg.prototype;
  type$XqoTMtuj4zGuWqvdIrIvHg.constructor = XqoTMtuj4zGuWqvdIrIvHg;
  type$XqoTMtuj4zGuWqvdIrIvHg.done = null;
  type$XqoTMtuj4zGuWqvdIrIvHg.f = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass18.<AsCyclic>b__17
  type$XqoTMtuj4zGuWqvdIrIvHg._AsCyclic_b__17 = function ()
  {
    var a = this;

    a.f.Invoke(a.done);
  };

  // Closure type
  function l3xs74edNzutpICAF_bRaSA() {}  var type$l3xs74edNzutpICAF_bRaSA = l3xs74edNzutpICAF_bRaSA.prototype;
  type$l3xs74edNzutpICAF_bRaSA.constructor = l3xs74edNzutpICAF_bRaSA;
  type$l3xs74edNzutpICAF_bRaSA.f = null;
  type$l3xs74edNzutpICAF_bRaSA.a = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass1b`2.<FixParam>b__1a
  type$l3xs74edNzutpICAF_bRaSA._FixParam_b__1a = function (b)
  {
    var a = this;

    a.f.Invoke(a.a, b);
  };

  // Closure type
  function MBNpRqvhoTuxmLnIsDLGeg() {}  var type$MBNpRqvhoTuxmLnIsDLGeg = MBNpRqvhoTuxmLnIsDLGeg.prototype;
  type$MBNpRqvhoTuxmLnIsDLGeg.constructor = MBNpRqvhoTuxmLnIsDLGeg;
  type$MBNpRqvhoTuxmLnIsDLGeg.f = null;
  type$MBNpRqvhoTuxmLnIsDLGeg.a = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass1e`1.<FixParam>b__1d
  type$MBNpRqvhoTuxmLnIsDLGeg._FixParam_b__1d = function ()
  {
    var a = this;

    a.f.Invoke(a.a);
  };

  // Closure type
  function UE3H0czrPDGe1Zj7FOoQZg() {}  var type$UE3H0czrPDGe1Zj7FOoQZg = UE3H0czrPDGe1Zj7FOoQZg.prototype;
  type$UE3H0czrPDGe1Zj7FOoQZg.constructor = UE3H0czrPDGe1Zj7FOoQZg;
  type$UE3H0czrPDGe1Zj7FOoQZg.f = null;
  type$UE3H0czrPDGe1Zj7FOoQZg.a = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass21`2.<FixParam>b__20
  type$UE3H0czrPDGe1Zj7FOoQZg._FixParam_b__20 = function ()
  {
    return this.f.Invoke(this.a);
  };

  // Closure type
  function zu13v4pW7D6_baVxE5Id8nw() {}  var type$zu13v4pW7D6_baVxE5Id8nw = zu13v4pW7D6_baVxE5Id8nw.prototype;
  type$zu13v4pW7D6_baVxE5Id8nw.constructor = zu13v4pW7D6_baVxE5Id8nw;
  type$zu13v4pW7D6_baVxE5Id8nw.f = null;
  type$zu13v4pW7D6_baVxE5Id8nw.b = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass24`3.<FixParam>b__23
  type$zu13v4pW7D6_baVxE5Id8nw._FixParam_b__23 = function (b)
  {
    return this.f.Invoke(b, this.b);
  };

  // Closure type
  function __bDGNflbm8zOeONVjQ8MRSg() {}  var type$__bDGNflbm8zOeONVjQ8MRSg = __bDGNflbm8zOeONVjQ8MRSg.prototype;
  type$__bDGNflbm8zOeONVjQ8MRSg.constructor = __bDGNflbm8zOeONVjQ8MRSg;
  type$__bDGNflbm8zOeONVjQ8MRSg.f = null;
  type$__bDGNflbm8zOeONVjQ8MRSg.a = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass27`3.<FixFirstParam>b__26
  type$__bDGNflbm8zOeONVjQ8MRSg._FixFirstParam_b__26 = function (b)
  {
    return this.f.Invoke(this.a, b);
  };

  // Closure type
  function nu9b1qHvlzmNC0EF0x1cjA() {}  var type$nu9b1qHvlzmNC0EF0x1cjA = nu9b1qHvlzmNC0EF0x1cjA.prototype;
  type$nu9b1qHvlzmNC0EF0x1cjA.constructor = nu9b1qHvlzmNC0EF0x1cjA;
  type$nu9b1qHvlzmNC0EF0x1cjA.f = null;
  type$nu9b1qHvlzmNC0EF0x1cjA.a = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass2a`2.<FixFirstParam>b__29
  type$nu9b1qHvlzmNC0EF0x1cjA._FixFirstParam_b__29 = function (b)
  {
    var a = this;

    a.f.Invoke(a.a, b);
  };

  // Closure type
  function oXLOm1mmGDiBs62tAPHBMg() {}  var type$oXLOm1mmGDiBs62tAPHBMg = oXLOm1mmGDiBs62tAPHBMg.prototype;
  type$oXLOm1mmGDiBs62tAPHBMg.constructor = oXLOm1mmGDiBs62tAPHBMg;
  type$oXLOm1mmGDiBs62tAPHBMg.f = null;
  type$oXLOm1mmGDiBs62tAPHBMg.b = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass2d`3.<FixLastParam>b__2c
  type$oXLOm1mmGDiBs62tAPHBMg._FixLastParam_b__2c = function (b)
  {
    return this.f.Invoke(b, this.b);
  };

  // Closure type
  function tSmZ9Hj46D_aKZ2DMVCNIzA() {}  var type$tSmZ9Hj46D_aKZ2DMVCNIzA = tSmZ9Hj46D_aKZ2DMVCNIzA.prototype;
  type$tSmZ9Hj46D_aKZ2DMVCNIzA.constructor = tSmZ9Hj46D_aKZ2DMVCNIzA;
  type$tSmZ9Hj46D_aKZ2DMVCNIzA.f = null;
  type$tSmZ9Hj46D_aKZ2DMVCNIzA.b = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass30`2.<FixLastParam>b__2f
  type$tSmZ9Hj46D_aKZ2DMVCNIzA._FixLastParam_b__2f = function (b)
  {
    var a = this;

    a.f.Invoke(b, a.b);
  };

  // Closure type
  function FxxSy2BTOzyWlJXAVoJWMA() {}  var type$FxxSy2BTOzyWlJXAVoJWMA = FxxSy2BTOzyWlJXAVoJWMA.prototype;
  type$FxxSy2BTOzyWlJXAVoJWMA.constructor = FxxSy2BTOzyWlJXAVoJWMA;
  type$FxxSy2BTOzyWlJXAVoJWMA.f = null;
  type$FxxSy2BTOzyWlJXAVoJWMA.c = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass33`4.<FixLastParam>b__32
  type$FxxSy2BTOzyWlJXAVoJWMA._FixLastParam_b__32 = function (b, c)
  {
    return this.f.Invoke(b, c, this.c);
  };

  // Closure type
  function Tvd5gBO0Mj2MQBjKAHZhSQ() {}  var type$Tvd5gBO0Mj2MQBjKAHZhSQ = Tvd5gBO0Mj2MQBjKAHZhSQ.prototype;
  type$Tvd5gBO0Mj2MQBjKAHZhSQ.constructor = Tvd5gBO0Mj2MQBjKAHZhSQ;
  type$Tvd5gBO0Mj2MQBjKAHZhSQ.f = null;
  type$Tvd5gBO0Mj2MQBjKAHZhSQ.c = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass36`3.<FixLastParam>b__35
  type$Tvd5gBO0Mj2MQBjKAHZhSQ._FixLastParam_b__35 = function (b, c)
  {
    var a = this;

    a.f.Invoke(b, c, a.c);
  };

  // Closure type
  function UbRBBh8XUTKiC1XmDCs8cw() {}  var type$UbRBBh8XUTKiC1XmDCs8cw = UbRBBh8XUTKiC1XmDCs8cw.prototype;
  type$UbRBBh8XUTKiC1XmDCs8cw.constructor = UbRBBh8XUTKiC1XmDCs8cw;
  type$UbRBBh8XUTKiC1XmDCs8cw.f = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass39`1.<AsParamsAction>b__38
  type$UbRBBh8XUTKiC1XmDCs8cw._AsParamsAction_b__38 = function (b)
  {
    var a = this, c, d, e, f;

    d = b;

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      a.f.Invoke(c);
    }

  };

  // Closure type
  function I7MHdTfLGjeAhWlMzDwXZA() {}  var type$I7MHdTfLGjeAhWlMzDwXZA = I7MHdTfLGjeAhWlMzDwXZA.prototype;
  type$I7MHdTfLGjeAhWlMzDwXZA.constructor = I7MHdTfLGjeAhWlMzDwXZA;
  type$I7MHdTfLGjeAhWlMzDwXZA.f = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass3c`1.<AsNegative>b__3b
  type$I7MHdTfLGjeAhWlMzDwXZA._AsNegative_b__3b = function (b)
  {
    return !this.f.Invoke(b);
  };

  // Closure type
  function NcUncGDyXjmKAOXcSHlS7Q() {}  var type$NcUncGDyXjmKAOXcSHlS7Q = NcUncGDyXjmKAOXcSHlS7Q.prototype;
  type$NcUncGDyXjmKAOXcSHlS7Q.constructor = NcUncGDyXjmKAOXcSHlS7Q;
  type$NcUncGDyXjmKAOXcSHlS7Q.f = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass3f`2.<AsAction>b__3e
  type$NcUncGDyXjmKAOXcSHlS7Q._AsAction_b__3e = function (b)
  {
    var a = this;

    a.f.Invoke(b);
  };

  // Closure type
  function _3icO8kEixDqY2TPu6M8MHg() {}  var type$_3icO8kEixDqY2TPu6M8MHg = _3icO8kEixDqY2TPu6M8MHg.prototype;
  type$_3icO8kEixDqY2TPu6M8MHg.constructor = _3icO8kEixDqY2TPu6M8MHg;
  type$_3icO8kEixDqY2TPu6M8MHg.f = null;
  type$_3icO8kEixDqY2TPu6M8MHg.x = 0;
  type$_3icO8kEixDqY2TPu6M8MHg.y = 0;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass42.<WithOffset>b__41
  type$_3icO8kEixDqY2TPu6M8MHg._WithOffset_b__41 = function (b, c)
  {
    var a = this;

    a.f.Invoke((b + a.x), (c + a.y));
  };

  // Closure type
  function _5q3dVjAisjaaQy26ECWDFQ() {}  var type$_5q3dVjAisjaaQy26ECWDFQ = _5q3dVjAisjaaQy26ECWDFQ.prototype;
  type$_5q3dVjAisjaaQy26ECWDFQ.constructor = _5q3dVjAisjaaQy26ECWDFQ;
  type$_5q3dVjAisjaaQy26ECWDFQ.f = null;
  type$_5q3dVjAisjaaQy26ECWDFQ.x = 0;
  type$_5q3dVjAisjaaQy26ECWDFQ.y = 0;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass45`1.<WithOffset>b__44
  type$_5q3dVjAisjaaQy26ECWDFQ._WithOffset_b__44 = function (b, c)
  {
    return this.f.Invoke((b + this.x), (c + this.y));
  };

  // Closure type
  function krsZL2vKPzuT0vi9o5YTcw() {}  var type$krsZL2vKPzuT0vi9o5YTcw = krsZL2vKPzuT0vi9o5YTcw.prototype;
  type$krsZL2vKPzuT0vi9o5YTcw.constructor = krsZL2vKPzuT0vi9o5YTcw;
  type$krsZL2vKPzuT0vi9o5YTcw.me = null;
  type$krsZL2vKPzuT0vi9o5YTcw.le = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass48`2.<Y>b__47
  type$krsZL2vKPzuT0vi9o5YTcw._Y_b__47 = function (b)
  {
    return this.le.Invoke(this.me).Invoke(b);
  };

  // Closure type
  function _95guZ542DDKXY1EZASF69w() {}  var type$_95guZ542DDKXY1EZASF69w = _95guZ542DDKXY1EZASF69w.prototype;
  type$_95guZ542DDKXY1EZASF69w.constructor = _95guZ542DDKXY1EZASF69w;
  type$_95guZ542DDKXY1EZASF69w.me = null;
  type$_95guZ542DDKXY1EZASF69w.le = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass4b`3.<Y>b__4a
  type$_95guZ542DDKXY1EZASF69w._Y_b__4a = function (b, c)
  {
    return this.le.Invoke(this.me).Invoke(b, c);
  };

  // Closure type
  function iVpiQVIrajCShZaiFQAHrA() {}  var type$iVpiQVIrajCShZaiFQAHrA = iVpiQVIrajCShZaiFQAHrA.prototype;
  type$iVpiQVIrajCShZaiFQAHrA.constructor = iVpiQVIrajCShZaiFQAHrA;
  type$iVpiQVIrajCShZaiFQAHrA.me = null;
  type$iVpiQVIrajCShZaiFQAHrA.le = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass4e`1.<Y>b__4d
  type$iVpiQVIrajCShZaiFQAHrA._Y_b__4d = function (b)
  {
    var a = this;

    a.le.Invoke(a.me).Invoke(b);
  };

  // Closure type
  function XUzmm32Xtzu89jwHSQuH9w() {}  var type$XUzmm32Xtzu89jwHSQuH9w = XUzmm32Xtzu89jwHSQuH9w.prototype;
  type$XUzmm32Xtzu89jwHSQuH9w.constructor = XUzmm32Xtzu89jwHSQuH9w;
  type$XUzmm32Xtzu89jwHSQuH9w.me = null;
  type$XUzmm32Xtzu89jwHSQuH9w.le = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass51`2.<Y>b__50
  type$XUzmm32Xtzu89jwHSQuH9w._Y_b__50 = function (b, c)
  {
    var a = this;

    a.le.Invoke(a.me).Invoke(b, c);
  };

  // Closure type
  function _7YG87qdbLTiuUKpeBZ7BhQ() {}  var type$_7YG87qdbLTiuUKpeBZ7BhQ = _7YG87qdbLTiuUKpeBZ7BhQ.prototype;
  type$_7YG87qdbLTiuUKpeBZ7BhQ.constructor = _7YG87qdbLTiuUKpeBZ7BhQ;
  type$_7YG87qdbLTiuUKpeBZ7BhQ.source = null;
  type$_7YG87qdbLTiuUKpeBZ7BhQ.handler = null;
  // ScriptCoreLib.Shared.Lambda.LambdaExtensions+<>c__DisplayClass54`1.<ForEachNewItem>b__53
  type$_7YG87qdbLTiuUKpeBZ7BhQ._ForEachNewItem_b__53 = function (b, c)
  {
    var a = this, d;

    d = !(c.pQEABuUm6T6SExZbuoZS9Q() == 1);

    if (!d)
    {
      a.handler.Invoke(a.source.OwgABj1h1jWisfyZw_a9KnQ(c.pgEABuUm6T6SExZbuoZS9Q()));
    }

  };

  // Are the references up to date?
  // Are they imported in the dependency sort order?
  // reference ScriptCoreLib - _5Ab28nwLIEWdGNMb6EqeCw
  BaJOV6PUu0uhcv4u1emKog.Types = [_1ZJKoK7RDTCUVPdLbzlytg,_6_bib1rTI5jKYlPPQ4BlzkQ,vFSL7Nrn5zKx_borfa_aTZ_bw,DJXN8wE7OTaQ4_bnELOATmA,_2EvG8q_b_azTavpcWLP4fehw,_7TKEHsYynjKH_a9BWAXyyWQ,KHsG07amAzCum3aMmJl9kg,onx77RyKcjqF1lxYSIuBWQ,R2PC0uB0iTWwwR4dEcfbmQ,aXclwMouJj63d8Z1Bh_amow,WDCzzVwhBDaAYO3aS2mrZw,M4VUgp8OAzGU490a8p5wuQ,qD_aodB5_aCze8WXD54Nu1HA,VFsQDWO_ahzGpa166TZVW3Q,CT68noUDaT62YZA3SAEicw,mY3J76FlhDa_aI2NFJW8DzQ,cyZsApr33DqIIsOoA4L3RQ,HPAwYPZ3QTSgkJQTPRgBcA];
  BaJOV6PUu0uhcv4u1emKog.References = [_5Ab28nwLIEWdGNMb6EqeCw];

