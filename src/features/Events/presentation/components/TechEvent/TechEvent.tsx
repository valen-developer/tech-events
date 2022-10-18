import Image from "next/image";

import { FC, useEffect, useState } from "react";
import { TechEvent } from "../../../domain/TechEvent.model";

interface TechEventProps {
  event: TechEvent;
}

export const TechEventView: FC<TechEventProps> = ({ event }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // from image api
    setImageUrl("https://picsum.photos/200/300");
  }, [event]);

  return (
    <div>
      <h1>{event.title.value}</h1>
      <p>{event.description.value}</p>
      <span>{event.dates.intervalString()}</span>
      <span>{event.location.value}</span>
      <Image
        src={imageUrl}
        alt={`${event.title.value} cover`}
        width={200}
        height={300}
      />
    </div>
  );
};
