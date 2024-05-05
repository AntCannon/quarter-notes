import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, editNote } from "../utils/fetch";
import "./EditNote.css";

export default function EditNote() {
  const categories = ["Category 1", "Category 2", "Category 3"];
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    body: "",
    category: "",
  });

  useEffect(() => {
    console.log(id, "useEffect");
    getNote(id)
      .then((data) => setForm(data))
      .catch((error) => console.log(error, "Unable to fetch error"));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    editNote(id, form)
      .then((data) => {
        navigate(`/notes/${data.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="edit-note_container">
      <h2 className="edit-note-heading">Edit Note</h2>
      <form className="edit-note_form" onSubmit={handleSave}>
        <div className="column-one">
          <label className="edit-note_form_label" htmlFor="title">
            <br />
            Title
            <br />
            <input
              className="edit-note_input"
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </label>
          <label className="edit-note_label" htmlFor="body">
            <br />
            Body
            <br />
            <textarea
              className="edit-note_input body"
              id="body"
              name="body"
              value={form.body}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label className="edit-note_label" htmlFor="category">
            <br />
            Category
            <br />
            <select
              className="edit-note_input"
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">--Choose Category--</option>
              {categories.map((category, i) => {
                return (
                  <option value={category} key={i}>
                    {category}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="column-two">
          <div className="edit-note-preview">
            <h2>{form.title}</h2>
            <p className="body">{form.body}</p>
            <p>{form.category}</p>
          </div>
          <div>
            <button className="edit-note_submit" type="submit">Save</button>
            <button className="edit-note_submit" type="button" onClick={() => navigate(`/${id}`)}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
