import styles from "./index.module.scss";
import SubHeader from "../shared/SubHeader";
import EnterNowButton from "../shared/EnterNowButton";

const LastCTASection = () => (
  <div className={styles.container}>
    <SubHeader>Last CTA</SubHeader>
    <div className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus
      tellus, pulvinar quis volutpat et, mollis vitae ligula.
    </div>
    <EnterNowButton />
  </div>
);

export default LastCTASection;
