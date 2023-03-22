import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { HashRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'
import './assets/css/index.less' //全局样式
import 'normalize.css' //官方样式重置
import './assets/css/reset.less' //个人样式重置

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
)
