import SiteLayout from "@/layouts/site-layout";
import { Head } from "@inertiajs/react";
import { type BreadcrumbItem } from "@/types";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactSection from "@/components/aftab-components/Contact/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Contact() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <SiteLayout breadcrumbs={breadcrumbs}>
      <Head title="Contact" />
      <main ref={mainRef} className="w-full overflow-hidden bg-white">
        <ContactSection />
      </main>
    </SiteLayout>
  );
}
