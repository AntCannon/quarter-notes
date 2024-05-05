import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../utils/fetch";
import "./NewNote.css";

const URL = import.meta.env.VITE_API_BASE_URL;

export default function NewNote() {
  const categories = ["Category 1", "Category 2", "Category 3"];
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
        console.log(response);
        // navigate(`/${response.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <div className="new-note_container">
      <h2 className="new-note-heading">New Note</h2>
      <form className="new-note_form" onSubmit={handleSubmit}>
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
              value={form.title}
              onChange={handleChange}
            />
          </label>
          <label className="new-note_label" htmlFor="body">
            <br />
            Body
            <br />
            <textarea
              className="new-note_input body"
              id="body"
              name="body"
              value={form.body}
              onChange={handleChange}
            ></textarea>
          </label>
          <label className="new-note_label" htmlFor="category">
            <br />
            Category
            <br />
            <select
              className="new-note_input"
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
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
          <div className="new-note-preview">
            <h2>{form.title || "Title goes here"}</h2>
            <p className="body">{form.body || "Body goes here"}</p>
            <p>{form.category || "Category goes here"}</p>
          </div>
          <input className="new-note_submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
