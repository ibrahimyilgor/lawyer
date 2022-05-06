import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import TopNavigation from "./Navigation/TopNavigation";
import './App.css';

export default function App() {
   
  useEffect(() => {
    document.title = "BALAY | DİRİM - Ana Sayfa"
 }, []);

  return (
    <div class="container">
      <>
        <TopNavigation/>
        <section id="birinci" class="one">
          <h1>First Page</h1>
        </section>
        <section id="ikinci" class="two">
            <h1>Second Page</h1>
        </section>
        <section id="ucuncu" class="three">
          <h1>Third Page</h1>
        </section>
        <section id="dorduncu" class="four">
          <h1>Fourth Page</h1>
        </section>
        <section id="besinci" >
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