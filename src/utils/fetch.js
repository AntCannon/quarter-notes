const URL = import.meta.env.VITE_API_BASE_URL;

// get notes
export function getNotes() {
  return fetch(URL).then((response) => response.json());
}

// get note
export function getNote(noteID) {
  return fetch(`${URL}/${noteID}`).then((response) => response.json());
}

// create note
export function createNote(note) {
  const options = {
    method: "POST",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(URL, options).then((response) => {
    return response.json();
  });
}

// edit note
export function editNote(id, note) {
  const options = {
    method: "PUT",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/${id}`, options).then((response) => {
    return response.json();
  });
}

// delete note
export function deleteNote(id) {
  const options = { method: "DELETE"};
  return fetch(`${URL}/${id}`, options)
}