import { useEffect } from 'react';
import './styles/App.scss'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AnimatedRoutes from './routes/AnimatedRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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