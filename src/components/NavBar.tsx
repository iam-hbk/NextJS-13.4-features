"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
type NavBarProps = {};

export default function NavBar({}: NavBarProps) {
  const pathname = usePathname();

  return (
    <div className="glass navbar sticky top-4 z-50 m-4 w-auto rounded-xl  text-primary-content backdrop-blur-md bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden btn-circle swap swap-rotate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box glass menu-sm z-[1] mt-3 w-52 bg-primary p-2 shadow"
          >
            <li>
              <Link
                href={"/static"}
                className={`${pathname === "/static" ? "active" : ""}`}
              >
                Static
              </Link>
            </li>
            <li>
              <a className="hover:text-stone-100 ">Parent</a>
              <ul >
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href={"/dynamic"}
                className={`${pathname === "/dynamic" ? "active" : ""}`}
              >
                Dynamic
              </Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl normal-case">
          NextJS 13.4
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href={"/static"}
              className={`${pathname === "/static" ? "active" : ""}`}
            >
              Static
            </Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="glass bg-primary p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              href={"/dynamic"}
              className={`${pathname === "/dynamic" ? "active" : ""}`}
            >
              Dynamic
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}
