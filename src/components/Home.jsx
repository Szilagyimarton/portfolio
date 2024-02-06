import './Home.css'

function Home() {
  return (
    <section id='home'>
   
        <h1>Welcome!</h1>
        <div className='introduction'> 
          <div className="imageContainer">
            <img src="src\img\DSCF7997.jpeg" alt="pictureofme"/>
          </div>
        <h2>My name is Márton.</h2>
          <p> I'm a front-end developer based in  Budapest, Hungary. I started develop my programming skills about a year ago, when I'm decided to change career. Recently, I completed a Front-End Developer Course through CodeCool
          </p>
        <h2>Here are some technologies</h2><p> which I'm  already familiar with:</p>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Express.js</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                </ul> 
         </div>
     
    </section>

  )
}

export default Home

