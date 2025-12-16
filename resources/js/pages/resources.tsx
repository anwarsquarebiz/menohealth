import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Resources',
        href: '/resources',
    },
];

export default function Resources() {
    const resourceCategories = [
        {
            title: 'Symptom Management',
            description: 'Learn about managing common menopause symptoms',
            items: [
                'Hot Flashes & Night Sweats',
                'Sleep Disturbances',
                'Mood Changes',
                'Bone Health',
            ],
        },
        {
            title: 'Hormone Therapy',
            description: 'Information about hormone replacement therapy options',
            items: [
                'HRT Overview',
                'Benefits & Risks',
                'Alternative Treatments',
                'Consultation Guide',
            ],
        },
        {
            title: 'Lifestyle & Wellness',
            description: 'Tips for maintaining health and wellness',
            items: [
                'Nutrition & Diet',
                'Exercise & Fitness',
                'Stress Management',
                'Mental Health Support',
            ],
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Resources" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-foreground">
                        Health Resources
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Explore our comprehensive collection of resources to support your
                        menopause journey.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {resourceCategories.map((category, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-sidebar-border/70 bg-card p-6 shadow-sm dark:border-sidebar-border"
                        >
                            <h2 className="mb-2 text-xl font-semibold">
                                {category.title}
                            </h2>
                            <p className="mb-4 text-sm text-muted-foreground">
                                {category.description}
                            </p>
                            <ul className="space-y-2">
                                {category.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="text-sm text-muted-foreground"
                                    >
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}

