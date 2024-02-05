import emailjs from 'emailjs-com';
import "./Contact.css"
import { useState } from 'react';
import AlertMessage from './AlertMessage';




function Contact() {
  const [sending,setSending] = useState(false)
  const [successfullySent,setSuccesfullySent] = useState(null)
  const service_id = "service_jmwt6co"
  const template_id = "template_lwveuti"
  const public_key = "jMW8kqCXlRfsKhTmE"


  const handleForm = (e) => {
    e.preventDefault()
    emailjs.sendForm(service_id,template_id,e.target,public_key)
    .then((result) => {
      setSuccesfullySent("sent")
      setSending(false)
      console.log(result);
       }, (error) => {
        setSuccesfullySent("error")
      console.log(error.text);
     })
      setSending(true)
      e.target.reset()
  }
  return (
   <section id='contact'>
    <h1>Contact Me</h1>
    <form onSubmit={handleForm}>
      <input type="text" placeholder="Your name" name="from_name" autoComplete='off' required></input>
      <input type="email" placeholder="Your email address" name="reply_to" autoComplete='off' required></input>
      <textarea type="text" placeholder="Your message" name="message" autoComplete='off' required></textarea>
      <button type='submit'>{!sending ? "Send" : "Sending"}</button>
    </form>
    {successfullySent === "sent" || successfullySent === "error" ? <AlertMessage successfullySent={successfullySent} setSuccessfullySent={setSuccesfullySent}/> : ""}
   </section>
  )
}

export default Contact