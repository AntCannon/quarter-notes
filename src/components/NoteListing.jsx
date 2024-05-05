export default function NoteListing({ note }) {
  const { id, title, body, category } = note;

  return (
    <div className="note-listing">
      <h3>{title}</h3>
      <p>{body.substring(0, 50)}...</p>
      <p>{category}</p>
    </div>
  );
}
