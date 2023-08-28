"use client";

import { styles } from "@/constants/styles";
import { motion } from "framer-motion";
import { features_list } from "@/constants/component_constants";
import { animateText, staggerContainer } from "@/constants/framer_motion_utils";
import FeaturesCarousel from "../../FeaturesCarousel";

export default function FeaturesSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-6  mobile:px-12 pt-28 pb-28 mx-auto justify-center items-center bg-[#1E2027] "
    >
      <motion.div
        variants={animateText(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-fit mx-auto justify-center"
      >
        <h2 className={`${styles.headingTwo} pl-[15px]`}>
          Explore Additional Features
        </h2>
        <img
          src="/text_highlight.png"
          alt="Text highlight icon"
          className="hidden custom:block w-[15px] h-[30px] -rotate-[50deg] -mt-2"
        />
      </motion.div>
      <motion.div
        variants={animateText(0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="pt-12 sm:pt-28"
      >
        <FeaturesCarousel itemsData={features_list} />
      </motion.div>
    </motion.div>
  );
}
