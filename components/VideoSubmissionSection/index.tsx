import SubHeader from "../shared/SubHeader";
import styles from "./index.module.scss";
import ScrollableVideos, { ScrollableVideosProps } from "./ScrollableVideos";

export type VideoSubmissionSectionProps = ScrollableVideosProps;

const VideoSubmissionSection = ({ videos }: VideoSubmissionSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SubHeader>
          Headline about videos
          <span className={styles.highlighted}> already submitted</span>
        </SubHeader>
      </div>
      <ScrollableVideos videos={videos} />
    </div>
  );
};

export default VideoSubmissionSection;
