import styles from "./Copyright.module.scss";
import WitLogo from "./WitLogo";

const Copyright = () => (
  <div className={styles.copyright}>
    <WitLogo />
    <div className={styles.copyrightText}>
      Copyright © 2020 Wit. All rights reserved.
    </div>
  </div>
);

export default Copyright;
