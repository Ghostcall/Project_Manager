import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
// import Project from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (

    
    <div className='app'>
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
      {/* <Project /> */}
    </div>

  )
}

export default App
