"use client";

import Link from "next/link";
import { styles } from "@/constants/styles";
import { motion } from "framer-motion";
import { animateText, staggerContainer } from "@/constants/framer_motion_utils";

const MotionLink = motion(Link);

export default function ContactUsSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-6 mobile:px-12 pt-28 pb-28 gap-24 mx-auto flex justify-center text-center bg-[#1E2027] items-center h-[400px]"
    >
      <div>
        <motion.h1
          variants={animateText(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${styles.headingFour} flex mx-auto justify-center w-[90%]`}
        >
          Have suggestions, feature requests, or noticed an issue?
        </motion.h1>
        <motion.p
          variants={animateText(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${styles.paraTwo} mt-3`}
        >
          Drop us a note! We'll be happy to take a look at it.
        </motion.p>

        <div className="flex gap-4 mt-5 justify-center">
          <MotionLink
            variants={animateText(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            href="mailto:support@getsummaryholdings.com"
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 px-10 h-fit text-white text-sm hover:text-[#2A2C32] border-[1px] font-light rounded  hover:bg-white hover:font-light items-center"
          >
            Contact Us
          </MotionLink>
        </div>
      </div>
    </motion.div>
  );
}
