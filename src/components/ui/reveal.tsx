'use client';
import { cn } from '@/lib/utils/cn';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './reveal.module.css';

export const Reveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;
  }, [isInView]);

  return (
    <div className={cn(className, styles.box, { [styles.isInView]: isInView })} ref={ref}>
      {children}
    </div>
  );
};
