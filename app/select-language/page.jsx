"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppContext } from "../context";
import Link from "next/link";

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
  const [data, setData] = useState(language)
  const [value, setValue] = useState()
  const { selectedLanguage, setSelectedLanguage } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (value && value.trim().length !== 0) {
      setData(language.filter(item => item.toLowerCase().includes(value.trim().toLowerCase())))
    } else {
      setData(language)
    }
  }, [value])

  const toggleLanguage = language => {
    setSelectedLanguage(language)
    sessionStorage.setItem("language", language)
    toast.success(`You have selected ${language.toUpperCase()}`);
    router.push("/dashboard");
  }

  function onSearch(e) {
    e.preventDefault()
  }

  return (
    <>
      <nav className='fixed top-0 left-0 w-full bg-white z-10 px-5 pt-10 pb-6'>
        <div className="container mx-auto">
          {/* logo */}
          <Link
            href={'/'}
            className="flex items-center gap-4 font-arimo"
          >
            <Image
              src={'/9jalingua/green.svg'}
              width={38}
              height={43}
              alt='9jaLingua'
            />
            <span className="text-4xl font-bold text-blues-1100">9jaLingua</span>
          </Link>
        </div>
      </nav>

      <section className="min-h-screen h-full p-5 mt-36 pb-20">
        <div className="container mx-auto">
          <h1 className="text-center text-[32px] sm:text-[40px] font-bold text-grays-900 mb-10">
            What Nigerian Language will you Like to learn?
          </h1>
          <div className='w-full my-[24px] ms-auto rounded-lg border border-grays-300 overflow-hidden font-arimo sm:hidden'>
            <form className='flex items-center gap-2 p-0' onSubmit={onSearch}>
              <input
                type="search"
                placeholder='Search Lession'
                value={value}
                onChange={e => setValue(e.target.value)}
                className='flex-auto py-[10px] ps-[14px] bg-white text-grays-600 w-full focus-within:outline-none'
              />
              <button
                className='py-[10px] pe-[14px]'
                type='submit'
              >
                <Image
                  src={'/community/search-sm.svg'}
                  height={20}
                  width={20}
                  alt='Search'
                />
              </button>
            </form>
          </div>
          <div className="flex flex-wrap justify-evenly gap-5 md:gap-x-12 md:gap-y-2">
            {data.length > 0 ? (data.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleLanguage(item)}
                className={`${selectedLanguage === item ? "bg-greens-300" : "bg-blues-900"
                  } text-white py-5 px-3 w-[100px] sm:w-[151px] text-center rounded-lg font-arimo text-xl font-bold`}
              >
                {item}
              </button>
            ))) : (
              <p className="text-grays-900"><span className="font-medium">{value.toUpperCase()}</span> not found, try another language</p>
            )}
          </div>
          {/* <button
            className="mt-28 ms-auto px-8 py-4 rounded-lg text-white bg-greens-300 flex place-items-center gap-2"
            onClick={() => {
              if (selectedLanguage) {
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
          </button> */}
        </div>
      </section>
    </>
  );
}
