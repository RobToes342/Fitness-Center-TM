// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from '../assets/images/fitness-woman-studio.jpg';
import '../styles/Team.scss';

export default function FiftyPlus() {


  return (
    <div >
      <HeaderBanner title="50+" image={fitnessWomanStudio} />
    </div>
  )
    
      
}