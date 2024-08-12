import type React from 'react';

import { cn } from '@/lib/utils/cn';

import E from '@/assets/svg/E.svg';
interface Props {
  isVisible: boolean;
}

const Preloader: React.FC<Props> = ({ isVisible }) => {
  return (
    <div>
      <div className={cn('preloader', { isVisible })}>
        <video className={cn('preloader__icon')} playsInline muted autoPlay loop>
          <source src='/xs.webm' type='video/webm' />
        </video>
      </div>
    </div>
  );
};

export default Preloader;
