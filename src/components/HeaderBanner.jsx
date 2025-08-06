import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/HeaderBanner.scss";

export default function HeaderBanner({
  title = "Titel",
  image,
  backLabel = "Zurück"
}) {
  return (
    <motion.header
      className="header-banner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Hintergrundbild */}
      <div
        className="header-banner__bg"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      {/* Overlay (Darken) */}
      <div className="header-banner__overlay" />

      {/* Inhalt */}
      <div className="header-banner__content">
        <h1 className="header-banner__title">{title}</h1>
        <NavLink to="/" className="header-banner__back">
         {backLabel}
        </NavLink>
      </div>
    </motion.header>
  );
}
