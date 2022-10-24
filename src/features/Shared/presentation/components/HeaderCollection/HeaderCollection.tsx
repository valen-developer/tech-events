import Link from "next/link";
import { FC } from "react";
import styles from "./HeaderCollection.module.scss";

interface HeaderCollectionProps {
  seeMoreLabel: string;
  seeMoreHref: string;
  children: React.ReactNode;
}

export const HeaderCollection: FC<HeaderCollectionProps> = ({
  seeMoreLabel,
  seeMoreHref,
  children,
}) => {
  return (
    <div className={styles.header}>
      <div>{children}</div>
      <Link href={seeMoreHref} className={styles.header__link}>
        {seeMoreLabel}
      </Link>
    </div>
  );
};
