import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function page() {
    return (
        <AuthLayout text={'Sign Up'}>
            <div className="flex flex-col justify-center items-center gap-3">
                <button className="w-[40%] font-bold max-auto flex justify-center items-center border-[3px] border-gray-300 text-black py-2 text-lg rounded-[0.5rem]">
                    <FcGoogle className="mr-2 text-4xl rounded-full p-1"/>
                    Sign up with google
                </button>
                <button className="w-[40%] font-bold flex justify-center items-center border-[3px] border-gray-300 text-black py-2 text-lg rounded-[0.5rem]">
                    <FaFacebook className="mr-2 text-4xl text-blue-900 rounded-full p-1"/>
                    Sign up with facebook
                </button>
                <button className="w-[40%] font-bold flex justify-center items-center border-[3px] border-gray-300 text-black py-2 text-lg rounded-[0.5rem]">
                    <FaApple className="mr-2 text-4xl rounded-full p-1"/>
                    Sign up with apple
                </button>
            </div>
            <div>
                <div className="flex flex-col justify-center items-start w-[40%] mx-auto">
                    <h1 className="text-blue-800 mt-20 font-[900] text-3xl">
                        Sign up
                    </h1>
                </div>
                <form>
                    <div className="flex flex-col justify-center items-start w-[40%] mt-8 mx-auto">
                        <label htmlFor="email" className="font-bold text-[16px]">Email</label>
                        <input 
                            type="email" 
                            className="mb-4 pl-4 w-full mx-auto  py-2 text-xl 
                            text-gray-700 bg-white border border-gray-300 
                            rounded-[0.5rem] transition ease-in-out"  
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start w-[40%] mx-auto">
                        <label htmlFor="email" className="font-bold text-[16px]">Password</label>
                        <input 
                            type="password"
                            className="mb-6 pl-4 w-full mx-auto px-5 py-2 text-xl 
                          text-gray-700 bg-white border border-gray-300 
                            rounded-[0.5rem] transition ease-in-out"  
                        />
                    </div>
                    <div className="flex justify-center items-center w-[40%] mx-auto mt-12 mb-6">
                        <button className="bg-green-600 w-full rounded-[0.5rem] py-3 text-white">Sign Up</button>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}