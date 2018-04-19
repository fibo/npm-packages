/**
 * The root component
 *
 * @flow
 */

import React from 'react'

import Chart from './Chart'

type Props = {
  packages: Array<Package>
}

export default class Root extends React.Component<Props> {
  render () {
    const {
      packages
    } = this.props

    return (
      <ul>{packages.map((pkg, i) => (
        <li>
          <Chart key={i} pkg={pkg} />
        </li>
      ))}</ul>
    )
  }
}
