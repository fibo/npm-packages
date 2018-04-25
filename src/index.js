import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'

import randomColor from 'randomcolor'

const store = configureStore({
  stats: [
    {
      name: 'algebra',
      downloads: [
        { day: '2018-04-01', downloads: 12 },
        { day: '2018-04-02', downloads: 21 },
        { day: '2018-04-03', downloads: 40 },
        { day: '2018-04-04', downloads: 80 }
      ]
    },
    {
      name: 'strict-mode',
      downloads: [
        { day: '2018-04-01', downloads: 112 },
        { day: '2018-04-02', downloads: 121 },
        { day: '2018-04-03', downloads: 120 },
        { day: '2018-04-04', downloads: 280 }
      ]
    }
  ],
  packs: [
    {
      name: 'algebra',
      color: randomColor(),
      selected: true
    },
    {
      name: 'strict-mode',
      color: randomColor(),
      selected: true
    }
  ]
})

const root = document.createElement('main')
document.body.appendChild(root)
const { width } = root.getBoundingClientRect()

render(
  <Provider store={store}>
    <App initialWidth={width} />
  </Provider>,
  root
)
