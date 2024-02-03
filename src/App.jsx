
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Contact from './components/Contact'
import { useState } from 'react'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'


function App() {
  const [clickedMenu,setClickedMenu] = useState(false)
  const [splashScreen,setSplashScreen] = useState(true)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const date = new Date()
  const today = date.getDay()
  const toggleMenu = () => {
    setClickedMenu(clickedMenu => !clickedMenu)
  }

  const closeHamburgerMenu = () => {
    clickedMenu ? toggleMenu() : null
  }

  return (
    <>
  <BrowserRouter>
    
     {splashScreen
     ?
      <SplashScreen text={"Welcome to my website!" } delay={150} setSplashScreen={setSplashScreen}/>
      :
     <><header >
            <nav className="navMenu" >
              <HashLink to="#home" onClick={ closeHamburgerMenu} smooth >Home</HashLink>
              <HashLink to="#projects" onClick={closeHamburgerMenu} smooth>Projects</HashLink>
              <HashLink to="#about" onClick={closeHamburgerMenu} smooth>About</HashLink>
              <HashLink to="#contact" onClick={closeHamburgerMenu} smooth>Contact</HashLink>
            </nav>
          <h2>{days[today]}</h2>
          </header>
          <Home/><Projects /><About /><Contact /> <Footer/></>
     
        }

  </BrowserRouter>
  </>
  )
}

export default App
