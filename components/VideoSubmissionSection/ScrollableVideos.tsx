import { Stack } from "react-bootstrap";
import { Video } from "../../types/Video";
import VideoThumbnail from "../shared/VideoThumbnail";
import styles from "./ScrollableVideos.module.scss";

export type ScrollableVideosProps = {
  videos: Video[];
};

const ScrollableVideos = ({ videos }: ScrollableVideosProps) => (
  <div className={styles.scrollable}>
    <Stack className={styles.stack} direction="horizontal">
      {videos.map((video, id) => (
        <VideoThumbnail key={id} {...video} width={168} height={320} />
      ))}
    </Stack>
  </div>
);

export default ScrollableVideos;
