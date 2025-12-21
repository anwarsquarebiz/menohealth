import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import CustomBtn from "../CustomBtn";

gsap.registerPlugin(ScrollTrigger);

export default function JoinSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".join-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center gap-6">
        {/* Icon */}
        <div className="join-animate flex flex-col items-center gap-3">
          <Heart className="w-5 h-5 text-brand" />
          <p className="text-[10px] tracking-widest uppercase text-brand font-lato">
            Join the Community
          </p>
        </div>

        {/* Heading */}
        <h2 className="join-animate font-lora text-[#211f1e] text-2xl sm:text-3xl lg:text-4xl leading-tight">
          Join the MenoHealth
          <br />
          Community
        </h2>

        {/* Subtext */}
        <p className="join-animate font-lato text-black/70 text-sm sm:text-base max-w-xl">
          Be the first to access tools, events, and experts designed around your
          needs.
        </p>

        {/* CTA */}
        <div className="join-animate pt-2">
          <CustomBtn />
        </div>
      </div>
    </section>
  );
}
