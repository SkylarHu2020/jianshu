import * as actionTypes from './actionTypes'

const defaultState = {
  focused: false
}

const headerReducer = (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state
}

export default headerReducer