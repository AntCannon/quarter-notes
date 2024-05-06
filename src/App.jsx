import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; // npm i react-router-dom
import "./App.css";
import Nav from "./components/Nav.jsx";
import Filters from "./components/Filters.jsx";
import Notes from "./components/Notes.jsx";
import Note from "./components/Note.jsx";
import EditNote from "./components/EditNote.jsx";
import NewNote from "./components/NewNote.jsx";
import About from "./components/About.jsx";
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [search, setSearch] = useState("");
  function handleFilterChange(searchQuery) {
    setSearch(searchQuery);
  }

  return (
    <>
      <div className="float"> 
        <Link to="/notes/new">
          <div className="square"></div>
        </Link>
      </div>

      <div className="under">
        <Nav />
        <Filters handleFilterChange={handleFilterChange} />
        <main>
          <Routes>
            <Route path="/" element={<Notes search={search} />} />
            <Route path="/notes/:id" element={<Note />} />
            <Route path="/notes/new" element={<NewNote />} />
            <Route path="/about" element={<About />} />
            <Route path="/notes/:id/edit" element={<EditNote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
