import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioData from "../../portfolio.json";
import FilteredProjects from "@/components/FilteredProjects";

export default function Home() {
  const { personal, projects } = portfolioData;
  

  return (
    <main className="flex-1 flex flex-col">
      {/* Header with Navigation */}
      <header className="flex justify-between items-center mb-8 lg:mb-16 mt-20 lg:mt-8">
        <Navigation />
      </header>

      {/* Hero Section */}
      <section className="bg-surface-container-low rounded-xl p-6 lg:p-8 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Frontend Engineering & <span className="text-primary italic">Automation</span>
            </h2>
            <p className="text-on-surface-variant font-label leading-relaxed">
              {personal.subtitle}
            </p>
          </div>
        </div>
        {/* Abstract background element */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
      </section>

      {/* Portfolio Content Section */}
      <section className="flex-1 bg-surface-container-low rounded-xl p-8 lg:p-12 overflow-hidden">
        {/* Filter Controls */}
        <FilteredProjects />



        {/* Custom CTA Section */}
        <div className="mt-20 p-8 md:p-12 rounded-xl premium-gradient flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 text-on-primary text-center md:text-left">
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2 break-words">Have a project in mind?</h3>
            <p className="font-label opacity-80 text-sm md:text-base">Let's discuss how we can bring your vision to life.</p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 px-8 py-4 bg-surface text-primary font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            Start a Conversation
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
