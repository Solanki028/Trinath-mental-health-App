import { photoLibrary } from "@/data/photos";

export type Therapist = {
  id: string;
  name: string;
  specialty: string;
  focus: string[];
  experience: string;
  availability: string;
  image: string;
};

export const therapists: Therapist[] = [
  {
    id: "meera-khanna",
    name: "Dr. Meera Khanna",
    specialty: "Therapist",
    focus: ["Anxiety", "Life transitions", "Self-worth"],
    experience: "9 years experience",
    availability: "Next available today",
    image: photoLibrary.portraitWomanOne
  },
  {
    id: "rhea-menon",
    name: "Dr. Rhea Menon",
    specialty: "Psychiatrist",
    focus: ["Sleep care", "Mood support", "Medication review"],
    experience: "11 years experience",
    availability: "Next available tomorrow",
    image: photoLibrary.portraitWomanTwo
  },
  {
    id: "ananya-bose",
    name: "Ananya Bose",
    specialty: "Therapist",
    focus: ["Relationships", "Burnout", "Boundaries"],
    experience: "7 years experience",
    availability: "Next available in 2 days",
    image: photoLibrary.portraitWomanThree
  },
  {
    id: "kabir-shah",
    name: "Kabir Shah",
    specialty: "Wellness coach",
    focus: ["Habits", "Stress regulation", "Work-life balance"],
    experience: "6 years experience",
    availability: "Next available Thursday",
    image: photoLibrary.portraitManOne
  }
];
