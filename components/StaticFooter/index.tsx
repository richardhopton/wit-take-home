import styles from "./index.module.scss";
import Copyright from "./Copyright";
import Links from "./Links";

const StaticFooter = () => (
  <div className={styles.footer}>
    <Copyright />
    <Links />
  </div>
);

export default StaticFooter;
