"use client";

import { useContext, createContext, useState, useEffect } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [state, setState] = useState();
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [streakdays, setStreakDays] = useState(0);
  const lessons = [
    {
      from: "e kaaro",
      to: "Good morning"
    },
    {
      from: "e kaasan",
      to: "Good afternoon"
    },
    {
      from: "e kaale",
      to: "Good night"
    },
  ]
  const [topics, setTopics] = useState([
    {
      id: 1,
      heading: "Greetings",
      title: "Learn how to introduce yourself, greet friends and the elderly",
      img: "/interactivePage/mask-group@2x.png",
      progress: 0,
      total_lesson: lessons?.length
    },
    {
      id: 2,
      heading: "Part of the Body",
      title: "Learn how to identify every part of the body",
      img: "/interactivePage/mask-group1@2x.png",
      progress: 0,
      total_lesson: lessons?.length
    },
    {
      id: 3,
      heading: "Singular and plural",
      title: "Know how to call one and know how to call two or more",
      img: "/interactivePage/mask-group2@2x.png",
      progress: 0,
      total_lesson: lessons?.length
    },
    {
      id: 4,
      heading: "Know your Objects",
      title: "Identify any object and learn the correct pronunciation.",
      img: "/interactivePage/mask-group3@2x.png",
      progress: 0,
      total_lesson: lessons?.length
    },
  ])

  useEffect(() => {
    const sessionLanguage = sessionStorage.getItem("language")
    const sessionTopics = sessionStorage.getItem("topics")
    const sessionDays = sessionStorage.getItem("days")
    if (sessionLanguage) {
      setSelectedLanguage(sessionLanguage)
    }
    if (sessionDays) {
      setStreakDays(sessionDays)
    }
    if (sessionTopics) {
      setTopics(JSON.parse(sessionTopics))
    }
  }, [])


  return (
    <AppContext.Provider value={{ state, setState, sidebarVisible, setSidebarVisible, selectedLanguage, setSelectedLanguage, topics, setTopics, lessons, streakdays, setStreakDays }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
