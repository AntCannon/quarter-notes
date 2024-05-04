import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Search from './components/Search.jsx'
import Notes from './components/Notes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Search />
      <Notes />
      
    </>
  )
}

export default App
