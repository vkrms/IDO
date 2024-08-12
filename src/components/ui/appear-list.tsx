'use client';
import { cn } from '@/lib/utils/cn';
import { stagger, useAnimate, useInView } from 'framer-motion';
import type React from 'react';
import { useEffect } from 'react';

interface AppearProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * The idea:
 * Each of the children fades-in-up while line height decreases
 */

const AppearList: React.FC<AppearProps> = ({ children, className }) => {
  const [scope, animate] = useAnimate();

  const isInView = useInView(scope, {
    once: true,
    margin: '0% 0% -30% 0%',
  });

  useEffect(() => {
    if (!isInView) return;

    animate('.stagger', { opacity: 1, y: 0 }, { delay: stagger(0.1), duration: 0.6 });
  }, [isInView, animate]);

  // console.count('Appear')

  return (
    <div ref={scope} className={cn('some tailwind here', className)}>
      {children}
    </div>
  );
};

export default AppearList;
