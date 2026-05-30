"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import portfolioData from "@/lib/portfolio-data";
import { ShinyText } from "@/components/ui/shiny-text";
import { useState } from "react";

export default function Contact() {
  const emailObj = portfolioData.social.find(s => s.name === "Email");
  const emailInfo = emailObj ? emailObj.href : "hello@alchemist.dev";

  const workObj = portfolioData.timeline.find(t => t.type === "work");
  const locationInfo = workObj ? workObj.location : "San Francisco, CA";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://n8n.clariana.co.uk/webhook/portfolio-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header with Tabs Navigation */}
        <header className="flex justify-between items-center mb-16 mt-20 lg:mt-8">
          <Navigation />
        </header>

        {/* Content Area */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Editorial Headline (Asymmetric) */}
          <div className="lg:col-span-12 mb-8">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-3xl">
              Let's build the <ShinyText text="future" className="italic" /> together.
            </h1>
          </div>
          {/* Contact Form Section */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 md:p-10 rounded-xl">
            {submitStatus === "success" ? (
              <div className="bg-primary/10 border border-primary/20 text-primary p-6 rounded-xl flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <span className="material-symbols-outlined text-5xl mb-4">check_circle</span>
                <h3 className="font-headline text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="font-label">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitStatus("idle")} 
                  className="mt-6 text-sm underline hover:text-on-surface-variant transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-4 px-6 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-4 px-6 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg py-4 px-6 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none disabled:opacity-50"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                {submitStatus === "error" && (
                  <p className="text-error text-sm font-label">Failed to send message. Please try again.</p>
                )}

                <button
                  className="bg-primary-container text-on-primary-container w-full py-5 rounded-lg font-headline font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_-10px_rgba(241,193,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
          {/* Side Information & Map */}
          <div className="lg:col-span-5 space-y-12">
            {/* Text Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Inquiries
                  </h4>
                  <p className="text-sm md:text-xl font-headline text-on-surface">{emailInfo}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    Based In
                  </h4>
                  <p className="text-sm md:text-xl font-headline">{locationInfo}</p>
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
