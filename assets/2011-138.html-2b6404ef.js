import{_ as e,p as t,q as s,R as n}from"./framework-5866ffd3.js";const c={},a=n("pre",{name:"code",class:"vb"},`@echo off 
netsh interface ip set address name="本地连接" static 192.168.1.55 255.255.255.0 192.168.1.1 auto >nul 
netsh interface ip add dns "本地连接" 202.98.96.68 index=1 >nul 
netsh interface ip add dns "本地连接" 61.139.2.69 index=2 >nul 
netsh interface ip set address name="本地连接2" static 192.168.1.55 255.255.255.0 192.168.1.1 auto >nul 
netsh interface ip add dns "本地连接2" 202.98.96.68 index=1 >nul 
netsh interface ip add dns "本地连接2" 61.139.2.69 index=2 >nul 
netsh interface ip set address name="本地连接3" static 192.168.1.55 255.255.255.0 192.168.1.1 auto >nul 
netsh interface ip add dns "本地连接3" 202.98.96.68 index=1 >nul 
netsh interface ip add dns "本地连接3" 61.139.2.69 index=2 >nul 
echo IP地址已经设定修改完毕，按任意键关闭此窗口 
pause >nul 
`,-1),o=n("pre",{name:"code",class:"vb"},`互助改 ip地址
@echo off 
cls 
color 0A 
echo IP地址更改小工具 
set IP=192.168.1.1 
set MASK=255.255.255.0 
set GATEWAY=192.168.1.0 
set NAME="本地连接" 


echo. 
echo 自动更改IP 请按 1 
echo. 
echo 手动更改IP 请按 2 

set /p KEY= [您的选择是：] 
if %KEY% == 1 goto ONE 
if %KEY% == 2 goto TWO 

:TWO 
ECHO 您选择了手工修改设置。 
ECHO. 
echo 默认IP地址是%IP%，回车输入默认地址 
set /p IP= [请输入IP地址:] 
echo. 
echo 默认MASK是%MASK%，回车输入默认值 
set /p MASK= [请输入 子网掩码 地址:] 
echo. 
echo 默认GATEWAY是%GATEWAY%，回车输入默认值 
set /p GATEWAY= [请输入 网关 地址:] 
echo. 

:ONE 
echo 正在自动更改IP...... 
netsh interface ip set address %NAME% static %IP% %MASK% %GATEWAY% 
echo IP地址/子网掩码/网关设置完成 
pause 
`,-1),d=[a,o];function i(h,r){return t(),s("div",null,d)}const f=e(c,[["render",i],["__file","2011-138.html.vue"]]);export{f as default};
