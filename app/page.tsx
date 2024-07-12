'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [isActive, setActive] = useState(true)


  function errorMsg() {
    setActive(!isActive)
  }


  return (
    <main className="flex min-h-screen items-center">
      <div className="flex flex-col gap-xl p-l bg-white border border-gray7 laptop:w-[360px] w-[310px] rounded-base shadow-main shadow-brand laptop:mx-24 mx-auto">
        <div className="flex gap-base items-start">
          <Image
            src="../image 2.svg"
            alt="Logomark"
            width={32}
            height={32}
          ></Image>
          <div className="flex flex-col gap-s">
            <div className="header1">PeopleConnect</div>
            <div className="supporting">developed by Pearlsoft</div>
          </div>
        </div>
        <div id="content" className="flex flex-col gap-l">
          <div className="title">Login</div>
          <div id="formfields" className="flex flex-col gap-base">
          <div className="formfield">
            <div className="text-s text-gray3 font-medium">Username</div>
            <input
              type="text"
              className="p-base border border-gray6 rounded-s w-full text-black hover:border-primary focus:outline-none focus:border-gray4"
              placeholder="Enter your registered mail id"
              onClick={errorMsg}
            />
            <div className={`${isActive ? 'hidden' : ''} text-s text-warning`}>
              Error message
            </div>
          </div>
          <div className="formfield">
            <div className="flex justify-between">
            <div className="text-s text-gray3 font-medium">Password</div>
            <div className="text-s text-primary font-medium hover:underline hover:cursor-pointer">
              Forgot password
            </div>
            </div>
            <input
              type="text"
              className="p-base border border-gray6 rounded-s w-full text-black hover:border-primary focus:outline-none focus:border-gray4"
              placeholder="Enter your password"
            />
          </div>
          </div>
          <div className="flex flex-col gap-s">
          <button className="p-base bg-primary text-white rounded-s cta hover:bg-primaryHover pressed:bg-primaryPressed">
            Login
          </button>
          <div className={`${isActive ? 'hidden' : ''} text-s text-warning text-center`}>
              Error message
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
