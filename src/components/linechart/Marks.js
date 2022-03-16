import { line } from 'd3'
export const Marks = ({
  data,
  yScale,
  xScale,
  xValue,
  yValue,
  toolTipFormat,
  circleRadius = 10,
}) => (
  <>
    <path
      fill="none"
      stroke="black"
      d={line()
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))(data)}
    />
    {data.map((d) => (
      <circle
        className="mark"
        key={Math.random(0, 100000)}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{toolTipFormat(xValue(d))}</title>
      </circle>
    ))}
  </>
)
