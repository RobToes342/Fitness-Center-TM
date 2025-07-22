import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h3>Fitness Centrum TM</h3>
          <div className='footer__generall'>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Konrad-Adenauer-Straße 21, 42651 Solingen</p>
            <p className="generall-info-link"><FontAwesomeIcon icon={faPhoneAlt} /> <a href="tel:+49212204747">+49 (0)212 204747</a></p>
            <p className="generall-info-link"><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@fitness-tm.de">info@fitness-tm.de</a></p>
          </div>
        </div>

        {/* Folge uns kommt jetzt an zweite Stelle */}
        <div className="footer__column footer__social">
          <h3>Folge uns</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/fitnesscentrumtm/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="link-icon" />
            </a>
            <a href="https://www.facebook.com/FitnessCentrumTM" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="link-icon" />
            </a>
          </div>
        </div>

        {/* Info rutscht auf Platz 3 */}
        <div className="footer__column">
          <h3>Info</h3>
          <ul>
            <li><a href="/impressum">Impressum</a></li>
            <li><a href="/datenschutz">Datenschutz</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Öffnungszeiten</h3>
          <p>Mo, Mi, Fr: 8:30–21:30 Uhr</p>
          <p>Di, Do: 7:30–21:30 Uhr</p>
          <p>Sa, So: 9:00–16:00 Uhr</p>
          <p>Feiertage: 10:00–15:00 Uhr (keine Kurse)</p>
          <p>Heiligabend, 2. Weihnachtstag, Silvester: 9:00–13:00 Uhr</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Fitness Centrum TM © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
