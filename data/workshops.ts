import { photoLibrary } from "@/data/photos";

export type Workshop = {
  id: string;
  title: string;
  date: string;
  duration: string;
  description: string;
  image: string;
  format: string;
  status: "Upcoming" | "Past";
  seatsLeft: string;
};

export const workshops: Workshop[] = [
  {
    id: "grounded-anxiety",
    title: "Grounded Through Anxiety",
    date: "April 24, 2026",
    duration: "75 min",
    description: "Learn practical grounding tools you can use in the middle of an anxious, overstimulated day — not just when you have time to sit down and breathe.",
    image: photoLibrary.workshopAnxiety,
    format: "Live online",
    status: "Upcoming",
    seatsLeft: "18 seats left"
  },
  {
    id: "rest-and-burnout",
    title: "Rest Practices for Burnout Recovery",
    date: "May 2, 2026",
    duration: "90 min",
    description: "Walk away with 3 rest strategies you can actually use — without guilt, without pressure, and without needing a holiday to start recovering.",
    image: photoLibrary.workshopRest,
    format: "Live online",
    status: "Upcoming",
    seatsLeft: "12 seats left"
  },
  {
    id: "relationships-reset",
    title: "Healthy Boundaries in Close Relationships",
    date: "March 20, 2026",
    duration: "60 min",
    description: "Understand why saying no feels so hard, and leave with simple, tested phrases that set limits without damaging the relationship.",
    image: photoLibrary.workshopRelationships,
    format: "Replay available",
    status: "Past",
    seatsLeft: "Session completed"
  },
  {
    id: "sleep-reset",
    title: "Sleep Reset for Tired Minds",
    date: "March 8, 2026",
    duration: "60 min",
    description: "If your mind won't quiet down at night, this session explains why — and gives you 4 evening practices that actually help restless, overloaded minds rest.",
    image: photoLibrary.workshopSleep,
    format: "Replay available",
    status: "Past",
    seatsLeft: "Session completed"
  }
];
