import {  MessageCircleCodeIcon, Send, User2 } from "lucide-react";

export  const nav = [
    {
      id: "Send Message",
      label: "Send Message",
      href: "/send-message",
      icon: Send,
    },
    {
      id: "Message",
      label: "Messages",
      href: "/messages",
      icon: MessageCircleCodeIcon,
    },
    {
      id: "Settings",
      label: "Profile",
      href: "/profile",
      icon: User2,
    },
  ];

  export const orbitCards = [
  {
    heading: "Connect Without Limits",
    subheading: "Join open channels or create your own. Share ideas with the world or build your own community.",
    button: "Explore Communities",
    features: [
      "Public and private channels",
      "Global audience reach",
      "Easy community management"
    ],
    icon: "📡",
    content : "Connect Without Limits",
  },
  {
    heading: "Real-Time Messaging",
    subheading: "Conversations sync instantly across all devices — desktop, tablet, and mobile.",
    button: "Start Messaging",
    features: [
      "Instant message sync",
      "Cross-device support",
      "Reliable notifications"
    ],
    icon: "⚡",
    content : "Real-Time Messaging",
  },
  {
    heading: "Privacy by Design",
    subheading: "Your conversations are safe with Orbit. End-to-end encryption and transparent data policies.",
    button: "Learn More",
    features: [
      "End-to-end encryption",
      "No third-party tracking",
      "Full control over data"
    ],
     icon: "🔒",
     content : "Privacy by Design",
  }
];

export const orbitIconCards = [
  {
    icon: "📡", // example: satellite for connectivity
    heading: "Connect Without Limits",
    subheading: "Join open channels or create your own. Share ideas with the world or build your own community."
  },
  {
     // example: lightning for speed
    heading: "",
    subheading: "Conversations sync instantly across devices — desktop, tablet, and mobile."
  },
  {
     // example: lock for privacy
    heading: "",
    subheading: "Your conversations are safe with Orbit. End-to-end encryption and transparent data policies."
  }
];



export const messages = [
  {
    id: 1,
    content: "Reviewed the project. Everything looks good, but let's revise the introduction.",
  },
  {
    id: 2,
    content: "Reminder: Team meeting tomorrow at 10 AM. Prepare your updates.",
  },
  {
    id: 3,
    content: "Weekend plan: Hiking Saturday morning, then lunch at the new cafe.",
  },
];



