import { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import { getNote } from "../utils/fetch.js"
import "./Note.css"

export default function Note() {
  const [note , setNote] = useState({})
  const {id} = useParams()

  useEffect(() => {
    getNote(id)
      .then((response) => { 
          setNote(response);         
      })
      .catch((error) => {
        console.error("Fetching note failed:", error);    
      });
  }, [id]);

  return (
    <div className="note-container">
      <div className="note-display">
        <h1>{note.title}</h1>
        <p>{note.body}</p>
        <p className="category">{note.category}</p>
        <div className="button-group">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
}