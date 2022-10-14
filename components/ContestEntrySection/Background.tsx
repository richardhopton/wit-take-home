import { ReactNode } from "react";
import styles from "./Background.module.scss";

type BackgroundProps = {
  children: ReactNode;
};
const Background = ({ children }: BackgroundProps) => (
  <div className={styles.image}>
    <div className={styles.white}>
      <div className={styles.black}>
        <div className={styles.color}>
          <div className={styles.container}>{children}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Background;
