import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import App from './Containers/AppContainer'
import Post from './components/Post'
import Single from './components/Single'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Post} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>
)
ReactDOM.render(
  router,
  document.getElementById('root')
)
