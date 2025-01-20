import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="App">
      <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&display=swap"></link>
        <div className="header-content">
        <nav>
          <a href='#'  onClick={(e) => { e.preventDefault(); scrollToSection('header'); }}>Home</a>
          <a href='#' onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href='#' onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Project</a>
          <a href='#' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          <div className="animation start-home"></div>
        </nav>
      </div>
    </header>
      <Header ></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
