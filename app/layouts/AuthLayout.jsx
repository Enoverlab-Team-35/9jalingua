import React from "react";
import { initFirebase, signOut, auth } from "../firebase/config";

export default function AuthLayout({ text, children }) {
  // const app = initFirebase();
  // console.log(app);

  const logout = async (e) => {
    e.preventDefault()
    try {
      await signOut(auth);
      alert("sign out successfully");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="min-h-screen h-full px-5 py-20 flex flex-col justify-center">
      <div>
        <h1 className="text-[#272727] text-5xl font-bold font-arimo text-center">
          {text} to Learn and Connect
        </h1>
        {/* <div className="text-center mt-3">
          <button
            onClick={logout}
            className="border-2 rounded-lg p-2"
          >
            Log Out
          </button>
        </div> */}
        <div className="w-full max-w-[490px] mx-auto mt-16">
          {children}
        </div>
      </div>
    </section>
  );
}
