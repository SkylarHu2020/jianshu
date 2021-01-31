import axios from 'axios'
import { actionTypes } from '../store'

const updateLogin = (login) => ({
  type: actionTypes.UPDATE_LOGIN,
  login
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account +'&password=' + password).then(res => {
      if (res.data && res.data.data) {
        dispatch(updateLogin(true))
      }
    })
  }
}

export const logout = () => ({
  type: actionTypes.LOG_OUT,
  value: false
})