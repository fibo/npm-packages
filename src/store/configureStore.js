import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import initialState from './initialState'
import reducer from '../ducks'

export default function configureStore (state = initialState) {
  return createStore(
    reducer,
    state,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  )
}
