import React from "react";
import { FiGift } from "react-icons/fi";
import Link from "next/link";

export default function DashboardRewards() {
  return (
    <div>
      <div className="bg-blues-200 border rounded md:w-full">
        <div className="flex mb-2 font-semibold ">
          <FiGift className="mt-5 ml-4" />
          <h1 className="ml-2 mt-4  text-grays-900 ">Rewards</h1>
        </div>
        <hr></hr>
        <div className="ml-4 mt-8 text-grays-900 leading-10">
          <p className="pb-8">
            Get rewards when you share your link with friends to join 9jaLingua
          </p>

          <Link className=" flex justify-end text-blue-800 mr-4 mt-6" href="#">
            Share Link →
          </Link>
        </div>
      </div>
    </div>
  );
}
