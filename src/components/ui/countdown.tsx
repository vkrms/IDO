'use client';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import type { TimerResult } from 'react-timer-hook';

import { Digit } from '@/components/ui/digit';
import { cn } from '@/lib/utils/cn';
import * as styles from '@/module/home/welcome/welcome.css';

type Props = { expiryTimestamp: Date; className: string };

function MyTimer({ expiryTimestamp, className }: Props) {
  const timerInstance = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const timeBits = ['days', 'hours', 'minutes', 'seconds'];

  return (
    <div className={className}>
      <div className={styles.list}>
        {timeBits.map((title) => {
          const props = {
            value: timerInstance[title as keyof TimerResult] as number,
            title,
          };

          return <Digit key={title} {...props} />;
        })}
      </div>
    </div>
  );
}

export default function Countdown() {
  // this is required to prevent the server from trying to render the timer, which ends up in a hydration error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 18th of September at 8AM Melbourne Australia time..
  const time = new Date('2024-09-18T08:00:00+10:00');

  return <div>{isClient && <MyTimer expiryTimestamp={time} className={cn('disappear', { appear: isClient })} />}</div>;
}
