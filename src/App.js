import React from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

import Header from "./components/Header";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
      })
    
      return (
        <ReactLenis root>
            <Header />
            <Hero />
            <Services />
            <WhyChooseUs />
            <Contact />
            <Footer />
        </ReactLenis>
      )

}

