import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Filters from "./components/Filters.jsx";
import Notes from './components/Notes.jsx'
import Note from './components/Note.jsx'
import NewNote from "./components/NewNote.jsx"

function App() {
  return (
    <>
      <Nav />
      <Filters />
      <Notes />
      <Note />
      <NewNote />
    </>
  );
}

export default App;
