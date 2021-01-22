import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import { GlobalStyle } from './style'
import { IconfontGlobalStyle } from './statics/iconfont/iconfont'

ReactDOM.render(
  <>
    <GlobalStyle/>
    <IconfontGlobalStyle/>
    <App />
  </>,
  document.getElementById('root')
);