import { FC, useEffect, useState } from "react";
import { Nullable } from "../../../../../core/types/Nullable.type";

import styles from "./TechEventCardImage.module.scss";

interface TechEventCardImageProps {
  eventTitle: string;
}

export const TechEventCardImage: FC<TechEventCardImageProps> = ({
  eventTitle,
}) => {
  const [imgUrl, setImgUrl] = useState<Nullable<string>>(null);

  useEffect(() => {
    const randomHeight = Math.floor(Math.random() * 10) + 300;
    const url = `https://picsum.photos/400/${randomHeight}`;
    setImgUrl(url);
  }, [eventTitle]);

  if (!imgUrl) return <div className={styles.image__container}>Loading...</div>;

  return (
    <div className={`${styles.image__container} fade-in`}>
      <img src={imgUrl} alt={`${eventTitle} cover`} className={styles.image} />
    </div>
  );
};
