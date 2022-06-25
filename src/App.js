import {React, useEffect, useState, useRef} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Pdf from "./Pages/Pdf";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import WorkingAreas from "./Pages/WorkingAreas";

import TopNavigation from "./Navigation/TopNavigation";
import './App.css';
import useOnScreen from "./useOnScreen";
import useWindowSize from "./useWindowSize";
import ContactMobile from "./Pages/ContactMobile";
import { Dimensions } from "react-native-web";

export default function App() {

  const windowSize = useWindowSize();

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const onScreen1 = useOnScreen (ref1, "-50%");
  const onScreen2 = useOnScreen (ref2, "-50%");
  const onScreen3 = useOnScreen (ref3, "-50%");
  const onScreen4 = useOnScreen (ref4, "-50%");

  const [selected,setSelected] = useState(0);

  useEffect(() => {
    document.title = "BALAY | DİRİM"
 }, []);

 useEffect(() => {
  //console.log(onScreen1,onScreen2,onScreen3,onScreen4, ref4)
  if(onScreen1){
    setSelected(1);
    document.title = "BALAY | DİRİM - Hakkımızda";
  }
  else if(onScreen2){
    setSelected(2);
    document.title = "BALAY | DİRİM - Çalışma Alanlarımız";
  }
  else if(onScreen3){
    setSelected(3);
    document.title = "BALAY | DİRİM - Bilgi Bankası";
  }
  else if(onScreen4){
    setSelected(4);
    document.title = "BALAY | DİRİM - İletişim";
  }
}, [onScreen1,onScreen2,onScreen3,onScreen4]);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const windowHeight = Dimensions.get('window').height;

  return (
    <div class="container" style={{height: windowHeight * 0.85, marginTop: windowHeight * 0.15}} >
      <>
        <TopNavigation selected={selected} setSelected={setSelected}/>
        <section style={{height: windowHeight * 0.85}} ref={ref1} id="hakkimizda" class="one">
          <About/>
        </section>
        <section style={{height: windowHeight * 0.85}}  ref={ref2} id="calisma_alanlarimiz" class="two">
          <WorkingAreas/>
        </section>
        <section style={{height: windowHeight * 0.85}}  ref={ref3} id="bilgi_merkezi" class="three">
          <Pdf/>
        </section>
        <section style={{height: windowHeight * 0.85}}  ref={ref4} id="iletisim" class="four">
          {windowSize.innerHeight<=windowSize.innerWidth ? <Contact/> : <ContactMobile selected={selected}/>}
        </section>
      </>
    </div>
    /* <Router>
      <div className="Root">
        <TopNavigation/>
        <Routes>
          <Route path="/hakkimizda" element={<About />} >
          </Route>
          <Route path="/iletisim" element={<Contact />}>
          </Route>
          <Route path="/" element={ <Home />}>
          </Route>
        </Routes>
      </div>
    </Router> */
    
  );
}