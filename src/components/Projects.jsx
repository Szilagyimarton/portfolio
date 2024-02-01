import todo1_thumb from '../img/todoapp/todo1_thumb.jpg'
import todo2_thumb from '../img/todoapp/todo2_thumb.jpg'
import todo3_thumb from '../img/todoapp/todo3_thumb.jpg'
import todo4_thumb from '../img/todoapp/todo4_thumb.jpg'
import todo5_thumb from '../img/todoapp/todo5_thumb.jpg'
import todo6_thumb from '../img/todoapp/todo6_thumb.jpg'
import todo1 from '../img/todoapp/todo1.png'
import todo2 from '../img/todoapp/todo2.png'
import todo3 from '../img/todoapp/todo3.png'
import todo4 from '../img/todoapp/todo4.png'
import todo5 from '../img/todoapp/todo5.png'
import todo6 from '../img/todoapp/todo6.png'

import poke1 from '../img/pokemon/poke1.png'
import poke2 from '../img/pokemon/poke2.png'
import poke3 from '../img/pokemon/poke3.png'
import poke1_thumb from '../img/pokemon/poke1_thumb.jpg'
import poke2_thumb from '../img/pokemon/poke2_thumb.jpg'
import poke3_thumb from '../img/pokemon/poke3_thumb.jpg'


import recipe1 from '../img/recipeAPI/recipe1.png'
import recipe2 from '../img/recipeAPI/recipe2.png'
import recipe3 from '../img/recipeAPI/recipe3.png'
import recipe4 from '../img/recipeAPI/recipe4.png'
import recipe1_thumb from '../img/recipeAPI/recipe1_thumb.jpg'
import recipe2_thumb from '../img/recipeAPI/recipe2_thumb.jpg'
import recipe3_thumb from '../img/recipeAPI/recipe3_thumb.jpg'
import recipe4_thumb from '../img/recipeAPI/recipe4_thumb.jpg'

import agecalc1 from '../img/agecalc/agecalc1.png'
import agecalc2 from '../img/agecalc/agecalc2.png'
import agecalc1_thumb from '../img/agecalc/agecalc1_thumb.jpg'
import agecalc2_thumb from '../img/agecalc/agecalc2_thumb.jpg'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Link } from 'react-router-dom'
function Projects() {
const todoImages = [
  {thumbnail: todo1_thumb,
    original: todo1
  },
  {thumbnail: todo2_thumb,
    original: todo2
  },
  {thumbnail: todo3_thumb,
    original: todo3
  },
  {thumbnail: todo4_thumb,
    original: todo4
  },
  {thumbnail: todo5_thumb,
    original: todo5
  },
  {thumbnail: todo6_thumb,
    original: todo6
  }]
const pokemonImages = [
  {
    thumbnail:poke1_thumb,
    original: poke1
  },
  {
    thumbnail: poke2_thumb,
    original: poke2
  },
  {
    thumbnail: poke3_thumb,
    original: poke3
  },
 
  
]

const recipeImages = [
  {
    thumbnail:recipe1_thumb,
    original: recipe1
  },
  {
    thumbnail: recipe2_thumb,
    original: recipe2
  },
  {
    thumbnail: recipe3_thumb,
    original: recipe3
  },
  {
    thumbnail: recipe4_thumb,
    original: recipe4
  },
  
]
const ageCalcImages = [
  {
    thumbnail:agecalc1_thumb,
    original: agecalc1
  },
  {
    thumbnail: agecalc2_thumb,
    original: agecalc2
  },
]
  return (
   
    <section id='projects'>
      <h1>Projects</h1>
      <div className="projectsContainer">
      <div className="imageGallery">
        <h3>To Do App</h3>
        <ImageGallery items={todoImages} showPlayButton={false}  />
        <p>This project made with <span className='emphasize'>React</span>, uses <span className='emphasize'>Firebase</span> authentication, Firebase database and <span className='emphasize'>Material UI</span>.</p>
        <p>After registration and login you can add tasks, set the priority and also able to delete the existing ones.</p>
      </div>
      <div className="imageGallery">
        <h3>Pokemon Game</h3>
        <ImageGallery  items={pokemonImages} showPlayButton={false}   />
        <p>This one is a simple game uses the PokéAPI. It made with <span className='emphasize'>React</span>, the design made with  mostly simple CSS and a little Material UI.</p>
      </div>
      <div className="imageGallery">
        <h3>Age calculator app</h3>
        <ImageGallery  items={ageCalcImages} showPlayButton={false}  />
        <p>This is a simple age calculator application made by <span className='emphasize'>Javascript, HTML, CSS.</span> After you've give your birth date it will calculate the exact age of yours.</p>
      </div>
      <div className="imageGallery">
        <h3>Recipe Website</h3>
        <ImageGallery  items={recipeImages} showPlayButton={false}  />
        <p>This project is uses the MealDB API. You can search for recipes, or show them by category or area. It made with <span className='emphasize'>React</span>. For routing i used the <span className='emphasize'>react-router</span> and for the design the <span className='emphasize'>Material UI.</span> </p>
      </div>
      </div>
      <p>For more information, please visit my <span className='emphasize'><Link to="https://github.com/Szilagyimarton/" target="_blank">Github</Link></span> page. </p>
    </section>
  )
}

export default Projects