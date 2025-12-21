import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          textRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          labelRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full
        min-h-screen
        flex items-center
        bg-gradient-to-br from-[#faf9f8] to-white
        overflow-hidden
      "
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-brand rounded-full -top-40 -right-40 blur-3xl" />
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-brand rounded-full -bottom-20 -left-20 blur-3xl" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 w-full max-w-[1710px] mx-auto
          px-6 sm:px-10 lg:px-24
          flex flex-col gap-10 lg:gap-12
          items-center lg:items-end
          text-center lg:text-right
        "
      >
        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="
            font-lora font-medium text-black
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[76px]
            leading-tight lg:leading-normal
            max-w-[1485px]
          "
        >
          Trusted Resources for Every Stage of{" "}
          <span className="text-brand">Menopause</span>
        </h1>

        {/* Bottom Section */}
        <div
          className="
            w-full flex flex-col lg:flex-row
            gap-6 lg:gap-10
            items-center lg:items-end
            justify-between
          "
        >
          {/* Description */}
          <p
            ref={textRef}
            className="
              font-lato font-medium
              text-base sm:text-lg md:text-xl lg:text-2xl
              leading-relaxed
              max-w-[772px]
              text-black/85
            "
          >
            Finding accurate <span className="text-brand">Menopause</span>{" "}
            information can feel overwhelming — from conflicting advice to
            outdated myths. Our resource library brings together clear,
            evidence-based content to help you understand your symptoms, explore
            options, and make informed choices with confidence.
          </p>

          {/* Label */}
          <p
            ref={labelRef}
            className="
              font-lato font-semibold
              text-brand
              text-[11px] sm:text-xs
              tracking-widest
              uppercase
              whitespace-nowrap
            "
          >
            — RESOURCES MENOPAUSE
          </p>
        </div>
      </div>
    </section>
  );
}
