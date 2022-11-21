import React from 'react';
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Experience from "./components/experience";
import About from "./components/about";

export default function CustomApp() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Experience />
        <About />
        <Footer />
    </div>
  )
}
