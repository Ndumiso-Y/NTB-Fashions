export interface ProcessStep {
  number: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  timelineEstimate: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Personal Consultation",
    shortDescription: "Start with a direct conversation to align on your story, event theme, and goals.",
    detailedDescription: "Every bespoke garment begins with an in-person or virtual discussion. We sit down to understand the meaning behind your occasion, review design references, outline your styling ideas, and align on timeline and budget expectations.",
    timelineEstimate: "Initial Session (1 hour)",
  },
  {
    number: 2,
    title: "Design Direction",
    shortDescription: "We draft custom design sketches, curating visual references that match your vision.",
    detailedDescription: "Based on your consult, we propose custom design concepts. This includes basic sketches, detailing necklines, silhouettes, back styles, and embellishments, to ensure your dress, suit, or traditional set is uniquely tailored to you.",
    timelineEstimate: "3 - 5 Days after Consult",
  },
  {
    number: 3,
    title: "Fabric & Material Selection",
    shortDescription: "Selecting premium materials, linings, beads, and coordinating heritage patterns.",
    detailedDescription: "We assist in sourcing high-end fabrics, including fine wools for suits, premium silks, structured bridal fabrics, or authentic African print textiles. We verify weights, colors, and textures before tailoring.",
    timelineEstimate: "1 - 2 Weeks",
  },
  {
    number: 4,
    title: "Measurements & Creation",
    shortDescription: "Taking accurate measurements, mapping patterns, and entering the sewing studio.",
    detailedDescription: "We map your body with high precision. Next, the master pattern is cut, and our custom tailoring team begins assembling the structure. We focus on premium seam-finishes, structural support, and inner comfort.",
    timelineEstimate: "2 - 4 Weeks (Varies by complexity)",
  },
  {
    number: 5,
    title: "Fitting & Refinement",
    shortDescription: "Trying on the garment, pin adjustments, hem corrections, and final reveal.",
    detailedDescription: "You visit our studio for 1 to 2 fitting adjustments. We pin, drape, and stitch corrections to perfect the drape. The final session is a celebration — the reveal of your custom masterpiece, steamed and ready for your occasion.",
    timelineEstimate: "1 - 2 Weeks before Event",
  },
];
