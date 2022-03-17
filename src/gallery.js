import { useState } from 'react'
import Barchart from './components/barchart/barchart'
import Scatterplot from './components/scatterplot/scatterplot'
import Linechart from './components/linechart/linechart'
import Worldmap from './components/worldmap/worldmap'
import './styles/global.css'

const Gallery = () => {
  const [activeplot, setActiveplot] = useState('all')

  return (
    <div className="App">
      <div>
        <button
          className="action"
          id="all"
          onClick={() => setActiveplot('all')}
        >
          Show All
        </button>
        <button
          className="action"
          id="worldmap"
          onClick={() => setActiveplot('worldmap')}
        >
          World Map
        </button>
        <button
          className="action"
          id="linechart"
          onClick={() => setActiveplot('linechart')}
        >
          Line Chart
        </button>
        <button
          className="action"
          id="barchart"
          onClick={() => setActiveplot('barchart')}
        >
          Bar Chart
        </button>
        <button
          className="action"
          id="scatterplot"
          onClick={() => setActiveplot('scatterplot')}
        >
          Scatter Plot
        </button>
      </div>
      {(activeplot === 'worldmap' || activeplot === 'all') && <Worldmap />}
      {(activeplot === 'linechart' || activeplot === 'all') && <Linechart />}
      {(activeplot === 'barchart' || activeplot === 'all') && <Barchart />}
      {(activeplot === 'scatterplot' || activeplot === 'all') && (
        <Scatterplot />
      )}
    </div>
  )
}

export default Gallery
