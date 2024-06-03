"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useTransform,
    useScroll,
    useVelocity,
    useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils/cn";

export const TracingBeam = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, []);

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
        {
            stiffness: 500,
            damping: 90,
        }
    );
    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    return (
        <motion.div
            ref={ref}
            className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
        >
            <div className="absolute left-1/2 right-1/2">
                <svg
                    viewBox={`0 0 24 ${svgHeight}`}
                    width="24"
                    height={svgHeight} // Set the SVG height
                    className="block"
                    aria-hidden="true"
                >
                    <motion.rect
                        width={24}
                        height={svgHeight}
                        rx={2}
                        ry={2}
                        fill="#9091A0"
                        stroke="none"
                        opacity="0.2"
                        transition={{
                            duration: 10,
                        }}
                    ></motion.rect>
                    <motion.rect
                        width={24}
                        height={svgHeight}
                        rx={2}
                        ry={2}                       
                        fill="url(#gradient)"
                        className="motion-reduce:hidden"
                        transition={{
                            duration: 10,
                        }}
                    ></motion.rect>
                    <defs>
                        <motion.linearGradient
                            id="gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            x2="0"
                            y1={y1} // set y1 for gradient
                            y2={y2} // set y2 for gradient
                        >
                            <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                            <stop stopColor="#18CCFC"></stop>
                            <stop offset="0.325" stopColor="#6344F5"></stop>
                            <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>
            <div ref={contentRef}>{children}</div>
        </motion.div>
    );
};
