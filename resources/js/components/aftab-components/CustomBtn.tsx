import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface CustomBtnProps {
  label?: string;
  onClick?: () => void;
}

export default function CustomBtn({
  label = "Join Now",
  onClick,
}: CustomBtnProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const leftDotRef = useRef<HTMLSpanElement>(null);
  const rightDotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!btnRef.current) return;

    const ctx = gsap.context(() => {
      // initial states
      gsap.set(leftDotRef.current, {
        opacity: 0,
        scale: 0,
        x: -6,
      });

      const hoverIn = () => {
        gsap
          .timeline()
          .to(textRef.current, {
            x: 8,
            duration: 0.3,
            ease: "power2.out",
          })
          .to(
            leftDotRef.current,
            {
              opacity: 1,
              scale: 1,
              x: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            },
            "<"
          )
          .to(
            rightDotRef.current,
            {
              x: 12,
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "<"
          );
      };

      const hoverOut = () => {
        gsap
          .timeline()
          .to(textRef.current, {
            x: 0,
            duration: 0.25,
            ease: "power2.inOut",
          })
          .to(
            leftDotRef.current,
            {
              opacity: 0,
              scale: 0,
              x: -6,
              duration: 0.25,
              ease: "power2.inOut",
            },
            "<"
          )
          .to(
            rightDotRef.current,
            {
              x: 0,
              opacity: 1,
              duration: 0.25,
              ease: "power2.inOut",
            },
            "<"
          );
      };

      btnRef.current.addEventListener("mouseenter", hoverIn);
      btnRef.current.addEventListener("mouseleave", hoverOut);

      return () => {
        btnRef.current?.removeEventListener("mouseenter", hoverIn);
        btnRef.current?.removeEventListener("mouseleave", hoverOut);
      };
    }, btnRef);

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className="
        relative inline-flex items-center
        rounded-full bg-[#587974]
        px-6 py-2.5
        overflow-visible
        text-white text-xs uppercase tracking-wider cursor-pointer
      "
    >
      {/* Left Dot (revealed) */}
      <span
        ref={leftDotRef}
        className="absolute left-3 w-1.5 h-1.5 rounded-full bg-white"
      />

      {/* Text */}
      <span ref={textRef} className="relative z-10">
        {label}
      </span>

      {/* Right Dot (escapes) */}
      <span
        ref={rightDotRef}
        className="ml-2 w-1.5 h-1.5 rounded-full bg-white"
      />
    </button>
  );
}
