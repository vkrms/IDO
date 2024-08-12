'use client';
import { cn } from '@/lib/utils/cn';
import { useInView } from 'framer-motion';
import React, { type ReactNode, useRef } from 'react';

interface AppearProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * The idea:
 * Each of the children fades-in-up while line height decreases
 */

const AppearTimeline: React.FC<AppearProps> = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0% 0% -30% 0%',
  });

  return (
    <>
      {React.Children.map(children, (child: ReactNode) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            //@ts-ignore
            className: cn(child.props.className, 'disappear', { 'appear-down': isInView }),
            ref,
          });
        }
        return child;
      })}
    </>
  );
};

export default AppearTimeline;
