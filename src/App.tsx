import './App.css'
import { About } from './components/About/About'
import { CardPresentation } from './components/CardPresentation/CardPresentation'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/Navbar/NavBar'
import { Projects } from './components/Projects/Projects'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Stack } from './components/Stack/Stack'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animación en ms
    });
  }, []);

  return (
    <>
      <div className='class="scroll-smooth bg-gradient-to-b from-slate-900 to-indigo-900 font-sans"'>
        <NavBar />
        <main className="px-8">
          <CardPresentation />
          <Stack />
          <Experience />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
