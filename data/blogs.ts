import { photoLibrary } from "@/data/photos";

export type BlogSection = {
  title: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  image: string;
  heroTag: string;
  content: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "creating-a-gentler-morning-routine",
    title: "Creating a Gentler Morning Routine When Your Mind Feels Loud",
    description:
      "A slower start can reduce decision fatigue and help your nervous system settle before the day begins.",
    category: "Stress Care",
    readTime: "6 min read",
    publishedAt: "April 12, 2026",
    author: "Dr. Meera Khanna",
    image: photoLibrary.journalingCozy,
    heroTag: "Daily rituals",
    content: [
      {
        title: "Start with less, not more",
        paragraphs: [
          "When mornings feel jagged, adding more productivity rules rarely helps. A gentle routine works because it lowers friction. Instead of trying to optimize every minute, choose one or two actions that create steadiness.",
          "That might be opening a window, drinking water slowly, or sitting without your phone for five minutes. Small rituals signal safety to the body more effectively than ambitious checklists."
        ]
      },
      {
        title: "Protect your first inputs",
        paragraphs: [
          "The first voices you hear in the day shape your emotional tone. If notifications, headlines, or unresolved work messages arrive too early, your system starts in defense mode.",
          "Consider delaying external input until after you have oriented to yourself. Music, silence, journaling, or a short walk can create a more stable baseline."
        ]
      },
      {
        title: "Let consistency outrank intensity",
        paragraphs: [
          "A soothing practice only helps if it is sustainable. The goal is not to perform wellness perfectly. The goal is to create repetition that your mind can trust.",
          "If your routine works three mornings a week and helps you arrive more present, it is already doing meaningful emotional work."
        ]
      }
    ]
  },
  {
    slug: "how-to-set-boundaries-without-guilt",
    title: "How to Set Boundaries Without Carrying Guilt All Day",
    description:
      "Boundaries can feel harsh when you are used to self-abandonment. They do not have to be.",
    category: "Relationships",
    readTime: "7 min read",
    publishedAt: "April 8, 2026",
    author: "Ananya Bose",
    image: photoLibrary.therapyConsultation,
    heroTag: "Relationships",
    content: [
      {
        title: "Boundaries are information",
        paragraphs: [
          "A healthy boundary is not punishment. It is a clear statement of what helps you remain present, respectful, and emotionally available.",
          "When you frame a boundary as information instead of rejection, it often becomes easier to express and easier for others to hear."
        ]
      },
      {
        title: "Expect discomfort, not danger",
        paragraphs: [
          "Guilt often appears when you begin changing long-held relational patterns. That discomfort does not automatically mean you have done something wrong.",
          "It may simply mean your body is adjusting to a different kind of honesty. You can stay kind without becoming endlessly available."
        ]
      },
      {
        title: "Use simple language",
        paragraphs: [
          "Boundary-setting becomes harder when you over-explain. One calm sentence is often enough. Try: I cannot take this on today, or I need more notice before I commit.",
          "Short, direct language creates less confusion and gives you less to mentally replay later."
        ]
      }
    ]
  },
  {
    slug: "small-sleep-habits-that-support-recovery",
    title: "Small Sleep Habits That Support Recovery From Burnout",
    description:
      "Better sleep rarely begins with perfection. It begins with reducing the load your mind carries into bed.",
    category: "Sleep",
    readTime: "5 min read",
    publishedAt: "April 3, 2026",
    author: "Dr. Rhea Menon",
    image: photoLibrary.deskLaptop,
    heroTag: "Sleep health",
    content: [
      {
        title: "Create a landing, not a crash",
        paragraphs: [
          "Burnout often makes bedtime feel like collapse rather than rest. A short transition ritual can help your body understand that work has ended.",
          "Dimmer lights, a warm shower, or writing down tomorrow's tasks can reduce the sense that everything still needs your attention."
        ]
      },
      {
        title: "Work with the nervous system",
        paragraphs: [
          "If your mind stays alert at night, try techniques that lower physiological activation before bed. Long exhales, stretching, or audio meditations are often more helpful than forcing sleep.",
          "The objective is to invite rest, not command it."
        ]
      },
      {
        title: "Notice what steals recovery",
        paragraphs: [
          "Late caffeine, doomscrolling, and unresolved task lists all compete with sleep. Instead of changing everything at once, identify the one habit that most often keeps you activated.",
          "Small environmental changes can restore a surprising amount of emotional energy over time."
        ]
      }
    ]
  },
  {
    slug: "recognising-burnout-before-it-escalates",
    title: "Recognising Burnout Before It Escalates Into Numbness",
    description:
      "Burnout is not only exhaustion. It can also look like disconnection, irritability, and a shrinking sense of self.",
    category: "Work Life",
    readTime: "8 min read",
    publishedAt: "March 28, 2026",
    author: "Kabir Shah",
    image: photoLibrary.planningLaptop,
    heroTag: "Work life",
    content: [
      {
        title: "Watch for emotional flattening",
        paragraphs: [
          "Many people expect burnout to feel dramatic, but early signs are often subtle. You may notice less curiosity, less patience, or a sense that even small tasks feel unreasonably expensive.",
          "This flattening matters because it signals that your system has been overextending for too long."
        ]
      },
      {
        title: "Track what used to restore you",
        paragraphs: [
          "A useful question is not only What feels hard, but also What stopped feeling restorative. If weekends, hobbies, or friendships no longer replenish you, that is important information.",
          "Burnout narrows the range of what feels available. Naming that change early can help you intervene sooner."
        ]
      },
      {
        title: "Recovery needs structure",
        paragraphs: [
          "Hope alone does not reverse burnout. Recovery often requires boundaries, support, clinical guidance, and changes to the pace of your life.",
          "The earlier you respond, the more likely you are to regain steadiness before disconnection becomes your default."
        ]
      }
    ]
  }
];

export const blogCategories = ["All", ...new Set(blogPosts.map((post) => post.category))];
