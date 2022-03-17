import React from 'react'

import './styles/global.css'
import { useData } from './components/worldmap/useData'

import { Marks } from './components/worldmap/Marks'

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
