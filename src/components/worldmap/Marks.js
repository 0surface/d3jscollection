import { geoEqualEarth, geoPath } from 'd3'

const projection = geoEqualEarth()
const path = geoPath(projection)

export const Marks = ({ data }) => (
  <g className="marks" key={data.features.indexOf}>
    {data.features.map((feature) => (
      <path d={path(feature)} />
    ))}
  </g>
)
