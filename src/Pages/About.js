import React, {useEffect} from "react";
import './About.css';

const About = () => {
    
  useEffect(() => {
    document.title = "İYS HUKUK - Hakkımızda"
 }, []);

  return (
    <div className="About">
      <h2>HAKKIMIZDA</h2>
    </div>
    
  );
}

export default About;