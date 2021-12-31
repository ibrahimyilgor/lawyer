import React, {useEffect} from "react";
import './Home.css';
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const Home = () => {
    
  useEffect(() => {
    document.title = "İYS HUKUK - Ana Sayfa"
 }, []);

  return (
    <div className="Home">
      <h2>ANA SAYFA</h2>
    </div>
    
  );
}

export default Home;