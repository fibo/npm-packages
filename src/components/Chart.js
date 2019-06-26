// Credits: code stolen from https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274

// TODO: Try to implement animations, see
// https://bl.ocks.org/mbostock/1256572
// http://bl.ocks.org/herrstucki/9205257
import React, { Component } from 'react'

import { extent as d3ArrayExtent } from 'd3-array'
import { scaleLinear as d3ScaleLinear } from 'd3-scale'

import Downloads from './Downloads'

export default class Chart extends Component {
  static defaultProps = {
    fetchStats: Function.prototype,
    height: 400,
    selectY: d => d.downloads
  }

  render () {
    const {
      allDownloads,
      fetchStats,
      height,
      packs,
      selectY,
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
          {packs.map(({ color, downloads, name }, i) => (
            <Downloads key={i}
              color={color}
              downloads={downloads}
              fetchStats={fetchStats(name)}
              height={height}
              name={name}
              selectY={selectY}
              yScale={yScale}
              width={width}
            />
          ))}
        </g>
      </svg>
    )
  }
}
