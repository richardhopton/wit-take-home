import CountdownTimer, { CountdownTimerProps } from "../shared/CountdownTimer";
import styles from "./VotingBegins.module.scss";

export type VotingBeginsProps = CountdownTimerProps;

const VotingBegins = ({ dateTime }: VotingBeginsProps) => (
  <div className={styles.votingBegins}>
    Voting Begins in{" "}
    <span className={styles.strong}>
      <CountdownTimer dateTime={dateTime} />
    </span>
  </div>
);

export default VotingBegins;
