/**
 * Framer motion animation variant constants.
 * 
 * @author pdoddi
 */

export const animateHeader = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.3
      },
    }
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {staggerChildren, delayChildren}
    }
});

export const animateText = (delay) => ({
    hidden: {
        y: 10,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay
        }
    }
});

export const animateFromLeft = (delay) => ({
    hidden: {
        x: -10,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay
        }
    }
});
  
export const animateFromRight = (delay) => ({
    hidden: {
        x: 10,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay
        }
    }
});

export const backToTopAnimation = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
};
