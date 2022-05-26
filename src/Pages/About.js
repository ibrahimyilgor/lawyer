import React, {useEffect, useState} from "react";
import Slider from "../Slider/Slider";
import './About.css';

import balay from '../Photos/balay.jpg'; // with import
import dirim from '../Photos/dirim.jpg'; // with import

const About = () => {
    
  useEffect(() => {
    document.title = "BALAY | DİRİM - Hakkımızda"
  }, []);

 const [slideIndex, setSlideIndex] = useState(0);
 const [time, setTime] = useState(Date.now());

useEffect(() => {
 const interval = setInterval(() => setTime(Date.now()), 5000);
 return () => {
   console.log("slideindex",slideIndex);
   if(slideIndex === 2){ // BURADAKI 5 FOTO SAYISI
     setSlideIndex(1);
   }
   else{
     setSlideIndex((slideIndex)%2); // BURADAKI 6 FOTO SAYISI + 1
   }
     clearInterval(interval);
 };
}, [time]);

  return (
    (
      <div className="About">
        <div className="LeftPart">
        <img alt="logo2" width="100vw" height="auto" src={balay} class="keepRatio"/>
        </div>
        <div className="MiddlePart">
          <Slider
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
          />
        </div>
        <div className="RightPart">
        <img alt="logo2" width="100vw" height="auto" src={dirim} class="keepRatio"/>
        </div>
      </div>
      
    ));
    {/* <div className="About">
      <div className="PhotoAndText">
        <div className="Top">
          <div className="Photo">
            <img width="100%" alt="logo" height="100%" src="https://www.w3schools.com/w3css/img_avatar3.png" />
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
            <img width="100%" alt="logo" height="100%" src="https://www.w3schools.com/howto/img_avatar2.png" />
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
            <img width="100%" alt="logo" height="100%" src="https://www.w3schools.com/w3images/avatar2.png" />
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
    
  );*/}
}

export default About;