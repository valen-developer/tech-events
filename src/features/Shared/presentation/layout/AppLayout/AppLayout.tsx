import { FC } from "react";
import { Navbar } from "../../components/Navbar/Navbar";

import styles from "./AppLayout.module.scss";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.app_layout}>
      <div className={styles.navbar__container}>
        <Navbar />
      </div>
      <div className={styles.content__container}>{children}</div>
    </div>
  );
};
