// Credits: code stolen from https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274

import React, { Component } from 'react'

import { extent as d3ArrayExtent } from 'd3-array'
import { scaleLinear as d3ScaleLinear } from 'd3-scale'
import staticProps from 'static-props'

import Downloads from './Downloads'

export default class Chart extends Component {
  render () {
    const {
      allDownloads,
      height,
      packs,
      selectY,
      stats,
      width
    } = this.props

    const yScale = d3ScaleLinear()
      .domain(d3ArrayExtent(allDownloads, selectY))
      .range([height, 0])

    return (
      <svg
        height={height}
        width={width}
      >
        <g>
          {stats.map((stats, i) => (
            <Downloads
              key={i}
              color={packs[i].color}
              height={height}
              selectY={selectY}
              stats={stats}
              yScale={yScale}
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
    height: 400,
    selectY: d => d.downloads
  }
})
