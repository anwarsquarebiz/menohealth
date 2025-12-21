import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const greenBgRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ------------------ INTRO ANIMATION ------------------ */
      gsap
        .timeline()
        .from(headingRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          subheadingRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );

      /* ------------------ SCROLL CROSSFADE ------------------ */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        // Hero image fades OUT
        .to(heroImageRef.current, {
          opacity: 0,
          ease: "none",
        })
        // Green background fades IN
        .to(
          greenBgRef.current,
          {
            opacity: 1,
            ease: "none",
          },
          0
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* ================= BACKGROUNDS ================= */}
      <div className="absolute inset-0">
        {/* GREEN BACKGROUND (starts hidden) */}
        <div ref={greenBgRef} className="absolute inset-0 z-10  opacity-25">
          <img
            src="/assets/green-bg.avif"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* HERO IMAGE (starts visible) */}
        <div ref={heroImageRef} className="absolute inset-0 opacity-100">
          <img
            src="/assets/home-hero-img.svg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Decorative Circles */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute w-[900px] h-[900px] right-[-300px] bottom-[-300px] border border-white rounded-full" />
          <div className="absolute w-[700px] h-[700px] left-[-250px] top-[200px] border border-white rounded-full" />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex items-end min-h-screen px-6 md:px-16 pb-16">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between lg:items-end gap-12 lg:gap-30">
          {/* LEFT */}
          <div ref={headingRef}>
            <h1 className="font-lora text-white text-3xl md:text-6xl xl:text-8xl 2xl:text-9xl leading-normal">
              MenoHealth
            </h1>
            <p className="font-lora text-white text-sm md:text-lg 2xl:text-xl max-w-[700px]">
              – Where Every Woman's Menopause Journey Matters
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8 max-w-[640px]">
            <p
              ref={subheadingRef}
              className="font-lato text-white leading-relaxed text-xs md:text-sm 2xl:text-base"
            >
              Your trusted hub for expert support, personalised guidance, and
              real connection through peri-menopause and menopause.
            </p>

            {/* <button
              ref={ctaRef}
              className="self-start bg-[#c7a486] hover:bg-[#b89476] transition-colors px-6 py-3 rounded-full flex items-center gap-4"
            >
              <span className="font-lato text-white text-xs uppercase tracking-wider">
                Book Now
              </span>
              <span className="w-2 h-2 bg-white rounded-full" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
