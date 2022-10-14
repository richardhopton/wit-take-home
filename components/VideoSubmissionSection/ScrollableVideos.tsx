import { Video } from "../../types/Video";
import VideoThumbnail from "../shared/VideoThumbnail";
import styles from "./ScrollableVideos.module.scss";

export type ScrollableVideosProps = {
  videos: Video[];
};

const ScrollableVideos = ({ videos }: ScrollableVideosProps) => (
  <div className={styles.scrollable}>
    <div className={styles.stack}>
      {videos.map((video, id) => (
        <VideoThumbnail key={id} {...video} width={168} height={320} />
      ))}
    </div>
  </div>
);

export default ScrollableVideos;
