import SubHeader from "../shared/SubHeader";
import styles from "./index.module.scss";
import ScrollableVideos, { ScrollableVideosProps } from "./ScrollableVideos";

export type VideoSubmissionSectionProps = ScrollableVideosProps;

const VideoSubmissionSection = ({ videos }: VideoSubmissionSectionProps) => {
  return (
    <div className={styles.container}>
      <SubHeader>
        Headline about videos&nbsp;
        <span className={styles.highlighted}>already submitted</span>
      </SubHeader>
      <ScrollableVideos videos={videos} />
    </div>
  );
};

export default VideoSubmissionSection;
