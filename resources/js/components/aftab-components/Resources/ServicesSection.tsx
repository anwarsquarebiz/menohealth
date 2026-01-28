import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Moon,
  Zap,
  Dumbbell,
  Brain,
  Sparkles,
  Compass,
  Leaf,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Sleep & Nutrition",
    icon: <Moon />,
    description:
      "Tailored plans to help manage sleep disruption, hot flashes, and nutrition for energy and wellbeing.",
  },
  {
    title: "Energy & Libido",
    icon: <Zap />,
    description:
      "Supportive guidance for managing fatigue, hormonal changes, and maintaining intimacy during menopause.",
  },
  {
    title: "Fitness",
    icon: <Dumbbell />,
    description:
      "Exercise programs designed for strength, bone health, and overall vitality through midlife.",
  },
  {
    title: "Stress & Mindset",
    icon: <Brain />,
    description:
      "Tools and techniques to manage stress, support mental clarity, and build emotional resilience.",
  },
  {
    title: "Yoga & Meditation",
    icon: <Leaf />,
    description:
      "Mind–body practices designed to reduce stress, improve sleep, and support hormonal balance.",
  },
  {
    title: "Beauty & Skincare",
    icon: <Sparkles />,
    description:
      "Menopause-aware skincare and beauty services that support changing skin needs with confidence.",
  },
  {
    title: "Coaching",
    icon: <Compass />,
    description:
      "One-on-one support to help women navigate menopause with confidence, clarity, and purpose.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-heading", {
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
        const cardElements = cardsRef.current.querySelectorAll(".service-card");
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
        <div className="services-heading flex flex-col items-center gap-4 mb-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <Heart className="w-5 h-5 text-[#c7a486]" />
            <p className="font-lato text-xs uppercase tracking-widest text-[#c7a486] opacity-75">
              OUR SERVICES
            </p>
          </div>

          <h2 className="font-lora font-medium text-[#211f1e] text-2xl sm:text-3xl lg:text-4xl max-w-2xl">
            Care and Services Designed for Midlife Women.
          </h2>

          <p className="font-lato text-xs sm:text-sm uppercase tracking-widest text-black/70 max-w-3xl">
            From medical care to holistic wellbeing, MenoHealth brings together
            trusted services designed to support women through peri-menopause,
            menopause, and beyond — all in one place.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="
            grid gap-3
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
      service-card
      border border-black/10
      rounded-xls
      p-6 sm:p-8
      bg-white
      flex flex-col gap-4
      rounded-lg
    "
            >
              {/* ICON */}
              <div className="text-black/80">{service.icon}</div>

              <div className="flex flex-col gap-1">
                <h3 className="font-lora text-lg sm:text-xl text-black">
                  {service.title}
                </h3>

                <p className="font-lato text-sm sm:text-base text-black/85 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
