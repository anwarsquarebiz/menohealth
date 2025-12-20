import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Medical guidance and services",
    description:
      "Clinically led care, trusted advice, and services designed to support you at every stage.",
    image: "/assets/services/medical-guidance.jpg",
  },
  {
    title: "Holistic support and products",
    description:
      "Evidence-based supplements, wellness products, and holistic care to support body and mind.",
    image: "/assets/services/holistic-support.jpg",
  },
  {
    title: "Safe access",
    description:
      "Trusted, vetted access to menopause specialists, practitioners, and support resources.",
    image: "/assets/services/safe-access.jpg",
  },
  {
    title: "Practical tools",
    description:
      "Trackers, education tools, and practical guidance to manage symptoms and daily life.",
    image: "/assets/services/practical-tools.jpg",
  },
  {
    title: "Real stories and community",
    description:
      "Shared experiences, real conversations, and community support so no woman feels alone.",
    image: "/assets/services/community.jpg",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ----------------------------------------
     INITIAL STATES + SCRUB FADE IN
  ---------------------------------------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");

      gsap.set(".expanded-content", {
        autoAlpha: 0,
        y: 40,
        pointerEvents: "none",
      });

      gsap.set(".collapsed-label", {
        autoAlpha: 1,
      });

      gsap.fromTo(
        cards,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 55%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ----------------------------------------
     EXPAND / COLLAPSE LOGIC (SMOOTH)
  ---------------------------------------- */
  useLayoutEffect(() => {
    if (!cardsRef.current) return;

    const cards = Array.from(
      cardsRef.current.querySelectorAll<HTMLElement>(".service-card")
    );

    const EXPANDED = 420;
    const COLLAPSED = 120;

    cards.forEach((card, index) => {
      const expanded = card.querySelector(".expanded-content");
      const collapsed = card.querySelector(".collapsed-label");

      const isActive = index === activeIndex;

      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      // Width animation
      tl.to(card, {
        width: isActive ? EXPANDED : COLLAPSED,
        duration: 0.8,
      });

      if (isActive) {
        // Collapse vertical label → then show content
        tl.to(collapsed, { autoAlpha: 0, duration: 0.25 }, 0).to(
          expanded,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            pointerEvents: "auto",
          },
          0.4
        );
      } else {
        // Hide content → then show vertical label
        tl.to(
          expanded,
          {
            autoAlpha: 0,
            y: 40,
            duration: 0.25,
            pointerEvents: "none",
          },
          0
        ).to(collapsed, { autoAlpha: 1, duration: 0.3 }, 0.45);
      }
    });
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="w-full bg-white ">
      <div className="mx-auto max-w-7xl flex flex-col gap-6 md:gap-8">
        {/* Intro */}
        <p className="font-lato text-black/60 text-center uppercase tracking-wider text-xs max-w-4xl mx-auto">
          At MenoHealth, we bring together the expert knowledge, services, and
          community that women have been asking for:
        </p>

        {/* ---------------- MOBILE / TABLET ---------------- */}
        <div className="grid grid-cols-1 md:grid-col s-2 gap-6 lg:hidden">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card relative rounded-xl overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <h3 className="font-lora text-white text-xl mb-1">
                  {service.title}
                </h3>
                <p className="font-lato text-xs text-white/85 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- DESKTOP EXPAND ---------------- */}
        <div
          ref={cardsRef}
          className="hidden lg:flex gap-4 h-[420px] justify-center"
        >
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="service-card relative h-full overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 p-6 flex items-end">
                {/* Expanded Content */}
                <div className="expanded-content max-w-md">
                  <h3 className="font-lora text-white text-2xl mb-2">
                    {service.title}
                  </h3>
                  <p className="font-lato text-white/90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Collapsed Vertical Label */}
                <div
                  className="collapsed-label absolute left-4 bottom-6 bg-black/40 px-2 py-3 rounded-md"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  <span className="font-lora text-white text-lg tracking-wide">
                    {service.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
