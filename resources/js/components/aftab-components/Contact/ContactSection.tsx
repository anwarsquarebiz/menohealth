import React, { useState, useLayoutEffect, useRef } from "react";
import { Heart } from "lucide-react";
import gsap from "gsap";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([formRef.current, imagesRef.current], {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({ delay: 0.15 });

      tl.to(formRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }).to(
        imagesRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.5"
      );

      if (imagesRef.current) {
        const imgs = imagesRef.current.querySelectorAll("img");
        gsap.from(imgs, {
          opacity: 0,
          y: 20,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.4,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Required fields are not optional. Don’t skip them.");
      return;
    }

    if (!formData.consent) {
      alert("Consent is mandatory. Legal reality.");
      return;
    }

    setLoading(true);

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
    };

    console.log("CONTACT PAYLOAD:", payload);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        consent: false,
      });
    }, 1000);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row text-black/85 gap-14 items-start">
        <div
          ref={formRef}
          className="flex-1 flex flex-col gap-8 w-full lg:w-1/2"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-brand" />
              <p className="font-lato text-xs uppercase tracking-widest text-brand">
                Contact
              </p>
            </div>

            <h2 className="font-lora text-2xl sm:text-3xl lg:text-4xl text-[#211f1e]">
              Let’s Talk
            </h2>

            <p className="font-lato text-black/70 max-w-md text-sm sm:text-base">
              Questions, support, or collaborations — we’re here and actually
              listening.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              placeholder="Your name *"
              value={formData.name}
              onChange={handleChange}
              className="border border-black/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-black"
            />

            <input
              name="email"
              type="email"
              placeholder="Your email *"
              value={formData.email}
              onChange={handleChange}
              className="border border-black/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-black"
            />

            <input
              name="subject"
              placeholder="Subject (optional)"
              value={formData.subject}
              onChange={handleChange}
              className="border border-black/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-black"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us what’s on your mind *"
              value={formData.message}
              onChange={handleChange}
              className="border border-black/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-black resize-none"
            />

            <label className="flex items-start gap-3 text-sm text-black/70 font-lato">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1"
              />
              I agree to be contacted regarding my enquiry.
            </label>

            <button
              type="submit"
              disabled={loading}
              className="
                self-start rounded-full bg-black text-white
                px-6 py-3 text-sm uppercase tracking-wider
                cursor-pointer
                hover:bg-black/80 transition disabled:opacity-50
              "
            >
              {loading ? "Submitting…" : "Send Message"}
            </button>

            {submitted && (
              <p className="text-sm text-green-600 font-lato">
                Message sent. We’ll get back to you.
              </p>
            )}
          </form>
        </div>

        <div ref={imagesRef} className="hidden md:flex flex-col gap-4 flex-1">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/contact/contact-1.jpg"
              className="rounded-xl object-cover h-56 w-full"
              alt=""
            />
            <img
              src="/assets/contact/contact-2.jpg"
              className="rounded-xl object-cover h-56 w-full"
              alt=""
            />
          </div>

          <img
            src="/assets/contact/contact-3.jpg"
            className="rounded-xl object-cover object-top h-64 w-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
