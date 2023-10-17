import Hello  from "./components/Hello";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
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
      <Welcome name={<strong>Mario</strong>}/>
    </div>
  )
}

export default App 
