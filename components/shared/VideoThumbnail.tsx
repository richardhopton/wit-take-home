import { Image } from "react-bootstrap";

type VideoThumbnailProps = {
  url: string;
  width: number;
  height: number;
};

const VideoThumbnail = ({ url, width, height }: VideoThumbnailProps) => (
  <Image width={width} height={height} src={url} />
);

export default VideoThumbnail;
