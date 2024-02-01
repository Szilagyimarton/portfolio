import { useState,useEffect } from "react"
import './SplashScreen.css'

  const SplashScreen = ({ text, delay, setSplashScreen }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
       
        }, delay);
    
        return () => {
          clearTimeout(timeout)};
      }
      if(currentIndex === text.length) {
        setTimeout(() => {
          setSplashScreen(false)

        },delay)
      }
    }, [currentIndex, delay, text]);
  
    return (
      <div className="splashScreen">
      <p className="textarea">{currentText} </p>
    </div>
  )
}


export default SplashScreen