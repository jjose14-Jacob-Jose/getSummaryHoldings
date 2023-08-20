'use client';

import { useAnimationControls, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { backToTopAnimation } from '@/constants/framer_motion_utils';

//The approach recommended by Next.js
const isBrowser = () => typeof window !== 'undefined'; 

/**
 * Back to top button component. Scrolls page to the top.
 * 
 * @author pdoddi
 */
const BackToTopButton = () => {

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.2) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            variants={backToTopAnimation}
            initial="hide"
            animate={controls} 
            onClick={scrollToTop}
            className="w-fit h-fit z-10 fixed bottom-4 right-4 p-4 rounded-full drop-shadow-xl bg-white/[0.7] text-black hover:bg-white/[1] backdrop-blur"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 rotate-180 drop-shadow-md">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </motion.button>
      
);}

export default BackToTopButton;