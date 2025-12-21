import { PropsWithChildren } from "react";
import { Head } from "@inertiajs/react";
import Footer from "@/components/aftab-components/Footer";
import Navbar from "@/components/aftab-components/navigation/Navbar";

export default function SiteLayout({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {title && <Head title={title} />}

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
