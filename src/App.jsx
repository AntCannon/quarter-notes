import { useState } from 'react'
import './App.css'
import NewNote from './components/new-note'
import Nav from './components/Nav.jsx'
import Search from './components/Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Search />
      <NewNote />
    </>
  )
}

export default App
