import { FC } from "react";
import { TechEvent } from "../../../domain/TechEvent.model";
import { TechEventCard } from "../TechEventCard/TechEventCard";

interface TechEventCollectionProps {
  events: TechEvent[];
}

export const TechEventCollection: FC<TechEventCollectionProps> = ({
  events,
}) => {
  return (
    <div>
      {events.map((e) => (
        <TechEventCard key={e.uuid.value} event={e} />
      ))}
    </div>
  );
};
