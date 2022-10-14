import styles from "./index.module.scss";
import Copyright from "./Copyright";
import Links from "./Links";
import { useMediaQuery } from "usehooks-ts";
import WitLogo from "./WitLogo";
import CopyrightText from "./CopyrightText";
import cx from "classnames";

const StaticFooter = () => {
  const narrow = useMediaQuery("screen and (max-width: 850px)");
  if (narrow) {
    return (
      <div className={cx(styles.footer, styles.stacked)}>
        <WitLogo className={styles.logo} />
        <Links />
        <div className={styles.copyrightText}>
          <CopyrightText />
        </div>
      </div>
    );
  }

  return (
    <div className={cx(styles.footer, styles.horizontal)}>
      <Copyright />
      <Links />
    </div>
  );
};

export default StaticFooter;
