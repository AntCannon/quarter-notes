import { useState } from 'react'

function Note() {
  return (
    <div className="note-container">
      <div className="note-display">
        <h1>Title</h1>
        <p>The entire text of the note</p>
        <p className="category">Category</p>
        <div className="button-group">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Note;
