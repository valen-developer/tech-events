import { container } from "tsyringe";

import { GetServerSidePropsContext, NextPage } from "next";
import { useEffect, useState } from "react";

import { NextEventsFinder } from "../../../features/Events/application/NextEventsFinder";
import { TechEventSeriariable } from "../../../features/Events/domain/dtos/TechEvent.dto";
import { TechEvent } from "../../../features/Events/domain/TechEvent.model";
import { TechEventCollection } from "../../../features/Events/presentation/components/TechEventCollection/TechEventCollection";

interface Props {
  events: TechEventSeriariable[];
}

export const getServerSideProps = async () => {
  const nextEventsFinder = container.resolve(NextEventsFinder);
  const { events } = await nextEventsFinder.findNextEvents({ page: 1 });

  return {
    props: {
      events: events.map((event) => event.toSeriarizable()),
    },
  };
};

const NextEventsPage: NextPage<Props> = (props) => {
  const [events, setEvents] = useState<TechEvent[]>([]);

  useEffect(() => {
    const nextEvents = props.events.map((event) =>
      TechEvent.fromSeriariable(event)
    );
    setEvents(nextEvents);
  }, [props.events]);

  return <TechEventCollection events={events} />;
};

export default NextEventsPage;
