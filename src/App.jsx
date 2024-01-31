
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Contact from './components/Contact'
import { useState } from 'react'
import Footer from './components/Footer'


function App() {
  const [clickedMenu,setClickedMenu] = useState(false)

  const toggleMenu = () => {
    setClickedMenu(clickedMenu => !clickedMenu)
  }
  return (
    <>
  <BrowserRouter>
   
      <><header>
            <div className='logo'>
              <h1>MS</h1>
            </div>
            <nav className={clickedMenu ? "clickedMenu" : ""}>
              <HashLink to="#home" onClick={toggleMenu}>Home</HashLink>
              <HashLink to="#projects" onClick={toggleMenu}>Projects</HashLink>
              <HashLink to="#about" onClick={toggleMenu}>About</HashLink>
              <HashLink to="#contact" onClick={toggleMenu}>Contact</HashLink>
             
            </nav>
            <div className={`hamburger${clickedMenu ?"clicked" : ""}`}>
              <span className="material-symbols-outlined" onClick={toggleMenu}>menu</span>
            </div>
          </header><Home /><Projects /><About /><Contact /> <Footer/></>
     
        

  </BrowserRouter>
  </>
  )
}

export default App
