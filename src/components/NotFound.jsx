import "./NotFound.css"
import quarterRestNote from "../assets/quarter-rest-note.png"
export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="error">
        Error 404: Page Not Found
      </h2>
      <img src={quarterRestNote} alt="quarter rest note error" />
    </div>
  )  
}
