import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { NextEventsFinder } from "../../../application/NextEventsFinder";
import { TechEvent } from "../../../domain/TechEvent.model";

export const NextEventsCollection = () => {
  const [events, setEvents] = useState<TechEvent[]>([]);

  useEffect(() => {
    const nextEventsFinder = container.resolve(NextEventsFinder);

    const handleFindNextEvents = async () => {
      const { events } = await nextEventsFinder.findNextEvents({ page: 1 });
      setEvents(events);
    };

    handleFindNextEvents();
  }, []);

  return (
    <div>
      {events.map((event) => {
        return (
          <div key={event.uuid.value}>
            <span>{event.title.value}</span>
            <span>{event.shortDescription.value}</span>
            <span>{event.getInitDate().toDDMMYYYY()}</span>
            <span>{event.location.value}</span>
          </div>
        );
      })}
    </div>
  );
};
