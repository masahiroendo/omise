import { createContext, FC, PropsWithChildren, useState } from "react";

import { darkModeBgAndText } from "../tailwindClasses";

type ThemeContextType = {
  darkMode: boolean;
  toggleDark: () => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const value = {
    darkMode,
    toggleDark: toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={darkMode ? "dark" : ""}>
        <div className={darkModeBgAndText}>{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
