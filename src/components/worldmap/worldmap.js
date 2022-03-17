import React from 'react'

import { useData } from './useData'
import { Marks } from './Marks'

const jsonUrl = process.env.REACT_APP_WORLDMAP_DATA

const width = 960
const height = 500

const Worldmap = () => {
  const data = useData(jsonUrl)

  if (!data) {
    return <pre>Loading...</pre>
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  )
}
export default Worldmap
