import Header from './components/Header'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Projects from './components/home/Projects'
import Techstack from './components/home/Techstack'
import Footer from './components/Footer'
import Contact from './components/home/Contact'
import {useEffect} from 'react'
function App() {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
            else {
              entry.target.classList.remove('visible');
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach((section) => observer.observe(section));
      const heros = document.querySelectorAll('.fade-in-hero');
      heros.forEach((hero) => observer.observe(hero));

      return () => observer.disconnect();
    }, []);

  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Techstack/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
