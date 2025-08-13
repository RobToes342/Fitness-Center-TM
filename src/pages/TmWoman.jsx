// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from '../assets/images/woman-studio.jpg';
import '../styles/TmWoman.scss';

export default function TmWoman() {


  return (
    <div >
      <HeaderBanner title="Tm Woman" image={fitnessWomanStudio} />
    </div>
  )
    
      
}