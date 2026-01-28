import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Clear, Evidence-Based Information",
    description:
      "Reliable, clinically informed guidance that helps women understand what's happening in their bodies — without misinformation, fear, or conflicting advice.",
  },
  {
    title: "Expert Care You Can Trust",
    description:
      "Access to menopause practitioners and specialists who are vetted for expertise, experience, and a genuine understanding of women's health.",
  },
  {
    title: "Personalised Support, Not One-Size-Fits-All",
    description:
      "Menopause is not the same for everyone. We believe support should reflect individual needs, preferences, and lived experiences.",
  },
  {
    title: "Choice in How Women Manage Wellbeing",
    description:
      "From medical options to lifestyle support, women should have the freedom to choose what works best for their bodies and their lives.",
  },
  {
    title: "Services Designed for Midlife Women",
    description:
      "Carefully selected products, tools, and services created specifically to support women through peri-menopause, menopause, and beyond.",
  },
];

export default function WhyWeExistSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-exist-heading", {
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
        const cardElements = cardsRef.current.querySelectorAll(".why-card");
        gsap.from(cardElements, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            end: "bottom bottom",
            scrub: 1,
          },
          y: 40,
          opacity: 0,
          stagger: 0.1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="why-exist-heading flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <Heart className="w-5 h-5 text-brand" />
            <p className="font-lato text-xs uppercase tracking-widest text-brand opacity-75">
              Why We Exist
            </p>
          </div>

          <h2 className="font-lora font-medium text-[#211f1e] text-2xl sm:text-3xl lg:text-4xl max-w-2xl">
            Menopause is personal. Support should be too.
          </h2>

          <p className="font-lato text-xs sm:text-sm uppercase tracking-wider text-black/80 max-w-3xl opacity-75">
            Over one billion women globally are navigating peri-menopause or
            menopause right now. Many struggle to access the right care,
            support, and information.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="
    grid gap-6
    grid-cols-1
    md:grid-cols-2
    max-w-[1400px]
    mx-auto
    px-4 sm:px-8 lg:px-16
  "
        >
          {/* Row 1 */}
          {cards.slice(0, 2).map((card, index) => (
            <div
              key={index}
              className="why-card border border-black/10 rounded-xl p-6 sm:p-8"
            >
              <h3 className="font-lora text-lg sm:text-xl text-black mb-2">
                {card.title}
              </h3>
              <p className="font-lato text-sm sm:text-base text-black/85 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}

          {/* Center Card */}
          <div className="md:col-span-2 flex justify-center">
            <div className="why-card max-w-[620px] w-full border border-black/10 rounded-xl p-6 sm:p-8">
              <h3 className="font-lora text-lg sm:text-xl text-black mb-2">
                {cards[2].title}
              </h3>
              <p className="font-lato text-sm sm:text-base text-black/85 leading-relaxed">
                {cards[2].description}
              </p>
            </div>
          </div>

          {/* Row 3 */}
          {cards.slice(3, 5).map((card, index) => (
            <div
              key={index}
              className="why-card border border-black/10 rounded-xl p-6 sm:p-8"
            >
              <h3 className="font-lora text-lg sm:text-xl text-black mb-2">
                {card.title}
              </h3>
              <p className="font-lato text-sm sm:text-base text-black/85 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
