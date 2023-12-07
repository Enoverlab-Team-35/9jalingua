import React from "react";
import { FiGift } from "react-icons/fi";
import Link from "next/link";

export default function DashboardRewards() {
  return (
    <div className="bg-blues-200 rounded-lg pb-14 sm:pb-3">
      <div className="flex px-6 sm:px-3 sm:py-3 py-4 gap-2 items-center outline outline-1 outline-grays-200 rounded-t-lg">
        <FiGift size={24} color="#0D0D0DCC" />
        <h1 className="text-grays-900 font-bold">Rewards</h1>
      </div>
      <div className="mt-8 sm:mt-9 sm:ps-[14px] px-6 sm:pe-8 text-grays-900 leading-9">
        <p className="text-grays-900">
          Get rewards when you share your link with friends to join 9jaLingua
        </p>
        <div className="mt-10 sm:mt-8 flex justify-end">
          <Link className="text-blues-1100 font-bold" href="#">
            Share Link →
          </Link>
        </div>
      </div>
    </div>
  );
}
