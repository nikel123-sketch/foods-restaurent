"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../ActiveClass/NavLink";

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <section className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 bg-gray-900 text-white shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image width={35} height={35} src="/vercel.svg" alt="logo" />
          <h1 className="text-base sm:text-lg md:text-xl font-bold">
            Food App
          </h1>
        </div>

        {/* Hamburger (only mobile) */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>

        {/* Menu */}
        <div
          className={`absolute md:static top-14 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm sm:text-base font-medium transition-all duration-300 ${
            open ? "block py-4" : "hidden md:flex"
          }`}
        >
          <NavLink href="/" className="hover:text-amber-400">
            Home
          </NavLink>
          <NavLink href="/foods" className="hover:text-amber-400">
            Foods
          </NavLink>
          <NavLink href="/reviews" className="hover:text-amber-400">
            Reviews
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Navber;
