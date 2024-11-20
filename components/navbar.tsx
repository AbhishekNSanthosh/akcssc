"use client";

import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import logo from "/public/logo1.png";
import { siteConfig } from "@/config/site";

const LinkStyles = (isActive: boolean) => {
  return isActive
    ? "font-bold border-b-2 border-[#921C25] pb-1"
    : "font-normal pb-0";
};

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 px-4">
        {/* Brand Section */}
        <div className="flex items-center gap-3">
          <NextLink href="/">
            <Image src={logo} alt="brand" width={100} height={50} />
          </NextLink>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {siteConfig.navItems.map((item, index) => (
            <li key={item.href}>
              <NextLink
                href={item.href}
                className={`text-gray-700 hover:text-gray-900 ${LinkStyles(
                  index === activeLink
                )}`}
                onClick={() => setActiveLink(index)}
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <NextLink
            href="https://www.yepdesk.com/buy-tickets/67371281c9e77c000138ebed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 text-sm font-medium text-white bg-default-100 rounded hover:bg-blue-700">
              Register
            </button>
          </NextLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setActiveLink(-1)} // Temporary placeholder for mobile menu toggle logic
          >
            {/* Add a hamburger menu icon here */}
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {activeLink === -1 && (
        <div className="lg:hidden backdrop-blur-md shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            {siteConfig.navItems.map((item, index) => (
              <li key={item.href}>
                <NextLink
                  href={item.href}
                  className={`text-gray-600 hover:text-gray-900 ${LinkStyles(
                    index === activeLink
                  )}`}
                  onClick={() => setActiveLink(index)}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
