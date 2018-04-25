import { connect } from 'react-redux'

import Root from '../components/Root'

const mapStateToProps = (state, ownProps) => {
  const allDownloads = state.stats.reduce((all, { downloads }) => all.concat(downloads), [])

  return Object.assign(state, ownProps, { allDownloads })
}

export default connect(mapStateToProps)(Root)
