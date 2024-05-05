import { useState, useEffect } from "react";
import db from "../data/db.json"
import "./Filters.css"
import { getNotes } from "../utils/fetch.js"

export default function Filter() {
  const [SearchText, SetSearchText] = useState("");
  
  useEffect(() =>{
    getNotes()
    .then(data => {
      setNotes(data)
    })
    .catch(err => {
      console.log(err)
      console.log("local data")
    })
  }, [])

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterNotes(title, allNotes) : allNotes
    SetSearchText(title);
    setAllNotes(result);
  }

  function filterNotes(search, allNotes) {
    return allNotes.filter((note) => {
      return allNotes.title.match(title);
    });
  }

    return (
    <div className="filters">
      <input 
      id="search" 
      type="text" 
      placeholder="Search Notes"
      value={SearchText}
      onChange={handleTextChange} />
    </div>
  )
}