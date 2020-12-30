import React from 'react'
import Taro from '@tarojs/taro'
import Luckyturntable from '@/components/canvas/luckyturntable/index'
import { View } from '@tarojs/components'
import './style.scss'
import { AtTabBar, AtButton } from 'taro-ui'
import classNames from 'classnames'

function LuckyturnPage() {  
 
  const awardsList = [
    {id:1, award:'自己喝', comment: '电影要去影院看，飙歌要去包间喊！', commentIcon: 'sound'},
    {id:2, award:'亲一下', comment: '垂涎直下三千尺，享用美食在眼前。', commentIcon: 'heart'},
    {id:3, award:'喝二杯', comment: '放空一段自己自由自我的午后，静静品味岁月静好。', commentIcon: 'user'},
    {id:4, award:'大家唱', comment: '终于为心心念念的消费找到一个充分必要的理由！', commentIcon: 'shopping-cart'},
    {id:5, award:'对家喝', comment: '背上包，说走就走。多久没有出游玩一趟了？', commentIcon: 'image'},
    {id:6, award:'PASS', comment: '朝某人振臂一呼，小小激励速速！且行且珍惜.'},
	{id:7, award:'左边喝', comment: '左边大，右边小，右边跳，左边跑，右边喝血，左边吃草.'},
	{id:8, award:'对家唱', comment: '搅局扰乱思路，疯狂打万迷惑小哥，原来老狐狸一直在潜伏.'}
  ];
  
  return (
    <View className='index-page'>
	  <View className="container"  style="padding-top:50px;">
	    <Luckyturntable awards={awardsList} buttonTitle='小鼓励' />
	  </View>	  
	</View>
  )
}

export default LuckyturnPage
