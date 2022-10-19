import { FC } from "react";
import { TechEvent } from "../../../domain/TechEvent.model";

interface TechEventCardProps {
  event: TechEvent;
}

export const TechEventCard: FC<TechEventCardProps> = ({ event }) => {
  return (
    <div>
      <span>{event.title.value}</span>
      <span>{event.shortDescription.value}</span>
      <span>{event.getInitDate().toDDMMYYYY()}</span>
      <span>{event.location.value}</span>
    </div>
  );
};
