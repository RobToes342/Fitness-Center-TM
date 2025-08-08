// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from '../assets/images/fitness_woman_studio.jpg';
import '../styles/Team.scss';

export default function Tarife() {


  return (
    <div >
      <HeaderBanner title="Tarife" image={fitnessWomanStudio} />
    </div>
  )
    
      
}