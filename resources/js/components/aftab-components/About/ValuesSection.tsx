import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Empowerment",
    description:
      "We give women the tools, knowledge, and confidence to take control of their wellbeing through every stage of menopause.",
  },
  {
    title: "Trust",
    description:
      "Everything we share is evidence-based, clinically reviewed, and created to inform — never to mislead or profit from uncertainty.",
  },
  {
    title: "Community",
    description:
      "We believe no woman should feel alone during menopause. Real connection and shared experiences create lasting support.",
  },
  {
    title: "Accessibility",
    description:
      "Whether it's understanding symptoms, accessing practitioners, or connecting with others, menopause support should be simple, approachable, and inclusive.",
  },
  {
    title: "Integrity",
    description:
      "Our recommendations are independent — never influenced by partnerships or advertising. We stand by the quality and credibility of everything we recommend.",
  },
  {
    title: "Compassion",
    description:
      "We approach every woman's journey with empathy, dignity, and respect. You are not just a set of symptoms — you are seen, heard, and valued.",
  },
];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".values-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        y: 30,
        opacity: 0,
      });

      if (cardsRef.current) {
        const cardElements = cardsRef.current.querySelectorAll(".value-card");
        gsap.from(cardElements, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            end: "bottom bottom",
            scrub: 1,
          },
          y: 40,
          opacity: 0,
          stagger: 0.08,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="values-heading flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <Heart className="w-5 h-5 text-brand" />
            <p className="font-lato text-xs uppercase tracking-widest text-brand opacity-75">
              OUR BRAND VALUES
            </p>
          </div>

          <h2 className="font-lora font-medium text-[#211f1e] text-2xl sm:text-3xl lg:text-4xl max-w-2xl">
            What We Stand For
          </h2>
        </div>

        {/* Values Grid */}
        <div
          ref={cardsRef}
          className="
            grid gap-6
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="
                value-card
                border border-black/10
                rounded-xl
                p-6 sm:p-8
                bg-white
                flex flex-col gap-3
              "
            >
              <h3 className="font-lora text-lg sm:text-xl text-black">
                {value.title}
              </h3>
              <p className="font-lato text-sm sm:text-base text-black/85 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
