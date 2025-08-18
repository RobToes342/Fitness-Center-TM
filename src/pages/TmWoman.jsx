// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderBanner from "../components/HeaderBanner";
import React, { useState } from "react";
import Tarife from "../components/Tarife";
import fitnessWomanStudio from "../assets/images/woman-studio.jpg";
import fitnessWomanStudio2 from "../assets/images/fitness-woman-studio.jpg";
import fitnessWomanAthletik from "../assets/images/fitness-woman-athletik.jpg";
import fitnessWomanNautilus from "../assets/images/fitness-woman-nautilus.jpg";

import "../styles/TmWoman.scss";

export default function TmWoman() {
 const [showTarife, setShowTarife] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="tmwoman-page">
      <HeaderBanner title="TM Woman" image={fitnessWomanStudio} />

      {/* Intro Section */}
      <section className="intro">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Dein Studio – nur für Frauen
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          TM Woman bietet dir einen sicheren und motivierenden Ort, an dem du
          dich voll auf dein Training konzentrieren kannst – egal ob Einsteigerin
          oder Fortgeschrittene. Hier erwarten dich individuelle Betreuung,
          moderne Geräte und ein starkes Gemeinschaftsgefühl.
        </motion.p>
      </section>

      {/* Feature Sections */}
      <section className="features">
        <div className="feature">
          <motion.img
            src={fitnessWomanStudio2}
            alt="Fitness Studio"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <div>
            <h3>Individuelles Training</h3>
            <p>
              Ob Kraft, Ausdauer oder Beweglichkeit – wir erstellen mit dir
              gemeinsam den passenden Trainingsplan für deine Ziele.
            </p>
          </div>
        </div>

        <div className="feature reverse">
          <motion.img
            src={fitnessWomanAthletik}
            alt="Athletik Training"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <div>
            <h3>Athletik & Functional</h3>
            <p>
              Trainiere vielseitig mit unserem Functional-Equipment, verbessere
              deine Körperhaltung und entdecke neue Trainingsreize.
            </p>
          </div>
        </div>

        <div className="feature">
          <motion.img
            src={fitnessWomanNautilus}
            alt="Nautilus Geräte"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <div>
            <h3>Moderne Geräte</h3>
            <p>
              Unsere Nautilus-Geräte bieten dir effektives Training mit maximaler
              Sicherheit – ideal für jedes Fitnesslevel.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="highlight">
        <h2>Starte jetzt dein Training bei TM Woman</h2>
        <p>Erlebe eine Umgebung, die dich motiviert, inspiriert und unterstützt.</p>
        <button className="cta-btn" onClick={() => setShowTarife(true)}>
          Jetzt Tarife ansehen
        </button>
      </section>

      {showTarife && <Tarife onClose={() => setShowTarife(false)} />}
    </div>
  );
}
