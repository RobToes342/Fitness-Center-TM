import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SplitText from "../ReactBits/Spilttext";
import '../styles/InfoSections.scss';
import Kampfsport from '../assets/images/Kampfsport.jpg';
import Kurse from '../assets/images/Kurse.jpg';
import Rehasport from '../assets/images/Rehasport.jpg';
import UeberUns from '../assets/images/UeberUns.jpg';
import GlareHover from "../ReactBits/GlareHover";

export default function InfoSections() {


const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 900);

const infoData = [
  {
    title: "Über uns",
    text: "Platzhaltertext für Über uns – was macht euch besonders?",
    img: UeberUns,
    className: "section-about",
    align: "right",
    href: '/team'
  },
  {
    title: "Rehasport",
    text: "Platzhaltertext für Rehasport – Gesundheit und Prävention.",
    img: Rehasport,
    className: "section-rehasport",
    align: "left",
    href: '/rehasport'
  },
  {
    title: "Kurse",
    text: "Platzhaltertext für Kurse – Vielfalt und Spaß am Training.",
    img: Kurse,
    className: "section-kurse",
    align: "right",
    href: '/kurse'
  },
  {
    title: "Kampfsport",
    text: "Platzhaltertext für Kampfsport – Stärke und Disziplin.",
    img: Kampfsport,
    className: "section-kampfsport",
    align: "left",
    href: '/kampfsport'
  }
];

const opacity = { opacity: 0 , position: 'absolute', zIndex: '100' };

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 900 || window.innerHeight <= 900);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className="info-sections">
      {infoData.map((item, idx) => (
        <motion.section
          className={`info-block ${item.className} ${item.align === "left" ? "align-left" : "align-right"}`}
          key={idx}
          initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
        >
          <div className="info-content">
            <SplitText
                text={item.title}
                className="title-section"
                delay={150}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"    
            />
            <p>{item.text}</p>
            <NavLink to={item.href}><button>Mehr erfahren</button></NavLink>
          </div>
          <div className="info-image">
            {isMobile ?
              <img src={item.img} alt={item.title} />  
            :          
              <GlareHover>
                <img src={item.img} alt={item.title} />
              </GlareHover>
            }
          </div>
          
        </motion.section>
      ))}
      <section>
      <iframe style={opacity} width="110" height="100" src="https://www.myinstants.com/instant/metal-pipe-clang-80894/embed/" frameborder="0" scrolling="no" ></iframe>
      </section>
    </div>
  );
}
