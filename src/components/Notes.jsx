import { useEffect, useState } from "react"
import { getNotes } from "../utils/fetch.js"
import db from "../data/db.json"
import "./Notes.css"
import NoteListing from "./NoteListing.jsx"

console.log(db)

export default function Notes() {
  const [ notes, setNotes ] = useState(db.notes);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() =>{
    setIsLoading(true)
    getNotes()
    .then(data => {
      setNotes(data)
      setIsLoading(false)
    })
    .catch(err => {
      console.log(err)
      console.log("local data")
      setIsLoading(false)
    })

    if (isLoading) {
      setTimeout(() => {
        console.log("local data")
        setIsLoading(false)
      }, 2000)
    }
  }, [])


  return (
    <>
      <h2>Notes</h2>
      <section className="notes-container">
        {isLoading ? 
          <h3>Loading...</h3> :
          notes.map(note => (
            <NoteListing
              note={note}
              key={note.id}
            />
          ))
        }
      </section>
    </>
  )
}