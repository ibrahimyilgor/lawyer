import React, {useEffect} from "react";
import './About.css';
import logo from '../logo.png'; // with import

const About = () => {
    
  useEffect(() => {
    document.title = "İYS HUKUK - Hakkımızda"
 }, []);

  return (
    <div className="About">
      <div className="PhotoAndText">
        <div className="Top">
          <div className="Photo">
            <img width="100%" alt="logo" height="100%" src={logo} />
          </div>
          <div className="Title">
            <p>John Doe</p>
            <p>Lawyer</p>
          </div>
        </div>
        <div className="Bottom">
          <p>Detail</p>
        </div>
      </div>
      <div className="PhotoAndText">
        <div className="Top">
          <div className="Photo">
            <img width="100%" alt="logo" height="100%" src={logo} />
          </div>
          <div className="Title">
            <p>John Doe</p>
            <p>Lawyer</p>
          </div>
        </div>
        <div className="Bottom">
          <p>Detail</p>
        </div>
      </div>
      <div className="PhotoAndText">
        <div className="Top">
          <div className="Photo">
            <img width="100%" alt="logo" height="100%" src={logo} />
          </div>
          <div className="Title">
            <p>John Doe</p>
            <p>Lawyer</p>
          </div>
        </div>
        <div className="Bottom">
          <p>Detail</p>
        </div>
      </div>
    </div>
    
  );
}

export default About;