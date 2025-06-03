import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Creăm contextul
const ThemeContext = createContext();

// 2. Hook pentru a folosi tema în componente
export const useTheme = () => useContext(ThemeContext);

// 3. Provider global
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // La montare: citește din localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    }
  }, []);

  // Aplică tema pe <html> și salvează în localStorage
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Funcție pentru toggle
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
