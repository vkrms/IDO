// import styles from './digit.module.scss';

import * as styles from '@/module/home/welcome/welcome.css';


interface Props {
    value: number
    title: string
}

export function Digit({ value, title }: Props) {
    // value might be up to 3 digits long
    const digits = value.toString().padStart(2, '0').split('');    

    return (
        <div className='text-center'>
            <div className={styles.itemValueList}>

                {digits.map((digit) => {
                    return (
                        <span
                            className={styles.itemValue}
                            key={title + digit + Math.random()}
                        >
                            {digit}
                        </span>
                    )
                })}

            </div>

            <span className={styles.itemKey}>{title}</span>
        </div>
    );
}
