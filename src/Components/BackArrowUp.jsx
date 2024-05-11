import { FaArrowUp } from 'react-icons/fa';
import { useEffect , useState } from 'react';
import { useContext } from "react";
import DarkModeContext from "./DarkModeprovider";
 
 const ScrollUp = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isVisible, setIsVisible] = useState(false)
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };    

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
   }, []);

   return (
    <>     
        <button className="  btn-scrollTop text" style={{display: isVisible ? 'block':'none'}} onClick={goTop}>
            <FaArrowUp className={`${isDarkMode ? " bg-fuchsia-800 " : " bg-fuchsia-500 "}`}/>
        </button>

    </>
   )
 }
 
 export default ScrollUp