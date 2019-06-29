import React, {useState} from 'react'
import './App.css'
const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h1>Hello TypeRelectron</h1>
      <p>{`You have clicked the button ${counter} time${
        counter === 1 ? '' : 's'
      }`}</p>
      <button onClick={() => setCounter(counter => counter + 1)}>Click</button>
    </>
  )
}

App.displayName = 'App'
export default App
