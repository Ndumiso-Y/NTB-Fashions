import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MessageSquare, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import { brandDetails } from "../data/brand";

interface FormState {
  name: string;
  phone: string;
  email: string;
  occasionType: string;
  garmentType: string;
  eventDate: string;
  budgetRange: string;
  message: string;
  contactMethod: string;
}

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    occasionType: "",
    garmentType: "",
    eventDate: "",
    budgetRange: "",
    message: "",
    contactMethod: "whatsapp",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-populate dropdowns from query parameters if redirected
  useEffect(() => {
    document.title = "Book a Consultation | NTB Fashions";
    
    const occasionParam = searchParams.get("occasion");
    const collectionParam = searchParams.get("collection");

    if (occasionParam) {
      setFormData((prev) => ({
        ...prev,
        occasionType: occasionParam,
        message: `I would like to enquire about a custom garment for a ${occasionParam.replace("-", " ")} occasion.`,
      }));
    } else if (collectionParam) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in a style from the ${collectionParam.replace("-", " ")} collection.`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = "Your name is required.";
    if (!formData.phone.trim()) newErrors.phone = "A contact phone number is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Your email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format.";
    }
    if (!formData.occasionType) newErrors.occasionType = "Please select an occasion type.";
    if (!formData.garmentType) newErrors.garmentType = "Please select a garment type.";
    if (!formData.eventDate) newErrors.eventDate = "Please choose an approximate event date.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // API INTEGRATION POINT:
    // This is where you would link Axios or Fetch to post your formData to the email server/CMS.
    // Example:
    // fetch('/api/book-consultation', { method: 'POST', body: JSON.stringify(formData) })
    
    setIsSubmitted(true);
    setErrors({});
  };

  return (
    <div className="pt-24 bg-brand-bg min-h-screen">
      {/* Intro Header */}
      <section className="py-16 border-b border-brand-gold/10 bg-brand-bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeader
            title="Book a Consultation"
            subtitle="Custom Garment Journey"
            description="Our studio is based in South Africa. Schedule a fitting, fabric selection session, or request a general enquiry."
            align="left"
            className="!mb-0"
          />
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-brand-bg border border-brand-gold/15 p-8 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center max-w-md mx-auto animate-fade-in-simple">
                <CheckCircle size={56} className="text-brand-gold mb-6" />
                <h3 className="font-serif text-2xl text-brand-black mb-3">Consultation Requested</h3>
                <p className="font-sans text-brand-muted text-sm leading-relaxed mb-8">
                  Thank you, <strong>{formData.name}</strong>. We have received your booking details for the approximate date of <strong>{formData.eventDate}</strong>. A designer from NTB Fashions will contact you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Button onClick={() => setIsSubmitted(false)} variant="secondary" className="w-full">
                    Request Another
                  </Button>
                  <a
                    href={brandDetails.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 font-sans uppercase text-xs font-semibold tracking-[0.2em] px-4 py-4 border border-brand-black text-brand-bg bg-brand-black hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black transition-all duration-300"
                  >
                    WhatsApp Backup
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="font-serif text-2xl text-brand-black mb-2">Request an Appointment</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ndumiso Sibeko"
                      className="w-full font-sans text-sm bg-brand-bg-secondary/25 border border-brand-gold/20 py-3.5 px-4 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-muted/40"
                    />
                    {errors.name && <span className="font-sans text-[10px] text-rose-500 mt-1.5">{errors.name}</span>}
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +27 72 123 4567"
                      className="w-full font-sans text-sm bg-brand-bg-secondary/25 border border-brand-gold/20 py-3.5 px-4 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-muted/40"
                    />
                    {errors.phone && <span className="font-sans text-[10px] text-rose-500 mt-1.5">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ndumiso@example.com"
                      className="w-full font-sans text-sm bg-brand-bg-secondary/25 border border-brand-gold/20 py-3.5 px-4 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-muted/40"
                    />
                    {errors.email && <span className="font-sans text-[10px] text-rose-500 mt-1.5">{errors.email}</span>}
                  </div>

                  {/* Contact Method */}
                  <div className="flex flex-col">
                    <label htmlFor="contactMethod" className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="w-full font-sans text-sm bg-brand-bg-secondary/25 border border-brand-gold/20 py-3.5 px-4 focus:outline-none focus:border-brand-gold transition-colors"
                    >
                      <option value="whatsapp">WhatsApp Message</option>
                      <option value="email">Email Enquiry</option>
                      <option value="phone">Direct Phone Call</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Occasion type */}
                  <div className="flex flex-col">
                    <label htmlFor="occasionType" className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-2">
                      Occasion Type *
                    </label>
                    <select
                      id="occasionType"
                      name="occasionType"
                      value={formData.occasionType}
                      onChange={handleChange}
                      className="w-full font-sans text-sm bg-brand-bg-secondary/25 border border-brand-gold/20 py-3.5 px-4 focus:outline-none focus:border-brand-gold transition-colors"
                    >
                      <option value="">Select an occasion...</option>
                      <option value="weddings">Wedding / Grooms</option>
                      <option value="matric-dance">Matric Dance</option>
                      <option value="traditional-ceremonies">Traditional Ceremony</option>
                      <option value="gala-red-carpet">Gala / Red Carpet</option>
                      <option value="other">Other Bespoke Event</option>
                    </select>
                    {errors.occasionType && <span className="font-sans text-[10px] text-rose-500 mt-1.5">{errors.occasionType}</span>}
                  </div>

                  {/* Garment type */}
                  <div className="flex flex-col">
                    <label htmlFor="garmentType" className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-2">
                      Garment Type *
                    </label>
                    <select
                      id="garmentType"
                      name="garmentType"
                      value={formData.garmentType}
                      onChange={handleChange}
                      className="w-full font-sans text-sm bg-brand-bg-secondary/25 border border-brand-gold/20 py-3.5 px-4 focus:outline-none focus:border-brand-gold transition-colors"
                    >
                      <option value="">Select garment...</option>
                      <option value="wedding-gown">Wedding Dress / Gown</option>
                      <option value="groom-suit">Tailored Suit (Groom/Men)</option>
                      <option value="traditional-set">Traditional Co-Ord Set</option>
                      <option value="evening-dress">Evening / Event Dress</option>
                      <option value="custom-shirts">Bespoke Custom Shirt</option>
                      <option value="other">Other Unique Design</option>
                    </select>
                    {errors.garmentType && <span className="font-sans text-[10px] text-rose-500 mt-1.5">{errors.garmentType}</span>}
                  </div>

                  {/* Event Date */}
                  <div className="flex flex-col">
                    <label htmlFor="eventDate" className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-2">
                      Approx. Event Date *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full font-sans text-sm bg-brand-bg-secondary/25 border border-brand-gold/20 py-3.5 px-4 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                    {errors.eventDate && <span className="font-sans text-[10px] text-rose-500 mt-1.5">{errors.eventDate}</span>}
                  </div>
                </div>

                {/* Optional Budget range */}
                <div className="flex flex-col">
                  <label htmlFor="budgetRange" className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-2">
                    Estimated Budget Range (Optional)
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full font-sans text-sm bg-brand-bg-secondary/25 border border-brand-gold/20 py-3.5 px-4 focus:outline-none focus:border-brand-gold transition-colors"
                  >
                    <option value="">Select range...</option>
                    <option value="under-5k">Under R 5,000</option>
                    <option value="5k-10k">R 5,000 - R 10,000</option>
                    <option value="10k-20k">R 10,000 - R 20,000</option>
                    <option value="above-20k">R 20,000 +</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-sans text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-2">
                    Share Your Design Notes & Ideas
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the fabric feel, neckline details, colors, or structural shapes you like..."
                    className="w-full font-sans text-sm bg-brand-bg-secondary/25 border border-brand-gold/20 py-3.5 px-4 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-muted/40 resize-y"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2">
                    <Send size={14} />
                    Submit Consultation Request
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Info & WhatsApp */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* WhatsApp Block */}
            <div className="border border-brand-gold/25 p-8 bg-brand-bg-secondary/35 text-start relative">
              <span className="font-sans text-[9px] font-bold text-brand-gold uppercase tracking-[0.2em] block mb-2">
                Direct Connection
              </span>
              <h4 className="font-serif text-xl text-brand-black mb-3">WhatsApp Consultation</h4>
              <p className="font-sans text-brand-muted text-xs leading-relaxed mb-6">
                Prefer to chat instantly? Send your styling references, date requirements, and questions directly to our WhatsApp line.
              </p>
              <a
                href={brandDetails.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 font-sans uppercase text-[10px] font-bold tracking-[0.2em] py-4 border border-emerald-600 text-brand-bg bg-emerald-600 hover:bg-emerald-700 hover:border-emerald-750 transition-colors"
              >
                <MessageSquare size={16} />
                Message Us Now
              </a>
            </div>

            {/* Placeholder Studio Coordinates */}
            <div className="border border-brand-gold/15 p-8 bg-brand-bg text-start flex flex-col gap-6">
              <h4 className="font-serif text-lg text-brand-black border-b border-brand-gold/15 pb-3">
                Studio Details
              </h4>
              
              <div className="flex gap-4 items-start font-sans text-sm text-brand-muted">
                <Mail size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-brand-black text-xs uppercase tracking-wider mb-1">Email Enquiry</span>
                  <a href={`mailto:${brandDetails.contact.emailPlaceholder}`} className="hover:text-brand-gold transition-colors break-all">
                    {brandDetails.contact.emailPlaceholder}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start font-sans text-sm text-brand-muted">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-brand-black text-xs uppercase tracking-wider mb-1">Studio Location</span>
                  <span>South Africa</span>
                </div>
              </div>

              <div className="flex gap-4 items-start font-sans text-sm text-brand-muted">
                <Clock size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-brand-black text-xs uppercase tracking-wider mb-1">Fittings Schedule</span>
                  <span>Mon – Fri: 09:00 – 17:00</span>
                  <span>Saturday: 09:00 – 13:00</span>
                  <span className="text-[10px] text-brand-gold mt-1">Appointments strictly required</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
