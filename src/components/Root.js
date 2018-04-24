/**
 * The root component
 *
 * @flow
 */

import React, { Component } from 'react'

import Chart from './Chart'

type Props = {
  stats: Array<PackageStats>
}

export default class Root extends Component<Props> {
  render () {
    const {
      stats
    } = this.props

    return (
      <ul>{stats.map((pkg, i) => (
        <li key={i}>
          <Chart pkg={pkg} />
        </li>
      ))}</ul>
    )
  }
}
