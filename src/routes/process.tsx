import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/Layout";
import { processSteps, brand } from "@/lib/data";
import { pageHead } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/process")({
  component: Process,
  head: () =>
    pageHead({
      path: "/process",
      title: "The Custom Process | Ntombis Fashion",
      description:
        "From first conversation to final fitting: how Ntombis Fashion designs, measures, produces and refines your custom garment, step by step.",
    }),
});

function Process() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main-content" className="pt-48 md:pt-56 pb-24 container-custom">
        <span className="text-xs tracking-[0.3em] uppercase mb-4 block text-brand-green/70">THE CUSTOM PROCESS</span>
        <h1 className="text-4xl md:text-6xl mb-8">From First Conversation <br /> to Final Fitting</h1>
        <p className="text-xl text-brand-green/70 max-w-2xl mb-24 leading-relaxed">
          The Ntombis Fashion process is designed to make custom clothing clear, personal, and considered. Each step helps shape the garment around the client.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {processSteps.map((step) => (
            <div key={step.number} className="relative pt-12 border-t border-brand-green/10">
              <span className="absolute top-4 left-0 text-[10px] tracking-widest font-serif opacity-70 italic">Step {step.number}</span>
              <h2 className="text-xl mb-4 min-h-[3rem]">{step.title}</h2>
              <p className="text-sm text-brand-green/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-white flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-brand-green/70 italic max-w-md">
            Note: Because each garment is custom-made, timelines depend on garment complexity, fabric availability, and fitting requirements. You can also{" "}
            <Link to="/contact" className="underline underline-offset-4">send an enquiry online</Link>.
          </p>
          <a
            href={brand.contact.whatsapp}
            onClick={() => trackEvent("whatsapp_enquiry", { location: "process_footer" })}
            className="bg-brand-green text-brand-cream px-12 py-4 uppercase tracking-widest text-sm whitespace-nowrap"
          >
            Request a Consultation
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
