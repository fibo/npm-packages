/**
 * Render downloads for a single package.
 *
 * @flow
 */

import React from 'react'

type Props = {
  pkg: Package
}

export default class Chart extends React.Component<Props> {
  render () {
    const {
      pkg
    } = this.props

    return (
      <div>{pkg.name}</div>
    )
  }
}
