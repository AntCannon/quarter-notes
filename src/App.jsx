import { useState } from 'react'
import './App.css'
import "./components/NewNote.css"
import Nav from './components/Nav.jsx'
import Search from './components/Search.jsx'
import NewNote from './components/new-note.jsx'

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
