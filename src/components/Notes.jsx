import "./Notes.css"
import NoteListing from "./NoteListing.jsx"

export default function Notes() {

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