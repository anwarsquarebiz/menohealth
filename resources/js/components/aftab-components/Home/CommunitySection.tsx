import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animations
      gsap.from([iconRef.current, headingRef.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
      });

      // Stats counter animation
      if (statRef.current) {
        ScrollTrigger.create({
          trigger: statRef.current,
          start: "top 80%",
          once: true, // IMPORTANT: prevents replay on scroll up/down
          onEnter: () => {
            const number = statRef.current?.querySelector(".stat-number");

            if (number) {
              gsap.fromTo(
                number,
                { textContent: 0 },
                {
                  textContent: 1000000000,
                  duration: 1.5,
                  ease: "power1.out",
                  snap: { textContent: 1 },
                  onUpdate: () => {
                    number.textContent = Math.floor(
                      Number(number.textContent)
                    ).toLocaleString();
                  },
                }
              );
            }
          },
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
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          {/* Icon */}
          <div ref={iconRef} className="flex flex-col items-center gap-6">
            <Heart className="w-5 h-5 text-brand" />
            <p className="font-lato font-semibold text-brand text-xs tracking-widest uppercase opacity-75">
              A Global Community
            </p>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="font-lora font-medium text-black text-3xl sm:text-4xl lg:text-[44px] leading-tight max-w-xl sm:max-w-2xl"
          >
            A Global Community, A Unified Solution
          </h2>

          <p className="font-lato font-semibold text-black/90 text-xs tracking-widest uppercase opacity-75">
            Our mission is to provide a supportive space where women can:
          </p>
        </div>

        {/* Stats & Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center">
          {/* Left: Stat */}
          <div
            ref={statRef}
            className="flex w-full lg:w-1/2 flex-col items-center justify-center gap-3 sm:gap-4 p-6 sm:p-10"
          >
            <p className="font-lato font-medium text-black/60 text-base sm:text-lg">
              Over
            </p>

            <div className="h-[56px] sm:h-[72px] flex items-center">
              <p className="stat-number font-lora font-medium text-black text-4xl sm:text-5xl lg:text-[64px] leading-none">
                1,000,000,000
              </p>
            </div>

            <p className="font-lora font-bold text-black/85 text-xl sm:text-2xl lg:text-[32px]">
              Women
            </p>
          </div>

          {/* Right: Text Content */}
          <div
            ref={textRef}
            className="flex w-full lg:w-1/2 flex-col gap-4 max-w-xl sm:max-w-2xl px-0 sm:px-4"
          >
            <p className="font-lato text-black/85 text-base sm:text-lg leading-relaxed">
              are in peri-menopause or menopause today.
            </p>

            <p className="font-lato font-medium text-black/90 text-sm sm:text-base leading-relaxed">
              Yet so many still navigate it without the support, clarity, and
              care they deserve.
            </p>

            <p className="font-lato text-black/90 text-sm sm:text-base leading-relaxed">
              Traditional healthcare often focuses on symptoms — but menopause
              affects every part of life: physical, emotional, social, and
              hormonal. Women need access to guidance that reflects the full
              picture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
