import Loadable from 'react-loadable'
import React from 'react'

const LoadableComponent = Loadable({
  loader: () => import ('./'),
  loading() {
    return <div>loading</div>
  }
})

// 异步组件
export default () => <LoadableComponent />