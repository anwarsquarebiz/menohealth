import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 30,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-brand to-[#D5D5AF] md:flex md:gap-10 md:justify-between py-10 xl:py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background Moon/Circle Decoration */}
      {/* <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white/20 rounded-full blur-3xl" /> */}

      {/* Content */}
      <div
        ref={formRef}
        className="relative w-full md:w-1/2 z-10 flex flex-col items-center md:items-start md:justify-center gap-4 text-center md:text-start"
      >
        <h2 className="font-['Lora'] font-medium text-white text-2xl xl:text-4xl leading-tight">
          Join Our Newsletter
        </h2>
        <p className="font-['Lato'] w-full text-white/90 text-xs xl:text-sm w-full lg:w-[70%] leading-relaxed">
          Stay connected with trusted insights, expert guidance, and community
          support delivered to your inbox.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col md:flex-row gap-2 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-2 max-w-[400px] rounded-full text-xs bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="bg-white text-brand px-8 py-2 text-xs rounded-full font-['Lato'] font-semibold hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>

        <p className="font-['Lato'] text-white/70 text-xs xl:text-sm">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>

      {/* <div classname=" hidden md:flex flex-1 items-center justify-center md:w-1/2 flex-1 bg-lime-500"> */}
      <img
        src="/assets/news-letter.svg"
        alt="img"
        className="w-1/2 md:w-1/3 h-auto hidden md:block"
      />
      {/* </div> */}
    </section>
  );
}
