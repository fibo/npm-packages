import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore({
  stats: [{
    name: 'algebra',
    downloads: [
      { day: '2018-04-01', downloads: 12 },
      { day: '2018-04-02', downloads: 21 },
      { day: '2018-04-03', downloads: 40 },
      { day: '2018-04-04', downloads: 80 }
    ]
  }]
})

const root = document.createElement('main')
document.body.appendChild(root)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
