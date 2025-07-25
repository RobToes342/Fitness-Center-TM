import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';


// Importiere alle Pages
import Homepage from '../pages/Homepage';
import Kampfsport from '../pages/Kampfsport';
import UnserVerein from '../pages/UnserVerein';
import Judo from '../pages/Judo';
import Taekwando from '../pages/Taekwando';
import Kursplan from '../pages/Kursplan';
import Kurse from '../pages/Kurse';
import Team from '../pages/Team';
import Galerie from '../pages/Galerie';
import Impressum from '../pages/Impressum';
import Datenschutz from '../pages/Datenschutz';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.4,
  ease: 'easeInOut',
};

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Homepage */}
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Homepage />
          </motion.div>
        } />

        {/* Kampfsport */}
        <Route path="/kampfsport" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <Kampfsport />
          </motion.div>
        } />
        <Route path="/unser-verein" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <UnserVerein />
          </motion.div>
        } />
        <Route path="/judo" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <Judo />
          </motion.div>
        } />
        <Route path="/taekwando" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <Taekwando />
          </motion.div>
        } />
        <Route path="/kursplan" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <Kursplan />
          </motion.div>
        } />

        {/* Kurse */}
        <Route path="/kurse" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <Kurse />
          </motion.div>
        } />
        <Route path="/team" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <Team />
          </motion.div>
        } />
        <Route path="/galerie" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <Galerie />
          </motion.div>
        } />
        <Route path="/impressum" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <Impressum />
          </motion.div>
        } />
        <Route path="/datenschutz" element={
          <motion.div variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
            <Datenschutz />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}
