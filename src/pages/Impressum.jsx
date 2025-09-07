// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from "../assets/images/fitness-woman-studio.jpg";
import "../styles/Impressum.scss";

const sections = [
  {
    title: "Allgemeine Informationen",
    content: (
      <>
        <p>
          Inhaltlich Verantwortliche gemäß § 10 Absatz 3 MDStV: <br />
          Marcus Temming und Dirk Mähler
        </p>
        <p>
          Fitness Centrum TM GmbH <br />
          Konrad-Adenauer-Str. 21 <br />
          42651 Solingen <br />
          Tel: 0212 / 204747 <br />
          Fax: 0212 / 17976 <br />
          E-Mail:{" "}
          <a href="mailto:info@fitness-tm.de">info@fitness-tm.de</a> <br />
          Geschäftsführer: Marcus Temming / Dirk Mähler <br />
          Eingetragen im Handelsregister Wuppertal HRB 15676 <br />
          Umsatzsteuer-ID: DE 12858590162
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer, Copyright und sonstige Hinweise",
    content: (
      <>
        <h3>E-Mail Adressen</h3>
        <p>
          Das Benutzen der E-Mail-Adressen dieser Webseite zu Werbezwecken usw.
          wird nicht genehmigt und bei Missbrauch strafrechtlich verfolgt.
        </p>

        <h3>Disclaimer</h3>
        <p>
          Alle Rechte vorbehalten. Diese Website unterliegt dem Copyright nach
          deutschem Recht. Das Kopieren dieser Inhalte ist streng untersagt.
          Insbesondere dürfen Nachdruck, Aufnahme in Online-Dienste und Internet
          und Vervielfältigung auf Datenträger wie CD-ROM, DVD-ROM etc. nur nach
          vorheriger schriftlicher Zustimmung der Fitness Centrum TM GmbH
          erfolgen.
        </p>

        <h3>Haftungshinweis</h3>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich. Hiermit
          distanzieren wir uns ausdrücklich von allen Inhalten aller gelinkten
          und gelisteten Seiten auf der Webseite. Diese Erklärung gilt für alle
          angebrachten Links auf dieser Domain.
        </p>
      </>
    ),
  },
  {
    title: "Datenschutzbeauftragter und Datenschutzerklärung",
    content: (
      <>
        <p>
          Datenschutzbeauftragter: Roman Senga <br />
          E-Mail:{" "}
          <a href="mailto:info@rehasport-finder.de">
            info@rehasport-finder.de
          </a>
        </p>
        <p>
          Unsere Datenschutzerklärung finden Sie{" "}
          <a href="/datenschutz">hier</a>.
        </p>
      </>
    ),
  },
  {
    title: "Website: Gestaltung und Support",
    content: (
      <>
        <p>
          Die Gestaltung der Website erfolgte unter Nutzung einer Vorlage von
          templatemonster.com durch:
        </p>
        <p>
          JB Design <br />
          Inhaber: Janina Bartsch <br />
          Heidberg 21 <br />
          42655 Solingen <br />
          <a href="mailto:info@bartsch.design">info@bartsch.design</a> <br />
          <a href="https://www.bartsch.design" target="_blank">
            www.bartsch.design
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Bildnachweise",
    content: (
      <ul>
        <li>Innenaufnahmen Studio: JB Design</li>
        <li>Personenaufnahmen Temming/Mähler: Heiterbiswolkig</li>
        <li>
          Teamfoto: © Michael Sieber,{" "}
          <a href="https://www.bilderwerkstatt21.de" target="_blank">
            www.bilderwerkstatt21.de
          </a>
        </li>
        <li>Fotos im Bereich Galerie: Dirk Mähler, Marcus Temming, JB Design</li>
        <li>Foto Kopfbereich "Rehasport": © Robert Kneschke / Fotolia</li>
        <li>
          Foto 1 im Bereich "Fitness/Rehasport": © stock.adobe.com /
          Prostock-studio
        </li>
        <li>
          Foto 2 im Bereich "Fitness/Rehasport": © stock.adobe.com /
          Christian Schwier
        </li>
        <li>
          Foto 3 im Bereich "Fitness/Rehasport": © stock.adobe.com / LIGHTFIELD
          STUDIOS
        </li>
        <li>
          Foto 1 im Bereich "Fitness/50+": © stock.adobe.com / Mladen
        </li>
        <li>Foto 2 im Bereich "Fitness/50+": © stock.adobe.com / Daniel</li>
        <li>
          Foto Startseite, Abschnitt "Sport": © contrastwerkstatt / Fotolia
        </li>
        <li>Foto BFC, Abschnitt "Kinderjudo": © OLJensa / Fotolia</li>
        <li>
          Fotos inBody-Körperanalyse: © InBody Europe B.V. Niederlassung
          Deutschland
        </li>
        <li>Fotos #Cyberfitness: © CyberConcept GmbH</li>
      </ul>
    ),
  },
];

export default function Impressum() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="impressum-page">
      <HeaderBanner title="Impressum" image={fitnessWomanStudio} />

      <motion.div
        className="impressum-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {sections.map((section, i) => (
          <div
            className={`accordion-item ${openIndex === i ? "open" : ""}`}
            key={i}
          >
            <button className="accordion-header" onClick={() => toggleSection(i)}>
              <h2>{section.title}</h2>
              <span className="plus-minus">
                <span></span>
                <span></span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  className="accordion-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {section.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <h1 className="map-title">Hier finden Sie uns</h1>
        <div className="map-container">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6739.606515778288!2d7.08007212907352!3d51.177407770618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d45fdd50318b%3A0x58e21675b04a4722!2sFitness%20Centrum%20TM%20GmbH!5e1!3m2!1sde!2sde!4v1752590202661!5m2!1sde!2sde"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
