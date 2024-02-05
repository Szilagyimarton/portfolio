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
          <img src='src\img\todoapp\todo4.png' alt='todoImg' />
        </Link>
        <p>This project made with <span className='emphasize'>React</span>, uses <span className='emphasize'>Firebase</span> authentication, Firebase database and <span className='emphasize'>Material UI</span>.</p>
        <p>After registration and login you can add tasks, set the priority and also able to delete the existing ones.</p>
      </div>
      <div className="project">
        <h3>Pokemon Game</h3>
        <img src='src\img\pokemon\poke1.png' alt='pokemonImg' />
        <p>This one is a simple game uses the PokéAPI. It made with <span className='emphasize'>React</span>, the design made with  mostly simple CSS and a little Material UI.</p>
      </div>
      <div className="project">
        <h3>Recipe Website</h3>
        <Link to="https://github.com/Szilagyimarton/react-recipe-app" target='_blank'>
        <img src='src\img\recipeAPI\recipe4.png' alt='recipeAppImg' />
        </Link>
        <p>This project is uses the MealDB API. You can search for recipes, or show them by category or area. It made with <span className='emphasize'>React</span>. For routing i used the <span className='emphasize'>react-router</span> and for the design the <span className='emphasize'>Material UI.</span> </p>
      </div>
      </div>
      <p>For more information, please visit my <span className='linkToGit'><Link to="https://github.com/Szilagyimarton/" target="_blank">Github</Link></span> page. </p>
    </section>
  )
}

export default Projects