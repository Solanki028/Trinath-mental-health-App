import { photoLibrary } from "@/data/photos";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Journal" },
  { href: "/workshops", label: "Workshops" },
  { href: "/book-session", label: "Book Session" }
];

export const trustStats = [
  { value: "18k+", label: "guided care journeys" },
  { value: "92%", label: "report feeling more supported" },
  { value: "4.9/5", label: "average therapy satisfaction" }
];

export const services = [
  {
    title: "Therapy",
    description: "One-to-one sessions for anxiety, burnout, grief, and relationships.",
    image: photoLibrary.therapyConsultation
  },
  {
    title: "Psychiatry",
    description: "Medication support with thoughtful review and calm follow-up.",
    image: photoLibrary.therapyCouch
  },
  {
    title: "Self-care",
    description: "Guided routines, breathing, journaling, and short daily resets.",
    image: photoLibrary.journalingCozy
  },
  {
    title: "Workshops",
    description: "Small-group sessions that feel warm, focused, and supportive.",
    image: photoLibrary.workshopGroup
  }
];

export const careSteps = [
  {
    step: "01",
    title: "Choose care",
    description: "Therapy, psychiatry, workshops, or self-care."
  },
  {
    step: "02",
    title: "Pick an expert",
    description: "See profiles, focus areas, and next availability."
  },
  {
    step: "03",
    title: "Select time",
    description: "Simple date and time selection with no clutter."
  },
  {
    step: "04",
    title: "Start gently",
    description: "Move into care with a clear, calm next step."
  }
];

export const testimonials = [
  {
    quote: "Clean, warm, and easy to trust from the first screen.",
    name: "Maya R.",
    role: "Product designer"
  },
  {
    quote: "The workshop page feels softer and more human than most health platforms.",
    name: "Arjun T.",
    role: "Founder"
  },
  {
    quote: "I could move from reading to booking without feeling lost.",
    name: "Naina S.",
    role: "Marketing lead"
  }
];

export const sessionTypes = [
  {
    id: "therapy",
    label: "Therapy",
    duration: "50 min",
    description: "For emotional support, patterns, stress, and deeper self-understanding."
  },
  {
    id: "psychiatry",
    label: "Psychiatry",
    duration: "45 min",
    description: "For medication review, diagnosis support, and integrated treatment planning."
  },
  {
    id: "wellness",
    label: "Self-care consult",
    duration: "30 min",
    description: "For routines, coping tools, and a lighter-touch check-in with an expert."
  }
];

export const supportPillars = [
  "Trusted experts",
  "Gentle booking flow",
  "Private online care"
];
