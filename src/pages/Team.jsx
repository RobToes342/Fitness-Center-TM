// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import markus from '../assets/images/team-01-marcus-temming.jpg'; 
import dirk from '../assets/images/team-02-dirk-maehler.jpg';
import team from '../assets/images/tm-team.jpg';  
import HeaderBanner from "../components/HeaderBanner";
import pageTitle from '../assets/images/page-title-team.jpg';
import '../styles/Team.scss';
import GlareHover from "../ReactBits/GlareHover";

export default function Team() {

  const teamMembers = [
    {
      name: "Marcus Temming",
      image: markus,
      birth: "27.11.1962 in Wuppertal",
      family: "verheiratet seit 1992, zwei Kinder",
      education: [
        "Gymnasium, Abitur",
        "Studium an der DSHS Köln 1983–1994",
        "Diplomsportlehrer",
        "Trainer A-Lizenz Judo / 6. DAN",
        "Seit 1979 Lehrtätigkeit in Judo & Fitness",
        "1983 Eröffnung eigenes Fitnessstudio",
        "1995 Umzug & Erweiterung Fitness Centrum TM"
      ],
      sport: [
        "Seit 1971 Judo-Leistungssport",
        "Platzierungen auf Deutschen & Int. Meisterschaften",
        "12 Jahre Judo-Bundesliga",
        "Judo-Nationalmannschaft"
      ],
      skills: [
        "Judo-Unterricht (Kinder & Erwachsene)",
        "Aerobic / Rückentraining etc.",
        "Jährliche Weiterbildung in den USA",
        "Co-Autor von Buch/DVDs zu Krafttraining",
        "Dozent an der Trainerakademie Köln",
        "Fachübungsleiter Reha-Sport",
        "Autor der Serie 'Budoka' (seit 2008)"
      ],
      thesis: "Sportartenentwicklung im Fitness-Bereich nach Aerobic unter kritischer Betrachtung sportwissenschaftlicher und wirtschaftlicher Aspekte am Beispiel Fitness Centrum Solingen",
      align: "right"
    },
    {
      name: "Dirk Mähler",
      image: dirk,
      birth: "17.03.1963 in Remscheid",
      family: "verheiratet seit 1989, zwei Kinder",
      education: [
        "Gymnasium, Abitur",
        "Studium an der DSHS Köln 1983–1994",
        "Diplom-Sportlehrer",
        "Trainer A-Lizenz Judo / 6. DAN",
        "Seit 1979 Lehrtätigkeit in Judo & Fitness",
        "1992 Gründung Budo & Fitness Centrum",
        "1995 Umzug & Erweiterung Fitness Centrum TM"
      ],
      sport: [
        "Seit 1975 Judo-Leistungssport",
        "Platzierungen auf Westdeutschen & Dt. Meisterschaften",
        "12 Jahre Judo-Bundesliga",
        "Judo-Nationalmannschaft"
      ],
      skills: [
        "Judo-Unterricht (Kinder & Erwachsene)",
        "Aerobic / Rückentraining etc.",
        "Jährliche Weiterbildung in den USA",
        "Co-Autor von Buch/DVDs zu Krafttraining",
        "Gastdozent an der DSHS Köln",
        "Fachübungsleiter Reha-Sport",
        "Autor der Serie 'Budoka' (seit 2008)"
      ],
      thesis: "Qualitätsmerkmale für Fitness-Studios – sportlich & wirtschaftlich",
      align: 'left'
    }
  ];

  return (
    <div className="team-page">
      <HeaderBanner title="Unser Team" image={pageTitle} />
      <div className="team-members">
        {teamMembers.map((member, idx) => (
          <motion.div
            className="team-member"
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            viewport={{ once: true }}
          >
            <div className="team-img">
                <img src={member.image} alt={member.name} />
              
            </div>
            <div className="team-info">
              <h2>{member.name}</h2>
              <p><strong>Geboren:</strong> {member.birth}</p>
              <p><strong>Familie:</strong> {member.family}</p>
              <h4>Ausbildung</h4>
              <ul>{member.education.map((e, i) => <li key={i}>{e}</li>)}</ul>
              <h4>Sportlicher Werdegang</h4>
              <ul>{member.sport.map((s, i) => <li key={i}>{s}</li>)}</ul>
              <h4>Kenntnisse</h4>
              <ul>{member.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
              <p><strong>Diplomarbeit:</strong> {member.thesis}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="team-description">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Unser Team
        </motion.h2>
        <img className="team-photo" src={team} />  
        <p>
          Unser qualifiziertes Team bildet sich ständig auf Kongressen, Seminaren, Schulungen und Messen weiter und ist immer für Sie da.
          Besonders wichtig ist es uns allen, dass wir Sie mit Namen ansprechen. Hier sind die Mitglieder nicht nur Nummern!
        </p>
      </section>
    </div>
  );
}