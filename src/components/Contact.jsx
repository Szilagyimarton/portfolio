
import "./Contact.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from "react-router-dom";
function Contact() {
  
  return (
   <section id='contact'>
    <h1>Contact Me</h1>
    <div className="envelope">
      <Link  to="#" target="_blank" onClick={() => { window.location.href = "mailto:szilagyimarton92@gmail.com" }
       }>
      <MailOutlineIcon className="mail" />
      </Link>
   
    </div>
   </section>
  )
}

export default Contact