import { useState } from "react";
import "./App.css";
import './components/Note.css'
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Note from './components/Note.jsx'
import NewNote from "./components/NewNote.jsx"

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Note />
      <NewNote />
    </>
  );
}

export default App;
