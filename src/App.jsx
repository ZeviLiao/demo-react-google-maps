import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Maps from './components/maps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Maps/>
    </div>
  )
}

export default App
