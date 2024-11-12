import Features from './components/Features';
import Partenaires from './components/Partenaires';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Hero from './components/Hero';

const App: React.FC = () => {

  return (
    <>
      <div className="min-h-screen bg-white">

        <Hero/>
        <Features />
        <Videos />
        <Partenaires />
        <Testimonials />
        <Footer />
  


      </div>
      
    </>
  )
}

export default App
