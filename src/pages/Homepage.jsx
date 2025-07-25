//import logoLarge from '../assets/Logo-Large-White.png'
//import bgMaehler from '../assets/home-modern-bg-autor.jpg'
//import CurvedLoop from '../ReactBits/CurvedLoop';
import { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import markusMaehler from '../assets/images/Markus-Maehler.jpg';
import dumbbellVideo from '../assets/videos/DumbelAnimation.webm';
import '../styles/Homepage.scss';

function Homepage() {
  const [playArrowRight, setPlayArrowRight] = useState(false);
  const [playArrowLeft, setPlayArrowLeft] = useState(false);
  
  const videoRef = useRef(null);
  const inView = useInView(videoRef, { once: true, margin: '-100px' }); 
  // Effekt: Pfeile nach Delay starten
  useEffect(() => {
    const timer1 = setTimeout(() => setPlayArrowRight(true), 2200);
    const timer2 = setTimeout(() => setPlayArrowLeft(true), 2700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className='homepage'>
      <div className="title-screen">
        <motion.div
          className="bg-markus-maehler"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <img
            className='markus-maehler'
            src={markusMaehler}
            alt="Trainer Temming und Mähler"
          />
        </motion.div>

        {playArrowRight && (
          <motion.div
            className="arrow arrow-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <DotLottieReact
              src="https://lottie.host/4dab87fa-d9de-4272-9d2a-b49c35a55248/u84PzanyRF.lottie"
              autoplay
            />
          </motion.div>
        )}

        {playArrowLeft && (
          <motion.div
            className="arrow arrow-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <DotLottieReact
              src="https://lottie.host/3654ece5-1601-4c94-aa76-3aa4e439cf84/m40WyiAxFg.lottie"
              autoplay
            />
          </motion.div>
        )}



        {/* Namen animiert einblenden */}
        <motion.div
          className="trainer-name name-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.7, duration: 0.5 }}
        >
          Temming
        </motion.div>

        <motion.div
          className="trainer-name name-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 4, duration: 0.5 }}
        >
          Mähler
        </motion.div>
      </div>

      <div className="homepage__content">
        <div className='homepage__studio'>
          <motion.video
                ref={videoRef}
                className="dumbbell-animation"
                src={dumbbellVideo}
                autoPlay
                muted
                loop
                playsInline
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
        </div>
      </div>
    </div>
  );
}

export default Homepage;



/*     
  <CountUp
    from={0}
    to={100}
    separator=","
    direction="up"
    duration={1}
    className="count-up-text"
  /> 
*/

/* 
  <CurvedLoop 
    marqueeText="Fitness ✦ Kurse ✦ Judo ✦ Taekwando ✦ CyberFitness ✦ Körperanalye ✦ Temming ✦ Mähler ✦ Solarium ✦ Kampfsport ✦ Einzeleinführung ✦ Rehasport ✦"
    speed={1}
    curveAmount={0}
    direction="right"
    interactive={false}
    className="custom-text-style"
  />
*/

/* 
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6739.606515778288!2d7.08007212907352!3d51.177407770618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d45fdd50318b%3A0x58e21675b04a4722!2sFitness%20Centrum%20TM%20GmbH!5e1!3m2!1sde!2sde!4v1752590202661!5m2!1sde!2sde" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
*/