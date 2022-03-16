import React from 'react'
import { scaleBand, scaleLinear, max, format } from 'd3'
import './styles/global.css'
import { useData } from './components/barchart/useData'
import { AxisBottom } from './components/barchart/AxisBottom'
import { AxisLeft } from './components/barchart/AxisLeft'
import { Marks } from './components/barchart/Marks'

const csvUrl = process.env.REACT_APP_BARCHART_DATA

const width = 960
const height = 500
const margin = { top: 50, right: 30, bottom: 65, left: 220 }
const xAxisLabelOffset = 50

const Barchart = () => {
  const data = useData(csvUrl)

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left

  const yValue = (d) => d.Country
  const xValue = (d) => d.Population

  const siFormat = format('.2s')
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B')

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.1)

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])

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
export default Barchart
