import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)
  //let counter = 15;
  const addValue= ()=>{
    //counter = counter+1; 
    setcounter(counter+1)
    console.log('clicked', counter)
    if(counter==20){
      setcounter(0)

    }
  }
  const removeValue= ()=>{
    setcounter(counter-1)
    if(counter<0){
      setcounter(0)
    }
  }
  
  return (
    <>
      <h1>Naveen Raj Goel</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App;
