import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

export default function Box() {
  return (
    <motion.div
      animate={{
        scale: 1.5
      }}
      whileHover={{ scale: 2, rotate: [0, 90], x: 100 }}
      whileTap={{ scale: 1, rotate: [0, 90], x: 100 }}
      transition={{
        duration: 0.5,
        type: "spring"
      }}
      className="box"
    />
  );
}
