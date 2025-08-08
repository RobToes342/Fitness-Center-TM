// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from '../assets/images/Woman_Studio.jpg';
import '../styles/Team.scss';

export default function TmWoman() {


  return (
    <div >
      <HeaderBanner title="Tm Woman" image={fitnessWomanStudio} />
    </div>
  )
    
      
}