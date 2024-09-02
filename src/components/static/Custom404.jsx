'use client';

import { motion } from "framer-motion";
import { animateText } from "@/constants/framer_motion_utils";
import Link from "next/link";

const MotionLink = motion(Link);
/**
 * Custom 404 page component.
 * 
 * @author pdoddi
 */
export default function Custom404() {
    return (
        <motion.div
            variants={animateText(0.3)}
            initial="hidden"
            animate="show"
            className="m-auto text-center align-middle items-center justify-center">
            <h1 className="font-bold text-[200px] leading-none pb-2">404</h1>
            <p className="max-w-[500px]">We can’t find what you’re looking for, but don’t worry, you can head over to our homepage or learn more about using our tool.</p>
            <div className="flex gap-4 mt-6 mx-auto w-fit mb-12">
                <MotionLink
                    variants={animateText(0.6)}
                    href="/"
                    rel="noopener noreferrer"
                    className="p-2 px-10 h-fit font-light bg-[#89634A] text-white text-sm rounded hover:bg-[#83593D] hover:font-light items-center"
                >
                    Go Home
                </MotionLink>
                <br className="lg:hidden" />
                <MotionLink
                    href="/about"
                    variants={animateText(0.5)}
                    className="mt-3 lg:mt-0 p-2 h-fit font-light text-sm text-white hover:underline underline-offset-4  items-center"
                >
                    Learn more about the tool
                </MotionLink>
            </div>
        </motion.div>
    )
}