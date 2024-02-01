import { Link } from "react-router-dom"
import './Footer.css'

function Footer() {
  return (
    <footer id="footer">
      <p> 2024 Marton Szilagyi </p>
      <Link to="https://github.com/Szilagyimarton/" target="_blank" >
        <img src="src\img\logos\github-mark-white.svg"/> 
      </Link>
    </footer>
  )
}

export default Footer