import React, {useEffect} from "react";
import Slider from "../Slider/Slider";
import './Home.css';

const Home = () => {
    
  useEffect(() => {
    document.title = "İYS HUKUK - Ana Sayfa"
 }, []);

  return (
    <div className="Home">
      <Slider/>
    </div>
    
  );
}

export default Home;