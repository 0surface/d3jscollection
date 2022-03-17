import { geoEqualEarth, geoPath } from 'd3'

const projection = geoEqualEarth()
const path = geoPath(projection)

export const Marks = ({ data }) => (
  <g className="mapmarks">
    <path className="sphere" d={path({ type: 'Sphere' })} />
    {data.features.map((feature) => (
      <path
        className="feature"
        key={Math.random(0, 10000000)}
        d={path(feature)}
      />
    ))}
  </g>
)
