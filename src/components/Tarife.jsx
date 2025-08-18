// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "../styles/TarifeModal.scss";

export default function Tarife({ onClose }) {
  const plans = [
    {
      title: "Tages-Tarif",
      price: "54,00 €",
      highlight: null,
      duration: "bei Anmeldung für 24 Monate",
      altPrices: ["56,00 € (12 Monate)", "60,00 € (6 Monate)"],
      features: {
        order: [
          "Einzeleinführung",
          "Exakte Körperanalyse (BIA)",
          "Fitness",
          "Kurse",
          "CyberFitness",
          "Trainingszeit Mo-Fr bis 16 Uhr",
          "Kampfsport",
          "Solarium",
        ],
        includes: new Set([
          "Einzeleinführung",
          "Exakte Körperanalyse (BIA)",
          "Fitness",
          "Kurse",
          "CyberFitness",
          "Trainingszeit Mo-Fr bis 16 Uhr",
        ]),
      },
    },
    {
      title: "Fitness-Tarif",
      price: "60,00 €",
      highlight: "Beliebt",
      duration: "bei Anmeldung für 24 Monate",
      altPrices: [
        "65,00 € (12 Monate)",
        "70,00 € (6 Monate)",
        "Ermäßigt: 55,00 € (24 Monate)",
        "Ermäßigt: 60,00 € (12 Monate)",
        "Ermäßigt: 65,00 € (6 Monate)",
      ],
      features: {
        order: [
          "Einzeleinführung",
          "Exakte Körperanalyse (BIA)",
          "Fitness",
          "CyberFitness",
          "Trainingszeit ohne Begrenzung",
          "Kurse",
          "Kampfsport",
          "Solarium",
        ],
        includes: new Set([
          "Einzeleinführung",
          "Exakte Körperanalyse (BIA)",
          "Fitness",
          "CyberFitness",
          "Trainingszeit ohne Begrenzung",
        ]),
      },
    },
    {
      title: "Kompakt-Tarif",
      price: "68,00 €",
      highlight: "Bestes Wert",
      duration: "bei Anmeldung für 24 Monate",
      altPrices: ["70,00 € (12 Monate)", "75,00 € (6 Monate)"],
      features: {
        order: [
          "Einzeleinführung",
          "Exakte Körperanalyse (BIA)",
          "Fitness",
          "Kurse",
          "CyberFitness",
          "Trainingszeit ohne Begrenzung",
          "Kampfsport",
          "Solarium",
        ],
        includes: new Set([
          "Einzeleinführung",
          "Exakte Körperanalyse (BIA)",
          "Fitness",
          "Kurse",
          "CyberFitness",
          "Trainingszeit ohne Begrenzung",
          "Kampfsport",
          "Solarium",
        ]),
      },
    },
    {
      title: "1 x pro Woche",
      price: "38,00 €",
      highlight: null,
      duration: "bei Anmeldung für 24 Monate",
      altPrices: ["40,00 € (12 Monate)", "45,00 € (6 Monate)"],
      features: {
        order: [
          "Einzeleinführung",
          "Exakte Körperanalyse (BIA)",
          "Fitness",
          "Kurse",
          "CyberFitness",
          "1 x pro Woche",
          "Kampfsport",
          "Solarium",
        ],
        includes: new Set([
          "Einzeleinführung",
          "Exakte Körperanalyse (BIA)",
          "Fitness",
          "Kurse",
          "CyberFitness",
          "1 x pro Woche",
        ]),
      },
    },
    {
      title: "Kampfsport",
      price: "40,00 €",
      highlight: null,
      duration: "bei Anmeldung für 24 Monate",
      altPrices: ["45,00 € (12 Monate)", "50,00 € (6 Monate)"],
      features: {
        order: [
          "Kampfsport",
          "Einzeleinführung",
          "Fitness",
          "Kurse",
          "CyberFitness",
          "Trainingszeit ohne Begrenzung",
          "Solarium",
        ],
        includes: new Set(["Kampfsport"]),
      },
    },
    {
      title: "Vollständige Preisliste",
      isPdf: true,
      link: "/src/downloads/preise.pdf",
      description: "Alle Details als PDF (ca. 1,4 MB)",
    },
  ];

  return (
    <div className="tarife-overlay">
      <motion.div
        className="tarife-modal"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <button className="close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2>Unsere Mitgliedsbeiträge</h2>
        <p>Wir haben für jeden den richtigen Tarif!</p>
        <small>
          * Preise gelten bei Anmeldung für 24 Monate (andere Laufzeiten siehe Tarifdetails)
        </small>

        <div className="tarife-grid">
          {plans.map((plan, index) =>
            plan.isPdf ? (
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tarif-card pdf-card"
                key={index}
              >
                <FontAwesomeIcon icon={faFilePdf} size="3x" className="pdf-icon" />
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
              </a>
            ) : (
              <div
                className={`tarif-card ${
                  plan.highlight
                    ? plan.highlight === "Beliebt"
                      ? "tarif-highlight highlight-beliebt"
                      : plan.highlight === "Bestes Wert"
                      ? "tarif-highlight highlight-bestes"
                      : "tarif-highlight"
                    : ""
                }`}
                key={index}
              >
                {plan.highlight && <span className="badge">{plan.highlight}</span>}

                <h3>{plan.title}</h3>
                <div className="price">{plan.price}</div>
                <div className="duration">{plan.duration}</div>

                <ul>
                  {plan.altPrices.map((alt, i) => (
                    <li key={i} className="alt-price">
                      {alt}
                    </li>
                  ))}
                </ul>

                <ul className="tariff-features">
                  {plan.features.order.map((label, i) => {
                    const included = plan.features.includes.has(label);
                    return (
                      <li
                        key={i}
                        className={included ? "feature-included" : "feature-excluded"}
                        aria-label={`${label} ${included ? "inklusive" : "nicht enthalten"}`}
                      >
                        <FontAwesomeIcon icon={included ? faCheck : faTimes} />
                        <span>{label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )
          )}
        </div>

        <p className="note">
          Anmeldegebühr und Trainerpauschale: 90,00 € <br />
          Anmeldegebühr Kampfsport: 40,00 € <br />
          Ermäßigung gilt für Schüler, Azubis, Studenten und 2. Familienmitglied
        </p>
      </motion.div>
    </div>
  );
}
