import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Atelier from './components/Atelier';
import Team from './components/Team';
import Events from './components/Events';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Team />
      <Atelier />
      <Gallery />
      <Services />
      <Events />
      <Partners />
      <Contact />
      <Newsletter/>
      <Footer />
    </>
  );
}

export default App;
