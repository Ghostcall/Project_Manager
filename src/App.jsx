import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
// import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
const App = () => {
  return (

    
    <div className='app'>
        <Router>
          <Routes>
            <Route path="/#header" element={<Header />} />
            <Route path="/#home" element={<Home />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#services" element={<Services />} />
            <Route path="/#skills" element={<Skills />} />
            <Route path="/#contact" element={<Contact />} />
            <Route path="/#footer" element={<Footer />} />
          </Routes>

          <Header />
          <Hero />
          <About />
          <Services />
          <Skills />
          <Contact />
          <Footer />
          {/* <Project /> */}

        </Router>


     


    </div>

  )
}

export default App
