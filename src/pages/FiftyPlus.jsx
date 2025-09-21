// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from "../assets/images/fitness-woman-studio.jpg";
import fitnessStudio50Plus1 from "../assets/images/fitnessstudio-50jahre-plus-1.png";
import fitnessStudio50Plus2 from "../assets/images/fitnessstudio-50jahre-plus-2.png";
import "../styles/FiftyPlus.scss";

export default function FiftyPlus() {
  const benefits = [
    "Sie gewinnen eine bessere Figur",
    "Sie verlieren überflüssige Pfunde",
    "Sie werden kräftiger und leistungsfähiger",
    "Sie schützen sich vor Rückenproblemen",
    "Sie tun viel für Ihre Gesundheit",
  ];

  return (
    <div className="fiftyplus-page">
      <HeaderBanner title="50+" image={fitnessWomanStudio} />

      <motion.div
        className="fiftyplus-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="title-fiftyplus">Generation 50+</h1>
        <h2 className="subtitle">Fit für die besten Jahre!</h2>

        <p className="intro-text">
          Tun Sie etwas für Ihre Fitness, eine bessere Figur und bessere
          Gesundheit! Nutzen Sie das spezielle Kennenlernangebot für unser
          Fitness Centrum:
        </p>

        <div className="images-grid">
          <motion.img
            src={fitnessStudio50Plus1}
            alt="Fitness 50+ Bild 1"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
          <motion.img
            src={fitnessStudio50Plus2}
            alt="Fitness 50+ Bild 2"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <h3 className="section-title">
          Funktionales Training in netter Gesellschaft!
        </h3>

        <motion.ul
          className="benefits-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {benefits.map((text, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>

        <div className="contact-box">
          <p>
            <FontAwesomeIcon icon={faPhone} className="icon" /> Rufen Sie gleich
            an und vereinbaren Sie einen Termin:{" "}
            <strong>0212 - 20 47 47</strong>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> Oder schicken
            Sie uns eine E-Mail, wir setzen uns dann mit Ihnen in Verbindung!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
