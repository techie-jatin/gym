import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useReveal from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Inspired from "./components/Inspired";
import Features from "./components/Features";
import Programs from "./components/Programs";
import Experience from "./components/Experience";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function Landing() {
  useReveal();
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Inspired />
        <Features />
        <Programs />
        <Experience />
        <Trainers />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
