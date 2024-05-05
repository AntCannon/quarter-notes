import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // npm i react-router-dom
import "./App.css";
import Nav from "./components/Nav.jsx";
import Filters from "./components/Filters.jsx";
import Notes from "./components/Notes.jsx";
import Note from "./components/Note.jsx";
import NewNote from "./components/NewNote.jsx";
import About from "./components/About.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  const [search, setSearch] = useState("");
  function handleFilterChange(searchQuery) {
    setSearch(searchQuery);
  };

  return (
    <>
      <Nav />
      <Filters handleFilterChange={handleFilterChange} />
      <main>
        <Routes>
          <Route path="/" element={<Notes search={search} />} />
          <Route path="/:id" element={<Note />} />
          <Route path="/new-note" element={<NewNote />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
