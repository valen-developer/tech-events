import { FC } from "react";
import { TechEvent } from "../../../domain/TechEvent.model";
import { TechEventCardImage } from "../TechEventCardImage/TechEventCardImage";

import styles from "./TechEventCard.module.scss";

interface TechEventCardProps {
  event: TechEvent;
}

export const TechEventCard: FC<TechEventCardProps> = ({ event }) => {
  return (
    <div className={styles.card}>
      <TechEventCardImage eventTitle={event.title.value} />

      <div className={`${styles.card__content} fade-in`}>
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

export const TechEventCardShimmer: FC = () => {
  return (
    <div className={styles.card}>
      <div className={`${styles.shimmer__image} shimmer`}></div>

      <div className={`${styles.card__content}`}>
        <div
          className={`${styles.shimmer__text} shimmer`}
          style={{ width: "80%" }}
        ></div>
        <div className={`${styles.shimmer__text} shimmer`}></div>
      </div>
    </div>
  );
};
