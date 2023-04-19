import { Fragment, useEffect, useState } from 'react'
import CooSVG from '../coo-svg'
import send from './assets/send.svg'
import vs from './assets/react.svg'
import rect from './assets/rect.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <CooSVG src={send} animation='stroke_animation' width='120px' strokeWidth='15' />
      <CooSVG src={vs} animation='stroke_animation' width='100px' />
      <CooSVG src={rect} animation='stroke_animation' width='100px' />
    </div>
  )
}

export default App
