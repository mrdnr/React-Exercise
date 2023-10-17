import Hello  from "./components/Hello";
import Message from "./components/Message";
import './App.css'

function App() {
  const hello = "Hello World!"
  return (
    <div className='main'>
      <h1>{hello}</h1>
      <Hello/>
      <Hello/>
      <br/>
      <Message/>
    </div>
  )
}

export default App 
