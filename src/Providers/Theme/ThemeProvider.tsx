import React, {useEffect, useState} from "react";
import {ThemeContext} from "./ThemeContext.tsx";
import type {Theme} from "../../types.ts";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Initialize theme from localStorage or prefer-color-scheme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  // Apply theme changes to document and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
