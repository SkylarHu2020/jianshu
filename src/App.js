import React from 'react'
import Header from './common/header'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store/index'
import { Provider } from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/write' exact component={Write}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;