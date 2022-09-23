import React, { useState ,useEffect} from "react";
import "../css/navigator.css";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import {BiUpArrowAlt} from 'react-icons/bi'
import {Link} from "react-scroll"
function Navigator() {
  const [activenav, setActivenav] = useState("#");
  const [showButton, setShowButton] = useState(false);
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
     top:0,
      behavior:"smooth",
      duration:"1500"
    });
  };


  return (
    <div className="navigator">
      <div className="navigator__icons">
        <Link
          to="home"
          smooth={true}
          duration={1000}
          
          onClick={() => setActivenav("#")}
          className={activenav === "#" ? "active" : "icons__div"}
        >
          <AiFillHome className="icons" />
        </Link>
        <Link
          to="about"

                smooth={true}
          duration={1000}
          onClick={() => setActivenav("#about")}
          className={activenav === "#about" ? "active" : "icons__div"}
        >
          <FaUser className="icons" />
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={1000}
      
          onClick={() => setActivenav("#services")}
          className={activenav === "#services" ? "active" : "icons__div"}
        >
          <MdOutlineMiscellaneousServices className="icons" />
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
        
          onClick={() => setActivenav("#contact")}
          className={activenav === "#contact" ? "active" : "icons__div"}
        >
          <RiContactsBook2Fill className="icons" />
        </Link>
      </div>
        {showButton && (
        <div onClick={scrollToTop} className="top__scroll">
          <BiUpArrowAlt className="icon__arrow"/>
        </div>
      )}
     
    </div>
  );
}

export default Navigator;
