import { motion } from "framer-motion";

export function HeroSlider() {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        style={{
          display: "flex",
          width: "300%",
        }}
        animate={{ x: ["0%", "-100%", "-200%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <img src="img1.jpg" style={{ width: "100%" }} />
        <img src="img2.jpg" style={{ width: "100%" }} />
        <img src="img3.jpg" style={{ width: "100%" }} />
      </motion.div>
    </div>
  );
}