import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { TechEvent } from "../../../domain/TechEvent.model";

import styles from "./TechEventCard.module.scss";

interface TechEventCardProps {
  event: TechEvent;
}

export const TechEventCard: FC<TechEventCardProps> = ({ event }) => {
  const [imgUrl, setImgUrl] = useState("https://picsum.photos/200/300");
  const url = "https://picsum.photos/200/300";

  const imageLoader = () => {
    return url;
  };

  useEffect(() => {
    setImgUrl(url);
  }, [event]);

  return (
    <div className={styles.card}>
      <Image
        loader={imageLoader}
        src={imgUrl}
        alt={`${event.title.value} cover`}
        layout="responsive"
        width="100"
        height="100"
      />
      <span>{event.title.value}</span>
      <span>{event.shortDescription.value}</span>
      <span>{event.getInitDate().toDDMMYYYY()}</span>
      <span>{event.location.value}</span>
    </div>
  );
};
