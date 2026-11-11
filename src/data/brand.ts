const WHATSAPP_NUMBER = "27723400477";

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const brandDetails = {
  name: "Ntombis Fashion",
  shortName: "Ntombis",
  monogram: "NTB",
  domain: "www.ntombis.com",
  siteUrl: "https://www.ntombis.com",
  tagline: "Bespoke African Fashion for Unforgettable Moments",
  positioning: "African-Inspired Bespoke Event Wear",
  subtext: "Ntombis Fashion creates custom wedding attire, matric dance dresses, traditional wear, suits, and event garments designed around your story, body, culture, and occasion.",
  brandStatement: "Ntombis Fashion creates bespoke garments for people who want to look distinct, feel confident, and carry their identity into every occasion.",
  differentiator: "We do not design for the rack. We design for the person, the moment, and the meaning behind it.",

  contact: {
    phoneDisplay: "072 340 0477",
    phoneIntl: "+27723400477",
    whatsappNumber: WHATSAPP_NUMBER,
    email: "info@ntombis.com",
    street: "121 President Mbeki Drive",
    city: "Rustenburg",
    province: "North West",
    postcode: "0299",
    location: "121 President Mbeki Drive, Rustenburg, North West",
    hours: [
      { days: "Monday – Friday", time: "09:00 – 17:00" },
      { days: "Saturday", time: "09:00 – 14:00" },
      { days: "Sunday", time: "Closed" },
    ],
    whatsappLink: whatsappUrl("Hi Ntombis Fashion, I'd like to enquire about a custom garment."),
  },

  socials: {
    facebook: "https://www.facebook.com/ntombisfashion",
  },
};
