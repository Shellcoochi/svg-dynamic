import { Fragment, useEffect, useState } from 'react'
import CooSVG from '../coo-svg'
import send from './assets/send.svg'
import vs from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <CooSVG src={send} animation='animation-path-drawing' width='120px' strokeWidth='15' />
      <CooSVG src={vs} animation='animation-path-drawing' width='100px' />
    </div>
  )
}

export default App
