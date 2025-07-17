import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram, faXTwitter, faTwitch, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons"


function Footer() {
  return (
    <div id="footer">
        { <div id="contact-details">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" ><FontAwesomeIcon  className="link-icon" icon={faYoutube} /></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" ><FontAwesomeIcon  className="link-icon" icon={faInstagram} /></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" ><FontAwesomeIcon  className="link-icon" icon={faFacebook} /></a>
        </div> }
        <div id="copy-rights">
            <p>
                Fitness Centrum TM © Datenschutz I Impressum
            </p>
        </div>
    </div>
  )
}

export default Footer
