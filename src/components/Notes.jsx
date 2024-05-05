import { useEffect, useState } from "react";
import { getNotes } from "../utils/fetch.js";
import { Link } from "react-router-dom"
import "./Notes.css";
import NoteListing from "./NoteListing.jsx";

export default function Notes({ search }) {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getNotes()
      .then((data) => {
        setNotes(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2>Notes</h2>
      <section className="notes-container">
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          filteredNotes.map((note) => (
            <Link to={`/${note.id}`} key={note.id}>
              <NoteListing note={note} />
            </Link>
            )
          )
        )}
      </section>
    </>
  );
}