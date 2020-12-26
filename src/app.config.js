export default {
  pages: [
    'pages/home/home-page',
	'pages/luck/luckdraw-page',
    'pages/luck/luckyturn-page',
  ],
  subPackages: [
    {
      root: 'genericpage/',
      name: 'genericpage',
      pages: ['generic-page'],
    },
  ],

  // permission: {
  //   'scope.userLocation': {
  //     desc: '你的位置信息将用于小程序位置接口的效果展示',
  //   },
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#28aaff',
    navigationBarTitleText: 'run-luck',
    navigationBarTextStyle: 'white',
    enablePullDownRefresh: true,
  },
  tabBar: {
    color: '#666',
    selectedColor: '#28aaff',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/home-page',
        iconPath: './assets/icon/icon_home_n@2x.png',
        selectedIconPath: './assets/icon/icon_home_s@2x.png',
        text: '首页',
      },
	  {
        pagePath: 'pages/luck/luckyturn-page',
        iconPath: './assets/icon/icon_home_n@2x.png',
        selectedIconPath: './assets/icon/icon_home_s@2x.png',
        text: '轮盘抽奖',
      },
	  {
        pagePath: 'pages/luck/luckdraw-page',
        iconPath: './assets/icon/icon_home_n@2x.png',
        selectedIconPath: './assets/icon/icon_home_s@2x.png',
        text: '九宫格',
      },
    ],
  },
}
