"use client";

import Link from "next/link";
import { styles } from "@/constants/styles";
import { motion } from "framer-motion";
import { prototype_link } from "@/constants/component_constants";
import { animateText, staggerContainer } from "@/constants/framer_motion_utils";

const MotionLink = motion(Link);

/**
 * Check Out the Prototype section of the Home page.
 * 
 * @author shivaram_bathini
 */

export default function CheckoutThePrototypeSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-6 mobile:px-12 pt-28 pb-28 gap-24 mx-auto flex justify-center text-center items-center h-[400px]"
    >
      <div>
        <motion.div
          variants={animateText(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex mx-auto justify-center w-[90%]"
        >
          <h2 className={`text-center ${styles.headingTwo}`}>
            Check Out the Product Prototype
          </h2>
          <img
            src="/text_highlight.png"
            alt="Text highlight icon"
            className="hidden custom:block w-[15px] h-[30px] -rotate-[130deg] mt-10"
          />
        </motion.div>
        <motion.p
          variants={animateText(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${styles.paraTwo} flex mx-auto justify-center mt-5 lg:mt-0`}
        >
          We've built an interactive prototype in Figma for the product. Open it
          up to experience the product yourself.
        </motion.p>
        <div className="flex gap-4 mt-5 justify-center">
          <MotionLink
            variants={animateText(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            href={prototype_link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-10 h-fit font-light bg-[#89634A] text-white text-sm rounded hover:bg-[#83593D] hover:font-light mx-auto justify-center"
          >
            Explore the Prototype
          </MotionLink>
        </div>
      </div>
    </motion.div>
  );
}
