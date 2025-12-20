import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import NewsletterSection from "./NewsletterSection";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

const footerLinks = {
  Articles: [
    { name: "BBC", path: "https://www.bbc.com" },
    { name: "YouTube", path: "https://www.youtube.com" },
    { name: "Apple Podcast", path: "https://podcasts.apple.com" },
    { name: "Instagram", path: "https://www.instagram.com" },
  ],
  Sitemap: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-10 bg-white pb-6">
      <NewsletterSection />

      <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <img
                src={"/assets/logo_black.svg"}
                alt="Meno Health"
                className="w-[42px] h-[20px]"
              />
              <h3 className="font-Lora text-black text-xl">Meno Health</h3>
            </div>
            <p className="font-lato w-full lg:w-[70%]  text-black/85 text-xs leading-relaxed">
              We share occasional insights on personal growth, emotional
              well-being, and practical tools to navigate life with more clarity
              and balance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-3">
                <h4 className="font-lato font-semibold text-black text-xs uppercase tracking-wider">
                  {title}
                </h4>
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.path}
                        className="font-lato text-black/70 text-xs hover:text-brand transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links */}
            <div className="gap-3 hidden lg:flex">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:text-brand text-black/60 hover:text-brand transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col-reverse gap-8 items-center justify-between">
          <p className="font-lato text-center  text-black/60 text-xs leading-relaxed">
            Copyright 2025 Meno Health. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 lg:hidden">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:text-brand text-black/60 hover:text-brand transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
