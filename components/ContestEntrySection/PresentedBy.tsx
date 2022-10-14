import { Image } from "react-bootstrap";
import styles from "./PresentedBy.module.scss";

const PepsiLogo = () => <Image className={styles.logo} src="/pepsi.png" />;
const PresentedBy = () => {
  return (
    <div className={styles.container}>
      <span className={styles.presentedBy}>Presented By </span>
      <span className={styles.highlighted}>Pepsi</span>
      <PepsiLogo />
    </div>
  );
};

export default PresentedBy;
