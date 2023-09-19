import React from 'react';
import './App.css';
import Header from './headers/header';
import Home from './home/home';
import About from './about/About';
import Skills from './skills/Skills';
import Services from './Services/Services';
import Contact from './contacts/Contact';
import Footer from './footer/Footer';
import Qualification from './qualification/Qualification';
import ScrollUp from './scrollup/ScrollUp';


function App() {



  return (
    <div className="App">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />


      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
