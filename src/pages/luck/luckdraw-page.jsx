import React, { Component, memo, useState, useEffect, useMemo, useRef } from 'react'
import { View } from '@tarojs/components'
import { useSelector } from 'react-redux'
import LuckDraw from '@/utils/LuckDraw'
import { AtTabBar, AtButton } from 'taro-ui'
import './style.scss'

function LuckdrawPage(props) {
  const { id } = props
  const [rewardId, setRewardId] = useState(0)
  const [loading, setLoading] = useState(false)
  
  const prizeList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
	{ id: 9 },
  ];

  // 旋转规则数组
  const rotateDir = [
    { index: 0, next: 1 },
    { index: 1, next: 2 },
    { index: 2, next: 3 },
    { index: 3, next: 4 },
    { index: 4, next: 5 },
    { index: 5, next: 6 },
    { index: 6, next: 7 },
    { index: 7, next: 8 },
	{ index: 8, next: 0 },
  ]
  
  const handleClickDraw = () => {
	  if(loading) return
	  setLoading(true)
	  
	  // 中奖id，请求服务端接口拿到
	  const min = 1
      const max = 9
      //const rand = Math.floor(Math.random()*(max-min+1))+min
	  const rand = Math.floor((Math.random()*max)+min)
	  	  
      // 初始化抽奖, 3代表圈数， 8代表速度，也代表时间片的个数
      const luckDrawFn = new LuckDraw(prizeList, rotateDir, 3, 0,2)
	  
      luckDrawFn.run(
        rand, //中奖id
        (params) => {
          // 停留在当前格子的回调函数
          // 拿到当前 active 状态的 id
		  setRewardId(params.id)
        },
        (params) => {
          // 最终停止的回调函数
          // 最后转盘停止的地方，可以弹出奖励弹框或其他操作
		  setRewardId(params.id)
          setLoading(false)
          console.log(`抽中 ${params.id} `)
        }
      );
  }
  return (
    <View className='index-page'>
	  <View className="container">
	    <View className="list">
		  {prizeList?prizeList.map((item)=>{			  
			  return (<View className={`item ${rewardId == item.id ? 'selected' : ''}`} /*className='item'+{rewardId===item.id?' selected':''}*/>{item.id}</View>)
		    }):''			  
		  }
		</View>
		<View>
		  <AtButton type='primary' className={`${loading ? 'loading' : ''}`} onClick={handleClickDraw.bind(this)}>
             点我
          </AtButton>
		</View>
	  </View>	  
	</View>
  )
}

LuckdrawPage.defaultProps = {
  id: 6, // 中奖id
}

export default LuckdrawPage
