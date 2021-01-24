import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
})

const headerReducer = (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // 这里重新新建了一个对象
    // immutbale对象的set方法，会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focused', true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  return state
}

export default headerReducer