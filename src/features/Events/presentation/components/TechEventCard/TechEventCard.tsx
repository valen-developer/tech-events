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
