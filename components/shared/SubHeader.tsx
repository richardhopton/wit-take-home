import styles from "./SubHeader.module.scss";

type SubHeaderProps = {
  children?: React.ReactNode;
};

const SubHeader = ({ children }: SubHeaderProps) => (
  <h2 className={styles.subheader}>{children}</h2>
);

export default SubHeader;
