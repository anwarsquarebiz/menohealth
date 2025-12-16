import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About',
        href: '/about',
    },
];

export default function About() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6">
                <div className="space-y-6">
                    <div>
                        <h1 className="mb-4 text-4xl font-bold text-foreground">
                            About MenoHealth
                        </h1>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            MenoHealth is dedicated to providing comprehensive support and
                            resources for women navigating menopause. Our mission is to empower
                            you with knowledge, tools, and community support throughout your
                            health journey.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p className="text-muted-foreground">
                            To provide evidence-based information, personalized health tracking,
                            and a supportive community for women experiencing menopause and
                            perimenopause.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">What We Offer</h2>
                        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                            <li>Comprehensive health tracking and symptom monitoring</li>
                            <li>Evidence-based articles and resources</li>
                            <li>Expert guidance and support</li>
                            <li>Community forums and peer support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

