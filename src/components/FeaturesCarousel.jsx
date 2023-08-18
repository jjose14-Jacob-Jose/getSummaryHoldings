'use client';

import Link from "next/link";
import Image from "next/image";
import { styles } from "@/constants/styles";
import { useEffect, useState } from "react";

/**
 * Home page component of the site. Describes the tool's purpose, features, etc.
 * 
 * @author pdoddi
 */
export default function FeaturesCarousel({itemsData}) {

    const [currentIndex, setCurrentIndex] = useState(0);

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
            <div className="flex gap-12 mx-auto justify-center align-middle items-center">
                <div className="w-1/2 space-y-8">
                    <button onClick={() => jumpToItem(0)} className="flex gap-4 items-center text-left">
                        <div className={`h-[70px] w-[1px] bg-white ${currentIndex === 0 ? `opacity-100` : `opacity-40`} transition-all duration-200`}></div>
                        <div className={`${currentIndex === 0 ? `opacity-100` : `opacity-60`} transition-all duration-200`}>
                            <h3 className={`${styles.paraOne}`}>{itemsData[0].title}</h3>
                            <p>{itemsData[0].desc}</p>
                        </div>
                    </button>
                    <button onClick={() => jumpToItem(1)} className="flex gap-4 items-center text-left">
                        <div className={`h-[70px] w-[1px] bg-white ${currentIndex === 1 ? `opacity-100` : `opacity-40`} transition-all duration-200`}></div>
                        <div className={`${currentIndex === 1 ? `opacity-100` : `opacity-60`} transition-all duration-200`}>
                            <h3 className={`${styles.paraOne}`}>{itemsData[1].title}</h3>
                            <p>{itemsData[1].desc}</p>
                        </div>
                    </button>
                    <button onClick={() => jumpToItem(2)} className="flex gap-4 items-center text-left">
                        <div className={`h-[70px] w-[1px] bg-white ${currentIndex === 2 ? `opacity-100` : `opacity-40`} transition-all duration-200`}></div>
                        <div className={`${currentIndex === 2 ? `opacity-100` : `opacity-60`} transition-all duration-200`}>
                            <h3 className={`${styles.paraOne}`}>{itemsData[2].title}</h3>
                            <p>{itemsData[2].desc}</p>
                        </div>
                    </button>
                    <button onClick={() => jumpToItem(3)} className="flex gap-4 items-center text-left">
                        <div className={`h-[70px] w-[1px] bg-white ${currentIndex === 3 ? `opacity-100` : `opacity-40`} transition-all duration-200`}></div>
                        <div className={`${currentIndex === 3 ? `opacity-100` : `opacity-60`} transition-all duration-200`}>
                            <h3 className={`${styles.paraOne}`}>{itemsData[3].title}</h3>
                            <p>{itemsData[3].desc}</p>
                        </div>
                    </button>
                </div>
                <Image 
                    src="/Logo draft 1.png" //take source from the array - currentIndex.
                    alt="Portfolio Logo"
                    width={460}
                    height={380}
                    className="rounded-lg"
                />
            </div>
        </div>
    )
}