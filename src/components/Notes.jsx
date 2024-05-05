import { useEffect, useState } from "react"
import { getNotes } from "../utils/fetch.js"
import "./Notes.css"
import NoteListing from "./NoteListing.jsx"

console.log(db);

export default function Notes() {
  const [ notes, setNotes ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getNotes()
    .then(data => {
      setNotes(data)
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
      setIsLoading(false)
    })
  }, [])

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
          filteredNotes.map((note) => <NoteListing note={note} key={note.id} />)
        )}
      </section>
    </>
  );
}
