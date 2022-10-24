import { FC } from "react";
import { TechEvent } from "../../../domain/TechEvent.model";
import { TechEventCard } from "../TechEventCard/TechEventCard";

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
