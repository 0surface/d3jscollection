import { geoEqualEarth, geoPath } from 'd3'

const projection = geoEqualEarth()
const path = geoPath(projection)

export const Marks = ({ data: { land, interiors } }) => (
  <g className="mapmarks">
    <path className="sphere" d={path({ type: 'Sphere' })} />
    {land.features.map((feature) => (
      <path className="land" key={Math.random(0, 10000000)} d={path(feature)} />
    ))}
    {
      <path
        className="interiors"
        key={Math.random(0, 10000000)}
        d={path(interiors)}
      />
    }
  </g>
)
