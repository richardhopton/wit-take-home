import ContestEntrySection, {
  ContestEntrySectionProps,
} from "../components/ContestEntrySection";
import LastCTASection from "../components/LastCTASection";
import StaticFooter from "../components/StaticFooter";
import VideoSubmissionSection, {
  VideoSubmissionSectionProps,
} from "../components/VideoSubmissionSection";
import styles from "./index.module.scss";

export const getStaticProps = async () => {
  const props: IndexProps = {
    videos: [
      { url: "./video1.png" },
      { url: "./video2.png" },
      { url: "./video3.png" },
      { url: "./video4.png" },
      { url: "./video5.png" },
    ],
    dateTime: JSON.parse(JSON.stringify(new Date("2022-11-30 12:00:00Z"))),
  };
  return { props };
};

type IndexProps = VideoSubmissionSectionProps & ContestEntrySectionProps;

const Index = ({ videos, dateTime }: IndexProps) => {
  return (
    <div className={styles.main}>
      <main>
        <ContestEntrySection dateTime={dateTime} />
        <VideoSubmissionSection videos={videos} />
        <LastCTASection />
      </main>
      <footer>
        <StaticFooter />
      </footer>
    </div>
  );
};

export default Index;
