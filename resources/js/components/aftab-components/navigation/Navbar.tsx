import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import MobileDrawer from "./MobileDrawer";
import CustomBtn from "../CustomBtn";

const nav = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },
  {
    name: "Resources",
    path: "/resources",
  },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    if (!navRef.current) return;

    // Prevent re-animation on navigation
    if (sessionStorage.getItem("nav-animated")) return;

    sessionStorage.setItem("nav-animated", "true");

    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all", // IMPORTANT
      }
    );
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className="
          fixed top-0 left-0 w-full z-50 backdrop-blur-md
          
        "
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/assets/logo_black.svg"
              alt="Meno Health"
              className="w-6 h-6"
            />
            <span className="font-lora text-black text-base tracking-wide">
              Meno Health
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((item) => (
              <a
                key={item}
                href={item.path}
                className="text-black/60 text-xs uppercase tracking-widest hover:text-black transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="ml-8">
              <CustomBtn label="Contact Us" />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-black"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
