import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import CustomBtn from "../CustomBtn";
import { router } from "@inertiajs/react";

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    title: "Books for Mid-Awareness",
    subtitle: "Brain Fog and Menopause: What's Really Happening",
    type: "BBC News",
    platform: "Article",
    redirect: "https://www.bbc.co.uk/news/articles/c4gpkenx9dzo",
  },
  {
    title: "Why Menopause Warnings Were Removed",
    subtitle: "Why Menopause Warnings Were Removed — And Why It Matters",
    type: "Youtube",
    platform: "Video",
    redirect: "https://www.youtube.com/watch?v=eParptE0Zgs",
  },
  {
    title: "Menopause, Midlife, and More",
    subtitle: "Menopause, Midlife, and More",
    type: "Apple Podcasts",
    platform: "Podcast",
    redirect:
      "https://podcasts.apple.com/gb/podcast/dr-streichers-inside-information-menopause-midlife/id1615785832",
  },
  {
    title: "Dr Mary Claire Haver",
    subtitle: "Dr Mary Claire Haver",
    type: "Instagram",
    platform: "Video",
    redirect: "https://www.instagram.com/drmaryclaire/",
  },
];

export default function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleArticleClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".resources-heading", {
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
        gsap.from(cardsRef.current.querySelectorAll(".resource-card"), {
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
        <div className="resources-heading flex flex-col items-center gap-4 mb-12 text-center">
          <Heart className="w-5 h-5 text-[#c7a486]" />
          <p className="font-lato text-xs uppercase tracking-widest text-[#c7a486] opacity-75">
            CURATED CONTENT
          </p>

          <h2 className="font-lora font-medium text-2xl text-black sm:text-3xl lg:text-4xl max-w-2xl">
            Recommended Reads & Voices
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="flex flex-col gap-10">
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.slice(0, 3).map((resource, index) => (
              <div
                key={index}
                className="resource-card border border-black/10 rounded-xl p-6 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="font-lora text-lg sm:text-xl text-black">
                    {resource.subtitle}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-black/80">
                    <span>{resource.type}</span>
                    <span className="w-1.5 h-1.5 bg-black/80 rounded-full" />
                    <span>{resource.platform}</span>
                  </div>
                </div>

                {/* <button className="mt-6 bg-[#c7a486] hover:bg-[#b89476] transition-colors text-white px-5 py-2.5 rounded-full flex items-center gap-4 w-fit">
                  <span className="text-xs">View Now</span>
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                </button> */}
                <div className="w-fit mt-6">
                  <CustomBtn
                    label="View Now"
                    onClick={() => handleArticleClick(resource.redirect)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="resource-card border border-black/10 rounded-xl p-6 flex flex-col justify-between lg:col-span-1">
              <div className="flex flex-col gap-4">
                <h3 className="font-lora text-lg sm:text-xl text-black">
                  {resources[3].subtitle}
                </h3>

                <div className="flex items-center gap-2 text-sm text-black/80">
                  <span>{resources[3].type}</span>
                  <span className="w-1.5 h-1.5 bg-black/80 rounded-full" />
                  <span>{resources[3].platform}</span>
                </div>
              </div>

              <div className="w-fit mt-6">
                <CustomBtn
                  label="View Now"
                  onClick={() => handleArticleClick(resources[3].redirect)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
