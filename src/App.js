// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
