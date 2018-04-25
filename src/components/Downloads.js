import React, { Component } from 'react'

import staticProps from 'static-props'
import { extent as d3ArrayExtent } from 'd3-array'
import { scaleTime as d3ScaleTime } from 'd3-scale'
import { line as d3Line } from 'd3-shape'

export default class Downloads extends Component {
  componentDidMount () {
    this.props.fetchStats()
  }

  render () {
    const {
      color,
      downloads,
      selectX,
      selectY,
      yScale,
      width
    } = this.props

    const xScale = d3ScaleTime()
      .domain(d3ArrayExtent(downloads, selectX))
      .range([0, width])

    const selectScaledX = d => xScale(selectX(d))
    const selectScaledY = d => yScale(selectY(d))

    const sparkLine = d3Line()
      .x(selectScaledX)
      .y(selectScaledY)

    const linePath = sparkLine(downloads)

    return (
      <path
        d={linePath}
        fill='transparent'
        stroke={color}
      />
    )
  }
}

staticProps(Downloads)({
  defaultProps: {
    fetchStats: Function.prototype,
    selectX: d => new Date(d.day)
  }
})
