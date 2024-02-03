import CodeIcon from '@mui/icons-material/Code';
import './Home.css'

function Home() {
  return (
    <section id='home'>
   
        <h2>Welcome!</h2>
        <div className='introduction'> 
        <h3>My name is Márton.</h3>
          <p> I'm a front-end developer from Budapest, Hungary. I started to learn development about a year ago   and I've just finished a front-end developer course via CodeCool. My name is Márton. I'm a front-end developer from Budapest, Hungary. I started to learn development about a year ago   and I've just finished a front-end developer course via CodeCool. My name is Márton. I'm a front-end developer from Budapest, Hungary. I started to learn development about a year ago   and I've just finished a front-end developer course via CodeCool
          </p>
          <div className="imageContainer">
            <img src="src\img\DSCF7997.jpeg" alt="pictureofme"/>
          </div>
                <ul>
                  <p><h3>The technologies</h3> which I'm  already familiar with:</p>
                  <li><CodeIcon/> HTML</li>
                  <li><CodeIcon/> CSS</li>
                  <li><CodeIcon/> Javascript</li>
                  <li><CodeIcon/> React</li>
                  <li><CodeIcon/> Express.js</li>
                  <li><CodeIcon/> Bootstrap</li>
                  <li><CodeIcon/> Material UI</li>
                </ul> 
         </div>
     
    </section>

  )
}

export default Home

