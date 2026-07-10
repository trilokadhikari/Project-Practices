import { useState } from 'react'
import Watch from './components/Watch.jsx'
import Stopwatch from './components/Stopwatch.jsx'
import Timer from './components/Timer.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen flex-col items-center'>
        <Watch/>
        <Stopwatch/>
        <Timer/>
      </div>
    </>
  )
}

export default App
