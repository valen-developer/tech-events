import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { TechEvent } from "../../../domain/TechEvent.model";

import styles from "./TechEventCard.module.scss";

interface TechEventCardProps {
  event: TechEvent;
}

export const TechEventCard: FC<TechEventCardProps> = ({ event }) => {
  const [imgUrl, setImgUrl] = useState("https://picsum.photos/200/300");
  const url = "https://picsum.photos/400/2010";

  const imageLoader = () => {
    return url;
  };

  useEffect(() => {
    console.log("entra");
    console.log(event.uuid.value);

    setImgUrl(url);
  }, [event]);

  return (
    <div className={styles.card}>
      <Image
        loader={imageLoader}
        src={imgUrl}
        alt={`${event.title.value} cover`}
        width="100%"
        height="200"
      />

      <div className={styles.card__content}>
        <h3>{event.title.value}</h3>

        <p className={`clamp_3 text-sm`}>{event.shortDescription.value}</p>

        <div className={styles.card__footer}>
          <span className={`clamp_3 text-sm`}>
            {event.getInitDate().toDDMMYYYY()}
          </span>
          <span className={`clamp_3 text-sm`}>{event.location.value}</span>
        </div>
      </div>
    </div>
  );
};
