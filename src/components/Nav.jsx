import { Link } from "react-router-dom"

export default function Notes() {
  
  return (
    <nav>
      <Link to="new-note"><span>New Note</span></Link>
      <Link to=""><span>About Us</span></Link>
      <Link to="/"><span>Home</span></Link>
      <Link to="about"><span>Menu</span></Link>
    </nav>
  )
}