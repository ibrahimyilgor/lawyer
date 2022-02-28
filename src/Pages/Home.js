import React, {useEffect, useState} from "react";
import Slider from "../Slider/Slider";
import './Home.css';

const Home = () => {
    
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
    document.title = "İYS HUKUK - Ana Sayfa"
 }, []);

 useEffect(() => {
  const interval = setInterval(() => setTime(Date.now()), 3000);
  return () => {
    console.log("slideindex",slideIndex);
    if(slideIndex === 5){
      setSlideIndex(1);
    }
    else{
      setSlideIndex((slideIndex+1)%6);
    }
      clearInterval(interval);
  };
}, [time]);

  return (
    <div className="Home">
      <div className="Left">
        <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex}/>
      </div>
      <div className="Right">
        <h1 color="white">{text[slideIndex-1].title}</h1>
        <h2 color="white">{text[slideIndex-1].explanation}</h2>
      </div>
    </div>
    
  );
}

export default Home;