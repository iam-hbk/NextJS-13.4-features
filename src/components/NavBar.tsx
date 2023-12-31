"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
type NavBarProps = {};

export default function NavBar({}: NavBarProps) {
  const pathname = usePathname();

  return (
    <div className="glass navbar sticky top-4 z-50 m-4 w-auto rounded-xl  bg-primary text-primary-content backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-circle btn-ghost swap swap-rotate lg:hidden"
          >
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
              <a className="hover:text-stone-100 ">Server Side Rendering</a>
              <ul>
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
                    href={"/dynamic"}
                    className={`${pathname === "/dynamic" ? "active" : ""}`}
                  >
                    Dynamic
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/isr"}
                    className={`${pathname === "/isr" ? "active" : ""}`}
                  >
                    Incremental Static Regeneration
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="hover:text-stone-100 ">Topics</a>
              <ul>
                <li>
                  <Link
                    href={"/topics/food"}
                    className={`${
                      pathname === "/topics/food" ? "active" : ""
                    }`}
                  >
                    Food
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/topics/coding"}
                    className={`${
                      pathname === "/topics/coding" ? "active" : ""
                    }`}
                  >
                    Coding
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/topics/Christ"}
                    className={`${pathname === "/Christ" ? "active" : ""}`}
                  >
                    Christ
                  </Link>
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
              <summary>Server Side Rendering</summary>
              <ul className="glass bg-primary p-2">
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
                    href={"/dynamic"}
                    className={`${pathname === "/dynamic" ? "active" : ""}`}
                  >
                    Dynamic
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/isr"}
                    className={`${pathname === "/isr" ? "active" : ""}`}
                  >
                    Incremental Static Regeneration
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={1}>
            <details>
              <summary>Topics</summary>
              <ul className="glass bg-primary p-2">
                <li>
                  <Link
                    href={"/topics/food"}
                    className={`${
                      pathname === "/topics/food" ? "active" : ""
                    }`}
                  >
                    Food
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/topics/coding"}
                    className={`${
                      pathname === "/topics/coding" ? "active" : ""
                    }`}
                  >
                    Coding
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/topics/Christ"}
                    className={`${
                      pathname === "/topics/Christ" ? "active" : ""
                    }`}
                  >
                    Christ
                  </Link>
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
