// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from "../assets/images/fitness-woman-studio.jpg";
import "../styles/Datenschutz.scss";

const sections = [
  {
    title: "Allgemeine Informationen",
    content: (
      <p>
        Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen.
        Datenschutz hat einen besonders hohen Stellenwert für die
        Geschäftsleitung der Fitness Centrum TM GmbH sowie für den Verein BFC
        Solingen e.V. Der Einfachheit halber sprechen wir nachfolgend von der
        Fitness Centrum TM GmbH, alle Inhalte gelten aber gleichlautend ebenfalls
        für den Verein BFC Solingen e.V. Eine Nutzung der Internetseiten der
        Fitness Centrum TM GmbH ist grundsätzlich ohne jede Angabe
        personenbezogener Daten möglich. Sofern eine betroffene Person besondere
        Services unseres Unternehmens über unsere Internetseite in Anspruch
        nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten
        erforderlich werden. Ist die Verarbeitung personenbezogener Daten
        erforderlich und besteht für eine solche Verarbeitung keine gesetzliche
        Grundlage, holen wir generell eine Einwilligung der betroffenen Person
        ein. Die Verarbeitung personenbezogener Daten, beispielsweise des
        Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer
        betroffenen Person, erfolgt stets im Einklang mit der
        Datenschutz-Grundverordnung und in Übereinstimmung mit den für die
        Fitness Centrum TM GmbH geltenden landesspezifischen
        Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser
        Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns
        erhobenen, genutzten und verarbeiteten personenbezogenen Daten
        informieren. Ferner werden betroffene Personen mittels dieser
        Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt. Die
        Fitness Centrum TM GmbH hat als für die Verarbeitung Verantwortlicher
        zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen
        möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten
        personenbezogenen Daten sicherzustellen. Dennoch können
        internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken
        aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann.
        Aus diesem Grund steht es jeder betroffenen Person frei,
        personenbezogene Daten auch auf alternativen Wegen, beispielsweise
        telefonisch, an uns zu übermitteln.
      </p>
    ),
  },
  {
    title: "1. Begriffsbestimmungen",
    content: (
      <p className="text-left">
        Die Datenschutzerklärung der Fitness Centrum TM GmbH beruht auf den
        Begrifflichkeiten der DSGVO. Verwendet werden u.a.:
        <br />
        a) Personenbezogene Daten – alle Informationen, die sich auf eine
        identifizierte oder identifizierbare natürliche Person beziehen. <br />
        b) Betroffene Person – jede identifizierte oder identifizierbare Person,
        deren personenbezogene Daten verarbeitet werden. <br />
        c) Verarbeitung – jeder Vorgang im Zusammenhang mit personenbezogenen
        Daten, z. B. Erheben, Speichern, Löschen. <br />
        d) Einschränkung der Verarbeitung – Markierung gespeicherter Daten zur
        Einschränkung. <br />
        e) Profiling – automatisierte Verarbeitung personenbezogener Daten zur
        Bewertung persönlicher Aspekte. <br />
        f) Pseudonymisierung – Verarbeitung, bei der Daten ohne Zusatzinfos nicht
        mehr einer Person zugeordnet werden können. <br />
        g) Verantwortlicher – Person oder Stelle, die über Zwecke und Mittel der
        Verarbeitung entscheidet. <br />
        h) Auftragsverarbeiter – Stelle, die im Auftrag des Verantwortlichen
        Daten verarbeitet. <br />
        i) Empfänger – Stelle, der personenbezogene Daten offengelegt werden.{" "}
        <br />
        j) Dritter – jede Person oder Stelle außer Betroffenen, Verantwortlichen
        und Auftragsverarbeitern. <br />
        k) Einwilligung – freiwillig abgegebene Willensbekundung zur Verarbeitung
        personenbezogener Daten.
      </p>
    ),
  },
  {
    title: "2. Name und Anschrift des für die Verarbeitung Verantwortlichen",
    content: (
      <p>
        Verantwortlicher im Sinne der DSGVO ist die:
        <br />
        Fitness Centrum TM GmbH <br />
        Konrad-Adenauer-Str. 21 <br />
        42651 Solingen <br />
        Deutschland <br />
        Tel.: 0212/204747 <br />
        E-Mail: fitness-tm@t-online.de <br />
        Website: www.fitness-tm.de <br />
        Datenschutzbeauftragter: Roman Senga, E-Mail: info@rehasport-finder.de
      </p>
    ),
  },
  {
    title: "3. Erfassung von allgemeinen Daten und Informationen",
    content: (
      <p>
        Bei jedem Aufruf der Internetseite werden allgemeine Daten (z. B.
        Browsertyp, Betriebssystem, Referrer, Unterseiten, Datum/Uhrzeit,
        IP-Adresse, ISP) gespeichert. Diese Daten dienen der korrekten
        Auslieferung, Optimierung, Systemsicherheit sowie Strafverfolgung im
        Falle eines Angriffs. Rückschlüsse auf die betroffene Person werden nicht
        gezogen. Daten werden anonym statistisch ausgewertet und getrennt von
        personenbezogenen Daten gespeichert.
      </p>
    ),
  },
  {
    title: "4. Kontaktmöglichkeit über die Internetseite",
    content: (
      <p>
        Die Internetseite enthält gesetzlich vorgeschriebene Angaben für eine
        schnelle Kontaktaufnahme (z. B. E-Mail). Werden personenbezogene Daten
        per E-Mail oder Kontaktformular übermittelt, erfolgt Speicherung nur zur
        Bearbeitung und Kontaktaufnahme. Keine Weitergabe an Dritte.
      </p>
    ),
  },
  {
    title:
      "5. Routinemäßige Löschung und Sperrung von personenbezogenen Daten",
    content: (
      <p>
        Personenbezogene Daten werden nur so lange verarbeitet und gespeichert,
        wie der Zweck es erfordert oder eine gesetzliche Aufbewahrungsfrist
        besteht. Entfällt der Zweck oder läuft die Frist ab, erfolgt routinemäßig
        Sperrung oder Löschung.
      </p>
    ),
  },
  {
    title: "6. Rechte der betroffenen Person",
    content: (
      <p>
        Betroffene Personen haben folgende Rechte: <br />
        a) Bestätigung, ob Daten verarbeitet werden. <br />
        b) Auskunft über gespeicherte personenbezogene Daten. <br />
        c) Berichtigung unrichtiger Daten. <br />
        d) Löschung personenbezogener Daten („Recht auf Vergessenwerden“). <br />
        e) Einschränkung der Verarbeitung. <br />
        f) Datenübertragbarkeit. <br />
        g) Widerspruch gegen Verarbeitung, insbes. für Direktwerbung. <br />
        h) keine ausschließlich automatisierte Entscheidungsfindung
        einschließlich Profiling. <br />
        i) Widerruf erteilter Einwilligungen.
      </p>
    ),
  },
  {
    title:
      "7. Datenschutz bei Bewerbungen und im Bewerbungsverfahren",
    content: (
      <p>
        Bewerberdaten werden ausschließlich zum Zweck der Abwicklung des
        Bewerbungsverfahrens verarbeitet. Übermittlung kann auch per E-Mail oder
        Formular erfolgen. Bei Einstellung Speicherung zur Durchführung des
        Arbeitsverhältnisses, bei Absage Löschung nach zwei Monaten (außer
        berechtigte Interessen wie Beweispflicht bestehen).
      </p>
    ),
  },
  {
    title: "8. Rechtsgrundlage der Verarbeitung",
    content: (
      <p>
        Rechtsgrundlagen: <br />
        Art. 6 Abs. 1 lit. a DSGVO – Einwilligung. <br />
        Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung. <br />
        Art. 6 Abs. 1 lit. c DSGVO – rechtliche Verpflichtung. <br />
        Art. 6 Abs. 1 lit. d DSGVO – lebenswichtige Interessen. <br />
        Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse unseres Unternehmens
        oder Dritter (z. B. Kundenbeziehung).
      </p>
    ),
  },
  {
    title:
      "9. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden",
    content: (
      <p>
        Basiert die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO, ist unser
        berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zum
        Wohlergehen unserer Mitarbeiter und Anteilseigner.
      </p>
    ),
  },
  {
    title:
      "10. Dauer, für die die personenbezogenen Daten gespeichert werden",
    content: (
      <p>
        Maßgeblich sind gesetzliche Aufbewahrungsfristen. Nach Ablauf werden die
        Daten gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder
        Vertragsanbahnung benötigt werden.
      </p>
    ),
  },
  {
    title:
      "11. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten",
    content: (
      <p>
        Bereitstellung personenbezogener Daten kann gesetzlich vorgeschrieben
        sein (z. B. Steuer), sich aus Vertrag ergeben oder für
        Vertragsschluss erforderlich sein. Nichtbereitstellung kann dazu führen,
        dass Vertrag nicht zustande kommt. Betroffene werden im Einzelfall
        aufgeklärt.
      </p>
    ),
  },
  {
    title: "12. Bestehen einer automatisierten Entscheidungsfindung",
    content: (
      <p>
        Als verantwortungsbewusstes Unternehmen verzichten wir auf automatische
        Entscheidungsfindung oder Profiling.
      </p>
    ),
  },
  {
    title: "Fußnote",
    content: (
      <p>
        Diese Datenschutzerklärung wurde durch den
        Datenschutzerklärungs-Generator von externem DSB München in Kooperation
        mit der RC GmbH und den Rechtsanwälten von WBS-LAW erstellt.
      </p>
    ),
  },
];

export default function Datenschutz() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="datenschutz-page">
      <HeaderBanner title="Datenschutzerklärung" image={fitnessWomanStudio} />

      <motion.div
        className="datenschutz-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="download-link">
          <a href="../../src/downloads/fitness_centrum_tm_datenschutzerklaerung_2025.pdf" download>
            Unsere Datenschutzerklärung können Sie hier herunterladen (PDF, ca.
            1MB)
          </a>
        </div>

        {sections.map((section, i) => (
          <div
            className={`accordion-item ${openIndex === i ? "open" : ""}`}
            key={i}
          >
            <button
              className="accordion-header"
              onClick={() => toggleSection(i)}
            >
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
      </motion.div>
    </div>
  );
}
