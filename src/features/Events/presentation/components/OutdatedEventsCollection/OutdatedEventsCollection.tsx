import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { OutDatedEventsFinder } from "../../../application/OutDatedEventsFinder";
import { TechEvent } from "../../../domain/TechEvent.model";

export const OutdatedEventsCollection = () => {
  const [events, setEvents] = useState<TechEvent[]>([]);

  useEffect(() => {
    const eventsFinder = container.resolve(OutDatedEventsFinder);

    const handleFindEvents = async () => {
      const { events } = await eventsFinder.findOutDatedEvents({ page: 1 });
      setEvents(events);
    };

    handleFindEvents();
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event.uuid.value}>
          <span>{event.title.value}</span>
          <span>{event.shortDescription.value}</span>
          <span>{event.getInitDate().toDDMMYYYY()}</span>
          <span>{event.location.value}</span>
        </div>
      ))}
    </div>
  );
};
