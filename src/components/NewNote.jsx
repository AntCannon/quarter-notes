import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createNote } from "../utils/fetch";
import "./NewNote.css";

export default function NewNote() {
  const [categories, setCategories] = useState(["Category 1", "Category 2", "Category 3"]);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    body: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNote(form)
      .then((response) => {
        navigate(`/notes/${response.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    if (value === "Custom") {
      const customCategory = prompt("Enter custom category:");
      if (customCategory) {
        setCategories((prevCategories) => [...prevCategories, customCategory]);
        setForm((prevForm) => ({
          ...prevForm,
          category: customCategory,
        }));
      }
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        category: value,
      }));
    }
  };

  return (
    <div className="new-note_container">
      <h2 className="new-note-heading">New Note</h2>
      <Link to={"/"} className="return-arrow">&larr;</Link>
      <form className="new-note_form" onSubmit={handleSubmit}>
        <div className="column-one">
          <label className="new-note_form_label" htmlFor="title">
            <br />
            <strong>Title</strong>
            <br />
            <input
              className="new-note_input"
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </label>
          <label className="new-note_label" htmlFor="body">
            <br />
            <strong>Body</strong>
            <br />
            <textarea
              className="new-note_input body"
              id="body"
              name="body"
              value={form.body}
              onChange={handleChange}
              required
            >
            </textarea>
          </label>
          <label className="new-note_label" htmlFor="category">
            <br />
            <strong>Category</strong>
            <br />
            <select
              className="new-note_input"
              id="category"
              name="category"
              value={form.category}
              onChange={handleCategoryChange}
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
              <option value="Custom">Custom...</option>
            </select>
          </label>
        </div>
        <div className="column-two">
          <div className="new-note-preview">
            <h3>{form.title || "Title preview"}</h3>
            <p className="body">{form.body || "Body preview"}</p>
            <p>{form.category || "Category preview"}</p>
          </div>
          <input className="new-note_submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
