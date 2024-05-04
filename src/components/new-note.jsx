export default function NewNote() {
  const options = ["option 1", "option 2", "option 3"];

  return (
    <div className="new-note_container">
      <h1 className="new-note-heading">New Note</h1>
      <form className="new-note_form">
        <label className="new-note_form_label" htmlFor="title">
          Title
          <input
            className="new-note_input"
            type="text"
            id="title"
            name="title"
          />
        </label>
        <label className="new-note_label" htmlFor="body">
          Body
          <textarea className="new-note_input" id="body" name="body"></textarea>
        </label>
        <label className="new-note_label" htmlFor="category">
          Category
          <select className="new-note_input" id="category">
            <option>Please choose one option</option>
            {options.map((option, i) => {
              return <option key={i}>{option}</option>;
            })}
          </select>
        </label>
        <div className="note-preview">Note Preview</div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
