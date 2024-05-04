import { useState } from "react";
import "./App.css";
import "./components/NewNote.css";
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Notes from './components/Notes.jsx'

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Notes />
    </>
  );
}

export default App;
