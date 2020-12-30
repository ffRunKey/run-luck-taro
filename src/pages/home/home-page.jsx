import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { useSelector } from 'react-redux'
import ActionFloor from '@/components/navigation/action-floor'

function HomePage(props) {
  const actionList = [
    {
      id: 1,
      title: '轮盘抽奖',
      brief: '有惊喜',
      linkToUrl: '/pages/luck/luckyturn-page',
	  bgColor: 'background-color: #FECFBB;background-image: url(//img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png);',
    },
    {
      id: 2,
      title: '九宫格抽奖',
      brief: '省心',
      linkToUrl: '/pages/luck/luckdraw-page',
	  bgColor: 'background-image: linear-gradient(117deg, #C6E0FB 0%, #DDEDFC 50%, #F2F6FF 100%);',
    },
    {
      id: 3,
      title: '每日特价',
      brief: '牛',
      linkToUrl: '',
	  bgColor: 'background-color: #F4F2FF;',
    },
    {
      id: 4,
      title: '会员日',
      brief: '17',
      linkToUrl: '',
	  bgColor: 'background-color: #E9F6FE;',
    },
    {
      id: 5,
      title: '邀新',
      brief: '快',
      linkToUrl: '',
	  bgColor: 'background-color: #FFF6F1;',
    },
	{
      id: 6,
      title: '签到',
      brief: '赏',
      linkToUrl: '',
	  bgColor: 'background-color: #EAF3F0;',
    },
	{
      id: 7,
      title: '积分商城',
      brief: '惠',
      linkToUrl: '',
	  bgColor: 'background-color: #EAEEF1;',
    },
	{
      id: 8,
      title: '优惠卷',
      brief: '新',
      linkToUrl: '',
	  bgColor: 'background-color: #EBF0E9;',
    },
  ]
  return (
    <View className='home-page'>
      <View className='home-page-action-floor'>
	    <ActionFloor actions={actionList} />
	  </View>
    </View>
  )
}

export default HomePage
