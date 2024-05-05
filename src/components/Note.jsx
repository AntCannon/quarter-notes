import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote } from "../utils/fetch.js";
import "./Note.css";

export default function Note() {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete() {
    deleteNote(id)
      .then(() => navigate("/"))
      .catch(err => console.log(err))
  }

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
          <button
            className="edit"
            onClick={() => navigate(`/notes/${id}/edit`)}
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
