import React from 'react';

import { cn } from '@/lib/utils/cn';

interface Props {
    isVisible: boolean;
}

const Preloader: React.FC<Props> = ({isVisible}) => {
    return (
        <div>
            <div className={cn('preloader', { isVisible })}>
                <img className={cn('preloader__icon')}  src="/img/favicon.webp" />                
            </div>
        </div>
    );
};

export default Preloader;