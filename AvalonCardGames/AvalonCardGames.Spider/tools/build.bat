@echo off
set TargetFileName=%2
set ConfigurationName=%3

if %ConfigurationName%==Debug (
    pushd ..\bin\%ConfigurationName%
    call c:\util\jsc\bin\jsc.exe %TargetFileName%  -ExtractAssets
    popd
    goto :eof
)

:: Dll name
@call :jsc %1

if '%ERRORLEVEL%' == '-1' (
    echo jsc failed.
    goto :eof
)
:: Namespace name, type name
@call :mxmlc AvalonCardGames/Spider/ActionScript SpiderFlash

goto :eof

:jsc
pushd ..\bin\%ConfigurationName%

::call c:\util\jsc\bin\jsc.exe %TargetFileName%  -as -js
call c:\util\jsc\bin\jsc.exe %TargetFileName%  -as -js


popd
goto :eof

:mxmlc
@echo off
pushd ..\bin\%ConfigurationName%\web



call :build %1 %2


popd
goto :eof

:build
echo - %2
:: http://www.adobe.com/products/flex/sdk/
:: -compiler.verbose-stacktraces 
:: call C:\util\flex2\bin\mxmlc.exe -keep-as3-metadata -incremental=true -output=%2.swf -strict -sp=. %1/%2.as
call C:\util\flex_sdk_4.1.0.16076\bin\mxmlc.exe -static-link-runtime-shared-libraries=true -debug -keep-as3-metadata -incremental=true -output=%2.swf -strict -sp=. %1/%2.as
goto :eof