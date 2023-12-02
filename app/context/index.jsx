"use client";

import { useContext, createContext, useState } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [state, setState] = useState();
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(["Yoruba", "Igbo", "Hausa"]);

  return (
    <AppContext.Provider value={{ state, setState, sidebarVisible, setSidebarVisible, selectedLanguage, setSelectedLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
