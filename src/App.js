import {React, useEffect, useState, useRef} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Pdf from "./Pages/Pdf";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import TopNavigation from "./Navigation/TopNavigation";
import './App.css';
import useOnScreen from "./useOnScreen";

export default function App() {
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
  console.log(onScreen1,onScreen2,onScreen3,onScreen4)
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
    document.title = "BALAY | DİRİM - Bilgi Merkezi";
  }
  else if(onScreen4){
    setSelected(4);
    document.title = "BALAY | DİRİM - İletişim";
  }
}, [onScreen1,onScreen2,onScreen3,onScreen4]);

  return (
    <div class="container">
      <>
        <TopNavigation selected={selected} setSelected={setSelected}/>
        <section ref={ref1} id="hakkimizda" class="one">
          <About/>
        </section>
        <section ref={ref2} id="calisma_alanlarimiz" class="two">
        <h1>Çalışma Alanlarımız</h1>
        </section>
        <section ref={ref3} id="bilgi_merkezi" class="three">
          <Pdf/>
        </section>
        <section ref={ref4} id="iletisim" class="four">
        <Contact/>
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