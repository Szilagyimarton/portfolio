import { Link } from 'react-router-dom'

import './Projects.css'
function Projects() {
  return (
   
    <section id='projects'>
      <h1>Projects</h1>
      <div className="projectsContainer">
      <div className="project">
        <h3>To Do App</h3>
        <Link to="https://github.com/Szilagyimarton/todo-app/tree/main" target="_blank">
          <img src='src\img\todoapp\todo1.png' alt='todoImg' />
        </Link>
        <p>This project made with React, uses Firebase authentication, Firebase database and Material UI.</p>
        <p>After registration and login you can add tasks, set the priority and also able to delete the existing ones.</p>
      </div>
      <div className="project">
        <h3>Weather App</h3>
        <Link to="https://github.com/Szilagyimarton/weather_api" target='_blank'>
        <img src='src\img\weather\weather.png' alt='weatherImg' />
        </Link>
        <p>This one is made with HTML, Javascript and CSS. It uses a Weather API, displays the next 7 day's weather. You can change between Celsius and Fahrenheit.</p>
      </div>
      <div className="project">
        <h3>Recipe Website</h3>
        <Link to="https://github.com/Szilagyimarton/react-recipe-app" target='_blank'>
        <img src='src\img\recipeAPI\recipe2.png' alt='recipeAppImg' />
        </Link>
        <p>This project is uses the MealDB API. You can search for recipes, or show them by category or area. It made with React. For routing i used the react-router and for the design the Material UI. </p>
      </div>
      </div>
      <p className='gitInfo'>For more information, please visit my <span className='linkToGit'><Link to="https://github.com/Szilagyimarton/" target="_blank">Github</Link></span> page. </p>
    </section>
  )
}

export default Projects