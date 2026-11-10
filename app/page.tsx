import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 md:px-12 lg:px-24">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Sidebar (Fixed Left) */}
        <Sidebar />

        {/* Main Content (Scrolling Right) */}
        <main className="pt-24 lg:w-2/3 lg:py-24">
          <Hero />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}
