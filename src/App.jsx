import { React, useState } from "react";
import Topbar from "./components/topbar/topbar.jsx";
import Intro from "./components/intro/intro.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Works from "./components/works/works.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";
import Contact from "./components/contact/contact.jsx";
import Menu from "./components/menu/menu.jsx"
import "./app.scss";

function App() {
    //state
    //state for hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
