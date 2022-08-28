import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pharse from './components/Pharse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
     <Pharse/>
    </div>
  )
}

export default App
