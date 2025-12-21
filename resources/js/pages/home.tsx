import AppLayout from '@/layouts/app-layout';
import SiteLayout from '@/layouts/site-layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import HeroSection from '@/components/aftab-components/Home/HeroSection';
import IntroSection from '@/components/aftab-components/Home/IntroSection';
import ServicesSection from '@/components/aftab-components/Home/ServicesSection';
import CommunitySection from '@/components/aftab-components/Home/CommunitySection';
import MissionSection from '@/components/aftab-components/Home/MissionSection';
import FeaturesSection from '@/components/aftab-components/Home/FeaturesSection';
import HowItWorksSection from '@/components/aftab-components/Home/HowItWorksSection';
import QuoteSection from '@/components/aftab-components/Home/QuoteSection';
import NewsletterSection from '@/components/aftab-components/NewsletterSection';
import JoinSection from '@/components/aftab-components/Home/JoinSection';

gsap.registerPlugin(ScrollTrigger);

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/home',
    },
];

export default function Home() {

    const mainRef = useRef<useRefHTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global scroll animations can be added here if needed
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

    return (
        <SiteLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <main ref={mainRef} className="w-full overflow-hidden bg-white">
      <HeroSection />
       <IntroSection />
      <CommunitySection />
      <MissionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <QuoteSection />
      <JoinSection/>
    </main>
        </SiteLayout>
    );
}

