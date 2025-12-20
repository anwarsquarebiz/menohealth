import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurTeamSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-left", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        x: -50,
        opacity: 0,
      });

      gsap.from(".team-right", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        x: 50,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div
        className="
          mx-auto max-w-7xl
          px-6 sm:px-8 lg:px-16
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-16
          items-start
        "
      >
        {/* Left: Heading */}
        <div className="team-left flex flex-col gap-4">
          <p className="font-lato text-xs sm:text-sm uppercase tracking-widest text-black/60">
            OUR TEAM
          </p>

          <h2
            className="
              font-lora font-medium text-black
              text-2xl sm:text-3xl lg:text-4xl
              leading-snug
              max-w-lg
            "
          >
            A Team Driven by Women's Wellbeing
          </h2>
        </div>

        {/* Right: Content */}
        <div
          className="
            team-right
            font-lato text-black/85
            text-sm sm:text-base lg:text-lg
            leading-relaxed
            flex flex-col gap-5
            max-w-2xl
          "
        >
          <p>
            With roots in both India and London, we are a diverse and committed
            team united by one mission: to give every woman navigating
            peri-menopause and menopause access to clear information, trusted
            support, and high-quality care — all in one place.
          </p>

          <p>
            Every day, we are motivated by the women we meet along this journey
            — women who deserve answers, not confusion. We understand how
            overwhelming the flood of advice can feel.
          </p>

          <p>
            We're here to provide a simpler, stronger starting point — cutting
            through noise to deliver guidance women can truly trust.
          </p>

          <p>
            Our passion is to help women feel healthy, confident, and in
            control, so menopause never becomes a barrier to living life fully.
            By empowering women with choice, knowledge, and connection, we're
            committed to creating meaningful change — one life at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
