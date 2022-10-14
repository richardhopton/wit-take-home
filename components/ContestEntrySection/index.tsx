import styles from "./index.module.scss";
import VotingBegins, { VotingBeginsProps } from "./VotingBegins";

export type ContestEntrySectionProps = VotingBeginsProps;

const ContestEntrySection = (props: ContestEntrySectionProps) => (
  <div className={styles.container}>
    <VotingBegins {...props} />
  </div>
);

export default ContestEntrySection;
