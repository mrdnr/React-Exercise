import Hello  from "./components/Hello";
import './App.css'

function App() {
  const hello = "Hello World!"
  return (
    <div className='main'>
      <h1>{hello}</h1>
      <Hello/>
      <Hello/>
    </div>
  )
}

export default App 
