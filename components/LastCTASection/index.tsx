import Button from "react-bootstrap/Button";
import styles from "./index.module.scss";
import SubHeader from "../shared/SubHeader";

const LastCTASection = () => (
  <div className={styles.container}>
    <SubHeader>Last CTA</SubHeader>
    <div className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus
      tellus, pulvinar quis volutpat et, mollis vitae ligula.
    </div>
    <Button className={styles.button}>Enter Now</Button>
  </div>
);

export default LastCTASection;
