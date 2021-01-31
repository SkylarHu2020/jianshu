import { fromJS } from 'immutable'
import { actionTypes } from '../store'

const defaultState = fromJS({
  login: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOGIN:
      return state.set('login', action.login)
    case actionTypes.LOG_OUT:
      return state.set('login', action.value)
    default:
      return state
  }
}

export default reducer;