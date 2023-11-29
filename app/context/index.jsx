"use client";

import { useContext, createContext, useState } from "react";

export const AppContext = createContext({});

export function AppContextProvider(children) {
  const [state, setState] = useState();

  return (
    <AppContext.Provider value={(state, setState)}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
