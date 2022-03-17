import React from 'react'
import { scaleLinear, scaleTime, timeFormat, extent } from 'd3'
import './styles/global.css'
import { useData } from './components/worldmap/useData'
import { AxisBottom } from './components/worldmap/AxisBottom'
import { AxisLeft } from './components/worldmap/AxisLeft'
import { Marks } from './components/worldmap/Marks'

const jsonUrl = process.env.REACT_APP_WORLDMAP_DATA

const width = 960
const height = 500
const margin = { top: 50, right: 30, bottom: 65, left: 90 }
const xAxisLabelOffset = 50
const yAxisLabelOffset = 40

const Worldmap = () => {
  const data = useData(jsonUrl)

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left

  const xValue = (d) => d.timestamp
  const xAxisLabel = 'Time'

  const yValue = (d) => d.temperature
  const yAxisLabel = 'Temperature'

  const xAxisTickFormat = timeFormat('%a')

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice()

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickoffset={7}
        />
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickoffset={7} />
        <text
          className="axis-label"
          textAnchor="middle"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
        >
          {xAxisLabel}
        </text>

        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <Marks
          data={data}
          yScale={yScale}
          xScale={xScale}
          xValue={xValue}
          yValue={yValue}
          toolTipFormat={xAxisTickFormat}
          circleRadius={3}
        />
      </g>
    </svg>
  )
}
export default Worldmap
