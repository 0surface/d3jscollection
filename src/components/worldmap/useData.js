import { useState, useEffect } from 'react'
import { json } from 'd3'
import { feature, mesh } from 'topojson-client'

export const useData = (jsonUrl) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    json(jsonUrl).then((topology) => {
      const { countries, land } = topology.objects
      setData({
        land: feature(topology, land),
        interiors: mesh(topology, countries, (a, b) => a !== b),
      })
    })
  }, [jsonUrl])

  return data
}
