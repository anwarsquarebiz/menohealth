import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home',
        href: '/home',
    },
];

export default function Home() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Home" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-foreground">
                        Welcome to MenoHealth
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Your trusted resource for menopause health and wellness.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-sidebar-border/70 bg-card p-6 shadow-sm dark:border-sidebar-border">
                        <h2 className="mb-2 text-xl font-semibold">Health Tracking</h2>
                        <p className="text-muted-foreground">
                            Monitor your symptoms and track your health journey.
                        </p>
                    </div>
                    <div className="rounded-lg border border-sidebar-border/70 bg-card p-6 shadow-sm dark:border-sidebar-border">
                        <h2 className="mb-2 text-xl font-semibold">Expert Resources</h2>
                        <p className="text-muted-foreground">
                            Access evidence-based information and expert guidance.
                        </p>
                    </div>
                    <div className="rounded-lg border border-sidebar-border/70 bg-card p-6 shadow-sm dark:border-sidebar-border">
                        <h2 className="mb-2 text-xl font-semibold">Community Support</h2>
                        <p className="text-muted-foreground">
                            Connect with others on similar health journeys.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

