import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { NextEventsFinder } from "../../../application/NextEventsFinder";
import { TechEvent } from "../../../domain/TechEvent.model";
import { TechEventCollection } from "../TechEventCollection/TechEventCollection";

export const NextEventsCollection = () => {
  const title = "Próximos eventos";
  const [events, setEvents] = useState<TechEvent[]>([]);

  useEffect(() => {
    const nextEventsFinder = container.resolve(NextEventsFinder);

    const handleFindNextEvents = async () => {
      const { events } = await nextEventsFinder.findNextEvents({ page: 1 });
      setEvents(events);
    };

    handleFindNextEvents();
  }, []);

  return <TechEventCollection events={events} title={title} />;
};
