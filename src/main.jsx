import { StrictMode , useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route} from "react-router";
import '@fontsource/inter';
import '@fontsource/italianno/400.css';
import App from './App.jsx'
import Projects from './Projects.jsx'
import About from './About.jsx'
import './style.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </Router>
  </StrictMode>,
)
