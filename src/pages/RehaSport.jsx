// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from '../assets/images/fitness-woman-studio.jpg';
import rehaSport1 from '../assets/images/rehasport01.jpg';
import rehaSport2 from '../assets/images/rehasport02.jpg';
import rehaSport3 from '../assets/images/rehasport03.jpg';
import '../styles/Rehasport.scss';
import GlareHover from "../ReactBits/GlareHover";

export default function Rehasport() {

  const blocks = [
    {
      title: "Individuelles Rehasport-Angebot im Fitness Centrum TM",
      text: (
        <>
          <p>
            Rehasport ist eine von den gesetzlichen Krankenkassen anerkannte und ärztlich verordnete Maßnahme zur Rehabilitation. 
            Egal ob nach einer Operation, bei Rückenschmerzen, Gelenkbeschwerden oder chronischen Erkrankungen – durch regelmäßiges 
            Training in unserer Rehasport-Gruppe fördern Sie Ihre körperliche Leistungsfähigkeit und steigern Ihre Lebensqualität.
          </p>
          <ul>
            <li>Rehasport in Solingen mit Kassenzulassung</li>
            <li>Qualifizierte Betreuung durch erfahrene Trainer</li>
            <li>Individuelle Bewegungsprogramme für jeden Fitnessstand</li>
            <li>Zentrale Lage in Solingen-Mitte mit guter Erreichbarkeit</li>
          </ul>
          <p>
            Tun Sie aktiv etwas für Ihre Gesundheit – starten Sie jetzt mit Rehasport im Fitness Centrum TM in Solingen!
          </p>
          <p className="highlight">
            Vereinbaren Sie ein persönliches Beratungsgespräch unter <strong>Telefon 0212 / 204747</strong>.
          </p>
        </>
      ),
      align: "left",
      image: rehaSport1,
    },
    {
      title: "Zusatzpaket: „TM Plus“",
      text: (
        <>
          <p><strong>Beitrag:</strong> 36,00 € monatlich (18 Monate) &nbsp;|&nbsp; <strong>Anmeldegebühr:</strong> 90,00 €</p>
          <p>Unabhängig von der Verordnung bietet Ihnen das Fitness Centrum TM die Option "TM Plus" mit folgenden Vorteilen:</p>
          <ul>
            <li>Einweisung und Erstellung eines Trainingsplanes</li>
            <li>Nutzung der Ausdauer- und Krafttrainingsgeräte</li>
            <li>Teilnahme an weiteren Kursangeboten außerhalb des Rehasports</li>
            <li>Flexible Trainingszeiten im Rahmen unserer Öffnungszeiten</li>
            <li>Individuelles Gesundheits-Training bei optimaler Betreuung</li>
          </ul>
        </>
      ),
      align: "right",
      image: rehaSport2
    },
    {
      title: "Was ist Rehasport?",
      text: (
        <>
          <p>
            Rehasport ist eine ärztlich verordnete Leistung für gesetzlich Versicherte. Inhalte des Rehasports sind ein ausgewähltes 
            Übungsprogramm in der Gruppe. Die Teilnahme an diesem Sportangebot ist bei TM zweimal wöchentlich zu festen Zeiten möglich.
          </p>
          <p>
            Unser Ziel ist es, Menschen mit Funktions-, Belastungs- und Aktivitätseinschränkungen zum langfristigen und eigenverantwortlichen 
            Sporttreiben zu motivieren. Rehasport unterstützt Sie bei:
          </p>
          <ul>
            <li>Generellen Haltungsproblemen</li>
            <li>Rückenschmerzen (z.B. Bandscheibenvorfälle)</li>
            <li>Rheuma und Arthrose</li>
            <li>Gelenkerkrankungen</li>
            <li>Herz-Kreislauf-Erkrankungen</li>
            <li>Bewegungseinschränkungen nach Operationen</li>
          </ul>
          <p>
            Rehasport ist für Sie kostenfrei, wenn Sie eine ärztliche Verordnung besitzen. Sprechen Sie Ihren Arzt an – denn 
            Gesundheitsförderung ist die Basis eines guten Lebens!
          </p>
        </>
      ),
      align: "left",
      image: rehaSport3
    }
  ];

  return (
    <div className="rehasport-page">
      <HeaderBanner title="Rehasport" image={fitnessWomanStudio} />

      <section className="intro-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Rehasport in Solingen – Ihre Gesundheitsförderung mit ärztlicher Verordnung
        </motion.h2>
        <p>
          Sie suchen Rehasport in Solingen? In unserem zentral gelegenen Fitnessstudio in Solingen-Mitte bieten wir professionell 
          betreuten Rehabilitationssport – individuell abgestimmt auf Ihre gesundheitlichen Bedürfnisse.
        </p>
      </section>

      {blocks.map((block, index) => (
        <section 
          key={index} 
          className={`content-block bg-${index+1} ${block.align}`}
        >
          <div className="text">
            <h3>{block.title}</h3>
            {block.text}
          </div>
          <div className="image">
            <GlareHover>
              <img src={block.image} alt={block.title} />
            </GlareHover>
          </div>
        </section>
      ))}
    </div>
  );
}
