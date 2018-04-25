import initialState from '../store/initialState'

const FETCH_PACKAGE_STATS_FAILURE = 'FETCH_PACKAGE_STATS_FAILURE'
const FETCH_PACKAGE_STATS_REQUEST = 'FETCH_PACKAGE_STATS_REQUEST'
const FETCH_PACKAGE_STATS_SUCCESS = 'FETCH_PACKAGE_STATS_SUCCESS'
const TOGGLE_PACKAGE = 'TOGGLE_PACKAGE'

const checkStatus = response => {
  if (response.ok) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function fetchStats (packageName, timeRange) {
  return dispatch => {
    dispatch({ type: FETCH_PACKAGE_STATS_REQUEST })

    fetch(`https://api.npmjs.org/downloads/range/${timeRange}/${packageName}`)
      .then(checkStatus)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_PACKAGE_STATS_SUCCESS,
          downloads: data.downloads,
          packageName
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_PACKAGE_STATS_FAILURE,
          error
        })
      })
  }
}

export function fetchStatsIfNeeded (packageName) {
  return (dispatch, getState) => {
    const state = getState()

    if (shouldFetchStats(state, packageName)) {
      return dispatch(fetchStats(packageName, state.timeRange))
    }
  }
}

function shouldFetchStats ({ packs }, packageName) {
  const { downloads } = packs.find(({ name }) => name === packageName)

  return downloads.length === 0
}

export default function packages (state = initialState.packs, action) {
  switch (action.type) {
    case FETCH_PACKAGE_STATS_FAILURE:
      return state

    case FETCH_PACKAGE_STATS_REQUEST:
      return state

    case FETCH_PACKAGE_STATS_SUCCESS:
      return state.map(pack => {
        if (pack.name === action.packageName) {
          return Object.assign(pack, { downloads: action.downloads })
        } else {
          return pack
        }
      })

    case TOGGLE_PACKAGE:
      return state.map(({ name, selected }) => {
        if (action.name === name) {
          return { name, selected: !selected }
        } else {
          return { name, selected }
        }
      })

    default: return state
  }
}
