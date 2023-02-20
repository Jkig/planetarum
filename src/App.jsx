import { useState } from 'react'
import './App.css'

function App() {
  // state
  const [on, setOn] = useState(false)

  function goToPlanets() {
    setOn(prev => !prev)
  }

  // now load planets when this is on, and don't when not..,
  //    don't use it at first, just load all
  return (
    <div className="App">
      <h1>Welcome to Planetarum</h1>
      <button onClick={goToPlanets}>Go to planets!</button>
    </div>
  )
}

export default App
