export default function NewNote() {
  const options = ["option 1", "option 2", "option 3"];

  return (
    <div className="new-note_container">
      <h1 className="new-note-heading">New Note</h1>
      <form className="new-note_form">
        <label className="new-note_form_label" htmlFor="title">
          <br />
          Title
          <br />
          <input
            className="new-note_input"
            type="text"
            id="title"
            name="title"
          />
        </label>
        <label className="new-note_label" htmlFor="body">
          <br />
          Body
          <br />
          <textarea className="new-note_input" id="body" name="body"></textarea>
        </label>
        <label className="new-note_label" htmlFor="category">
          <br />
          Category
          <br />
          <select className="new-note_input" id="category">
            <option>Please choose one option</option>
            {options.map((option, i) => {
              return <option key={i}>{option}</option>;
            })}
          </select>
        </label>
        <div className="new-note-preview">Note Preview</div>
        <input className="new-note_submit" type="submit" value="submit" />
      </form>
    </div>
  );
}
