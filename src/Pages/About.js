import React, {useEffect, useState} from "react";
import Slider from "../Slider/Slider";
import './About.css';

const About = () => {
    
  useEffect(() => {
    document.title = "BALAY | DİRİM - Hakkımızda"
  }, []);

 const [slideIndex, setSlideIndex] = useState(1);
 const [time, setTime] = useState(Date.now());

 var text = [
   {title:"Photo1",explanation:"Yansıma"},
   {title:"Photo2",explanation:"Yol"},
   {title:"Photo3",explanation:"Nehir"},
   {title:"Photo4",explanation:"Günbatımı"},
   {title:"Photo5",explanation:"Doğa ve İnsan"}
 ]


useEffect(() => {
 const interval = setInterval(() => setTime(Date.now()), 3000);
 return () => {
   console.log("slideindex",slideIndex);
   if(slideIndex === 5){ // BURADAKI 5 FOTO SAYISI
     setSlideIndex(1);
   }
   else{
     setSlideIndex((slideIndex+1)%6); // BURADAKI 6 FOTO SAYISI + 1
   }
     clearInterval(interval);
 };
}, [time]);

  return (
    (
      <div className="Home">
        <div className="Left">
          <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex}/>
        </div>
        <div className="Right">
          <h1 color="white">{text[slideIndex-1].title}</h1>
          <h2 color="white">{text[slideIndex-1].explanation}</h2>
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