//import logoLarge from '../assets/Logo-Large-White.png'
//import markusMaehler from '../assets/Markus-Maehler.png'
//import bgMaehler from '../assets/home-modern-bg-autor.jpg'
import CurvedLoop from '../ReactBits/CurvedLoop';
import CountUp from '../ReactBits/CountUp';
import './styles/Homepage.scss';

function Homepage() { 
  return (
    <div className='homepage'>
      <div className="title-screen">
    {    
    //<img id='logo-large' className='logo' src={logoLarge} />
    
    }
    <CountUp
      from={0}
      to={100}
      separator=","
      direction="up"
      duration={1}
      className="count-up-text"
    />
    <CurvedLoop 
      marqueeText="Fitness ✦ Kurse ✦ Judo ✦ Taekwando ✦ CyberFitness ✦ Körperanalye ✦ Temming ✦ Mähler ✦ Solarium ✦ Kampfsport ✦ Einzeleinführung ✦ Rehasport ✦"
      speed={1}
      curveAmount={0}
      direction="right"
      interactive={false}
      className="custom-text-style"
    />
    {/* 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6739.606515778288!2d7.08007212907352!3d51.177407770618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d45fdd50318b%3A0x58e21675b04a4722!2sFitness%20Centrum%20TM%20GmbH!5e1!3m2!1sde!2sde!4v1752590202661!5m2!1sde!2sde" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    */}
    </div>
    </div>
  )
    
      
}
export default Homepage;
