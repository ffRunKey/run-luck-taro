import Taro from '@tarojs/taro'
import _ from 'lodash'

export function isH5() {
  return Taro.getEnv() === Taro.ENV_TYPE.WEB
}

export function isWeapp() {
  return Taro.getEnv() === Taro.ENV_TYPE.WEAPP
}

export const isEmpty = (value) => {
  if (_.isNumber(value) || _.isBoolean(value)) {
    return false
  }
  if (_.isNil(value)) {
    return true
  }
  if (_.isString(value)) {
    return value.length === 0
  }
  return _.isEmpty(value)
}

export const isNotEmpty = (value) => {
  return !isEmpty(value)
}

export const toBoolean = (value) => {
  if (isEmpty(value)) {
    return false
  }
  if (_.isString(value)) {
    const p = value.toLowerCase().trim()
    if (p === 'true') {
      return true
    }
    if (p === 'false') {
      return false
    }
  }
  return value
}


