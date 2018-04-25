import React, { Component } from 'react'

import staticProps from 'static-props'
import { extent as d3ArrayExtent } from 'd3-array'
import {
  scaleLinear as d3ScaleLinear,
  scaleTime as d3ScaleTime
} from 'd3-scale'
import { line as d3Line } from 'd3-shape'

export default class Downloads extends Component {
  render () {
    const {
      height,
      stats,
      selectX,
      selectY,
      width
    } = this.props

    const { downloads } = stats
    console.log(downloads)

    const xScale = d3ScaleTime()
      .domain(d3ArrayExtent(downloads, selectX))
      .range([0, width])

    const yScale = d3ScaleLinear()
      .domain(d3ArrayExtent(downloads, selectY))
      .range([height, 0])

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
        stroke='seagreen'
      />
    )
  }
}

staticProps(Downloads)({
  defaultProps: {
    selectX: d => new Date(d.day),
    selectY: d => d.downloads
  }
})
