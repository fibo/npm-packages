// Credits: code stolen from https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274

import React, { Component } from 'react'

import staticProps from 'static-props'

import Downloads from './Downloads'

export default class Chart extends Component {
  render () {
    const {
      height,
      stats,
      width
    } = this.props

    return (
      <svg
        height={height}
        width={width}
      >
        <g>
          {stats.map((stats, i) => (
            <Downloads
              key={i}
              height={height}
              stats={stats}
              width={width}
            />
          ))}
        </g>
      </svg>
    )
  }
}

staticProps(Chart)({
  defaultProps: {
    height: 400
  }
})
