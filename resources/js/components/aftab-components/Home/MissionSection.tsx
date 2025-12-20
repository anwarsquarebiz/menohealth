import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Discover What Works for You",
    description:
      "Every woman's menopause journey is different. We help you find information, support, and solutions that align with your body, lifestyle, and needs.",
  },
  {
    title: "Learn Through Shared Experiences",
    description:
      "From personal stories to collective insights, we create space for women to learn from each other and feel less alone through every stage.",
  },
  {
    title: "Feel Informed, Empowered, and Understood",
    description:
      "Access reliable guidance, practical knowledge, and empathetic support designed to help you navigate menopause with clarity and confidence.",
  },
];

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".mission-card");
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            end: "bottom bottom",
            scrub: 1,
          },
          opacity: 0,
          y: 40,
          stagger: 0.15,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 px-6 sm:px-10 lg:px-16"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          {/* Icon */}
          <div className="flex flex-col items-center gap-6">
            <Heart className="w-5 h-5 text-brand" />
            <p className="font-lato font-semibold text-brand text-xs tracking-widest uppercase opacity-75">
              Our Mission
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-lora font-medium text-black text-3xl sm:text-4xl lg:text-[44px] leading-tight max-w-2xl">
            A Platform Built for Women, By Women
          </h2>
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 items-start"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`mission-card flex flex-col gap-4 max-w-sm mx-auto text-center ${
                index === 1 ? "lg:pt-24" : ""
              }`}
            >
              <h3 className="font-lora text-brand text-xl sm:text-2xl leading-snug">
                {feature.title}
              </h3>
              <p className="font-lato text-muted-foreground text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="flex flex-col items-center pt-10 opacity-75">
          <p className="font-lato font-semibold text-black/90 text-xs tracking-widest uppercase text-center max-w-xl">
            Access reliable guidance, practical knowledge, and empathetic
            support designed to help you navigate menopause with clarity and
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
