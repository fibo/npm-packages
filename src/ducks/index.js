import { combineReducers } from 'redux'

import stats from './stats'
import packs from './packs'

export default combineReducers({
  packs,
  stats
})
