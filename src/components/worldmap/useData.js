import { useState, useEffect } from 'react'
import { json } from 'd3'
import { feature } from 'topojson-client'

export const useData = (jsonUrl) => {
  const [data, setData] = useState(null)

  console.log('geojsondata::', data)

  useEffect(() => {
    json(jsonUrl).then((topjsonData) => {
      const { countries } = topjsonData.objects
      setData(feature(topjsonData, countries))
    })
  }, [jsonUrl])

  return data
}
