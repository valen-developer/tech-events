import Link from "next/link";
import React from "react";
import { THEMES, useTheme } from "../../providers/ThemeProvider";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <h1 className={styles.navbar__title}>
          eventos<span>.wiki</span>
        </h1>
      </div>

      <div className={styles.navbar__right}>
        <ul className={styles.navbar__links}>
          <li>
            <Link href={"/next-events"}>Próximos</Link>
          </li>
          <li>
            <Link href={"/outdated-events"}>Pasados</Link>
          </li>
        </ul>

        <div className={styles.navbar__actions}>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};
