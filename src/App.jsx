import Hello  from "./components/Hello";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import './App.css'
import AlertClock from "./components/AlertClock";

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
      <Welcome name='John'/>
      <AlertClock/>
    </div>
  )
}

export default App 
