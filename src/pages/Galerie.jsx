// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HeaderBanner from "../components/HeaderBanner";
import fitnessWomanStudio from "../assets/images/fitness-woman-studio.jpg";
import "../styles/Galerie.scss";

// Bilder laden (VITE kompatibel)
const yearFolders = {
  2015: import.meta.glob("../assets/images/2015/*.{jpg,png}", { eager: true }),
  2016: import.meta.glob("../assets/images/2016/*.{jpg,png}", { eager: true }),
  2017: import.meta.glob("../assets/images/2017/*.{jpg,png}", { eager: true }),
  2018: import.meta.glob("../assets/images/2018/*.{jpg,png}", { eager: true }),
  2019: import.meta.glob("../assets/images/2019/*.{jpg,png}", { eager: true }),
  2023: import.meta.glob("../assets/images/2023/*.{jpg,png}", { eager: true }),
  2024: import.meta.glob("../assets/images/2024/*.{jpg,png}", { eager: true }),
  2025: import.meta.glob("../assets/images/2025/*.{jpg,png}", { eager: true }),
};

export default function Galerie() {
  const years = Object.keys(yearFolders).map(Number).sort();
  const [activeYear, setActiveYear] = useState(years[0]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = Object.values(yearFolders[activeYear]).map(v => v.default);

  return (
    <div className="galerie-page">
      <HeaderBanner title="Galerie" image={fitnessWomanStudio} />

      <div className="gallery-container">
        <h1 className="title-galerie">Workshops</h1>
        {/* Zeitstrahl */}
        <motion.div className="year-timeline" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {years.map((year) => (
            <button
              key={year}
              className={`year-btn ${activeYear === year ? "active" : ""}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </motion.div>

        {/* Bildergrid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            className="image-grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="image-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <img src={src} alt={`Bild ${i}`} onClick={() => setLightboxIndex(i)} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
            >
              <motion.img
                className="lightbox-img"
                src={images[lightboxIndex]}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />

              {/* Navigation */}
              <button
                className="nav-btn left"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
                }}
              >
                ❮
              </button>

              <button
                className="nav-btn right"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % images.length);
                }}
              >
                ❯
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
