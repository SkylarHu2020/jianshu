import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Write = () => {
  const loginStatus = useSelector(state => state.getIn(['login', 'login']))
  if (loginStatus) {
    return (
      <div>写文章</div>
    )
  } else {
    return <Redirect to='/login' />
  }
}

export default Write