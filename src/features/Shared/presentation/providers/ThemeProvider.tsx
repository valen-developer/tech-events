import { createContext, FC, useContext, useState } from "react";

export const THEMES = {
  light: "theme-light",
  dark: "theme-dark",
};

export const ThemeContext = createContext({
  theme: THEMES.light,
  setTheme: (theme: string): void => {
    throw new Error("setTheme function not implemented");
  },
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.light);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
