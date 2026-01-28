import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import svgPaths from "@/lib/svgPaths";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Explore What Fits Your Stage",
    description:
      "Understand where you are in your menopause journey with resources and guidance tailored to your current needs.",
  },
  {
    number: "02",
    title: "Connect With Trusted Experts",
    description:
      "Find and connect with vetted menopause professionals and product providers you can trust.",
  },
  {
    number: "03",
    title: "Build a Plan That Works for You",
    description:
      "Create a personalised approach that supports your mind, body, lifestyle, and everyday reality.",
  },
  {
    number: "04",
    title: "Stay Supported Over Time",
    description:
      "Get ongoing guidance, tools, and community support as your needs evolve over time.",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the curved path
      if (pathRef.current) {
        gsap.fromTo(
          pathRef.current,
          {
            strokeDasharray: 1500,
            strokeDashoffset: 1500,
          },
          {
            strokeDashoffset: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom bottom",
              scrub: 1.5,
            },
            ease: "none",
          }
        );
      }

      // Animate steps
      if (stepsRef.current) {
        const stepElements = stepsRef.current.querySelectorAll(".step-card");
        gsap.from(stepElements, {
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
          },
          opacity: 0,
          x: (i) => (i % 2 === 0 ? -50 : 50),
          stagger: 0.2,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 pb-8 px-6 sm:px-10 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          {/* Icon */}
          <div className="flex flex-col items-center gap-6">
            <Heart className="w-5 h-5 text-brand" />
            <p className="font-lato font-semibold text-brand text-xs tracking-widest uppercase opacity-75">
              How It Works
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-lora font-medium text-black text-3xl sm:text-4xl lg:text-[44px] leading-tight max-w-xl">
            Your Path Through Menopause
          </h2>
        </div>

        {/* Steps with Animated Path */}
        <div className="relative w-full">
          {/* Curved Line SVG — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-[114px] h-full -translate-x-1/2 pointer-events-none">
            <svg
              className="w-full h-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 117 1505"
            >
              <path
                ref={pathRef}
                d={svgPaths.p2f4bbf00}
                stroke="#587974"
                strokeLinecap="round"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>

          {/* Steps */}
          <div
            ref={stepsRef}
            className="relative flex flex-col gap-10 max-w-5xl mx-auto"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-card flex ${
                  index % 2 === 1 ? "lg:justify-end" : "lg:justify-start"
                } justify-center`}
              >
                <div className="flex flex-col gap-4 bg-white px-6 py-8 max-w-md text-center lg:text-left">
                  <div className="bg-brand rounded-full px-3 py-1 flex items-center gap-2 w-fit mx-auto lg:mx-0">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="font-lato text-white text-xs uppercase">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="font-lora font-medium text-black text-xl sm:text-2xl uppercase">
                    {step.title}
                  </h3>

                  <p className="font-lato text-black/85 text-sm sm:text-base leading-relaxed uppercase">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
