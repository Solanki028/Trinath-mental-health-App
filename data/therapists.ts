export type Therapist = {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  focus: string[];
  experience: string;
  availability: string;
  image: string;
};

export const therapists: Therapist[] = [
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialty: "Clinical Psychologist",
    qualification: "M.Phil, PhD – NIMHANS",
    focus: ["Anxiety", "Depression", "CBT"],
    experience: "12 years experience",
    availability: "Available today",
    // Indian woman doctor in professional attire, warm expression
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&h=800&q=85"
  },
  {
    id: "dr-arjun-nair",
    name: "Dr. Arjun Nair",
    specialty: "Psychiatrist",
    qualification: "MBBS, MD Psychiatry – AIIMS",
    focus: ["Mood disorders", "Medication", "OCD"],
    experience: "14 years experience",
    availability: "Available tomorrow",
    // South Asian male professional doctor
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&h=800&q=85"
  },
  {
    id: "dr-kavitha-rao",
    name: "Dr. Kavitha Rao",
    specialty: "Therapist",
    qualification: "MA Psychology – Bangalore University",
    focus: ["Relationships", "Grief", "Trauma"],
    experience: "9 years experience",
    availability: "Available in 2 days",
    // Indian professional woman, warm and approachable
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&h=800&q=85"
  },
  {
    id: "rahul-mehta",
    name: "Rahul Mehta",
    specialty: "Wellness Coach",
    qualification: "MSc Counselling – Tata Institute",
    focus: ["Burnout", "Stress", "Work-life balance"],
    experience: "8 years experience",
    availability: "Available Thursday",
    // South Asian male, professional and confident
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&h=800&q=85"
  }
];
