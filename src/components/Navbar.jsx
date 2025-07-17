import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styling/Navbar.scss';
import longLogo from '../assets/Long-Logo.png'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setShadow(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`navbar ${shadow ? 'shadow' : ''}`}
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div >
        <NavLink to="/" end>
        <img className="logo" src={longLogo}/>
        </NavLink>
      </div>

      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" end>Studio</NavLink></li>
        <li><NavLink to="/kampfsport">Kampfsport</NavLink></li>
        <li><NavLink to="/kurse">Kurse</NavLink></li>
        <li><NavLink to="/ueber-uns">Über Uns</NavLink></li>
        <li><NavLink to="/kontakt">Kontakt</NavLink></li>
      </ul>

      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
    </motion.nav>
  );
}
