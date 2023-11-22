"use client";

import checkboxStyle from './checkbox.module.css'
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
import Link from "next/link";
import { Loading } from '../components/SvgsComponent';
import { toast } from 'react-toastify';

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  // console.log(loading, user)
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/select-language");
      toast("Welcome");
    } catch (error) {
      toast(error.message)
      console.error(error.message);
    }
  };

  const handleEmailLogin = async (event) => {
    event.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/select-language");
      toast("Welcome");
    } catch (error) {
      toast(error.message)
      console.error(error.message);
    }
  };
  return (
    <AuthLayout text={"Log in"}>
      <div className="px-8 flex flex-col justify-center items-center gap-6">
        <button
          onClick={handleGoogleSignIn}
          className="w-full font-bold flex justify-center items-center gap-3 border border-grays-900 text-grays-900 py-[10px] px-4 text-base rounded-lg hover:bg-grays-100"
        >
          <FcGoogle size={32} />
          <span>
            Sign in with google
          </span>
        </button>

        <button
          className="w-full font-bold flex justify-center items-center gap-3 border border-grays-900 text-grays-900 py-[10px] px-4 text-base rounded-lg hover:bg-grays-100"
        >
          <FaFacebook size={32} />
          <span>
            Sign in with facebook
          </span>
        </button>

        <button
          className="w-full font-bold flex justify-center items-center gap-3 border border-grays-900 text-grays-900 py-[10px] px-4 text-base rounded-lg hover:bg-grays-100"
        >
          <FaApple size={32} />
          <span>
            Sign in with apple
          </span>
        </button>
      </div>

      <div className="mt-11">
        <div className="px-8 pt-6 pb-2 flex flex-col justify-center gap-2 border-b border-grays-200">
          <h1 className="text-blues-900 font-bold text-4xl">
            Login
          </h1>
          <p className="text-xl text-grays-800">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form className="px-8 pt-6 pb-10" onSubmit={handleEmailLogin}>
          <div className="flex flex-col justify-center gap-[6px]">
            <label htmlFor="email" className="text-grays-900 text-[16px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="py-[10px] px-[14px] w-full text-gray-700 border border-grays-300 rounded-lg"
              onChange={(event) => {
                setEmail(event?.target.value);
              }}
            />
          </div>
          <div className="mt-4 flex flex-col justify-center gap-[6px]">
            <label htmlFor="password" className="text-grays-900 text-[16px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="py-[10px] px-[14px] w-full text-gray-700 border border-grays-300 rounded-lg"
              onChange={(event) => {
                setPassword(event?.target.value);
              }}
            />

            <div className="mt-5 flex justify-between items-center gap-5">
              <div className="relative flex items-center gap-2">
                {/* <input type="checkbox" className="w-5 h-5 rounded-md" /> */}
                <label className={checkboxStyle.checkbox_container}>
                  <input className={checkboxStyle.custom_checkbox} type="checkbox" />
                  <span className={checkboxStyle.checkmark}></span>
                </label>
                <label className="ms-7 text-grays-900" htmlFor="remember me">Remember me </label>
              </div>
              <div>
                <a
                  href="/forgetpassword"
                  className="text-greens-300 font-bold"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10">
            <button
              disabled={loading}
              className="w-full bg-greens-300 rounded-lg py-[10px] px-[18px] text-white border border-[#272727] disabled:opacity-75"
            >
              {loading ? (
                <Loading color={"#fff"} size={"28px"} />
              ) : "Login"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 pb-10 px-8 border-b border-grays-200">
        <p className="text-center text-grays-800">
          Don&apos;t have an account? <Link href={'/signup'} className="text-greens-300 font-bold">Sign up</Link>
        </p>
      </div>
    </AuthLayout>
  );
}
