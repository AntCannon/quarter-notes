const URL = import.meta.env.VITE_API_BASE_URL
const options = {
}

// get notes
export function getNotes() {
  return fetch(URL)
    .then(response => response.json())
}

// get note
export function getNote(noteID) {
  return fetch(`${URL}/${noteID}`)
    .then(response => response.json())
}