import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./home/AboutMe/AboutMe";
import Languages from "./home/Languages/Languages";
import Contact from "./home/contact/Contact";
import Nav from "./nav/Nav";

// import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Home />
    <About />
    <Languages />
    <Contact />
      </div>
    </Router>
  );
}

export default App;