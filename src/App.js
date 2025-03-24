import React,{useState,useEffect} from "react";
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import ShowProject from "./components/showProject/ShowProject";
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const App = () => {
  const [activeLink, setActiveLink] = useState('#home')
  const [theme, setTheme] = useState('light');
  const [showDetails , setshowDetails] = useState(false);
  const [details , setDetails] = useState([]);
  
  const toggleTheme = () => { 
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));    
  }; 
  useEffect(() => { 
    document.body.className = theme; 
  }, [theme]);

  useEffect(() => { 
    AOS.init({ duration: 1200, 
    }); 
  }, []);
  return (
    <>
    <Header activeLink={activeLink} setActiveLink={setActiveLink} theme={theme} toggleTheme={toggleTheme} />
    <ShowProject showDetails={showDetails} details={details} setshowDetails={setshowDetails}/>
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects showDetails={showDetails} setshowDetails={setshowDetails} details={details} setDetails={setDetails} />
      <Contact/>
    </main>
      <Footer />
      <Scrollup setActiveLink={setActiveLink} />      
    </>
  );
}

export default App;
