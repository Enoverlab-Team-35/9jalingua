"use client";

import { React, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "../layouts/AuthLayout";

import {
  auth,
  signInWithPopup,
  googleProvider,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "../firebase/config";
import Link from "next/link";
import { Loading } from "../components/SvgsComponent";
import { toast } from "react-toastify";
import Image from "next/image";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
      toast("Congratulations, You have successfully signed up");
    } catch (error) {
      toast(error.message)
      setError(error.message);
    }
  };

  const handleSignUp = async (event) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
      toast("Congratulations, You have successfully signed up");
    } catch (error) {
      toast(error.message)
      setError(error.message);
    }
    event.preventDefault();
  };

  return (
    <>
      <nav className='fixed top-0 left-0 w-full bg-white z-10 sm:hidden pl-3 pt-3'>
          <div className="container mx-auto flex items-center justify-between py-5 px-2 gap-10">
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
      <AuthLayout text={"Sign Up"}>
        <div className="px-6 sm:px-8 flex flex-col justify-center items-center gap-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full font-bold flex justify-center items-center gap-3 border border-grays-900 text-grays-900 py-[10px] px-4 text-base rounded-lg hover:bg-grays-100"
          >
            <FcGoogle size={32} />
            Sign up with google
          </button>
          <button
            className="w-full font-bold flex justify-center items-center gap-3 border border-grays-900 text-grays-900 py-[10px] px-4 text-base rounded-lg hover:bg-grays-100"
          >
            <FaFacebook size={32} />
            Sign up with facebook
          </button>

          <button className="w-full font-bold flex justify-center items-center gap-3 border border-grays-900 text-grays-900 py-[10px] px-4 text-base rounded-lg hover:bg-grays-100">
            <FaApple size={32} />
            Sign up with apple
          </button>
        </div>

        <div className="mt-11">
          <div className="px-6 sm:px-8 pt-6 pb-2 flex flex-col justify-center gap-2 border-b border-grays-200">
            <h1 className="text-blues-900 font-bold text-2xl sm:text-4xl">Sign up</h1>
          </div>

          <form className="px-8 pt-6 pb-10" onSubmit={handleSignUp}>
            <div className="flex flex-col justify-center gap-[6px]">
              <label htmlFor="email" className="text-grays-900 text-[16px]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="py-[10px] px-[14px] w-full text-gray-700 border border-grays-300 focus-within:outline-greens-300 rounded-lg"
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
                className="py-[10px] px-[14px] w-full text-gray-700 border border-grays-300 focus-within:outline-greens-300 rounded-lg"
                onChange={(event) => {
                  setPassword(event?.target.value);
                }}
              />
            </div>

            <div className="flex justify-center items-center mt-10">
              <button
                disabled={loading}
                className="w-full bg-greens-300 rounded-lg py-[10px] px-[18px] text-white border border-[#272727] disabled:opacity-75"
              >
                {loading ? (
                  <Loading color={"#fff"} size={"28px"} />
                ) : "Sign Up"}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 pb-10 px-6 sm:px-8 border-b border-grays-200">
          <p className="text-center text-grays-800">
            Already have an account? <Link href={'/login'} className="text-greens-300 font-bold">Login</Link>
          </p>
        </div>
      </AuthLayout>
    </>
  );
}
