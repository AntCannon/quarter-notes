import "./NewNote.css"

export default function NewNote() {
  const categories = ["cateogry 1", "category 2", "category 3"];

  return (
    <div className="new-note_container">
      <h1 className="new-note-heading">New Note</h1>
      <form className="new-note_form">
        <div className="column-one">
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
            <textarea
              className="new-note_input"
              id="body"
              name="body"
            ></textarea>
          </label>
          <label className="new-note_label" htmlFor="category">
            <br />
            Category
            <br />
            <select className="new-note_input" id="category">
              <option value="" >--Choose Category--</option>
              {categories.map((category, i) => {
                return <option value={category} key={i}>{category}</option>;
              })}
            </select>
          </label>
        </div>
        <div className="column-two">
          <div className="new-note-preview">Note Preview</div>
          <input className="new-note_submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
