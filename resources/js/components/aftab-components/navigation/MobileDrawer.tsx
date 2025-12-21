import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: Props) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!drawerRef.current) return;

    gsap.to(drawerRef.current, {
      x: open ? 0 : "100%",
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, [open]);

  return (
    <div
      ref={drawerRef}
      className="
        fixed top-0 right-0 h-screen w-[85%] max-w-sm z-50
        bg-white
        translate-x-full
        shadow-xl
      "
    >
      <div className="flex flex-col h-full px-6 py-6">
        {/* Close */}
        <div className="flex justify-end mb-10">
          <button onClick={onClose}>
            <X size={22} className="text-black" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6">
          {["Services", "About", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-lora text-lg text-black"
              onClick={onClose}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-auto">
          <button className="w-full rounded-full bg-[#c7a486] text-white py-3 text-xs uppercase tracking-wider">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
