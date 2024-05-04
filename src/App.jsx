import { useState } from "react";
import "./App.css";
import "./components/NewNote.css";
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";

function App() {
  return (
    <>
      <Nav />
      <Search />
    </>
  );
}

export default App;
