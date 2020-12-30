import React from 'react'
import Taro from '@tarojs/taro'
import { isEmpty } from '@/utils/index'
import ServerImage from '@/utils/server-image/server-image'
import { Block, View } from '@tarojs/components'
import classNames from 'classnames'

import './action-floor.scss'

function ActionFloorItem(props) {
  const { action, className } = props
  if (isEmpty(action)) {
    return <Block />
  }

  const onClick = () => {
	const url = action.linkToUrl
	if(url)
	{	
	  Taro.switchTab({ url })
	}    
  }

  const { title = 'action', brief = 'brief', imageUrl, bgColor } = action
  const rootCls = classNames('action-floor-item', className)
  
  return (
    <View className={rootCls} onClick={onClick} >
      {imageUrl ? (
        <ServerImage className='action-floor-item-image' mode='scaleToFill' src={imageUrl} />
      ) : (
        <View className='action-floor-item-title' style={bgColor}>{title}</View>
      )}
      <View className='action-floor-item-brief'>
        <View className='action-floor-item-brief-txt'> {brief}</View>
      </View>
    </View>
  )
}

ActionFloorItem.defaultProps = {
  action: {},
}

export default ActionFloorItem
