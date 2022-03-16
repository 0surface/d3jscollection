import { useState } from 'react'
import Barchart from './barchart'
import Scatterplot from './scatterplot'
import Linechart from './linechart'
import './styles/global.css'

const App = () => {
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
      {(activeplot === 'linechart' || activeplot === 'all') && <Linechart />}
      {(activeplot === 'barchart' || activeplot === 'all') && <Barchart />}
      {(activeplot === 'scatterplot' || activeplot === 'all') && (
        <Scatterplot />
      )}
    </div>
  )
}

export default App
