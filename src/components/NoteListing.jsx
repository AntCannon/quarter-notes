import { Link } from 'react-router-dom';
import dummyData from "/src/data/data.json"

export default function NoteListing() {
  return (
    <div className="note-listing">
      {dummyData.map(note => (
        <Link key={note.id} to={`/note/${note.id}`}>
          <div className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p>Categories</p>
          </div>
        </Link>
      ))}
    </div>
  );
}