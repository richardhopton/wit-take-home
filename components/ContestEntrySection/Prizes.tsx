import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import cx from "classnames";
import styles from "./Prizes.module.scss";

type PrizeProps = {
  url: string;
  name: string;
  title: string;
};

const prizes = [
  {
    url: "prize1.png",
    name: "1ST PLACE",
    title: "FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT",
  },
  {
    url: "prize2.png",
    name: "2ND PLACE",
    title: "FRESNO STATE BACKPACK, MOPHIE POWER PACK, PEPSI PRODUCT",
  },
  {
    url: "prize3.png",
    name: "3RD PLACE",
    title: "FRESNO STATE BLANKET, PEPSI PRODUCT",
  },
  {
    url: "prize4.png",
    name: "4TH PLACE",
    title: "DAVANTE ADAMS BOBBLEHEAD",
  },
  {
    url: "prize5.png",
    name: "5TH PLACE",
    title: "BIG 3 BOBBLEHEAD (PAUL GEORGE, AARON JUDGE, DEREK CARR)",
  },
];

const Prize = ({ url, name, title }: PrizeProps) => (
  <>
    <Image className={styles.image} src={url} />
    <div className={styles.name}>{name}</div>
    <div className={styles.title}>{title}</div>
  </>
);

const Prizes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className={styles.container}>
      <Carousel
        className={styles.prizes}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={5000}
        indicators={false}
        controls={false}
      >
        {prizes.map((prize, index) => (
          <Carousel.Item key={index}>
            <Prize {...prize} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.selectors}>
        {prizes.map((_, index) => (
          <div
            key={index}
            className={cx(styles.selector, {
              [styles.activeSelector]: index === activeIndex,
            })}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Prizes;
