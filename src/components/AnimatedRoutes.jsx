import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Homepage from '../pages/Homepage';
import Kampfsport from '../pages/Kampfsport';
import Kurse from '../pages/Kurse';
import UeberUns from '../pages/UeberUns';
import Kontakt from '../pages/Kontakt';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.5, ease: "easeInOut" };

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial="initial" animate="in" exit="out"
            variants={pageVariants} transition={pageTransition}>
            <Homepage />
          </motion.div>
        } />
        <Route path="/kampfsport" element={
          <motion.div initial="initial" animate="in" exit="out"
            variants={pageVariants} transition={pageTransition}>
            <Kampfsport />
          </motion.div>
        } />
        <Route path="/kurse" element={
          <motion.div initial="initial" animate="in" exit="out"
            variants={pageVariants} transition={pageTransition}>
            <Kurse />
          </motion.div>
        } />
        <Route path="/ueber-uns" element={
          <motion.div initial="initial" animate="in" exit="out"
            variants={pageVariants} transition={pageTransition}>
            <UeberUns />
          </motion.div>
        } />
        <Route path="/kontakt" element={
          <motion.div initial="initial" animate="in" exit="out"
            variants={pageVariants} transition={pageTransition}>
            <Kontakt />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}
