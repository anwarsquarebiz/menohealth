import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Expert-Verified Care & Practitioners",
    description:
      "HRT specialists, nutritionists, counsellors, therapists, and coaches — all carefully screened for quality, credibility, and menopause expertise.",
  },
  {
    title: "Community & Shared Experience",
    description:
      "A safe, supportive space to share experiences, learn from others, and connect with women who understand what you're going through.",
  },
  {
    title: "Reliable Information You Can Trust",
    description:
      "Clear, evidence-based guidance from leading clinicians and experts, built to inform — without fads, fear, or judgement.",
  },
  {
    title: "Tools Designed for Real Life",
    description:
      "Symptom trackers, wellness resources, and lifestyle guidance created to support confidence and clarity through every stage.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".feature-card");
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            end: "bottom bottom",
            scrub: 1,
          },
          opacity: 0,
          y: 40,
          stagger: 0.1,
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
      <div className="w-full max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          {/* Icon */}
          <div className="flex flex-col items-center gap-6">
            <Heart className="w-5 h-5 text-brand" />
            <p className="font-lato font-semibold text-brand text-xs tracking-widest uppercase opacity-75">
              What We Provide
            </p>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center gap-4 max-w-2xl">
            <h2 className="font-lora font-medium text-black text-3xl sm:text-4xl lg:text-[44px] leading-tight">
              Everything You Need, All in One Place
            </h2>
            <p className="font-lato font-semibold text-black/90 text-xs tracking-widest uppercase">
              From expert care to trusted information, supportive tools, and
              community — we bring it all together in one place.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card rounded-xl border border-black/10 p-6 sm:p-8 flex flex-col gap-3 bg-white"
            >
              <h3 className="font-lora font-medium text-black text-xl sm:text-2xl leading-snug">
                {feature.title}
              </h3>
              <p className="font-lato text-black/85 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
