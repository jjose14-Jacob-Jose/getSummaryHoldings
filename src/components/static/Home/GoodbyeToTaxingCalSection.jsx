"use client";

import { styles } from "@/constants/styles";
import { motion } from "framer-motion";
import { animateText, staggerContainer } from "@/constants/framer_motion_utils";

/**
 * Goodbye to taxing calculations section of the Home page.
 * 
 * @author shivaram_bathini
 */

export default function GoodbyeToTaxingCalSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-6 mobile:px-12 pt-28 pb-28 mx-auto justify-center items-center bg-[#1E2027] "
    >
      <motion.div
        variants={animateText(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex mx-auto justify-center"
      >
        <img
          src="/text_highlight.png"
          alt="Text highlight icon"
          className="hidden tablet:block w-[15px] h-[30px] rotate-[55deg] -mt-5"
        />
        <h2 className={`text-center ${styles.headingTwo}`}>
          Say Goodbye to Taxing <br /> Calculations
        </h2>
      </motion.div>

      <div className="lg:flex lg:space-x-20 space-y-10 lg:space-y-0 mt-10 mx-auto justify-center">
        <motion.div
          variants={animateText(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" phablet:w-[400px] hover:bg-[#292D3A] hover:shadow-2xl border-[#1E2027]  rounded-xl mx-auto justify-center lg:mx-0 pb-10 mb-6"
        >
          <div className="flex mx-auto justify-center">
            <img
              src="/puzzle_image.png"
              className="w-[170px] h-[140px] -mr-5 mt-7"
            />
          </div>
          
          <div className="w-[80%] text-center mx-auto justify-center ">
            <h3 className={`${styles.paraOne} mt-7`}>
              Stuck calculating which edition belongs to which year? We got you.
            </h3>
            <p className="mt-5 text-center mx-auto justify-center">
              Get a detailed view of editions, issues, and years with a single
              click.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={animateText(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" phablet:w-[400px] hover:bg-[#292D3A]  hover:shadow-2xl  border-[#1E2027] rounded-xl mx-auto justify-center lg:mx-0 pb-10"
        >
          <div className="flex mx-auto justify-center mt-8">
            <img
              src="/checkboxes_image.png"
              className="w-[180px] h-[75px] mb-12 mt-10"
            />
          </div>
          <div className="w-[80%] text-center mx-auto justify-center">
            <h3 className={`${styles.paraOne} mb-5 `}>
              Need a quick overview of what's available or missing in a serial?
              Leave it to us.
            </h3>
            <p className="w-[95%] text-center mx-auto justify-center">
              Mark the available editions to get a summary of holdings data with
              formatted enumeration and chronology fields.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
