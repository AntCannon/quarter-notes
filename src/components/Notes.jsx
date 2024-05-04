import { useEffect, useState } from "react"
import { getNotes } from "../utils/fetch.js"
import "./Notes.css"
import NoteListing from "./NoteListing.jsx"

export default function Notes() {
  const [ notes, setNotes ] = useState([]);

  useEffect(() =>{
    getNotes()
    .then(data => setNotes(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h2>Notes</h2>
      <section className="notes-container">
        {notes.map(note => (
          <NoteListing
            note={note}
            key={note.id}
          />
        ))}
      </section>
    </>
  )
}