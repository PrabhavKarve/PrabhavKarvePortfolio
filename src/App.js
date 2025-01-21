import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';


function App() {
  const scrollToDiv = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])


  return (
    <div className="App">
      {/*<header >
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
    </header>*/}


<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={"active navbar-link" } onClick={() => { scrollToDiv('header'); }}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={"active navbar-link" } onClick={() => { scrollToDiv('about'); }}>About</Nav.Link>
                        <Nav.Link href="#projects" className={"active navbar-link"} onClick={() => { scrollToDiv('projects'); }}>Projects</Nav.Link>
                        <Nav.Link href="#contact" className={"active navbar-link"} onClick={() => { scrollToDiv('contact'); }}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      <Header ></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
