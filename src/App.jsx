import { useState } from 'react'
import './App.css'

function Hi({name}) {
  return <h1> Hi, {name}!</h1>
}

function App() {
  
  return (
    <>
      <Hi/>
    </>
  )
}

export default App
