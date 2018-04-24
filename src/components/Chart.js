/**
 * Render downloads for a single package.
 *
 * @flow
 */

import React, { Component } from 'react'

import { extent as d3ArrayExtent } from 'd3-array'
import {
  scaleLinear as d3ScaleLinear,
  scaleTime as d3ScaleTime,
} from 'd3-scale'
import { line as d3Line } from 'd3-shape'

type Props = {
  height: number,
  pkg: PackageStats,
  selectX: ({ day: string }) => Date,
  selectY: ({ downloads: number }) => number,
  width: number
}

export default class Chart extends Component<Props> {
  render () {
    const {
      height,
      pkg,
      selectX,
      selectY,
      width
    } = this.props

    const { downloads } = pkg

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
      <svg
        height={height}
        width={width}
      >
        <g>
          <path d={linePath} />
        </g>
      </svg>
    )
  }
}

Chart.defaultProps = {
  height: 40,
  selectX: (d: { day: string }) => new Date(d.day),
  selectY: (d: { downloads: number }) => d.downloads,
  width: 400
}
