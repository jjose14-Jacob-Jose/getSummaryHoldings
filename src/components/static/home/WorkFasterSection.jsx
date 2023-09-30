"use client";

import Image from "next/image";
import { styles } from "@/constants/styles";
import { motion } from "framer-motion";
import {animateFromLeft,animateFromRight,animateText,staggerContainer} from "@/constants/framer_motion_utils";

/**
 * Work Faster section of the Home page.
 * 
 * @author pdoddi
 */

export default function WorkFasterSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-6 mobile:px-12 pt-28 pb-28 mx-auto justify-center items-center"
    >
      <motion.div
        variants={animateText(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex mx-auto justify-center"
      >
        <h2 className={`text-center ${styles.headingTwo}`}>
          Work Faster by Getting Started
        </h2>
        <img
          src="/text_highlight.png"
          alt="Text highlight icon"
          className="hidden tablet:block w-[15px] h-[30px] rotate-[140deg] -mt-5"
        />
      </motion.div>
      <motion.div
        variants={animateFromRight(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:flex gap-16 align-middle items-center mx-auto justify-center mt-28"
      >
        <Image
          src="/tool_inputs.png"
          alt="App Snapshot - fill out serial details"
          width={500}
          height={200}
          className="mx-auto mb-8 lg:mb-0 lg:mx-0 rounded-[20px] shadow-[0px_0px_40px_rgba(0,0,0,0.4)] h-auto"
        />
        <div className="lg:w-2/5 align-middle">
          <h3 className={`${styles.headingThree} mb-4 lg:mb-0`}>
            Fill out the details of the serial
          </h3>
          <p className={`${styles.paraTwo}`}>
            Fill in details like the range of years of the book, the number of
            editions it has per year, etc. to get a detailed list of editions,
            issues, and years.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={animateFromLeft(0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:flex gap-16 w-fit align-middle items-center mx-auto justify-center my-32"
      >
        <Image
          src="/tool_issue_selection.png"
          alt="App Snapshot - select issues"
          width={500}
          height={200}
          className="lg:hidden mx-auto mb-8 lg:mb-0 lg:mx-0 rounded-[20px] shadow-[0px_0px_40px_rgba(0,0,0,0.4)] drop-shadow-lg h-auto"
        />
        <div className="lg:w-2/5">
          <h3 className={`${styles.headingThree} mb-4 lg:mb-0`}>
            Select the available issues
          </h3>
          <p className={`${styles.paraTwo}`}>
            Check the available issues of the serial and mark them in the
            generated edition details.
          </p>
        </div>
        <Image
          src="/tool_issue_selection.png"
          alt="App Snapshot - select issues"
          width={500}
          height={200}
          className="hidden lg:block rounded-[20px] shadow-[0px_0px_40px_rgba(0,0,0,0.4)] drop-shadow-lg h-auto"
        />
      </motion.div>
      <motion.div
        variants={animateFromRight(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:flex gap-16 align-middle items-center mx-auto justify-center"
      >
        <Image
          src="/tool_generate_summary.png"
          alt="App Snapshot - get summary holdings"
          width={500}
          height={200}
          className="mx-auto mb-8 lg:mb-0 lg:mx-0 rounded-[20px] shadow-[0px_0px_40px_rgba(0,0,0,0.4)] h-auto"
        />
        <div className="lg:w-2/5 align-middle">
          <h3 className={`${styles.headingThree} mb-4 lg:mb-0`}>
            Get summary holdings data
          </h3>
          <p className={`${styles.paraTwo}`}>
            Switch between <span className="inline font-medium">basic</span> and{" "}
            <span className="inline font-medium">detailed</span> views based on
            your need.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
