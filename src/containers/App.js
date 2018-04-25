import { connect } from 'react-redux'

import Root from '../components/Root'

const mapStateToProps = (state, ownProps) => (
  Object.assign(state, ownProps)
)

export default connect(mapStateToProps)(Root)
