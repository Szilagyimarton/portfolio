
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
      <SplashScreen text={"Welcome to my website! Let's start! " } delay={150} setSplashScreen={setSplashScreen}/>
      :
     <><header>
            <div className='logo'>
              <h1>MS</h1>
            </div>
            <nav className={clickedMenu ? "clickedMenu" : ""}>
              <HashLink to="#home" onClick={ closeHamburgerMenu} >Home</HashLink>
              <HashLink to="#projects" onClick={closeHamburgerMenu}>Projects</HashLink>
              <HashLink to="#about" onClick={closeHamburgerMenu}>About</HashLink>
              <HashLink to="#contact" onClick={closeHamburgerMenu}>Contact</HashLink>
             
            </nav>
            <div className={`hamburger${clickedMenu ?"clicked" : ""}`}>
              <span className="material-symbols-outlined" onClick={toggleMenu}>menu</span>
            </div>
          </header><Home /><Projects /><About /><Contact /> <Footer/></>
     
        }

  </BrowserRouter>
  </>
  )
}

export default App
