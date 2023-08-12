"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
type NavBarProps = {};

export default function NavBar({}: NavBarProps) {
  const pathname = usePathname();

  return (
    <div className="glass navbar sticky top-4 z-50 m-4 w-auto rounded-xl backdrop-blur-md hover:bg-primary-focus text-primary-content">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl normal-case">
          NextJS 13.4
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link
              href={"/static"}
              className={`${pathname === "/static" ? "active" : ""}`}
            >
              Static
            </Link>
          </li>
          <li>
            <Link
              href={"/ssr"}
              className={`${pathname === "/ssr" ? "active" : ""}`}
            >
              SSR
            </Link>
          </li>
          <li>
            <details>
              <summary className="hover:text-stone-100 ">Parent</summary>
              <ul className="glass p-2 hover:bg-primary">
                <li>
                  <a className="text-black hover:text-stone-100">Link 1</a>
                </li>
                <li>
                  <a className="text-black hover:text-stone-100">Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
