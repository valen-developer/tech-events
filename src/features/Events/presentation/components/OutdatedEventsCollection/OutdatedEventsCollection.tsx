import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { OutDatedEventsFinder } from "../../../application/OutDatedEventsFinder";
import { TechEvent } from "../../../domain/TechEvent.model";
import { TechEventCollection } from "../TechEventCollection/TechEventCollection";

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

  return <TechEventCollection events={events} />;
};
