"use client";
import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/constant/index";
import Image from "next/image";
import Button from "@/components/common/Button";
// import { Sidebarlinks } from "./assets/constants";
// import FlipLink from "./FlipLink";

const Header = () => {
  const [navIsLive, setNavIsLive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setNavIsLive(!navIsLive);
    console.log(navIsLive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(isScrolled);
  }, [isScrolled]);

  const pathname = usePathname();

  return (
    <div
      className={`absolute top-0 px-8 w-[100vw] py-4 flex items-center justify-center z-50 ${
        isScrolled ? "bg-secondary" : "bg-transparent"
      }`}
    >
      <nav className="w-full flex items-center justify-between">
        <div className="flex gap-16 ">
          <Link href={"/"}>
            <Image
              src={"/Logo.png"}
              alt="/"
              width={80}
              height={80}
              className="invert-100 outline-none"
            />
          </Link>

          <div className="flex justify-between gap-10 items-center max-sm:hidden max-[690px]:hidden sm:hidden lg:flex text-[12px] ">
            {Navbar.map((link, id) => {
              const active = pathname === link.href;
              return (
                <div key={id}>
                  <Link
                    href={link.href}
                    className={`flex flex-col relative ${
                      active
                        ? "text-secondary text-[14px] font-bold"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-7">
          {" "}
          <Button backgroundColor="var(--primary)" className="bg-secondary">
            Partner{" "}
          </Button>
          <div
            onClick={handleClick}
            className="hidden text-2xl max-sm:flex max-[1030px]:flex sm:text-3xl lg:text-5xl relative transition-all duration-[2s] z-50"
          >
            {navIsLive ? (
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: 180, scale: 1.2 }}
                exit={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: easeInOut }}
              >
                {/* <MdClose className="text-foreground lg:hidden" /> */}
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: -180, scale: 1 }}
                animate={{ rotate: 0, scale: 1.2 }}
                exit={{ rotate: -180, scale: 1 }}
                transition={{ duration: 0.3, ease: easeInOut }}
              >
                {/* <MdMenu className="lg:hidden" /> */}
              </motion.div>
            )}
          </div>
        </div>
      </nav>

      <div>
        <div className="lg:hidden">
          <motion.aside
            initial={{ x: "100vw" }}
            animate={{ x: navIsLive ? 1 : "100vw" }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="sidebar relative shadow-lg"
          >
            <nav className="nav">
              <ul>
                {Navbar.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="a">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default Header;
