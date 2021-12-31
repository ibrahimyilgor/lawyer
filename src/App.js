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

export default function App() {
  
  useEffect(() => {
    document.title = "İYS HUKUK - Ana Sayfa"
 }, []);

  return (
    <Router>
      <div>
        <TopNavigation/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/hakkimizda" element={<About />} >
          </Route>
          <Route path="/iletisim" element={<Contact />}>
          </Route>
          <Route path="/" element={ <Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}