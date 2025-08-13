// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from '../assets/images/fitness-woman-studio.jpg';
import '../styles/Team.scss';

export default function Kursplan() {


  return (
    <div >
      <HeaderBanner title="Kursplan" image={fitnessWomanStudio} />
    </div>
  )
    
      
}