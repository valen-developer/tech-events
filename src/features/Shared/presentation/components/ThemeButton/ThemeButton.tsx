import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { THEMES, useTheme } from "../../providers/ThemeProvider";

import styles from "./ThemeButton.module.scss";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(theme === THEMES.light);
  }, [theme]);

  const handleToggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isLight = theme === THEMES.light;
    setTheme(isLight ? THEMES.dark : THEMES.light);
  };

  return (
    <button className={styles.button} onClick={handleToggleTheme}>
      <FontAwesomeIcon
        icon={isLight ? faSun : faMoon}
        className={styles.button__icon}
      />
    </button>
  );
};
