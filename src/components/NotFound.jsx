import "./NotFound.css"
import quarterRestNote from "../assets/quarter-rest-note.png"
export default function NotFound() {
  return (
    <div>

      <h2>
        Error 404: Page Not Found
      </h2>
      <img src={quarterRestNote} alt="quarter rest note error" />
    </div>
  )  
}
