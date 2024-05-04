import { useState } from "react";
import "./App.css";
import "./components/Note.css";
import "./components/NewNote.css";
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Note from "./components/Note.jsx";
import Notes from "./components/Notes.jsx";
import NewNote from "./components/NewNote.jsx";
import About from "./components/About.jsx"
import { Routes, Route } from "react-router-dom"; // npm i react-router-dom

function App() {
  return (
    <>
      <Nav />
      <Search />
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
