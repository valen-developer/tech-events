import { FC } from "react";

import styles from "./AppLayout.module.scss";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className={styles.navbar__container}></div>
      <div className={styles.content__container}>{children}</div>
    </div>
  );
};
