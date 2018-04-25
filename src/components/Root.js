import React, { Component } from 'react'

import Chart from './Chart'

export default class Root extends Component {
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
