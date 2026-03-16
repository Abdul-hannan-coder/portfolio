import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioData from "../../../portfolio.json";

export default function Contact() {
  const emailObj = portfolioData.social.find(s => s.name === "Email");
  const email = emailObj ? emailObj.href : "hello@alchemist.dev";

  const workObj = portfolioData.timeline.find(t => t.type === "work");
  const location = workObj ? workObj.location : "San Francisco, CA";

  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header with Tabs Navigation */}
        <header className="flex justify-between items-center mb-16 mt-8">
          <Navigation />
        </header>

        {/* Content Area */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Editorial Headline (Asymmetric) */}
          <div className="lg:col-span-12 mb-8">
            <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-3xl">
              Let's build the <span className="text-primary italic">future</span> together.
            </h1>
          </div>
          {/* Contact Form Section */}
          <div className="lg:col-span-7 bg-surface-container-low p-10 rounded-xl">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant" htmlFor="full_name">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-4 px-6 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  id="full_name"
                  name="full_name"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-4 px-6 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-4 px-6 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                ></textarea>
              </div>
              <button
                className="bg-primary-container text-on-primary-container w-full py-5 rounded-lg font-headline font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_-10px_rgba(241,193,0,0.3)]"
                type="submit"
              >
                Send Message
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
          {/* Side Information & Map */}
          <div className="lg:col-span-5 space-y-12">
            {/* Text Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Inquiries
                  </h4>
                  <p className="text-xl font-headline break-all">{email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Based In
                  </h4>
                  <p className="text-xl font-headline">{location}</p>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity duration-700 bg-surface-container-lowest">
              <div className="absolute inset-0 bg-primary/5 z-10 pointer-events-none"></div>
              <img
                className="w-full h-full object-cover"
                alt="Dark stylized map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlEfN2VLtn_Ck0c4DJz9yKllkN-clu_-voM9GToIUvYmU4km1IMUGP0FEEhBJBsJDokOMOFxXTnVIz9Rb6KvA5XiZE6_0n-zIfS7-PCS5iQ9_T0_BATStbC_FU_1uw7WeiQ0Wh98op60Kc4_3nRRqwb9rW2vuz-ww7w3hbVzTqIbtdx-prwGcIygeFnvANncVObPsnywbr9KGERmhAatPedlGcm2PM6TkGV3I2yzDVNHBGlL-oYWKKeRk1nDQiTKubf5IyjqxyPhM"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150"></div>
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-surface relative z-30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
