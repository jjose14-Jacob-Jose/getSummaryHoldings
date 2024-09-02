'use client';

import Image from "next/image";
import { styles } from "@/constants/styles";
import { useEffect, useState } from "react";

/**
 * Carousel component of the site for the features section.
 * 
 * @author pdoddi
 */
export default function FeaturesCarousel({itemsData}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50; 

    const onTouchStart = (e) => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd;
        const isRightSwipe = distance > minSwipeDistance;
        const isLeftSwipe = distance < -minSwipeDistance;
        if (isRightSwipe) {
            nextItem();
        }
        if (isLeftSwipe){
            previousItem();
        }
    }

    function nextItem(){
        setCurrentIndex((currentIndex) => (currentIndex === itemsData.length -  1 ? 0 : currentIndex + 1))
    }

    function previousItem(){
        setCurrentIndex((currentIndex) => (currentIndex === 0 ? itemsData.length -  1 : currentIndex - 1))
    }

    function jumpToItem(index){
        setCurrentIndex(index);
    }

    useEffect(() => {
        let interval = setInterval(function() {
                nextItem();
            }, 5000);
    
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="items-center justify-center align-middle mx-auto">
            
            {/* Mobile screens */}
            <div className="xl:hidden">
                <div className=" w-fit mx-auto text-center flex justify-center items-center">

                    {/* Left arrow */}
                    <button
                        onClick={previousItem}
                        className="hidden sm:block w-fit h-fit z-10 absolute left-8 p-4 rounded-full drop-shadow-xl bg-white/[0.8] text-black "
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 rotate-90 drop-shadow-md">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    
                    {/* content */}
                    <div
                        id="carousel"
                        onTouchStart={onTouchStart} 
                        onTouchEnd={onTouchEnd} 
                        onTouchMove={onTouchMove}  
                        className="mx-auto">
                        <Image 
                            src={itemsData[currentIndex].image}
                            alt={itemsData[currentIndex].alt}
                            width={500}
                            height={500}
                            className="drop-shadow-lg transition-all duration-200 mx-auto mb-4"
                        />
                        <div className={`transition-all duration-200 max-w-xl`}>
                            <h3 className={`${styles.paraOne} sm:font-medium sm:text-3xl mb-4`}>{itemsData[currentIndex].title}</h3>
                            <p>{itemsData[currentIndex].desc}</p>
                        </div>
                    </div>
                    
                    {/* Right arrow */}
                    <button
                        onClick={nextItem}
                        className="hidden sm:block w-fit h-fit z-10 absolute right-8 p-4 rounded-full drop-shadow-xl bg-white/[0.8] text-black "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 -rotate-90">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>

                {/* Dots */}
                <div className="mt-12">
                    <div className="flex items-center justify-center gap-2">
                        {itemsData.map((_, i) => (
                            <div
                            onClick={() => jumpToItem(i)}
                            className={`
                            duration-500 transition-all w-2 h-2 z-10  border border-white rounded-full
                            ${currentIndex === i ? `p-2 border-[1.5px] opacity-100` : "opacity-70"}
                            `}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Larger screens */}
            <div className="hidden xl:flex gap-12 mx-auto justify-center align-middle items-center">
                <div className="w-2/5 space-y-8">
                    <button onClick={() => jumpToItem(0)} className="flex gap-4 items-center text-left">
                        <div className={`h-[70px] w-[1px] bg-white ${currentIndex === 0 ? `opacity-100` : `opacity-40`} transition-all duration-200`}></div>
                        <div className={`${currentIndex === 0 ? `opacity-100` : `opacity-40`} transition-all duration-200`}>
                            <h3 className={`${styles.paraOne}`}>{itemsData[0].title}</h3>
                            <p>{itemsData[0].desc}</p>
                        </div>
                    </button>
                    <button onClick={() => jumpToItem(1)} className="flex gap-4 items-center text-left">
                        <div className={`h-[70px] w-[1px] bg-white ${currentIndex === 1 ? `opacity-100` : `opacity-40`} transition-all duration-200`}></div>
                        <div className={`${currentIndex === 1 ? `opacity-100` : `opacity-40`} transition-all duration-200`}>
                            <h3 className={`${styles.paraOne}`}>{itemsData[1].title}</h3>
                            <p>{itemsData[1].desc}</p>
                        </div>
                    </button>
                    <button onClick={() => jumpToItem(2)} className="flex gap-4 items-center text-left">
                        <div className={`h-[70px] w-[1px] bg-white ${currentIndex === 2 ? `opacity-100` : `opacity-40`} transition-all duration-200`}></div>
                        <div className={`${currentIndex === 2 ? `opacity-100` : `opacity-40`} transition-all duration-200`}>
                            <h3 className={`${styles.paraOne}`}>{itemsData[2].title}</h3>
                            <p>{itemsData[2].desc}</p>
                        </div>
                    </button>
                    <button onClick={() => jumpToItem(3)} className="flex gap-4 items-center text-left">
                        <div className={`h-[70px] w-[1px] bg-white ${currentIndex === 3 ? `opacity-100` : `opacity-40`} transition-all duration-200`}></div>
                        <div className={`${currentIndex === 3 ? `opacity-100` : `opacity-40`} transition-all duration-200`}>
                            <h3 className={`${styles.paraOne}`}>{itemsData[3].title}</h3>
                            <p>{itemsData[3].desc}</p>
                        </div>
                    </button>
                </div>
                <Image 
                    src={itemsData[currentIndex].image}
                    alt={itemsData[currentIndex].alt}
                    width={500}
                    height={680}
                    className="drop-shadow-lg transition-all duration-200"
                />
            </div>
        </div>
    )
}