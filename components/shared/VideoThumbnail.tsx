import { Image } from "react-bootstrap";
import { Video } from "../../types/Video";

type VideoThumbnailProps = {
  url: string;
  width: number;
  height: number;
};

const VideoThumbnail = ({ url, width, height }: VideoThumbnailProps) => {
  return <Image width={width} height={height} src={url} />;
};

export default VideoThumbnail;
