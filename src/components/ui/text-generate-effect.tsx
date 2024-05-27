"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        if (!isInView) return;

        console.log("in view!")
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            }
        );
    }, [scope.current, isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)} ref={ref}>
            <div className="mt-4">
                <div>
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
