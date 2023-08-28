"use client";
import Link from "next/link";
import Image from "next/image";
import { styles } from "@/constants/styles";
import { motion } from "framer-motion";
import { prototype_link } from "@/constants/component_constants";
import { animateText, staggerContainer } from "@/constants/framer_motion_utils";
const MotionLink = motion(Link);
const MotionImage = motion(Image);
export default function HeroSection() {
  return (
    <motion.div
      variants={staggerContainer}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
      className="px-6 pt-12 mobile:px-12 lg:flex xl:gap-8 mx-auto justify-center items-center mb-24"
    >
      <div className="lg:w-1/2 2xl:w-2/5">
        <motion.h1
          variants={animateText(0.3)}
          className={`${styles.headingOne} pb-4`}
        >
          Serials Auditing. Simplified.
        </motion.h1>
        <motion.p variants={animateText(0.5)} className={`${styles.paraTwo}`}>
          A free browser based solution that computes summary holdings of books
          for you.
        </motion.p>

        <div className="lg:flex lg:gap-4 mt-6 mb-12 lg:mt-8 lg:mb-0 w-fit lg:w-full mx-auto">
          <MotionLink
            variants={animateText(0.6)}
            href={prototype_link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-10 h-fit font-light bg-[#89634A] text-white text-sm rounded hover:bg-[#83593D] hover:font-light items-center"
          >
            Explore the Prototype
          </MotionLink>
          <br className="lg:hidden" />
          <motion.button
            variants={animateText(0.5)}
            onClick={() => scrollToLearnMore()}
            className="mt-3 lg:mt-0 p-2 h-fit font-light text-sm text-white hover:underline underline-offset-4  items-center"
          >
            Learn More
          </motion.button>
        </div>
      </div>
      <MotionImage
        variants={animateText(0.3)}
        src="/landing_illustration.png"
        alt="Landing page illustration"
        width={500}
        height={480}
        className="hidden lg:block"
      />
      <MotionImage
        variants={animateText(0.3)}
        src="/landing_illustration.png"
        alt="Landing page illustration"
        width={500}
        height={480}
        className="mx-auto lg:hidden"
      />
    </motion.div>
  );
}
