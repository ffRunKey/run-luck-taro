环境与知识准备
下载安装 Taro cli

# 安装taro，首页你得有一个合适的nodejs环境，然后通过yarn安装taro-cli，或者使用npm：npm install -g @tarojs/cli 
$ yarn global add @tarojs/cli

下载 run-taro
git clone https://github.com/ffRunKey/run-luck-taro

编译，启动开发环境
#下载相关的依赖,推荐yarn，当然也可以用npm install
$ yarn
#启动小程序 推荐yarn，当然也可以用npm run dev:weapp
$ yarn dev:weapp
#编译小程序
$ yarn build:weapp

React + DVA + Taro + TaroUI
现已升级到 Taro v3.0.21

使用以下代码移植

九宫格抽奖
https://github.com/GeekYmm/luck-draw

转盘抽奖
https://github.com/givebest/wechat-turntalbe-canvas