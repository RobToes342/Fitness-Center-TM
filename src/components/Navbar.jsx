import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoLongBlack from '../assets/images/logo-long-black.png';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import '../styles/Navbar.scss';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null); // Für mobile Akkordeon

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
      // Ganz oben: Navbar immer zeigen
      setShowNavbar(true);
    } else if (currentScrollY > lastScrollY) {
      // Runter scrollen: verstecken
      setShowNavbar(false);
    } else {
      // Hoch scrollen: zeigen
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);


  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleMobileSubmenu = (title) => {
    setOpenMobileSubmenu((prev) => (prev === title ? null : title));
  };

  const links = [
    {
      title: "Studio",
      path: "/",
      sub: [
        { text: "Studio", to: "/" },
        { text: "Rehasport", to: "/rehasport" },
        { text: "TM WOMEN", to: "/tm-woman" },
        { text: "50+", to: "/50-plus" }
      ]
    },
    {
      title: "Kampfsport",
      path: "/kampfsport",
      sub: [
        { text: "Kampfsport", to: "/kampfsport" },
        { text: "Unser Verein", to: "/unser-verein" },
        { text: "Judo", to: "/judo" },
        { text: "Taekwando", to: "/taekwando" },
        { text: "Kursplan", to: "/kursplan-kampfsport" }
      ]
    },
    {
      title: "Kurse",
      path: "/kurse",
      sub: [
        { text: "Kurse", to: "/kurse" },
        { text: "Kursplan", to: "/kursplan" }
      ]
    },
    {
      title: "Über Uns",
      path: "/team",
      sub: [
        { text: "Team", to: "/team" },
        { text: "Galerie", to: "/galerie" }
      ]
    },
    {
      title: "Kontakt",
      path: "/impressum",
      sub: [
        { text: "Impressum", to: "/impressum" },
        { text: "Datenschutz", to: "/datenschutz" }
      ]
    }
  ];

  return (
    <>
    <motion.nav
      className="navbar"
      animate={{ y: showNavbar ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="logo">
        <NavLink to="/">
        <img src={logoLongBlack} alt="Logo" />
        </NavLink>
      </div>

      <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>

      <ul className="nav-links">
        {links.map(item => (
          <li key={item.title} className="dropdown">
            <NavLink to={item.path}>{item.title}</NavLink>
            <div className="dropdown-menu">
              {item.sub.map((subItem, idx) =>
                subItem.href
                  ? <a key={idx} href={subItem.href}>{subItem.text}</a>
                  : <NavLink key={idx} to={subItem.to}>{subItem.text}</NavLink>
              )}
            </div>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="offcanvas"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            {links.map(item => (
              <div key={item.title} className="mobile-item">
                <div
                  className="mobile-title"
                  onClick={() => toggleMobileSubmenu(item.title)}
                >
                  {item.title}
                </div>
                <AnimatePresence>
                  {openMobileSubmenu === item.title && (
                    <motion.div
                      className="mobile-submenu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.sub.map((subItem, idx) =>
                        subItem.href
                          ? <a key={idx} href={subItem.href} onClick={closeMenu}>{subItem.text}</a>
                          : <NavLink key={idx} to={subItem.to} onClick={closeMenu}>{subItem.text}</NavLink>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    <div className='social-media'>
      <a href="https://www.instagram.com/fitnesscentrumtm/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="link-icon" />
      </a>
      <a href="https://www.facebook.com/FitnessCentrumTM" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} className="link-icon" />
      </a>
      <a href="tel:+49212204747" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faPhoneAlt} className="link-icon" />
      </a>
    </div>
    </>
  );
}
