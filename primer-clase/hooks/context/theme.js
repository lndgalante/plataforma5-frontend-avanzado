import { useState, useContext, createContext } from 'react';

const themeContext = createContext();

function ThemeContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light');

  const themes = { light: 'dark', dark: 'light' };

  function toggleTheme() {
    setThemeMode((previousThemeMode) => themes[previousThemeMode]);
  }

  return <themeContext.Provider value={{ themeMode, toggleTheme }}>{children}</themeContext.Provider>;
}

function useTheme() {
  return useContext(themeContext);
}

export { ThemeContextProvider, themeContext, useTheme };
