import React from 'react'
export const Marks = ({
  data,
  yScale,
  xScale,
  xValue,
  yValue,
  toolTipFormat,
  circleRadius = 10,
}) =>
  data.map((d) => (
    <circle
      className="mark"
      key={Math.random(0, 100000)}
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
    >
      <title>{toolTipFormat(xValue(d))}</title>
    </circle>
  ))
