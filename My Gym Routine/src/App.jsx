import { useState } from 'react'
import './App.css'
import Select from './components/Select'
import BackImg from './assets/BackgroundImg.jpg'
import DayProvider from './provider/DayProvider'
import Display from './Display'

function App() {


  return (
    <DayProvider>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BackImg})` }}
      >
        <Select />
        <Display/>
      </div>
    </DayProvider>
  )
}

export default App
