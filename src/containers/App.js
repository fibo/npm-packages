import { connect } from 'react-redux'

import Root from '../components/Root'

import {
  fetchStatsIfNeeded
} from '../ducks/packs'

const mapStateToProps = ({ packs }, ownProps) => {
  const allDownloads = packs.reduce((all, { downloads }) => all.concat(downloads), [])

  return Object.assign({ packs, allDownloads }, ownProps)
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStats: (name) => () => dispatch(fetchStatsIfNeeded(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
