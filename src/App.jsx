import Header from './components/Header'
import Hero from './components/home/Hero'
import About from './components/home/About'
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

      return () => observer.disconnect();
    }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
    </>
  )
}

export default App
