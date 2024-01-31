import emailjs from 'emailjs-com';
import "./Contact.css"

function Contact() {
  const service_id = "service_jmwt6co"
  const template_id = "template_lwveuti"
  const public_key = "jMW8kqCXlRfsKhTmE"


  const handleForm = (e) => {
    e.preventDefault()
    emailjs.sendForm(service_id,template_id,e.target,public_key)
    .then((result) => {
      console.log(result);
       }, (error) => {
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
      <button>Send</button>
    </form>
   </section>
  )
}

export default Contact