import { useState } from "react";
import "./App.css";
import './components/Note.css'
import "./components/NewNote.css";
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Note from './components/Note.jsx'
import Notes from './components/Notes.jsx'
import NewNote from "./components/NewNote.jsx"

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Notes />
      <Note />
      <NewNote />
    </>
  );
}

export default App;
