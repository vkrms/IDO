import * as styles from './reading.css';

interface Props {
  text: string;
  // Define your component props here
}

const Reading: React.FC<Props> = ({ text }) => {
  return (
    <article className={`${styles.reading} scrollbar`}>
      {/* // biome-ignore lint/security/noDangerouslySetInnerHtml */}
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </article>
  );
};

export default Reading;
