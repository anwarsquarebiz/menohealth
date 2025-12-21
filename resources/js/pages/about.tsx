import AppLayout from '@/layouts/app-layout';
import SiteLayout from '@/layouts/site-layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import HeroSection from '@/components/aftab-components/About/HeroSection';
import WhyWeExistSection from '@/components/aftab-components/About/WhyWeExistSection';
import OurTeamSection from '@/components/aftab-components/About/OurTeamSection';
import ValuesSection from '@/components/aftab-components/About/ValuesSection';

gsap.registerPlugin(ScrollTrigger);

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/about',
    },
];

export default function About() {

    const mainRef = useRef<useRefHTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

    return (
        <SiteLayout breadcrumbs={breadcrumbs}>
            <Head title="About" />
            <main ref={mainRef} className="w-full overflow-hidden bg-white">
                <HeroSection />
                <WhyWeExistSection />
                <OurTeamSection />
                <ValuesSection/>
    </main>
    
        </SiteLayout>
    );
}

