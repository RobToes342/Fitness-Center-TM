
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from '../assets/images/fitness_woman_studio.jpg';
import kursraum from '../assets/images/fitness_kursraum.jpg';
import GlareHover from "../ReactBits/GlareHover";
import '../styles/Kurse.scss';

export default function Kurse() {

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
    <div className="kurse-page">
      <HeaderBanner title="Kurse" image={fitnessWomanStudio} />

      {/* Kursarten */}
      <section className="kurse-overview">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          Unsere Kursangebote
        </motion.h2>
        <div className="kurs-list">
          {kursBeschreibungen.map((kurs, i) => (
            <motion.div 
              key={i} 
              className="kurs-card"
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

      {/* Wochenplan */}
      <section className="wochenplan">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          Wochenplan
        </motion.h2>
        <div className="plan-container">
          {Object.entries(wochenplan).map(([tag, kurse], i) => (
            <motion.div 
              key={tag} 
              className="plan-tag"
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
      </section>

      {/* Blockkurse */}
      <section className="blockkurse">
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}>
          Blockkurse
        </motion.h2>
        <div className="blockkurse-content">
          <GlareHover><img src={kursraum} alt="Kursraum" /></GlareHover>
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