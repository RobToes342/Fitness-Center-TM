import { useState } from 'react'
import './styling/App.scss'
import './styling/Homepage.scss';
import './styling/Footer.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
          <Navbar />
          <main id="main">
           <AnimatedRoutes />
          </main>
         <Footer />
       </Router>
    </>
  )
}

export default App