import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [things, setThings] = useState(["Thing1","Thing2"])
  const elementThing = things.map(thing => <p key = {thing}>{thing}</p>)

  function addThings(){
    const elementText = `Thing ${things.length + 1}`
    setThings(prevState => [...prevState, elementText])
  }
  return (
    <div className="App">
       <button onClick ={addThings}>Add Things</button>
       {elementThing}
    </div>
  )
}

export default App
