import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // npm i react-router-dom
import "./App.css";
import Nav from "./components/Nav.jsx";
import Filters from "./components/Filters.jsx";
import Notes from './components/Notes.jsx'
import Note from './components/Note.jsx'
import NewNote from "./components/NewNote.jsx"
import About from "./components/About.jsx";


function App() {
  return (
    <>
      <Nav />
      <Filters />
      <Routes>
        <Route path="/" element={<Notes />}/>
        <Route path="/note/:id" element={<Note />}/>
        <Route path="/new-note" element={<NewNote />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
