import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesSection from "./ServicesSection";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const overllineRef = useRef<HTMLHeadingElement>(null);

  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        [headingRef.current, paragraphRef.current, overllineRef.current],
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
          opacity: 0,
          y: 24,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex flex-col gap-10"
    >
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-4 md:gap-6 text-center">
        {/* Label */}
        <p
          ref={overllineRef}
          className="font-lato font-semibold text-accent text-xs tracking-widest uppercase"
        >
          Menopause support that actually gets it
        </p>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-lora font-medium text-black text-2xl md:text-4xl lg:text-5xl leading-tight max-w-3xl"
        >
          You Deserve to Feel Like <em className="italic">Yourself</em>{" "}
          <span>Again.</span>
        </h2>

        {/* Paragraph */}
        <p
          ref={paragraphRef}
          className="font-lato text-muted-foreground text-xs sm:text-sm  leading-relaxed max-w-2xl"
        >
          Menopause isn&apos;t a single moment — it&apos;s a transition that
          affects your mind, body, confidence, and relationships. And you
          shouldn&apos;t have to navigate it alone.
        </p>
      </div>

      <ServicesSection />
    </section>
  );
}
