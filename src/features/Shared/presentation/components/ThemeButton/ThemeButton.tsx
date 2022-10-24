import { THEMES, useTheme } from "../../providers/ThemeProvider";

import styles from "./ThemeButton.module.scss";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isLight = theme === THEMES.light;
    setTheme(isLight ? THEMES.dark : THEMES.light);
  };

  return (
    <button className={styles.button} onClick={handleToggleTheme}>
      button
    </button>
  );
};
