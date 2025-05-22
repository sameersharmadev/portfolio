import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route} from "react-router";
import '@fontsource/inter';
import App from './App.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import About from './About.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
