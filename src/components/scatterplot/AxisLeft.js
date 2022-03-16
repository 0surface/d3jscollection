export const AxisLeft = ({ yScale, innerWidth, tickoffset = 3 }) =>
  yScale.ticks().map((tickValue) => (
    <g
      key={Math.random(0, 100000) + tickValue}
      className="tick"
      transform={`translate(0, ${yScale(tickValue)})`}
    >
      <line x2={innerWidth} />
      <text style={{ textAnchor: 'end' }} x={-tickoffset} dy=".32em">
        {tickValue}
      </text>
    </g>
  ))
