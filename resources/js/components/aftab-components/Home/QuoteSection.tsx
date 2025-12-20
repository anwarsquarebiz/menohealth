import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteSection() {
  const shapeRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!shapeRef.current) return;

      /* -------------------------------
         HALF-CIRCLE → FLAT MORPH
      -------------------------------- */
      gsap.fromTo(
        shapeRef.current,
        {
          borderTopLeftRadius: "50vw",
          borderTopRightRadius: "50vw",
        },
        {
          borderTopLeftRadius: "0vw",
          borderTopRightRadius: "0vw",
          ease: "none",
          scrollTrigger: {
            trigger: shapeRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      /* -------------------------------
         BACKGROUND PARALLAX
      -------------------------------- */
      gsap.to(shapeRef.current, {
        backgroundPosition: "50% 80%",
        scrollTrigger: {
          trigger: shapeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* -------------------------------
         TEXT FADE-IN
      -------------------------------- */
      gsap.from([leftTextRef.current, quoteRef.current], {
        scrollTrigger: {
          trigger: shapeRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* SHAPE CONTAINER (THIS IS WHAT ANIMATES) */}
      <div
        ref={shapeRef}
        className="
          relative min-h-screen flex flex-col w-full
          overflow-hidden
          bg-cover bg-top
        "
        style={{
          backgroundImage: "url(/assets/quote-img.png)",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div
          className="
            relative z-10 h-full flex-1 flex flex-col justify-between
            px-6 py-12
            sm:px-10 sm:py-16
            lg:px-24 lg:py-28
          "
        >
          {/* Top / Right Text */}
          <div ref={leftTextRef} className="flex justify-end text-white/85">
            <div className="flex flex-col gap-2 text-sm sm:text-base lg:text-lg max-w-md">
              <div className="font-lora flex flex-col gap-1">
                <p>With the right support,</p>
                <p>confidence returns.</p>
                <p>Energy returns.</p>
              </div>
              <div className="font-lora font-medium">
                <p>You return.</p>
              </div>
            </div>
          </div>

          {/* Bottom / Quote */}
          <div ref={quoteRef} className="max-w-full lg:max-w-1/2 mt-10 lg:mt-0">
            <blockquote
              className="
                font-lora text-white leading-snug capitalize
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              "
            >
              <span className="font-medium">"</span>
              <span>
                <span className="text-brand">Menopause</span> is a{" "}
              </span>
              <em className="italic">transition</em>
              <span> — Not the End of Who You Are</span>
              <span className="font-medium">"</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
