import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Expertise from './components/Expertise';
import Value from './components/Value';
import Benefits from './components/Benefits';
import Cta from './components/Cta';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header /> 
      <Home />
      <Expertise />
      <Value />
      <Benefits />
      <Cta />
      <Team />
      <Testimonials />
      <News />
      <Footer />
    </>
  )
}

export default App
