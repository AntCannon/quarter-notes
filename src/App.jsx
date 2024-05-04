import { useState } from 'react'
import './App.css'
import NewNote from './components/new-note'
import Nav from './components/Nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <NewNote />
    </>
  )
}

export default App
