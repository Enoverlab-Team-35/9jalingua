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
      to: "Good morning",
      audio: "/audio/ekaaro.mp3"
    },
    {
      from: "e kaasan",
      to: "Good afternoon",
      audio: "/audio/ekaasan.mp3"
    },
    {
      from: "e kaale",
      to: "Good night",
      audio: null
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

  const [test, setTest] = useState([
    {
      id: 1,
      question: "Good morning",
      options: ['e kaale', 'e kaaro', 'e kaasan', 'e ku irole'],
      answer: 'e kaaro'
    },
    {
      id: 2,
      question: "Good night",
      options: ['e kaale', 'e kaaro', 'e kaasan', 'e ku irole'],
      answer: 'e kaale'
    },
    {
      id: 3,
      question: "Good afternoon",
      options: ['e kaale', 'e kaaro', 'e kaasan', 'e ku irole'],
      answer: 'e kaasan'
    }
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
    <AppContext.Provider value={{ state, setState, sidebarVisible, setSidebarVisible, selectedLanguage, setSelectedLanguage, topics, setTopics, lessons, streakdays, setStreakDays, test, setTest }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
