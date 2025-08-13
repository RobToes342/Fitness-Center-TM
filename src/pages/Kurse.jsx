import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from '../assets/images/fitness-woman-studio.jpg';
import kursraum from '../assets/images/fitness-kursraum.jpg';
import GlareHover from "../ReactBits/GlareHover";
import '../styles/Kurse.scss';

export default function Courses() {

   useEffect(() => {
    document.querySelectorAll(".weekly-schedule li").forEach((item) => {
      if (item.textContent.toLowerCase().includes("#cyberfitness")) {
        item.style.opacity = "0.6";
      }
    });
  }, []);

  const kursBeschreibungen = [
    { name: "#CyberFitness", beschreibung: "Virtuelle Kurse mit innovativen Workouts – flexibel und effektiv." },
    { name: "Rücken-Fit", beschreibung: "Kräftigung und Mobilisierung für einen gesunden Rücken." },
    { name: "Wirbelsäulen-Gymnastik", beschreibung: "Gezielte Übungen zur Stabilisierung und Entlastung der Wirbelsäule." },
    { name: "Power Step", beschreibung: "Dynamisches Step-Training für Ausdauer und Kraft." },
    { name: "Ka-Bo", beschreibung: "Kampfsport-inspiriertes Ganzkörpertraining mit hohem Kalorienverbrauch." },
    { name: "Fatburner", beschreibung: "Intensives Ausdauertraining zur Fettverbrennung." },
    { name: "Functional Body Training", beschreibung: "Ganzkörper-Workout für Kraft, Stabilität und Beweglichkeit." },
    { name: "Bauch/Rücken", beschreibung: "Kräftigung der Körpermitte für mehr Stabilität im Alltag." },
    { name: "Work-Step-Out", beschreibung: "Kombination aus Step-Aerobic und Kräftigungsübungen." },
    { name: "WORLD JUMPING®", beschreibung: "Trampolin-Workout mit maximalem Spaßfaktor." },
    { name: "Pump Intervall", beschreibung: "Kräftigungstraining mit Langhanteln im Intervallformat." },
    { name: "TM Selfdefence", beschreibung: "Selbstverteidigung – separat buchbar, Einzelstunden oder 8er-Gruppen." }
  ];

  const wochenplan = {
    Montag: [
      "09:00 - 10:00 #CyberFitness",
      "10:30 - 11:15 Rücken-Fit I+II",
      "11:30 - 12:15 Rehasport (Kurs 3)",
      "13:00 - 14:00 #CyberFitness",
      "14:00 - 15:00 #CyberFitness",
      "16:30 - 17:15 Rehasport (Kurs 2)",
      "17:30 - 18:30 #CyberFitness",
      "18:30 - 19:00 Wirbelsäulen-Gymnastik I+II",
      "19:00 - 19:45 Power Step II/Workout",
      "20:00 - 21:00 #CyberFitness"
    ],
    Dienstag: [
      "08:00 - 09:00 #CyberFitness",
      "10:00 - 10:45 Rehasport (Kurs 1)",
      "11:00 - 12:00 #CyberFitness",
      "12:00 - 13:00 #CyberFitness",
      "13:00 - 14:00 #CyberFitness",
      "14:00 - 15:00 #CyberFitness",
      "15:00 - 16:00 #CyberFitness",
      "16:00 - 17:00 #CyberFitness",
      "18:00 - 18:45 #CyberFitness",
      "19:00 - 19:45 Ka-Bo II",
      "20:00 - 20:45 #CyberFitness"
    ],
    Mittwoch: [
      "10:00 - 10:45 Rücken-Fit/Rehasport",
      "11:00 - 12:00 #CyberFitness",
      "12:00 - 13:00 #CyberFitness",
      "13:00 - 14:00 #CyberFitness",
      "14:00 - 15:00 #CyberFitness",
      "15:00 - 16:00 #CyberFitness",
      "16:30 - 17:15 Rehasport (Kurs 2)",
      "17:15 - 18:00 Rehasport*",
      "18:15 - 19:00 Fatburner I",
      "19:00 - 19:45 Functional Body Training I+II",
      "20:00 - 21:00 #CyberFitness"
    ],
    Donnerstag: [
      "08:00 - 09:00 #CyberFitness",
      "09:00 - 10:00 #CyberFitness",
      "10:00 - 11:00 #CyberFitness",
      "11:00 - 12:00 #CyberFitness",
      "12:00 - 13:00 #CyberFitness",
      "13:00 - 14:00 #CyberFitness",
      "14:00 - 15:00 #CyberFitness",
      "15:00 - 16:00 #CyberFitness",
      "17:00 - 17:45 Rehasport (Kurs 3)",
      "17:45 - 18:30 Bauch/Rücken/Rehasport",
      "18:30 - 19:15 Rücken-Fit/Rehasport",
      "20:00 - 21:00 #CyberFitness"
    ],
    Freitag: [
      "9:30 - 10:15 Rehasport (Kurs 1)",
      "11:00 - 12:00 #CyberFitness",
      "12:00 - 13:00 #CyberFitness",
      "13:00 - 14:00 #CyberFitness",
      "14:00 - 15:00 #CyberFitness",
      "15:00 - 16:00 #CyberFitness",
      "16:00 - 17:00 #CyberFitness",
      "17:30 - 18:30 Work - Step - Out",
      "18:30 - 19:00 #CyberFitness",
      "19:00 - 20:00 #CyberFitness",
      "20:00 - 21:00 #CyberFitness"
    ],
    Samstag: [
      "09:00 - 10:00 #CyberFitness",
      "10:00 - 11:00 #CyberFitness",
      "11:00 - 12:00 #CyberFitness",
      "12:00 - 13:00 #CyberFitness",
      "13:00 - 14:00 #CyberFitness",
      "14:00 - 15:00 #CyberFitness"
    ],
    Sonntag: [
      "09:00 - 10:00 #CyberFitness",
      "10:00 - 11:00 #CyberFitness",
      "11:00 - 12:00 #CyberFitness",
      "12:00 - 13:00 #CyberFitness",
      "13:00 - 14:00 #CyberFitness",
      "14:00 - 15:00 #CyberFitness"
    ]
  };

  return (
    <div className="courses-page">
      <HeaderBanner title="Kurse" image={fitnessWomanStudio} />

      {/* Course Types */}
      <section className="courses-overview">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          Unsere Kursangebote
        </motion.h2>
        <motion.h3 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          im Groupfitness-Raum mit Schwingboden
        </motion.h3>
        <div className="course-list">
          {kursBeschreibungen.map((kurs, i) => (
            <motion.div 
              key={i} 
              className="course-card"
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.4, delay:i*0.05}}
            >
              <h3>{kurs.name}</h3>
              <p>{kurs.beschreibung}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Weekly Plan */}
      <section className="weekly-schedule">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          Wochenplan
        </motion.h2>
        <div className="schedule-container">
          {Object.entries(wochenplan).map(([tag, kurse], i) => (
            <motion.div 
              key={tag} 
              className="schedule-day"
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.4, delay:i*0.05}}
            >
              <h3>{tag}</h3>
              <ul>
                {kurse.map((kurs, idx) => <li key={idx}>{kurs}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
          <div className="weekly-info">
            <p>Stufe I = Einsteiger</p>
            <p>Stufe II = Fortgeschrittene</p>
            <p>* = Kurs in Planung</p>
            <p>Bitte für alle Kurse am Empfang einchecken.</p>
            <p>Kurse finden ab 6 Teilnehmern statt</p>
            <p>WORLD JUMPING® maximal 8 Teilnehmer/innen (#Cyberfitness)</p>
            <p>Pump Intervall: maximal 12 Teilnehmer/innen pro Kurs (#Cyberfitness)</p>
            <p>TM Selfdefence: Selbstverteidigungs-Kurse separat buchbar (Einzelstunden oder 8er Gruppen)</p>
          </div>
      </section>

      {/* Block Courses */}
      <section className="block-courses">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          Blockkurse
        </motion.h2>
        <div className="block-courses-content">
          <img src={kursraum} alt="Kursraum" />
          <div>
            <p>
              Zusätzlich zu unserem laufenden Kursprogramm bieten wir regelmäßig Blockkurse an – 
              besondere Angebote, die es bisher nicht gibt. Bei großem Zuspruch haben diese gute Chancen, 
              ins feste Programm aufgenommen zu werden.
            </p>
            <p>
              Blockkurse sind für Mitglieder vergünstigt, aber auch für Nicht-Mitglieder buchbar.
              Achten Sie auf unsere Aushänge, Ankündigungen in der Zeitung und auf Facebook!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
