"use client";

import { styles } from "@/constants/styles";
import { motion } from "framer-motion";
import { animateText, staggerContainer } from "@/constants/framer_motion_utils";

export default function GoodbyeToTaxingCalSection() {
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
        className="flex mx-auto justify-center"
      >
        <img
          src="/text_highlight.png"
          alt="Text highlight icon"
          className="hidden custom:block w-[15px] h-[30px] rotate-[55deg] -mt-5"
        />
        <h2 className={`text-center ${styles.headingTwo}`}>
          Say Goodbye to Taxing <br /> Calculations
        </h2>
      </motion.div>

      <div className="xl:flex mx-auto justify-center xl:space-x-20 space-y-10 xl:space-y-0 mt-10">
        <motion.div
          variants={animateText(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className=" xl:w-1/3 hover:bg-[#292D3A] hover:shadow-2xl xl:space-y-0 space-y-10 border border-[#1E2027]  rounded-2xl pb-12 xl:p-4 "
        >
          <div className="flex mx-auto justify-center">
            <img
              src="/puzzle_image.png"
              className="w-[180px] h-[150px] -mr-5 mt-5"
            />
          </div>
          <div className="text-center  mx-auto justify-center w-[300px]">
            <h3 className={`${styles.paraOne} mb-5 `}>
              Stuck calculating which edition belongs to which year? We got you.
            </h3>
            <p className="-mb-5">
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
          className=" xl:w-1/3 hover:bg-[#292D3A]  hover:shadow-2xl border border-[#1E2027] rounded-2xl pb-12 pt-6 xl:p-12"
        >
          <div className="flex mx-auto justify-center mt-8">
            <img
              src="/checkboxes_image.png"
              className="w-[190px] h-[80px] mb-6"
            />
          </div>
          <div className="text-center  mx-auto justify-center w-[300px]">
            <h3 className={`${styles.paraOne} mb-5 `}>
              Need a quick overview of what's available or missing in a serial?
              Leave it to us.
            </h3>
            <p>
              Mark the available editions to get a summary of holdings data with
              formatted enumeration and chronology fields.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
