import React from 'react'
import { scaleLinear, extent, format, min, max } from 'd3'
import './styles/global.css'
import { useData } from './components/scatterplot/useData'
import { AxisBottom } from './components/scatterplot/AxisBottom'
import { AxisLeft } from './components/scatterplot/AxisLeft'
import { Marks } from './components/scatterplot/Marks'

const csvUrl = process.env.REACT_APP_SCATTERPLOT_DATA

const width = 960
const height = 500
const margin = { top: 50, right: 30, bottom: 65, left: 220 }
const xAxisLabelOffset = 50

const Scatterplot = () => {
  const data = useData(csvUrl)

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left

  const xValue = (d) => d.sepal_length
  const yValue = (d) => d.sepal_width

  const siFormat = format('.2s')
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B')

  const xScale = scaleLinear()
    .domain([min(data, xValue), max(data, xValue)])
    .range([0, innerWidth])

  const yScale = scaleLinear()
    .domain([min(data, yValue), max(data, yValue)])
    .range([0, innerHeight])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className="axis-label"
          textAnchor="middle"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
        >
          Population
        </text>
        <Marks
          data={data}
          yScale={yScale}
          xScale={xScale}
          xValue={xValue}
          yValue={yValue}
          toolTipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  )
}
export default Scatterplot
