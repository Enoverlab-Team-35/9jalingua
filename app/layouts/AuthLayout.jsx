import React from "react";
import { ToastContainer } from "react-toastify";

export default function AuthLayout({ text, children }) {

  return (
    <section className="min-h-screen h-full px-5 py-20 flex flex-col justify-center">
      {/* <ToastContainer /> */}
      <div>
        <h1 className="text-[#272727] text-5xl font-bold font-arimo text-center">
          {text} to Learn and Connect
        </h1>
        
        <div className="w-full max-w-[490px] mx-auto mt-16">
          {children}
        </div>
      </div>
    </section>
  );
}
