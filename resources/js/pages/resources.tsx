import AppLayout from '@/layouts/app-layout';
import SiteLayout from '@/layouts/site-layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import HeroSection from '@/components/aftab-components/Resources/HeroSection';
import ServicesSection from '@/components/aftab-components/Resources/ServicesSection';
import ResourcesSection from '@/components/aftab-components/Resources/ResourcesSection';
import FAQSection from '@/components/aftab-components/Resources/FAQSection';
import MenopauseTrackerSection from '@/components/aftab-components/Resources/MenopauseTrackerSection';

gsap.registerPlugin(ScrollTrigger);

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Resources',
        href: '/resources',
    },
];

export default function Resources() {

    const mainRef = useRef<useRefHTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

    return (
        <SiteLayout breadcrumbs={breadcrumbs}>
            <Head title="Resources" />
            <main ref={mainRef} className="w-full overflow-hidden bg-white">
                <HeroSection />
                <ServicesSection />
                <ResourcesSection />
                <FAQSection />
                <MenopauseTrackerSection/>
    </main>
    
        </SiteLayout>
    );
}

