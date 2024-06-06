import * as styles from './reading.css'

interface Props {
    text: string,
    // Define your component props here
}

const Reading: React.FC<Props> = ({text}) => {
    return (
        <article className={styles.reading}>
            <div dangerouslySetInnerHTML={{__html: text}}/>
        </article>
    );
};

export default Reading;