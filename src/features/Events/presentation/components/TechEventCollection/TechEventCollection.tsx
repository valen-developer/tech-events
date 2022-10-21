import { FC } from "react";
import { TechEvent } from "../../../domain/TechEvent.model";
import { TechEventCard } from "../TechEventCard/TechEventCard";

import styles from "./TechEventCollection.module.scss";

interface TechEventCollectionProps {
  title: string;
  events: TechEvent[];
}

export const TechEventCollection: FC<TechEventCollectionProps> = ({
  events,
  title,
}) => {
  return (
    <section className={styles.collection_wrapper} >
      <h2>{title}</h2>
      <div className={styles.collection}>
        {events.map((e) => (
          <TechEventCard key={e.uuid.value} event={e} />
        ))}
      </div>
    </section>
  );
};
