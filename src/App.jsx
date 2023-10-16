import { useState } from 'react'
import './App.css'

function Hi({name}) {
  return <h1> Hi, {name}!</h1>
}

function Sum({a, b}) {
  const sum = a + b
  return <h2>Sum: {sum}</h2>
}

function App() {
  
  return (
    <>
      <Hi name="Emre"/>
      <Sum a={10} b={7}/>
    </>
  )
}

export default App
