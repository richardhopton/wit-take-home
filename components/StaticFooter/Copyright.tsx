import styles from "./Copyright.module.scss";
import CopyrightText from "./CopyrightText";
import WitLogo from "./WitLogo";

const Copyright = () => (
  <div className={styles.copyright}>
    <WitLogo />
    <div className={styles.copyrightText}>
      <CopyrightText />
    </div>
  </div>
);

export default Copyright;
