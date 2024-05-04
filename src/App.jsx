import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Search from './components/Search.jsx'
import Note from './components/Note.jsx'
import './components/Note.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Search />
      <Note />
      
    </>
  )
}

export default App
