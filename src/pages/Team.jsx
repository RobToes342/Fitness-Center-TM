// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import markus from '../assets/images/team-01-marcus-temming.jpg'; 
import dirk from '../assets/images/team-02-dirk-maehler.jpg';
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from '../assets/images/fitness_woman_studio.jpg';
import '../styles/Team.scss';

export default function Team() {


  return (
    <div >
      <HeaderBanner title="Unser Team" image={fitnessWomanStudio} />
    </div>
  )
    
      
}