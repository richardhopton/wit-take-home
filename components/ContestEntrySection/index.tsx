import EnterNowButton from "../shared/EnterNowButton";
import Title from "./Title";
import styles from "./index.module.scss";
import OurNextContest from "./OurNextContest";
import PresentedBy from "./PresentedBy";
import Prizes from "./Prizes";
import Steps from "./Steps";
import VotingBegins, { VotingBeginsProps } from "./VotingBegins";
import { useMediaQuery } from "usehooks-ts";
import Background from "./Background";

export type ContestEntrySectionProps = VotingBeginsProps;

const ContestEntrySection = (props: ContestEntrySectionProps) => {
  const narrow = useMediaQuery("screen and (max-width: 850px)");
  if (narrow) {
    return (
      <Background>
        <VotingBegins {...props} />
        <OurNextContest />
        <Title />
        <Prizes />
        <PresentedBy />
        <Steps />
        <EnterNowButton />
      </Background>
    );
  }
  return (
    <Background>
      <VotingBegins {...props} />
      <div className={styles.columns}>
        <div className={styles.leftColumn}>
          <OurNextContest />
          <Title />
          <PresentedBy />
          <Steps />
          <div className={styles.cta}>
            <EnterNowButton />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <Prizes />
        </div>
      </div>
    </Background>
  );
};

export default ContestEntrySection;
