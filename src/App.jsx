import { useState } from 'react'
import './styling/App.scss'
import './styling/Homepage.scss';

import AnimatedRoutes from './components/AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
            {/* <Navbar /> */}
           <main id="main">
           <AnimatedRoutes />
           </main>
         {/* <Footer /> */}
       </Router>
    </>
  )
}

export default App
