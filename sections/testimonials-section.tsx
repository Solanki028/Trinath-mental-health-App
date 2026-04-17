"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

import { bg, text } from "@/lib/theme";
import { Reveal } from "@/components/reveal";

const stories = [
  {
    name: "Priya S.",
    age: "28 years old",
    location: "Bangalore, Karnataka",
    privacy: "(Name changed for privacy)",
    // Indian woman, soft hopeful expression
    avatar: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=200&h=200&q=80",
    headline: "I didn't think I was ready. But the first session felt safer than I expected.",
    story: "I'd been sitting on the idea of therapy for almost a year. It felt overwhelming — where do I even start? When I finally booked, the whole process took less than 10 minutes. My therapist called at the exact time. No awkward silences, no judgement. Just a calm voice asking me the right questions.\n\nI'd read testimonials that said 'you'll know when you find the right therapist.' Now I get what they meant."
  },
  {
    name: "Arjun M.",
    age: "34 years old",
    location: "Hyderabad, Telangana",
    privacy: "(Name changed for privacy)",
    // Indian man, composed and thoughtful look
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
    headline: "Burnout felt like the end. Therapy helped me realise it was actually a new beginning.",
    story: "I was functioning — emails, meetings, deliverables. But inside I was completely hollow. I started dreading mornings. My therapist didn't try to fix me or give me a productivity framework. She just helped me slow down enough to actually hear myself.\n\nSix months later I changed my role, my habits, and my relationship with rest. I didn't expect therapy to unlock that kind of clarity."
  },
  {
    name: "Meera K.",
    age: "22 years old",
    location: "Chennai, Tamil Nadu",
    privacy: "(Name changed for privacy)",
    // Young Indian woman, warm and open expression
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&h=200&q=80",
    headline: "I'm queer and this was the first time I felt like I could show up fully.",
    story: "I'd tried therapy before — it always felt fine, but also filtered. I'd pause before bringing up things about my identity, not because the therapist was unkind, but because I didn't know if they'd truly get it.\n\nWhen I found my therapist here, something clicked. Her language, her questions, the way she held space — I felt genuinely seen. Not just cared for, but understood in a way that felt complete."
  },
  {
    name: "Rohan T.",
    age: "41 years old",
    location: "Mumbai, Maharashtra",
    privacy: "(Name changed for privacy)",
    // Indian man, middle-aged, honest and direct expression
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    headline: "As a man, I thought asking for help meant weakness. I was completely wrong.",
    story: "I grew up believing you just push through things. After my divorce, I kept telling myself I was fine. But I wasn't sleeping, wasn't present for my kids, and every small thing felt enormous.\n\nMy first session was terrifying. But my therapist had this way of making silence feel safe. There was no agenda, just space. Three months in, my kids told me I seem lighter. That was worth everything."
  },
  {
    name: "Sana R.",
    age: "26 years old",
    location: "Pune, Maharashtra",
    privacy: "(Name changed for privacy)",
    // Indian woman, thoughtful and calm
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&h=200&q=80",
    headline: "My anxiety had a name, a pattern, and — finally — a way through.",
    story: "I'd been anxious my whole life but I normalised it. It was just 'how I am.' When my therapist gently helped me trace where it came from, something shifted. I wasn't broken. I was responding to things that made sense to respond to.\n\nI still have hard days. But I have tools now. And I have someone who genuinely remembers me session to session. That's rare — and it matters."
  }
];

// Background images cycle for visual variety
const bgImages = [
  "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=60"
];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit:   (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 })
};

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + stories.length) % stories.length);
  }, []);

  const story = stories[index];

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={bg.light}>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Eyebrow ── */}
        <Reveal>
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.26em]" style={text.gold}>Real stories</span>
            <h2 className="mx-auto mt-2 max-w-xl text-2xl font-bold text-foreground sm:text-3xl">
              Heard directly from the people we've had the honour of supporting.
            </h2>
          </div>
        </Reveal>

        {/* ── White card ── */}
        <div className="relative mx-auto max-w-5xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_72px_rgba(0,0,0,0.28)]"
            >
              <div className="grid lg:grid-cols-[260px_1fr]">

                {/* ── Left: person info ── */}
                <div className="flex flex-col items-center gap-4 border-b border-line/40 p-8 text-center lg:border-b-0 lg:border-r lg:items-start lg:text-left">
                  {/* Avatar */}
                  <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-line/20 shadow-soft">
                    <Image
                      src={story.avatar}
                      alt={story.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">{story.name}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{story.age}</p>
                    <p className="text-sm text-muted-foreground">{story.location}</p>
                  </div>
                  <p className="text-xs italic text-muted-foreground/60">{story.privacy}</p>
                </div>

                {/* ── Right: quote + story ── */}
                <div className="p-8 lg:p-10">
                  {/* Open-quote mark */}
                  <span className="text-6xl font-serif leading-none" style={text.gold}>&ldquo;</span>
                  <h3 className="mt-1 text-xl font-bold leading-snug sm:text-2xl" style={text.forest}>
                    {story.headline}
                  </h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                    {story.story.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Navigation arrows ── */}
          <button
            onClick={() => navigate(-1)}
            aria-label="Previous story"
            className="absolute -left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line/50 bg-white text-foreground shadow-soft transition hover:shadow-lift lg:-left-6"
          >
            ‹
          </button>
          <button
            onClick={() => navigate(1)}
            aria-label="Next story"
            className="absolute -right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line/50 bg-white text-foreground shadow-soft transition hover:shadow-lift lg:-right-6"
          >
            ›
          </button>
        </div>

        {/* ── Dot pagination ── */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Go to story ${i + 1}`}
              className="transition-all duration-300"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 24 : 8,
                  height: 8,
                  backgroundColor: i === index ? "#d4943a" : "rgba(255,255,255,0.35)"
                }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
