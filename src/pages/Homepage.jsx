import { useState, useEffect, useRef } from 'react';
import CountUp from '../ReactBits/CountUp.jsx';
import InfoSections from '../components/InfoSections.jsx';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import markusMaehler from '../assets/images/Markus-Maehler.jpg';
import dumbbellVideo from '../assets/videos/DumbelAnimation.webm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCertificate, faCalendarDays, faComments } from "@fortawesome/free-solid-svg-icons";
import '../styles/Homepage.scss';

function Homepage() {
  const [playArrowRight, setPlayArrowRight] = useState(false);
  const [playArrowLeft, setPlayArrowLeft] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 800);
  const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' }); 

  const specials = [
    { icon: faHeart, title: "Familiäre Atmosphäre", text: "Wir trainieren mit Leidenschaft und echtem Einsatz." },
    { icon: faCertificate, title: "Professionelle Trainer", text: "Ausgebildete Trainer mit Erfahrung und Know‑how." },
    { icon: faCalendarDays, title: "Flexibilität", text: "Training, wann es zu deinem Leben passt." },
    { icon: faComments, title: "Betreuung", text: "Immer für Fragen & Motivation an deiner Seite." },
  ];

  const counts = [
    { count: 1000, text1: "MEHR ALS", text2: "ZUFRIEDENE MITGLIEDER" },
    { count: 40, text1: "ÜBER", text2: "KURSE" },
    { count: 40, text1: "STOLZE", text2: "JAHRE ERFAHRUNG" },
    { count: 23, text1: "MOTIVIERTE", text2: "MITARBEITER IM TEAM" },
  ]

  useEffect(() => {
    const checkScreen = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 800 || window.innerHeight <= 800);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);


  useEffect(() => {
    const timer1 = setTimeout(() => setPlayArrowRight(true), 1200);
    const timer2 = setTimeout(() => setPlayArrowLeft(true), 1700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

let positions;

if (screenWidth > 1400) {
  // Große Abstände (Desktop)
  positions = [
    { x: -450, y: -250 },
    { x: 450, y: -250 },
    { x: -450, y: 250 },
    { x: 450, y: 250 },
  ];
} else if (screenWidth > 800) {
  // Zwischen 700px und 1200px → dynamisch anpassen
  const offsetX = screenWidth * 0.3; // z.B. 30% der Breite
  const offsetY = screenWidth * 0.15; // z.B. 15% der Breite
  positions = [
    { x: -offsetX, y: -offsetY },
    { x: offsetX, y: -offsetY },
    { x: -offsetX, y: offsetY },
    { x: offsetX, y: offsetY },
  ];
} else {
  // Unter 700px → wird eh nicht benutzt (weil isMobile == true)
  positions = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];
}


  return (
    <div className='homepage'>
      <motion.p
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
      >Dein <span className='red'>Fitness Zentrum</span> in Solingen</motion.p>
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
            className="arrow arrow-right ${{}}"
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
          transition={{ delay: isMobile ? 1.2 : 2.7, duration: 0.5 }}
        >
          <span className='red'>T</span>emming
        </motion.div>

        <motion.div
          className="trainer-name name-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: isMobile ? 1.7 : 3, duration: 0.5 }}
        >
          <span className='red'>M</span>ähler
        </motion.div>
      </div>
      
      {isMobile ? (
        // 📱 Mobile View
        <div className="homepage__mobile-specials">
          {specials.map((item, idx) => (
            <motion.div
              className='special-block-mobile'
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: 'easeOut' }}
            >
              <div className='special-icon'>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className='special-title'>{item.title}</h3>
              <p className='special-text'>{item.text}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        // 🖥 Desktop View bleibt wie gehabt
        
          <div className='homepage__studio' ref={ref}>
            <motion.video
              className="dumbbell-animation"
              src={dumbbellVideo}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
            />

            {specials.map((item, idx) => (
              <motion.div
                className={`special-block position-${idx}`}
                key={idx}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                animate={
                  inView
                    ? { 
                        opacity: 1, 
                        x: positions[idx].x, 
                        y: positions[idx].y,
                        scale: 1 
                      }
                    : {}
                }
                transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.45 }}
              >
                <div className='special-icon'>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className='special-title'>{item.title}</h3>
                <p className='special-text'>{item.text}</p>
              </motion.div>
            ))}
          </div>
      )}
    <InfoSections/>
      <div className='homepage__info'>
        {counts.map((item, idx) => (
          <motion.div
            className='box-counter idx'
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: 'easeOut' }}
          >
            <p className='info-text'>{item.text1}</p>
            <CountUp
              from={0}
              to={item.count}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
              delay={idx * 0.5}
            /> 
            <p className='info-text'>{item.text2}</p>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Homepage;

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