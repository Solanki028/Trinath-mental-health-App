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
    description: "Grounding tools for anxious, overstimulated days.",
    image: photoLibrary.workshopGroup,
    format: "Live online",
    status: "Upcoming",
    seatsLeft: "18 seats left"
  },
  {
    id: "rest-and-burnout",
    title: "Rest Practices for Burnout Recovery",
    date: "May 2, 2026",
    duration: "90 min",
    description: "Practical ways to rebuild energy without pressure.",
    image: photoLibrary.supportGroup,
    format: "Live online",
    status: "Upcoming",
    seatsLeft: "12 seats left"
  },
  {
    id: "relationships-reset",
    title: "Healthy Boundaries in Close Relationships",
    date: "March 20, 2026",
    duration: "60 min",
    description: "Group guidance for healthier conversations and limits.",
    image: photoLibrary.therapyConsultation,
    format: "Replay available",
    status: "Past",
    seatsLeft: "Session completed"
  },
  {
    id: "sleep-reset",
    title: "Sleep Reset for Tired Minds",
    date: "March 8, 2026",
    duration: "60 min",
    description: "Simple sleep support for restless, overloaded minds.",
    image: photoLibrary.journalingCozy,
    format: "Replay available",
    status: "Past",
    seatsLeft: "Session completed"
  }
];
