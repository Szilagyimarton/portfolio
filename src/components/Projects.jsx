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
      <h1>Projects</h1><div className="projectsContainer">
        <Modal image={imageName} handleFullscreen={handleFullscreen} open={open}/>
        <FadeInSection>
          <div className="project">
            <Link to="https://github.com/Szilagyimarton/todo-app/tree/main" target="_blank">
              <h3>To Do App</h3>
            </Link>
            <img src='\img\todo5.png' alt="todoImage" onClick={(event) => handleFullscreen(event)} />
            <p>This project made with React, uses Firebase authentication, Firebase database and Material UI.</p>
            <p>After registration and login you can add tasks, set the priority and also able to delete the existing ones.</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="project">
            <Link to="https://github.com/Szilagyimarton/react-recipe-app" target='_blank'>
            <h3>Recipe Website</h3>
            </Link>
              <img src="\img\recipe1.png" alt='recipeAppImg' onClick={(event) => handleFullscreen(event)} />
            <p>This project uses the MealDB API. You can search for specific recipes, or browse them by category or area. It is made with React. I used React Router for routing and Material-UI for the design. </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="project">
            <Link to="https://github.com/Szilagyimarton/weather_api" target='_blank'>
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