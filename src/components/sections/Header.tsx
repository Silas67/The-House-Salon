"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/constant/index";
import Image from "next/image";
import Button from "@/components/common/Button";
import { MdClose, MdEmail, MdMenu } from "react-icons/md";
import { Magnetic } from "../common/Magnetic";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navLive, setNavLive] = useState(false);

  const handleClick = () => {
    setNavLive(!navLive);
  };
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }

      // change background when past 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  const pathname = usePathname();

  return (
    <header className="fixed w-full z-50">
      {/* Upper Nav */}
      <div
        className={`bg-transparent text-neutral-100 text-sm py-2 px-6 flex justify-between transition-all duration-300 border-b mx-2 ${
          scrolled ? "hidden" : "block"
        }`}
      >
        <div className="flex justify-evenly gap-4 items-center">
          <div className="hover:text-blue-600 transition-all duration-300 outline-none">
            <FaFacebook />
          </div>
          <div className="hover:text-blue-300 transition-all duration-300 outline-none">
            <FaTwitter />
          </div>
          <div className="hover:text-purple-400 transition-all duration-300 outline-none">
            <FaInstagram />
          </div>
          <div className="hover:text-red-500 transition-all duration-300 outline-none">
            <FaYoutube />
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <Link href={"/"}>
            <div className="flex items-center gap-2 outline-none">
              <MdEmail />
              chibukesilas@gmail.com
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex items-center gap-2 outline-none">
              <PiPhoneCallFill /> +234-810-488-4845
            </div>
          </Link>
        </div>
      </div>

      {/* Header */}
      <nav
        className={`w-full flex items-center justify-between py-4  px-8 transition-all duration-500  ${
          scrolled ? "bg-white text-primary shadow-lg" : "bg-transparent"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link href={"/"}>
          <Image
            src={"/Logo.png"}
            alt="/"
            width={50}
            height={50}
            className="invert-100 outline-none"
          />
        </Link>

        <div className=" justify-between gap-12 items-center sm:hidden flex text-[12px] ml-16  p-4 font-bold Stardom-font ">
          {Navbar.map((link, id) => {
            const active = pathname === link.href;
            return (
              <div key={id}>
                <Link
                  href={link.href}
                  className={`flex flex-col relative${
                    active ? "text-secondary text-[14px]" : "text-white"
                  }`}
                >
                  <Magnetic>
                    <div className="hover:font-bold flex flex-col items-center gap-4">
                      {link.label}
                      {/* <div
                        className={`w-2 h-2 bg-white rounded-full ${
                          hovered ? "" : "hidden"
                        }`}
                      ></div> */}
                    </div>
                  </Magnetic>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex gap-7 items-center">
          {" "}
          <Button className="bg-primary max-sm:hidden text-white">
            Book Now{" "}
          </Button>
          <div
            onClick={handleClick}
            className="hidden text-2xl max-sm:flex sm:text-3xl lg:text-5xl relative transition-all duration-[2s] z-50"
          >
            {navLive ? (
              <div>
                <MdClose className="text-primary lg:hidden" />
              </div>
            ) : (
              <div>
                <MdMenu className="lg:hidden text-primary" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
