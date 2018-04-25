import { combineReducers } from 'redux'

import packs from './packs'
import timeRange from './timeRange'

export default combineReducers({
  packs,
  timeRange
})
