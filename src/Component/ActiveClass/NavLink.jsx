"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-amber-600 underline  font-semibold" : "hover:text-amber-400"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
