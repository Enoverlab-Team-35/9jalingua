import React from "react";

export default function AuthLayout({ text, children }) {

  return (
    <section className="min-h-screen h-full py-20 flex flex-col justify-center">
      <div>
        <h1 className="text-[#272727] text-[32px] sm:text-5xl font-bold font-arimo text-center px-5">
          {text} to Learn and Connect
        </h1>

        <div className="w-full max-w-[490px] mx-auto mt-16">
          {children}
        </div>
      </div>
    </section>
  );
}
