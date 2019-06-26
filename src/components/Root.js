import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Chart from './Chart'

export default class Root extends Component {
  static defaultProps = {
    fetchStats: Function.prototype
  }

  constructor (props) {
    super(props)

    this.state = {
      width: props.initialWidth
    }
  }

  componentDidMount () {
    const container = ReactDOM.findDOMNode(this).parentNode

    window.addEventListener('resize', this.onWindowResize(container))
  }

  onWindowResize = (container) => {
    return () => {
      const { width } = container.getBoundingClientRect()
      this.setState({ width })
    }
  }

  render () {
    const {
      allDownloads,
      fetchStats,
      packs,
      stats
    } = this.props

    const {
      width
    } = this.state

    return (
      <Chart
        allDownloads={allDownloads}
        fetchStats={fetchStats}
        packs={packs}
        stats={stats}
        width={width}
      />
    )
  }
}
