import { FC } from "react";
import { TechEvent } from "../../../domain/TechEvent.model";
import {
  TechEventCard,
  TechEventCardShimmer,
} from "../TechEventCard/TechEventCard";

import styles from "./TechEventCollection.module.scss";

interface TechEventCollectionProps {
  events: TechEvent[];
}

export const TechEventCollection: FC<TechEventCollectionProps> = ({
  events,
}) => {
  return (
    <section className={styles.collection_wrapper}>
      <div className={styles.collection}>
        {events.map((e) => (
          <TechEventCard key={e.uuid.value} event={e} />
        ))}
      </div>
    </section>
  );
};

export const TechEventCollectionShimmer = () => {
  const array = new Array(10).fill(0);

  return (
    <section className={styles.collection_wrapper}>
      <div className={styles.collection}>
        {array.map((e) => (
          <TechEventCardShimmer key={e} />
        ))}
      </div>
    </section>
  );
};
