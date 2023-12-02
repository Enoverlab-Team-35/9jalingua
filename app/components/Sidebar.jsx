"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, auth } from "../firebase/config";
import React from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { AppContext, useAppContext } from "../context";
import { IoClose } from "react-icons/io5";

const sideLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    img: "/svgs/grid.svg",
  },
  {
    name: "Community Forum",
    href: "/community-forum",
    img: "/svgs/users.svg",
  },
  {
    name: "Interactive Lessons",
    href: "/interactive-lessons",
    img: "/svgs/book-open.svg",
  },
  {
    name: "Support",
    href: "/support",
    img: "/svgs/help.svg",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const { sidebarVisible, setSidebarVisible } = useAppContext()

  const logout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      router.push("/");
      toast.error("sign out successfully");
    } catch (error) {
      toast(error.message);
      console.error(error.message);
    }
  };

  return (
    <div className={`${sidebarVisible ? "w-full px-2" : "w-0 px-0"
      } fixed top-0 left-0 bg-[#2967a5] lg:relative h-screen max-w-[425px] lg:max-w-[300px] lg:w-full lg:px-2 py-6 lg:bg-blues-900 text-white transition-all overflow-hidden`}
    >
      <div className="flex items-center gap-10 justify-between">
        <div className="flex gap-4 items-center">
          <div>
            <Image
              src={"/9jalingua/white.svg"}
              width={24}
              height={26}
              alt="9jaLingua"
            />
          </div>
          <h1 className="font-bold text-[32px]">9jaLingua</h1>
        </div>
        <button
          onClick={() => setSidebarVisible(false)}
          className='lg:hidden'
        >
          <IoClose color='white' size={32} />
        </button>
      </div>

      <div className="mt-4 flex gap-4 items-center px-2 pb-6 border-b border-white">
        <div>
          <Image
            src={user?.photoURL || "/svgs/user.svg"}
            width={24}
            height={24}
            alt="user"
            className="rounded"
          />
        </div>
        <h4 className="font-bold text-[16px]">
          {user?.displayName || "John Doe"}
        </h4>
      </div>

      <div className="pt-2">
        {sideLinks?.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`${pathname.toLowerCase() === item.href.toLowerCase() &&
              "bg-blues-1100"
              } mt-4 w-full py-3 px-[14px] rounded-lg flex gap-2 items-center text-base font-bold`}
          >
            <Image src={item.img} width={20} height={20} alt={item.name} />
            {item.name}
          </Link>
        ))}
      </div>

      <div className="mt-52">
        <button
          className="w-full px-[14px] py-3 flex items-center gap-2"
          onClick={logout}
        >
          <Image
            src={"/svgs/log-out.svg"}
            width={20}
            height={20}
            alt="log out"
          />
          Log Out
        </button>
      </div>
    </div>
  );
}
