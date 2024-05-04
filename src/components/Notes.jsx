import { useEffect, useState } from "react"
import { getNotes } from "../utils/fetch.js"
import "./Notes.css"
import NoteListing from "./NoteListing.jsx"

export default function Notes() {
  useEffect(() =>{
    getNotes()
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h2>Notes</h2>
      <section className="notes-container">
        <NoteListing />
        <NoteListing />
        <NoteListing />
      </section>
    </>
  )
}