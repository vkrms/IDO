"use client";
import { cn } from "@/lib/utils/cn";
import React, { useEffect, useRef } from "react";
import { useInView, useAnimate, stagger } from "framer-motion";

interface AppearProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * The idea:
 * Each of the children fades-in-up while line height decreases  
 */


const AppearList: React.FC<AppearProps> = ({children, className}) => {
    const [scope, animate] = useAnimate();

    const isInView = useInView(scope, {
        once: true,
        margin: '0% 0% -30% 0%',
    })

    useEffect(() => {
        if (!isInView) return;

        animate('.stagger', { opacity: 1, y: 0 }, { delay: stagger(0.1), duration: .6 })
    }, [isInView]);

    // console.count('Appear')

    return (
        <div
            ref={scope}
            className={cn(
                "some tailwind here",
                className
            )}
        >
            {children}
        </div>
    );
} 

export default AppearList;