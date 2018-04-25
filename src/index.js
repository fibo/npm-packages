import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

const root = document.createElement('main')
document.body.appendChild(root)
const { width } = root.getBoundingClientRect()

render(
  <Provider store={store}>
    <App initialWidth={width} />
  </Provider>,
  root
)
