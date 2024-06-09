import React from 'react';

import { cn } from '@/lib/utils/cn';

interface Props {
    isVisible: boolean;
}

const Preloader: React.FC<Props> = ({isVisible}) => {
    return (
        <div>
            <div className={cn('preloader', { isVisible })}>
                <video
                    autoPlay={true}
                    loop={true}
                    muted
                    className={cn('preloader__vid')}
                >
                    <source src="/xs.webm" type="video/webm" />
                </video>
            </div>
        </div>
    );
};

export default Preloader;