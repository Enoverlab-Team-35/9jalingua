"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({ text, children }) {

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

      <section className="min-h-screen h-full flex flex-col justify-center mt-32">
        <div>
          <h1 className="text-[#272727] text-[32px] sm:text-5xl font-bold font-arimo text-center px-5">
            {text} to Learn and Connect
          </h1>

          <div className="w-full max-w-[490px] mx-auto mt-16">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
