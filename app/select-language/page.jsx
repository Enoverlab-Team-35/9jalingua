"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppContext } from "../context";

const language = [
  "Yoruba",
  "Efik",
  "Isan",
  "Urhobo",
  "Gwari",
  "Egun",
  "Igbo",
  "Ibibio",
  "Nupe",
  "Igala",
  "Idoma",
  "Ogoni",
  "Hausa",
  "Bini",
  "Itsekiri",
  "Berom",
  "Ibira",
  "Isoko",
  "Birom",
  "Tangale",
  "Margi",
  "Owerri",
  "Kilba",
  "Kanufi",
  "Izon",
  "Mubi",
  "Owo",
  "Ijebu",
  "Egba",
  "Fulani",
];

export default function Page() {
  const { selectedLanguage, setSelectedLanguage } = useAppContext();
  const router = useRouter();
  const notify = () => {
    toast("Please, select one or more language");
  };

  const toggleLanguage = language => {
    // Check if the language is in the array
    const languageIndex = selectedLanguage.indexOf(language)

    if (languageIndex !== -1) {
      // Language is the array, so remove it
      const updatedLanguages = [...selectedLanguage]
      updatedLanguages.splice(languageIndex, 1)
      setSelectedLanguage(updatedLanguages)
    } else {
      // Language is not in the array
      setSelectedLanguage([...selectedLanguage, language])
    }
  }


  return (
    <section className="min-h-screen h-full p-5">
      <div className="container mx-auto mt-12">
        <h1 className="text-center text-[32px] sm:text-[40px] font-bold text-grays-900 mb-10">
          What Nigerian Language will you Like to learn?
        </h1>
        <div className="flex flex-wrap justify-evenly gap-3 md:gap-x-12 gap-y-2">
          {language?.map((item, index) => (
            <button
              key={index}
              onClick={() => toggleLanguage(item)}
              className={`${selectedLanguage.indexOf(item) !== -1 ? "bg-greens-300" : "bg-blues-900"
                } text-white py-5 px-3 w-[151px] text-center rounded-lg font-arimo text-xl font-bold`}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          className="mt-28 ms-auto px-8 py-4 rounded-lg text-white bg-greens-300 flex place-items-center gap-2"
          onClick={() => {
            if (selectedLanguage.length > 0) {
              router.push("/dashboard");
            } else {
              toast("Select language to learn");
            }
          }}
        >
          <span className="text-xl font-bold">Continue</span>
          <Image
            src={"/svgs/arrow-narrow-right.svg"}
            width={20}
            height={20}
            alt="Next"
          />
        </button>
      </div>
    </section>
  );
}
