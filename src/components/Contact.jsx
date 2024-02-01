import emailjs from 'emailjs-com';
import "./Contact.css"
import { useState } from 'react';
import AlertMessage from './AlertMessage';
import { Button } from '@mui/material';



function Contact() {
  const [successfullySent,setSuccesfullySent] = useState(null)
  const service_id = "service_jmwt6co"
  const template_id = "template_lwveuti"
  const public_key = "jMW8kqCXlRfsKhTmE"


  const handleForm = (e) => {
    e.preventDefault()
    emailjs.sendForm(service_id,template_id,e.target,public_key)
    .then((result) => {
      setSuccesfullySent("sent")
      console.log(result);
       }, (error) => {
        setSuccesfullySent("error")
      console.log(error.text);
     })

      e.target.reset()
  }
  return (
   <section id='contact'>
    <h1>Contact Me</h1>
    <form onSubmit={handleForm}>
      <input type="text" placeholder="Your name" name="from_name" required></input>
      <input type="email" placeholder="Your email address" name="reply_to"></input>
      <textarea type="text" placeholder="Your message" name="message" required></textarea>
      <Button sx={{marginBottom:10}}variant='contained' color='success'>Send</Button>
    </form>
    {successfullySent === "sent" || successfullySent === "error" ? <AlertMessage successfullySent={successfullySent} setSuccessfullySent={setSuccesfullySent}/> : ""}
   </section>
  )
}

export default Contact