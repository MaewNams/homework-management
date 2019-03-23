import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {RouteProvider} from 'react-router5'
import './index.css'
import {store} from './state/store'
import {router} from './router'
import RootView from './view/Root'
import registerServiceWorker from './registerServiceWorker'

router.start()

ReactDOM.render((
  <Provider store={store}>
    <RouteProvider router={router}>
      <RootView />
    </RouteProvider>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
