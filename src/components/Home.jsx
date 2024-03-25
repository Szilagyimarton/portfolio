import './Home.css'


function Home() {
  return (
    <section id='home'>
   
        <h1>Welcome!</h1>
        <div className='introduction'> 
          <div className="imageContainer">
            <img src="\img\DSCF7997.jpeg" alt="pictureofme"/>
          </div>
        <h2>My name is Márton.</h2>
          <p className='introParagraph'> I am a front-end developer based in  Budapest, Hungary. I began developing my programming skills approximately a year ago, when I  decided to change career. Recently, I completed a Front-End Developer Course at CodeCool.
          </p>
        <h2>Here are some technologies</h2><p> that I'm  already familiar with:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>React</li>
                  <li>Laravel</li>
                  <li>Node.js</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                </ul> 
         </div>
     
    </section>

  )
}

export default Home

