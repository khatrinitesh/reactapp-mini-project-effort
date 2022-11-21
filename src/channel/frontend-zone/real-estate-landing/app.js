import React from 'react';
import Guide from "./components/guide";
import Companies from "./components/companies";
import Hero from "./components/hero";
import Properties from "./components/properties";
import Details from "./components/details";
import GetStarted from "./components/getstarted";
import Footer from "./components/footer";

export default function CustomApp() {
  return (
    <div>
        <Hero />
        <Companies />
        <Guide />
        <Properties />
        <Details />
        <GetStarted />
        <Footer />
    </div>
  )
}
