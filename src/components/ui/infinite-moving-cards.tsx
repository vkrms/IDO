'use client';

import { cn } from '@/lib/utils/cn';
import React, { useEffect, useState } from 'react';

import * as styles from '@/module/home/welcome/welcome.css';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // x3 content, in case we're running out of content
      Array(2)
        .fill(null)
        .forEach(() => {
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);

            if (scrollerRef.current) {
              scrollerRef.current.appendChild(duplicatedItem);
            }
          });
        });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '27s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '53s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '107s');
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          'items-center space-x-6',
        )}
      >
        {items.map((id) => (
          <li key={id}>
            <img srcSet={`/img/home/welcome/${id}.webp 2x`} alt={id} height={28} width={180} className={styles.logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
