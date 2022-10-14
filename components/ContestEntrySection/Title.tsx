import styles from "./Title.module.scss";
const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Fan moments</div>
      <div className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra
        congue libero in finibus. Integer nulla eros, tempus.
      </div>
    </div>
  );
};

export default Title;
