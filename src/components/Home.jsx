import './Home.css'

function Home() {
  return (
    <section id='home'>
   
        <h1>Welcome!</h1>
        <div className='introduction'> 
        <h2>My name is Márton.</h2>
          <p> I'm a front-end developer from Budapest, Hungary. I started to learn development about a year ago   and I've just finished a front-end developer course via CodeCool. My name is Márton. I'm a front-end developer from Budapest, Hungary. I started to learn development about a year ago   and I've just finished a front-end developer course via CodeCool. My name is Márton. I'm a front-end developer from Budapest, Hungary. I started to learn development about a year ago   and I've just finished a front-end developer course via CodeCool
          </p>
          <div className="imageContainer">
            <img src="src\img\DSCF7997.jpeg" alt="pictureofme"/>
          </div>
                <ul>
                  <h2>The technologies</h2><p> which I'm  already familiar with:</p>
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

