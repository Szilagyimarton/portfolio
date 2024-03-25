import { Link } from 'react-router-dom'

import './Projects.css'
import Modal from './Fullscreen'
import { useState } from 'react'
import FadeInSection from './FadeInSection'

function Projects() {
const [open,setOpen] = useState(false)
const [imageName, setImageName] = useState("")
const handleFullscreen = (event) => {
  if(!open){
    setOpen(true)
    setImageName(event.target.src)
    event.target.className = "clicked"
    
  }else if(open){
    setOpen(false)
    setImageName("")
  }
}

  return (
  <>

    <section id='projects'>
      <h1>Projects</h1>
        <p className='projectInfo'>Please click on the title to view a project!</p>
      <div className="projectsContainer">
        <Modal image={imageName} handleFullscreen={handleFullscreen} open={open}/>
        <FadeInSection>
          <div className="project">
            <Link to="https://hangmandev.web.app/" target="_blank">
              <h3>Hangman Game</h3>
            </Link>
            <img src='\img\hangman.png' alt="hangmanImg" onClick={(event) => handleFullscreen(event)} />
            <p>Let's play some Hangman! Click on the title to begin the game!</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="project">
            <Link to="https://calculator-9167f.web.app" target="_blank">
              <h3>Calculator</h3>
            </Link>
            <img src='\img\calcImg.png' alt="calculatorImage" onClick={(event) => handleFullscreen(event)} />
            <p>This is a simple calculator, made with React.</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="project">
            <Link to="https://webshop-demo1.web.app/" target="_blank">
              <h3>Webshop Demo</h3>
            </Link>
            <img src='\img\webshop.png' alt="webshopImg" onClick={(event) => handleFullscreen(event)} />
            <p>It's an imaginary webshop uses FakeStore API for the products.</p>
            </div>
        </FadeInSection>
        <FadeInSection>
          <div className="project">
            <Link to="https://github.com/Szilagyimarton/laravel-crud" target="_blank">
              <h3>Book database</h3>
            </Link>
            <img src='\img\crud.png' alt="crudImg" onClick={(event) => handleFullscreen(event)} />
            <p>This is a basic CRUD project, made with Laravel.</p>
            <p>After registration and login you can add/edit/delete your books of the database.  </p>
            </div>
        </FadeInSection>
        <FadeInSection>
          <div className="project">
            <Link to="https://github.com/Szilagyimarton/todo-app/tree/main" target="_blank">
              <h3>To Do App</h3>
            </Link>
            <img src='\img\todo5.png' alt="todoImg" onClick={(event) => handleFullscreen(event)} />
            <p>This project made with React, uses Firebase authentication, Firebase database and Material UI.</p>
            <p>After registration and login you can add tasks, set the priority and also able to delete the existing ones.</p>
          </div>
        </FadeInSection>
       
        <FadeInSection>
          <div className="project">
            <Link to="https://react-recipe-74406.web.app" target='_blank'>
            <h3>Recipe Website</h3>
            </Link>
              <img src="\img\recipe1.png" alt='recipeAppImg' onClick={(event) => handleFullscreen(event)} />
            <p>This project uses the MealDB API. You can search for specific recipes, or browse them by category or area. It is made with React. I used React Router for routing and Material-UI for the design. </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="project">
            <Link to="https://szilagyimarton.github.io/weather_api" target='_blank'>
            <h3>Weather App</h3>
            </Link>
              <img src='\img\weatherApp.png' alt='weatherImg' onClick={(event) => handleFullscreen(event)}/>
            <p>This one is made with HTML, Javascript and CSS. It uses a Weather API, displays the weather forecast for the next 7 days. You can choose between Celsius and Fahrenheit.</p>
          </div>
       </FadeInSection>
      </div><p className='gitInfo'>For more information, please visit my <span className='linkToGit'><Link to="https://github.com/Szilagyimarton/" target="_blank">Github</Link></span> page. </p>
    </section>
    </>
  )
}

export default Projects