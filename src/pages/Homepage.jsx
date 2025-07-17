import logoLarge from '../assets/Logo-Large-White.png'
import CurvedLoop from '../hooks/CurvedLoop';

function Homepage() { 
  return (
    <div>
    <img id='logo-large' className='logo' src={logoLarge} />
    <CurvedLoop 
      marqueeText="Fitness ✦ Kurse ✦ Judo ✦ Taekwando ✦ CyberFitness ✦ Körperanalye ✦ Temming ✦ Mähler ✦ Solarium ✦ Kampfsport ✦ Einzeleinführung ✦"
      speed={3}
      curveAmount={100}
      direction="right"
      interactive={true}
      className="custom-text-style"
    />
      {/* 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6739.606515778288!2d7.08007212907352!3d51.177407770618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d45fdd50318b%3A0x58e21675b04a4722!2sFitness%20Centrum%20TM%20GmbH!5e1!3m2!1sde!2sde!4v1752590202661!5m2!1sde!2sde" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      */}
    </div>
  )
    
      
}
export default Homepage;
