import { useState } from 'react'
import './App.css'
import NewNote from './components/new-note'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewNote />
    </>
  )
}

export default App
