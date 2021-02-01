import React, { useRef } from 'react'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const loginStatus = useSelector(state => state.getIn(['login', 'login']))
  const dispatch = useDispatch()
  const account = useRef()
  const password = useRef()

  const login = () => {
    dispatch(actionCreators.login(account.current.value, password.current.value))
  }

  if (!loginStatus) {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="account" ref={account}/>
          <Input placeholder="password" type="password" ref={password}/>
          <Button onClick={() => login()}>Login</Button>
        </LoginBox>
      </LoginWrapper>
    )
  } else {
    return <Redirect to='/' />
  }
}

export default Login