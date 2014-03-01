using ScriptCoreLib;
using ScriptCoreLib.Delegates;
using ScriptCoreLib.Extensions;
using System;
using System.Linq;
using System.Xml.Linq;

namespace AvalonCardGames.AIRSpider
{
    /// <summary>
    /// Methods defined in this type can be used from JavaScript. The method calls will seamlessly be proxied to the server.
    /// </summary>
    public sealed class ApplicationWebService
    {

        //-compile:
        //    [javac] Compiling 640 source files to V:\bin\classes
        //    [javac] V:\src\AvalonCardGames\AIRSpider\ApplicationWebServiceActivity___c__DisplayClassa.java:74: error: method CreateServer in class ApplicationWebServiceActivity cannot be applied to given types;
        //    [javac]         this.server = ApplicationWebServiceActivity.CreateServer(this.__4__this, this.ipa, this.port, ApplicationWebServiceActivity___c__DisplayClassa.CS___9__CachedAnonymousMethodDelegatec);
        //    [javac]                                                    ^
        //    [javac]   required: ContextWrapper,__IPAddress,int,__Action_1<String>,__Action
        //    [javac]   found: ApplicationWebServiceActivity,__IPAddress,int,__Action_1<String>
        //    [javac]   reason: actual and formal argument lists differ in length
        //    [javac] V:\src\ScriptCoreLib\Ultra\WebService\InternalGlobalExtensions___c__DisplayClassc.java:67: error: method WriteTo in class WebServiceScriptApplication cannot be applied to given types;
        //    [javac]         application1.WriteTo(this.Write);
        //    [javac]                     ^
        //    [javac]   required: StringAction,boolean
        //    [javac]   found: StringAction
        //    [javac]   reason: actual and formal argument lists differ in length
        //    [javac] V:\src\ScriptCoreLib\Ultra\WebService\InternalGlobalExtensions___c__DisplayClassc.java:156: error: cannot find symbol
        //    [javac]         num2 = __Enumerable.<InternalFileInfo>Sum(__SZArrayEnumerator_1.<InternalFileInfo>Of(infoArray1), InternalGlobalExtensions___c__DisplayClassc.CS___9__CachedAnonymousMethodDelegatee);
        //    [javac]                            ^
        //    [javac]   symbol:   method <InternalFileInfo>Sum(__SZArrayEnumerator_1<InternalFileInfo>,__Func_2<InternalFileInfo,Integer>)
        //    [javac]   location: class __Enumerable
        //    [javac] Note: Some input files use or override a deprecated API.
        //    [javac] Note: Recompile with -Xlint:deprecation for details.
        //    [javac] Note: Some input files use unchecked or unsafe operations.
        //    [javac] Note: Recompile with -Xlint:unchecked for details.
        //    [javac] 3 errors

        /// <summary>
        /// This Method is a javascript callable method.
        /// </summary>
        /// <param name="e">A parameter from javascript.</param>
        /// <param name="y">A callback to javascript.</param>
        public void WebMethod2(string e, Action<string> y)
        {
            // Send it back to the caller.
            y(e);
        }

    }
}
