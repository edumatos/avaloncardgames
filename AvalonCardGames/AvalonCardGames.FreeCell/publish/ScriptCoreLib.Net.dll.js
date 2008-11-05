  var _4OPuXvHExkC1N7_bnlmuJvg = {Name:{Name:"ScriptCoreLib.Net",FullName:"ScriptCoreLib.Net, Version\x3d1.0.0.0, Culture\x3dneutral, PublicKeyToken\x3dnull"}};
  // ScriptCoreLib.JavaScript.Net.ClientTansport`1
  function TLhPJSWU6zKFJ1h10qqt_bQ(){};
  TLhPJSWU6zKFJ1h10qqt_bQ.TypeName = "ClientTansport_1";
  TLhPJSWU6zKFJ1h10qqt_bQ.Assembly = _4OPuXvHExkC1N7_bnlmuJvg;
  var type$TLhPJSWU6zKFJ1h10qqt_bQ = TLhPJSWU6zKFJ1h10qqt_bQ.prototype;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.constructor = TLhPJSWU6zKFJ1h10qqt_bQ;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.Descriptor = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.Url = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.BeforeSend = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.Complete = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.Working = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.Request = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.LastException = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.Worker = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.Form = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.ResponseText = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.IsVerbose = false;
  type$TLhPJSWU6zKFJ1h10qqt_bQ._timestart = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.TimeElapsed = null;
  type$TLhPJSWU6zKFJ1h10qqt_bQ.DemandHeader = false;
  var basector$TLhPJSWU6zKFJ1h10qqt_bQ = $ctor$(null, null, type$TLhPJSWU6zKFJ1h10qqt_bQ);
  // ScriptCoreLib.JavaScript.Net.ClientTansport`1..ctor
  type$TLhPJSWU6zKFJ1h10qqt_bQ.CwAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.EgAABiWU6zKFJ1h10qqt_bQ('', b);
  };
  var ctor$CwAABiWU6zKFJ1h10qqt_bQ = $ctor$(null, 'CwAABiWU6zKFJ1h10qqt_bQ', type$TLhPJSWU6zKFJ1h10qqt_bQ);

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1..ctor
  type$TLhPJSWU6zKFJ1h10qqt_bQ.DAAABiWU6zKFJ1h10qqt_bQ = function (b, c)
  {
    var a = this;

    a.EQAABiWU6zKFJ1h10qqt_bQ('', b, c);
  };
  var ctor$DAAABiWU6zKFJ1h10qqt_bQ = $ctor$(null, 'DAAABiWU6zKFJ1h10qqt_bQ', type$TLhPJSWU6zKFJ1h10qqt_bQ);

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1..ctor
  type$TLhPJSWU6zKFJ1h10qqt_bQ.EQAABiWU6zKFJ1h10qqt_bQ = function (b, c, d)
  {
    var a = this, e, f;

    a.Worker = new ctor$kgIABuy1XDyGhROW4ymGTg();
    a.DemandHeader = 1;
    a.Url = YxEABrA3fT6ZrCN3llKJ_aA(b, '?', c);
    a.Descriptor = new ctor$OgoABgQgSzicdKm_bsT7GZA();
    a.Worker.kAIABuy1XDyGhROW4ymGTg(new ctor$CQoABq6j7zueWbRKKKV3Lw(a, 'EwAABiWU6zKFJ1h10qqt_bQ'));
    f = !d;

    if (!f)
    {
      e = document.getElementById(RgMABObfrj6mxZo8S_a1KKQ);
      f = !(e == null);

      if (!f)
      {
        throw fwAABlCvizaBPZBMcbwXfw('form template not found');
      }

      a.Form = e.cloneNode(0);
      a.Form.action = a.Url;
      a.Form.appendChild(NwAABt0vgDKY_bdDd18HTtA());
      a.DwAABiWU6zKFJ1h10qqt_bQ().style.display = 'none';
      a.Descriptor.Callback = __aRAABvkf7T2t3w0tonza2w('callback');
      __aBAABvkf7T2t3w0tonza2w(a.Descriptor.Callback, new ctor$CQoABq6j7zueWbRKKKV3Lw(a, 'DQAABiWU6zKFJ1h10qqt_bQ'));
      a.DgAABiWU6zKFJ1h10qqt_bQ();
    }
    else
    {
      a.Request = JwAABsPgHDuQYCQuw8yXdA();
    }

  };
  var ctor$EQAABiWU6zKFJ1h10qqt_bQ = $ctor$(null, 'EQAABiWU6zKFJ1h10qqt_bQ', type$TLhPJSWU6zKFJ1h10qqt_bQ);

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1..ctor
  type$TLhPJSWU6zKFJ1h10qqt_bQ.EgAABiWU6zKFJ1h10qqt_bQ = function (b, c)
  {
    var a = this;

    a.EQAABiWU6zKFJ1h10qqt_bQ(b, c, 0);
  };
  var ctor$EgAABiWU6zKFJ1h10qqt_bQ = $ctor$(null, 'EgAABiWU6zKFJ1h10qqt_bQ', type$TLhPJSWU6zKFJ1h10qqt_bQ);

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.add_BeforeSend
  type$TLhPJSWU6zKFJ1h10qqt_bQ.AQAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.BeforeSend = TAoABhNbrTK2juX6Wf4PnQ(a.BeforeSend, b);
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.remove_BeforeSend
  type$TLhPJSWU6zKFJ1h10qqt_bQ.AgAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.BeforeSend = TgoABhNbrTK2juX6Wf4PnQ(a.BeforeSend, b);
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.add_Complete
  type$TLhPJSWU6zKFJ1h10qqt_bQ.AwAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.Complete = TAoABhNbrTK2juX6Wf4PnQ(a.Complete, b);
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.remove_Complete
  type$TLhPJSWU6zKFJ1h10qqt_bQ.BAAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.Complete = TgoABhNbrTK2juX6Wf4PnQ(a.Complete, b);
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.add_Working
  type$TLhPJSWU6zKFJ1h10qqt_bQ.BQAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.Working = TAoABhNbrTK2juX6Wf4PnQ(a.Working, b);
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.remove_Working
  type$TLhPJSWU6zKFJ1h10qqt_bQ.BgAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.Working = TgoABhNbrTK2juX6Wf4PnQ(a.Working, b);
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.get_IsOnline
  function BwAABiWU6zKFJ1h10qqt_bQ()
  {
    var b;

    b = PAkABjsvcj_adN5DpbSq1vQ(document.location);
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.get_IsOffline
  function CAAABiWU6zKFJ1h10qqt_bQ()
  {
    var b;

    b = !BwAABiWU6zKFJ1h10qqt_bQ();
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.get_Data
  type$TLhPJSWU6zKFJ1h10qqt_bQ.CQAABiWU6zKFJ1h10qqt_bQ = function ()
  {
    var a = this, b, c, d;

    c = !(a.Descriptor == null);

    if (!c)
    {
      d = void(0);
      b = d;
      return b;
    }

    b = a.Descriptor.Data;
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.set_Data
  type$TLhPJSWU6zKFJ1h10qqt_bQ.CgAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this, c;

    c = !(a.Descriptor == null);

    if (!c)
    {
      throw fwAABlCvizaBPZBMcbwXfw('no descriptor set');
    }

    a.Descriptor.Data = b;
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.Callback
  type$TLhPJSWU6zKFJ1h10qqt_bQ.DQAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.DgAABiWU6zKFJ1h10qqt_bQ();
    a.ResponseText = fwcABpUQizu5gCmXFz2y7g(b);
    a.FwAABiWU6zKFJ1h10qqt_bQ();
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.ResetCallbackFrame
  type$TLhPJSWU6zKFJ1h10qqt_bQ.DgAABiWU6zKFJ1h10qqt_bQ = function ()
  {
    var a = this;

    ow0ABvmt_aT2hLXIgzD4eQw('resetting form callback iframe');
    a.Form.firstChild.innerHTML = YxEABrA3fT6ZrCN3llKJ_aA('<iframe name=\'', a.Descriptor.Callback, '\'><\u002fiframe>');
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.get_FormHiddenChild
  type$TLhPJSWU6zKFJ1h10qqt_bQ.DwAABiWU6zKFJ1h10qqt_bQ = function ()
  {
    var a = this, b;

    b = a.Form.firstChild;
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.get_CallbackFrame
  type$TLhPJSWU6zKFJ1h10qqt_bQ.EAAABiWU6zKFJ1h10qqt_bQ = function ()
  {
    var a = this, b;

    b = a.DwAABiWU6zKFJ1h10qqt_bQ().firstChild;
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.Worker_Tick
  type$TLhPJSWU6zKFJ1h10qqt_bQ.EwAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    zwcABubfrj6mxZo8S_a1KKQ(a.Working, a);
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.ToJSON
  type$TLhPJSWU6zKFJ1h10qqt_bQ.FAAABiWU6zKFJ1h10qqt_bQ = function ()
  {
    var a = this, b;

    b = vhAABvkf7T2t3w0tonza2w(_6RAABvkf7T2t3w0tonza2w(a.Descriptor));
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.get_StatusString
  type$TLhPJSWU6zKFJ1h10qqt_bQ.FQAABiWU6zKFJ1h10qqt_bQ = function ()
  {
    var a = this, b;

    b = a.Request.statusText;
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.Send
  type$TLhPJSWU6zKFJ1h10qqt_bQ.FgAABiWU6zKFJ1h10qqt_bQ = function ()
  {
    var a = this, b, c, d, e, f, g;

    e = null;
    a._timestart = DwwABo2KcTic59Q3pxbNog().getTime();
    a.TimeElapsed = 0;
    a.LastException = null;
    f = (a.BeforeSend == null);

    if (!f)
    {
      a.BeforeSend.Invoke(a);
    }

    f = !(a.Descriptor.Description == null);

    if (!f)
    {
      b = 'header not set';
      ow0ABvmt_aT2hLXIgzD4eQw(b);
      f = !a.DemandHeader;

      if (!f)
      {
        throw fwAABlCvizaBPZBMcbwXfw(b);
      }

    }

    c = a.FAAABiWU6zKFJ1h10qqt_bQ();
    f = !a.IsVerbose;

    if (!f)
    {
      g = [
        ' => [',
        a.Descriptor.Description,
        '] ',
        new Number(WhEABrA3fT6ZrCN3llKJ_aA(c)),
        ' bytes'
      ];
      ow0ABvmt_aT2hLXIgzD4eQw(XhEABrA3fT6ZrCN3llKJ_aA(g));
    }

    a.Worker.mQIABuy1XDyGhROW4ymGTg();
    f = !a.IsVerbose;

    if (!f)
    {
      ow0ABvmt_aT2hLXIgzD4eQw(YxEABrA3fT6ZrCN3llKJ_aA('var data = ', c, ';'));
      ow0ABvmt_aT2hLXIgzD4eQw(YBEABrA3fT6ZrCN3llKJ_aA(new Number(WhEABrA3fT6ZrCN3llKJ_aA(c)), ' bytes sent'));
    }

    f = !(a.Form == null);

    if (!f)
    {
      a.Request.open('POST', a.Url);
      a.Request.send(c);

      if (!e)
      {
        e = new ctor$CQoABq6j7zueWbRKKKV3Lw(a, 'HAAABiWU6zKFJ1h10qqt_bQ');
      }

      PQAABsPgHDuQYCQuw8yXdA(a.Request, e);
    }
    else
    {
      d = UgQABoQYbDCUvozeMao7pg('hidden');
      d.name = RwMABObfrj6mxZo8S_a1KKQ;
      d.value = fgcABpUQizu5gCmXFz2y7g(c);
      a.Form.appendChild(d);
      a.Form.target = a.Descriptor.Callback;
      a.Form.submit();
      PwoABnCdPTa79OFfezjtjQ(d);
    }

  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.GotResponse
  type$TLhPJSWU6zKFJ1h10qqt_bQ.FwAABiWU6zKFJ1h10qqt_bQ = function ()
  {
    var a = this, b, c, d;

    a.TimeElapsed = (DwwABo2KcTic59Q3pxbNog().getTime() - a._timestart);
    a.Worker.ngIABuy1XDyGhROW4ymGTg();
    c = !a.IsVerbose;

    if (!c)
    {
      d = [
        ' <= [',
        a.Descriptor.Description,
        '] ',
        a.TimeElapsed,
        ' ms, ',
        new Number(WhEABrA3fT6ZrCN3llKJ_aA(a.ResponseText)),
        ' bytes'
      ];
      ow0ABvmt_aT2hLXIgzD4eQw(XhEABrA3fT6ZrCN3llKJ_aA(d));
      ow0ABvmt_aT2hLXIgzD4eQw(YhEABrA3fT6ZrCN3llKJ_aA('json: ', a.ResponseText));
    }

    a.Descriptor = null;
    try
    {
      a.Descriptor = _0xAABvkf7T2t3w0tonza2w(wxAABvkf7T2t3w0tonza2w(a.ResponseText));
    }
    catch (__exc)
    {
      b = __exc;
      a.LastException = b;
    }
    zwcABubfrj6mxZo8S_a1KKQ(a.Complete, a);
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.Send
  function GAAABiWU6zKFJ1h10qqt_bQ(b, c)
  {
    var d, e;

    d = new ctor$CwAABiWU6zKFJ1h10qqt_bQ(b);
    e = (c == null);

    if (!e)
    {
      d.BeforeSend = TAoABhNbrTK2juX6Wf4PnQ(d.BeforeSend, c);
    }
    else
    {
      ow0ABvmt_aT2hLXIgzD4eQw('Send without before send handler');
    }

    d.FgAABiWU6zKFJ1h10qqt_bQ();
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.DisableButtonsWhileBusy
  type$TLhPJSWU6zKFJ1h10qqt_bQ.GQAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new GBEOvi4n_azynU1xjODBOtg();
    c.e = b;
    a.BeforeSend = TAoABhNbrTK2juX6Wf4PnQ(a.BeforeSend, new ctor$CQoABq6j7zueWbRKKKV3Lw(c, '_DisableButtonsWhileBusy_b__2'));
    a.Complete = TAoABhNbrTK2juX6Wf4PnQ(a.Complete, new ctor$CQoABq6j7zueWbRKKKV3Lw(c, '_DisableButtonsWhileBusy_b__3'));
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.ToConsole
  type$TLhPJSWU6zKFJ1h10qqt_bQ.GgAABiWU6zKFJ1h10qqt_bQ = function ()
  {
    var a = this;

  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.AttachTo
  type$TLhPJSWU6zKFJ1h10qqt_bQ.GwAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this, c;

    c = [
      b
    ];
    a.GQAABiWU6zKFJ1h10qqt_bQ(c);
    RQAABt0vgDKY_bdDd18HTtA(b, new ctor$CQoABq6j7zueWbRKKKV3Lw(a, 'HQAABiWU6zKFJ1h10qqt_bQ'));
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.<Send>b__0
  type$TLhPJSWU6zKFJ1h10qqt_bQ.HAAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.ResponseText = a.Request.responseText;
    a.FwAABiWU6zKFJ1h10qqt_bQ();
  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1.<AttachTo>b__6
  type$TLhPJSWU6zKFJ1h10qqt_bQ.HQAABiWU6zKFJ1h10qqt_bQ = function (b)
  {
    var a = this;

    a.FgAABiWU6zKFJ1h10qqt_bQ();
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.send
  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.ToJSON
  function RAAABsPgHDuQYCQuw8yXdA(a)
  {
    var b;

    b = _0xAABvkf7T2t3w0tonza2w(wxAABvkf7T2t3w0tonza2w(a.responseText));
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InternalConstructor
  function JwAABsPgHDuQYCQuw8yXdA()
  {
    var b, c, d;

    b = null;
    try
    {
      b = new XMLHttpRequest();
    }
    catch (__exc)
    {
      d = [
        'Msxml2.XMLHTTP.3.0',
        'Microsoft.XMLHTTP'
      ];
      b = uQ0ABhZu5DaI3YG6d81VGw(d);
    }
    c = b;
    return c;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InternalConstructor
  function KAAABsPgHDuQYCQuw8yXdA(b, c, d)
  {
    var e, f;

    e = JwAABsPgHDuQYCQuw8yXdA();
    e.open(b, c, d);
    f = e;
    return f;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InternalConstructor
  function KQAABsPgHDuQYCQuw8yXdA(b, c, d)
  {
    var e;

    e = KgAABsPgHDuQYCQuw8yXdA(b, c, d, 1);
    return e;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InternalConstructor
  function KgAABsPgHDuQYCQuw8yXdA(b, c, d, e)
  {
    var f, g;

    f = KAAABsPgHDuQYCQuw8yXdA('POST', b, e);
    f.send(c);
    PAAABsPgHDuQYCQuw8yXdA(f, d, e);
    g = f;
    return g;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InternalConstructor
  function KwAABsPgHDuQYCQuw8yXdA(b, c)
  {
    var d;

    d = LAAABsPgHDuQYCQuw8yXdA(b, c, 1);
    return d;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InternalConstructor
  function LAAABsPgHDuQYCQuw8yXdA(b, c, d)
  {
    var e, f;

    e = KAAABsPgHDuQYCQuw8yXdA('HEAD', b, d);
    OAAABsPgHDuQYCQuw8yXdA(e);
    PAAABsPgHDuQYCQuw8yXdA(e, c, d);
    f = e;
    return f;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InternalConstructor
  function LQAABsPgHDuQYCQuw8yXdA(b, c, d)
  {
    var e;

    e = LgAABsPgHDuQYCQuw8yXdA(b, c, d, 1);
    return e;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InternalConstructor
  function LgAABsPgHDuQYCQuw8yXdA(b, c, d, e)
  {
    var f, g;

    f = KAAABsPgHDuQYCQuw8yXdA('POST', b, e);
    f.send(c);
    PAAABsPgHDuQYCQuw8yXdA(f, d, e);
    g = f;
    return g;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InternalConstructor
  function LwAABsPgHDuQYCQuw8yXdA(b, c, d)
  {
    var e, f;

    e = KAAABsPgHDuQYCQuw8yXdA(b, c, 1);
    OAAABsPgHDuQYCQuw8yXdA(e);
    PQAABsPgHDuQYCQuw8yXdA(e, d);
    f = e;
    return f;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.get_ETag
  function MAAABsPgHDuQYCQuw8yXdA(a)
  {
    var b;

    b = a.getResponseHeader('ETag');
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.open
  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.open
  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.open
  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.setRequestHeader
  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.getResponseHeader
  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.getAllResponseHeaders
  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.get_BytesIn
  function NwAABsPgHDuQYCQuw8yXdA(a)
  {
    var b, c;

    c = !(a.readyState > 2);

    if (!c)
    {
      b = WhEABrA3fT6ZrCN3llKJ_aA(a.responseText);
      return b;
    }

    b = 0;
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.send
  function OAAABsPgHDuQYCQuw8yXdA(a)
  {
    a.send(null);
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.abort
  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.get_complete
  function OwAABsPgHDuQYCQuw8yXdA(a)
  {
    var b;

    b = (a.readyState == 4);
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InvokeOnComplete
  function PAAABsPgHDuQYCQuw8yXdA(a, b, c)
  {
    var d;

    d = !(b == null);

    if (!d)
    {
      return;
    }

    d = !c;

    if (!d)
    {
      PQAABsPgHDuQYCQuw8yXdA(a, b);
      return;
    }

    b.Invoke(a);
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InvokeOnComplete
  function PQAABsPgHDuQYCQuw8yXdA(a, b)
  {
    PgAABsPgHDuQYCQuw8yXdA(a, b, 500);
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.InvokeOnComplete
  function PgAABsPgHDuQYCQuw8yXdA(a, b, c)
  {
    var d, e;

    d = /* DOMCreateType */new _31wf9K0JvTi3EbmGaj7A9Q();
    d.e = b;
    d.__4__this = a;
    e = !(d.e == null);

    if (!e)
    {
      return;
    }

    d.t = new ctor$kgIABuy1XDyGhROW4ymGTg();
    d.t.kAIABuy1XDyGhROW4ymGTg(new ctor$CQoABq6j7zueWbRKKKV3Lw(d, '_InvokeOnComplete_b__0'));
    d.t.mgIABuy1XDyGhROW4ymGTg(c);
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.get_responseXML
  function PwAABsPgHDuQYCQuw8yXdA(a)
  {
    var b;

    b = DAUABodESDK1s9SpNGaOXQ(a.responseText);
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.op_Implicit
  function QAAABsPgHDuQYCQuw8yXdA(b)
  {
    var c;

    c = PwAABsPgHDuQYCQuw8yXdA(b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.get_IsOK
  function QQAABsPgHDuQYCQuw8yXdA(a)
  {
    var b;

    b = (a.status == 200);
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.get_IsNoContent
  function QgAABsPgHDuQYCQuw8yXdA(a)
  {
    var b, c, d;

    b = a.status;
    d = !(b == 204);

    if (!d)
    {
      c = 1;
      return c;
    }

    d = !(b == 1223);

    if (!d)
    {
      c = 1;
      return c;
    }

    c = 0;
    return c;
  };

  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest.get_IsOffline
  function QwAABsPgHDuQYCQuw8yXdA(a)
  {
    var b, c, d;

    b = a.status;
    d = !!b;

    if (!d)
    {
      c = 1;
      return c;
    }

    d = !(b == 12029);

    if (!d)
    {
      c = 1;
      return c;
    }

    c = 0;
    return c;
  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor
  function Md2jDrN9sT_aDUI0FefDy8Q(){};
  Md2jDrN9sT_aDUI0FefDy8Q.TypeName = "UrlMonitor";
  Md2jDrN9sT_aDUI0FefDy8Q.Assembly = _4OPuXvHExkC1N7_bnlmuJvg;
  var type$Md2jDrN9sT_aDUI0FefDy8Q = Md2jDrN9sT_aDUI0FefDy8Q.prototype;
  type$Md2jDrN9sT_aDUI0FefDy8Q.constructor = Md2jDrN9sT_aDUI0FefDy8Q;
  var HQAABLN9sT_aDUI0FefDy8Q = null;
  var IwAABLN9sT_aDUI0FefDy8Q = null;
  type$Md2jDrN9sT_aDUI0FefDy8Q.MonitorTimer = null;
  type$Md2jDrN9sT_aDUI0FefDy8Q.ETagChanged = null;
  type$Md2jDrN9sT_aDUI0FefDy8Q.RequestComplete = null;
  type$Md2jDrN9sT_aDUI0FefDy8Q.r = null;
  type$Md2jDrN9sT_aDUI0FefDy8Q._async = false;
  type$Md2jDrN9sT_aDUI0FefDy8Q.ETag = null;
  type$Md2jDrN9sT_aDUI0FefDy8Q.Interval = 0;
  type$Md2jDrN9sT_aDUI0FefDy8Q.Url = null;
  var basector$Md2jDrN9sT_aDUI0FefDy8Q = $ctor$(null, null, type$Md2jDrN9sT_aDUI0FefDy8Q);
  // ScriptCoreLib.JavaScript.Net.UrlMonitor..ctor
  type$Md2jDrN9sT_aDUI0FefDy8Q.SgAABrN9sT_aDUI0FefDy8Q = function (b, c, d)
  {
    var a = this;

    a.SwAABrN9sT_aDUI0FefDy8Q(b, c);
    a.ETagChanged = TAoABhNbrTK2juX6Wf4PnQ(a.ETagChanged, d);
    a.TwAABrN9sT_aDUI0FefDy8Q(1);
  };
  var ctor$SgAABrN9sT_aDUI0FefDy8Q = $ctor$(null, 'SgAABrN9sT_aDUI0FefDy8Q', type$Md2jDrN9sT_aDUI0FefDy8Q);

  // ScriptCoreLib.JavaScript.Net.UrlMonitor..ctor
  type$Md2jDrN9sT_aDUI0FefDy8Q.SwAABrN9sT_aDUI0FefDy8Q = function (b, c)
  {
    var a = this;

    a.MonitorTimer = new ctor$kgIABuy1XDyGhROW4ymGTg();
    a._async = 0;
    a.MonitorTimer.kAIABuy1XDyGhROW4ymGTg(new ctor$CQoABq6j7zueWbRKKKV3Lw(a, 'TQAABrN9sT_aDUI0FefDy8Q'));
    a.Url = b;
    a.Interval = c;
  };
  var ctor$SwAABrN9sT_aDUI0FefDy8Q = $ctor$(null, 'SwAABrN9sT_aDUI0FefDy8Q', type$Md2jDrN9sT_aDUI0FefDy8Q);

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.add_ETagChanged
  type$Md2jDrN9sT_aDUI0FefDy8Q.RgAABrN9sT_aDUI0FefDy8Q = function (b)
  {
    var a = this;

    a.ETagChanged = TAoABhNbrTK2juX6Wf4PnQ(a.ETagChanged, b);
  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.remove_ETagChanged
  type$Md2jDrN9sT_aDUI0FefDy8Q.RwAABrN9sT_aDUI0FefDy8Q = function (b)
  {
    var a = this;

    a.ETagChanged = TgoABhNbrTK2juX6Wf4PnQ(a.ETagChanged, b);
  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.add_RequestComplete
  type$Md2jDrN9sT_aDUI0FefDy8Q.SAAABrN9sT_aDUI0FefDy8Q = function (b)
  {
    var a = this;

    a.RequestComplete = TAoABhNbrTK2juX6Wf4PnQ(a.RequestComplete, b);
  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.remove_RequestComplete
  type$Md2jDrN9sT_aDUI0FefDy8Q.SQAABrN9sT_aDUI0FefDy8Q = function (b)
  {
    var a = this;

    a.RequestComplete = TgoABhNbrTK2juX6Wf4PnQ(a.RequestComplete, b);
  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.get_Request
  type$Md2jDrN9sT_aDUI0FefDy8Q.TAAABrN9sT_aDUI0FefDy8Q = function ()
  {
    var a = this, b;

    b = a.r;
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.t_Tick
  type$Md2jDrN9sT_aDUI0FefDy8Q.TQAABrN9sT_aDUI0FefDy8Q = function (b)
  {
    var a = this, c;

    c = !a._async;

    if (!c)
    {
      return;
    }

    a._async = 1;
    try
    {
      a.r = JwAABsPgHDuQYCQuw8yXdA();
      a.r.open('HEAD', a.Url);
      OAAABsPgHDuQYCQuw8yXdA(a.r);
    }
    catch (__exc)
    {
      window.alert(' send error ');
    }
    PQAABsPgHDuQYCQuw8yXdA(a.r, new ctor$CQoABq6j7zueWbRKKKV3Lw(a, 'UAAABrN9sT_aDUI0FefDy8Q'));
  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.get_Enabled
  type$Md2jDrN9sT_aDUI0FefDy8Q.TgAABrN9sT_aDUI0FefDy8Q = function ()
  {
    var a = this, b;

    b = a.MonitorTimer.nQIABuy1XDyGhROW4ymGTg();
    return b;
  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.set_Enabled
  type$Md2jDrN9sT_aDUI0FefDy8Q.TwAABrN9sT_aDUI0FefDy8Q = function (b)
  {
    var a = this, c;

    c = (!b || a.MonitorTimer.nQIABuy1XDyGhROW4ymGTg());

    if (!c)
    {
      a.MonitorTimer.mgIABuy1XDyGhROW4ymGTg(a.Interval);
      return;
    }

    c = (b || !a.MonitorTimer.nQIABuy1XDyGhROW4ymGTg());

    if (!c)
    {
      a.MonitorTimer.ngIABuy1XDyGhROW4ymGTg();
    }

  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.<t_Tick>b__0
  type$Md2jDrN9sT_aDUI0FefDy8Q.UAAABrN9sT_aDUI0FefDy8Q = function (b)
  {
    var a = this, c, d, e;

    e = (a.RequestComplete == null);

    if (!e)
    {
      a.RequestComplete.Invoke(a);
    }

    e = !(b.status == 200);

    if (!e)
    {
      c = MAAABsPgHDuQYCQuw8yXdA(b);
      d = (exEABrA3fT6ZrCN3llKJ_aA(c, a.ETag) && (a.ETag && !(c == null)));
      a.ETag = c;
      e = !d;

      if (!e)
      {
        e = (a.ETagChanged == null);

        if (!e)
        {
          a.ETagChanged.Invoke(a);
        }

        a.TwAABrN9sT_aDUI0FefDy8Q(0);
        return;
      }

    }
    else
    {
      a.TwAABrN9sT_aDUI0FefDy8Q(0);
      return;
    }

    a._async = 0;
  };

  // ScriptCoreLib.JavaScript.Net.UrlMonitor.<.cctor>b__1
  function UgAABrN9sT_aDUI0FefDy8Q(b)
  {
    document.location.reload();
  };

  // ScriptCoreLib.JavaScript.Net.WebServiceProxy
  function ifLjgwE9pDmtFHaKWA_bkMw(){};
  ifLjgwE9pDmtFHaKWA_bkMw.TypeName = "WebServiceProxy";
  ifLjgwE9pDmtFHaKWA_bkMw.Assembly = _4OPuXvHExkC1N7_bnlmuJvg;
  var type$ifLjgwE9pDmtFHaKWA_bkMw = ifLjgwE9pDmtFHaKWA_bkMw.prototype;
  type$ifLjgwE9pDmtFHaKWA_bkMw.constructor = ifLjgwE9pDmtFHaKWA_bkMw;
  type$ifLjgwE9pDmtFHaKWA_bkMw.URL = null;
  var basector$ifLjgwE9pDmtFHaKWA_bkMw = $ctor$(null, null, type$ifLjgwE9pDmtFHaKWA_bkMw);
  // ScriptCoreLib.JavaScript.Net.WebServiceProxy..ctor
  type$ifLjgwE9pDmtFHaKWA_bkMw.UwAABgE9pDmtFHaKWA_bkMw = function (b)
  {
    var a = this;

    a.URL = b;
  };
  var ctor$UwAABgE9pDmtFHaKWA_bkMw = $ctor$(null, 'UwAABgE9pDmtFHaKWA_bkMw', type$ifLjgwE9pDmtFHaKWA_bkMw);

  // ScriptCoreLib.JavaScript.Net.WebServiceProxy.CreateComplexProxy
  type$ifLjgwE9pDmtFHaKWA_bkMw.VgAABgE9pDmtFHaKWA_bkMw = function (b)
  {
    var a = this, c;

    c = VwAABgE9pDmtFHaKWA_bkMw(a.URL, b);
    return c;
  };

  // ScriptCoreLib.JavaScript.Net.WebServiceProxy.CreateComplexProxy
  function VwAABgE9pDmtFHaKWA_bkMw(b, c)
  {
    var d, e;

    d = /* DOMCreateType */new __by0IiynH0jmNeQxiiF1oFA();
    d.URL = b;
    d.method = c;
    e = new ctor$TQUABmdYmDufdNSm2oh5Bw(d, '_CreateComplexProxy_b__0');
    return e;
  };

  // ScriptCoreLib.JavaScript.Net.WebServiceProxy.DeserializeAsExpando
  function VAAABgE9pDmtFHaKWA_bkMw(b)
  {
    var c, d, e, f, g, h;

    c = zRAABvkf7T2t3w0tonza2w();
    f = b.childNodes;

    for (g = 0; (g < f.length); g++)
    {
      d = f[g];
      _7hAABvkf7T2t3w0tonza2w(c, d.nodeName, VQAABgE9pDmtFHaKWA_bkMw(d));
    }

    e = c;
    return e;
  };

  // ScriptCoreLib.JavaScript.Net.WebServiceProxy.DeserializeAsValue
  function VQAABgE9pDmtFHaKWA_bkMw(b)
  {
    var c, d;

    d = !(b.childNodes.length == 1);

    if (!d)
    {
      d = !(b.childNodes[0].nodeType == 3);

      if (!d)
      {
        c = _6RAABvkf7T2t3w0tonza2w(b.childNodes[0].nodeValue);
        return c;
      }

    }

    c = VAAABgE9pDmtFHaKWA_bkMw(b);
    return c;
  };

  // Closure type
  function GBEOvi4n_azynU1xjODBOtg() {}  var type$GBEOvi4n_azynU1xjODBOtg = GBEOvi4n_azynU1xjODBOtg.prototype;
  type$GBEOvi4n_azynU1xjODBOtg.constructor = GBEOvi4n_azynU1xjODBOtg;
  type$GBEOvi4n_azynU1xjODBOtg.e = null;
  // ScriptCoreLib.JavaScript.Net.ClientTansport`1+<>c__DisplayClass4.<DisableButtonsWhileBusy>b__2
  type$GBEOvi4n_azynU1xjODBOtg._DisableButtonsWhileBusy_b__2 = function (b)
  {
    var a = this, c, d, e, f;

    d = a.e;

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      c.disabled = 1;
    }

  };

  // ScriptCoreLib.JavaScript.Net.ClientTansport`1+<>c__DisplayClass4.<DisableButtonsWhileBusy>b__3
  type$GBEOvi4n_azynU1xjODBOtg._DisableButtonsWhileBusy_b__3 = function (b)
  {
    var a = this, c, d, e, f;

    d = a.e;

    for (e = 0; (e < d.length); e++)
    {
      c = d[e];
      c.disabled = 0;
    }

  };

  // Closure type
  function _31wf9K0JvTi3EbmGaj7A9Q() {}  var type$_31wf9K0JvTi3EbmGaj7A9Q = _31wf9K0JvTi3EbmGaj7A9Q.prototype;
  type$_31wf9K0JvTi3EbmGaj7A9Q.constructor = _31wf9K0JvTi3EbmGaj7A9Q;
  type$_31wf9K0JvTi3EbmGaj7A9Q.t = null;
  type$_31wf9K0JvTi3EbmGaj7A9Q.__4__this = null;
  type$_31wf9K0JvTi3EbmGaj7A9Q.e = null;
  // ScriptCoreLib.JavaScript.Net.IXMLHttpRequest+<>c__DisplayClass1.<InvokeOnComplete>b__0
  type$_31wf9K0JvTi3EbmGaj7A9Q._InvokeOnComplete_b__0 = function (b)
  {
    var a = this, c;

    c = !OwAABsPgHDuQYCQuw8yXdA(a.__4__this);

    if (!c)
    {
      a.t.ngIABuy1XDyGhROW4ymGTg();
      a.e.Invoke(a.__4__this);
      return;
    }

  };

  // Closure type
  function __by0IiynH0jmNeQxiiF1oFA() {}  var type$__by0IiynH0jmNeQxiiF1oFA = __by0IiynH0jmNeQxiiF1oFA.prototype;
  type$__by0IiynH0jmNeQxiiF1oFA.constructor = __by0IiynH0jmNeQxiiF1oFA;
  type$__by0IiynH0jmNeQxiiF1oFA.URL = null;
  type$__by0IiynH0jmNeQxiiF1oFA.method = null;
  // ScriptCoreLib.JavaScript.Net.WebServiceProxy+<>c__DisplayClass2`1.<CreateComplexProxy>b__0
  type$__by0IiynH0jmNeQxiiF1oFA._CreateComplexProxy_b__0 = function (b)
  {
    var a = this, c;

    c = /* DOMCreateType */new h_bF3SPVMjTuBtvZGd649qw();
    c.CS___8__locals3 = a;
    c.done = b;
    KQAABsPgHDuQYCQuw8yXdA(YxEABrA3fT6ZrCN3llKJ_aA(a.URL, '\u002f', a.method), '', new ctor$CQoABq6j7zueWbRKKKV3Lw(c, '_CreateComplexProxy_b__1'));
  };

  // Closure type
  function h_bF3SPVMjTuBtvZGd649qw() {}  var type$h_bF3SPVMjTuBtvZGd649qw = h_bF3SPVMjTuBtvZGd649qw.prototype;
  type$h_bF3SPVMjTuBtvZGd649qw.constructor = h_bF3SPVMjTuBtvZGd649qw;
  type$h_bF3SPVMjTuBtvZGd649qw.CS___8__locals3 = null;
  type$h_bF3SPVMjTuBtvZGd649qw.done = null;
  // ScriptCoreLib.JavaScript.Net.WebServiceProxy+<>c__DisplayClass2`1+<>c__DisplayClass4.<CreateComplexProxy>b__1
  type$h_bF3SPVMjTuBtvZGd649qw._CreateComplexProxy_b__1 = function (b)
  {
    var a = this;

    a.done.Invoke(_0xAABvkf7T2t3w0tonza2w(VQAABgE9pDmtFHaKWA_bkMw(PwAABsPgHDuQYCQuw8yXdA(b).documentElement)));
  };

  // Are the references up to date?
  // Are they imported in the dependency sort order?
  // reference ScriptCoreLib - _5Ab28nwLIEWdGNMb6EqeCw
  _4OPuXvHExkC1N7_bnlmuJvg.Types = [TLhPJSWU6zKFJ1h10qqt_bQ,Md2jDrN9sT_aDUI0FefDy8Q,ifLjgwE9pDmtFHaKWA_bkMw];
  _4OPuXvHExkC1N7_bnlmuJvg.References = [_5Ab28nwLIEWdGNMb6EqeCw];

  (function()
  {

    if (!(IwAABLN9sT_aDUI0FefDy8Q))
    {
      IwAABLN9sT_aDUI0FefDy8Q = new ctor$CQoABq6j7zueWbRKKKV3Lw(null, 'UgAABrN9sT_aDUI0FefDy8Q');
    }

    HQAABLN9sT_aDUI0FefDy8Q = IwAABLN9sT_aDUI0FefDy8Q;
  }
  )();

