
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Contact from './components/Contact'


function App() {
  
  return (
    <>
  <BrowserRouter>
      <header>
        <div className='logo'>
          <h1>MS</h1>
        </div>
        <nav>
        <HashLink to="#home">Home</HashLink>
        <HashLink to="#projects">Projects</HashLink>
        <HashLink to="#about">About</HashLink>
        <HashLink to="#contact">Contact</HashLink>

        </nav>
      </header>
      <Home/>
      <Projects/>       
      <About/>
      <Contact/>
  </BrowserRouter>
  </>
  )
}

export default App
