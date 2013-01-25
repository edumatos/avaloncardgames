echo off
rem http://help.adobe.com/en_US/flex/mobileapps/WS19f279b149e7481c-24dc70c812b9cbf7285-8000.html
rem http://forum.starling-framework.org/topic/wrong-wmode-with-adobeair-32-desktop
rem call createapk.bat


set e=X:\jsc.community\avaloncardgames\AvalonCardGames\AvalonCardGames.AIRFreeCell\bin\Release\staging\AvalonCardGames.AIRFreeCell.ApplicationSprite\web
set swf=AvalonCardGames.AIRFreeCell.ApplicationSprite.swf
set apk=air.com.abstractatech.gamification.freecell.apk
set xml=air.com.abstractatech.gamification.freecell.xml

"X:\jsc.internal.svn\keystore\asus\air.com.abstractatech-package.and.sign.bat" %e% %swf% %apk% %xml%
