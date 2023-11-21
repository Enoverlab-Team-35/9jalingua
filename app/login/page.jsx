"use client";

import { React, useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaFacebook, FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
} from "../firebase/config";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (user) {
  //     router.push("/");
  //   }
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Welcome");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      //   router.push("/");
      alert("Welcome");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <AuthLayout text={"Log in"}>
      <div className="flex flex-col justify-center items-center gap-3">
        <button
          onClick={handleGoogleSignIn}
          className="w-[40%] font-bold max-auto flex justify-center items-center border-[3px] border-gray-300 text-black py-2 text-lg rounded-[0.5rem]"
        >
          <FcGoogle className="mr-2 text-4xl rounded-full p-1" />
          Sign in with google
        </button>
        <button className="w-[40%] font-bold flex justify-center items-center border-[3px] border-gray-300 text-black py-2 text-lg rounded-[0.5rem]">
          <FaFacebook className="mr-2 text-4xl text-blue-900 rounded-full p-1" />
          Sign in with facebook
        </button>
        <button className="w-[40%] font-bold flex justify-center items-center border-[3px] border-gray-300 text-black py-2 text-lg rounded-[0.5rem]">
          <FaApple className="mr-2 text-4xl rounded-full p-1" />
          Sign in with apple
        </button>
      </div>
      <div>
        <div className="flex flex-col justify-center items-start w-[40%] mx-auto">
          <h1 className="text-blue-800 mt-20 font-[900] text-3xl">Login</h1>
          <p className="mt-2 font-[600] text-[16px]">
            Welcome back! Please enter your details.
          </p>
        </div>
        <form onSubmit={handleEmailLogin}>
          <div className="flex flex-col justify-center items-start w-[40%] mt-8 mx-auto">
            <label htmlFor="email" className="font-bold text-[16px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="mb-4 pl-4 w-full mx-auto  py-2 text-xl 
                            text-gray-700 bg-white border border-gray-300 
                            rounded-[0.5rem] transition ease-in-out"
              onChange={(event) => {
                setEmail(event?.target.value);
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-start w-[40%] mx-auto">
            <label htmlFor="email" className="font-bold text-[16px]">
              Password
            </label>
            <input
              type="password"
              id="email"
              name="email"
              value={password}
              className="mb-6 pl-4 w-full mx-auto px-5 py-2 text-xl 
                          text-gray-700 bg-white border border-gray-300 
                            rounded-[0.5rem] transition ease-in-out"
              onChange={(event) => {
                setPassword(event?.target.value);
              }}
            />
            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex flex-row gap-3">
                <input type="checkbox" className="" />
                <label htmlFor="remember me">Remember me </label>
              </div>
              <div>
                <a
                  href="/forgetpassword"
                  className="text-green-600 
                                    font-bold text-[16px]"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[40%] mx-auto mt-12 mb-6">
            <button className="bg-green-600 w-full rounded-[0.5rem] py-3 text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
