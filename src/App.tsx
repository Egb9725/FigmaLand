import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Partenaires from './components/Partenaires';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>
      <div>

        <Header />
        <main>
          {/* Other sections such as Hero, Features */}
  
          <Features />
          <Partenaires />
          <Testimonials />
        </main>
        <Footer />
  


      </div>
      
    </>
  )
}

export default App
