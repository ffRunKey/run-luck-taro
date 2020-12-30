import React from 'react'
import { Block, View } from '@tarojs/components'
import ActionFloorItem from './action-floor-item'

import './action-floor.scss'

function ActionFloor({ actions = [] }) {
  if (actions.length === 0) {
    return <Block />
  }

  let actionList = actions  
  
  const listLength = actionList.length
  /*
  if (actions.length >= 4) {
    const t1 = actions[4]
    const t2 = actions[5]
    actionList = [t1, t2].concat(actions)
  }
  */
  const action1 = actionList[0]
  const action2 = actionList[1]
  const action3 = actionList[2]
  const action4 = actionList[3]
  const action5 = actionList[4]
  const action6 = actionList[5]
  const action7 = actionList[6]
  const action8 = actionList[7]

  return (
    <View className='action-floor'>
	  {listLength<=6?(
		<View>
	      {action3 && (
			<View className='action-floor-first'>
			  <View className='action-floor-first-left'>
				<View className='action-floor-item-container'>
				  <ActionFloorItem action={action1} />
				</View>
			  </View>

			  <View className='action-floor-first-right'>
				<View className='action-floor-first-right-top'>
				  <View className='action-floor-item-container'>
					<ActionFloorItem action={action2} />
				  </View>
				</View>
				<View className='action-floor-first-right-bottom'>
				  <View className='action-floor-item-container'>
					<ActionFloorItem action={action3} />
				  </View>
				</View>
			  </View>
			</View>
		  )}
		  {action1 && (
			<View className='action-floor-second'>
			  <View className='action-floor-second-left'>
				<View className='action-floor-item-container'>
				  <ActionFloorItem className='blue' action={action4} />
				</View>
			  </View>

			  {action2 && (
				<View className='action-floor-second-right'>
				  <View className='action-floor-second-right-r1'>
					<View className='action-floor-item-container'>
					  <ActionFloorItem className='blue' action={action5} />
					</View>
				  </View>
				  <View className='action-floor-second-right-r2'>
					<View className='action-floor-item-container'>
					  <ActionFloorItem className='blue' action={action6} />
					</View>
				  </View>
				</View>
			  )}
			</View>
		  )}</View>
	    ):(
		<View>
	      {action3 && (
			<View className='action-floor-four'>
			  <View className='action-floor-four-left'>
				<View className='action-floor-item-container'>
				  <ActionFloorItem action={action1} />
				</View>
			  </View>

			  <View className='action-floor-four-right'>
				<View className='action-floor-item-container'>
				  <ActionFloorItem action={action2} />
				</View>				
			  </View>
			</View>
		  )}
		  {action1 && (
			<View className='action-floor-three'>
			  <View className='action-floor-three-left'>
				<View className='action-floor-three-left-r1'>
				  <View className='action-floor-item-container'>
					  <ActionFloorItem className='blue' action={action3} />
				  </View>
				</View>
				<View className='action-floor-three-left-r2'>
				  <View className='action-floor-item-container'>
					  <ActionFloorItem className='blue' action={action4} />
				  </View>
				</View>
			  </View>
			  {action2 && (
			  <View className='action-floor-three-right'>
				<View className='action-floor-three-right-top'>
				  <View className='action-floor-three-right-top-r1'>
					<View className='action-floor-item-container'>
					  <ActionFloorItem className='blue' action={action5} />
					</View>
				  </View>
				  <View className='action-floor-three-right-top-r2'>
					<View className='action-floor-item-container'>
					  <ActionFloorItem className='blue' action={action6} />
					</View>
				  </View>
				</View>
				<View className='action-floor-three-right-bottom'>
				  <View className='action-floor-three-right-bottom-r1'>
					<View className='action-floor-item-container'>
					  <ActionFloorItem className='blue' action={action7} />
					</View>
				  </View>
				  <View className='action-floor-three-right-bottom-r2'>
					<View className='action-floor-item-container'>
					  <ActionFloorItem className='blue' action={action8} />
					</View>
				  </View>
				</View>
			  </View>
			  )}
			</View>
		  )}</View>
		)	  
	  }
      
    </View>
  )
}

export default ActionFloor
