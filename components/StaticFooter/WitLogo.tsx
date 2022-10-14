import { Image } from "react-bootstrap";
import styles from "./WitLogo.module.scss";
import cx from "classnames";

type WitLogoProps = {
  className?: string;
};
const WitLogo = ({ className }: WitLogoProps) => (
  <Image className={cx(styles.logo, className)} src="wit-logo.svg" />
);

export default WitLogo;
