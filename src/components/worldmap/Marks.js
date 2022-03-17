import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3'

const projection = geoNaturalEarth1()
const path = geoPath(projection)
const graticule = geoGraticule()

const randKey = () => Math.random(0, 10000)

export const Marks = ({ data: { land, interiors } }) => (
  <g className="mapmarks">
    {/* Creates the sphere */}
    <path className="sphere" d={path({ type: 'Sphere' })} />

    {/* latitude and longtiude lines very 10 degrees */}
    <path className="graticules" key={randKey} d={path(graticule())} />

    {/* projects the land features */}
    {land.features.map((feature) => (
      <path className="land" key={randKey} d={path(feature)} />
    ))}

    {/* Shades the interior country borders, not ocean/sea adjacent */}
    <path className="interiors" key={randKey} d={path(interiors)} />
  </g>
)
