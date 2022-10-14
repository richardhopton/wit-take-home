import { Image } from "react-bootstrap";
import styles from "./OurNextContest.module.scss";

const OurNextContest = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src="/fresno.png" />
      <div className={styles.text}>
        <div>Our next contest:</div>
        <div className={styles.highlighted}>#Loremipsumdolor</div>
      </div>
    </div>
  );
};

export default OurNextContest;
