import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore({
  packages: [{ name: 'algebra' }]
})

const root = document.createElement('main')
document.body.appendChild(root)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
