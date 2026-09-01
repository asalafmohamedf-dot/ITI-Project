import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Hero from "./components/Hero-section/Hero";
import Side from "./components/Side-section/Side";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Hero />
      <Side />
      <Footer />
    </>
  );
}

export default App;
