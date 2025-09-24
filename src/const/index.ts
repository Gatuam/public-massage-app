import { BookOpen, MessageCircle, Settings, User } from "lucide-react";

export  const nav = [
    {
      id: "Profile",
      label: "Profile",
      href: "/",
      icon: User,
    },
    {
      id: "Message",
      label: "Message",
      href: "/products",
      icon: MessageCircle,
    },
    {
      id: "Settings",
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
    {
      id: "Blog",
      label: "Blog",
      href: "/blog",
      icon: BookOpen,
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
    ]
  },
  {
    heading: "Real-Time Messaging",
    subheading: "Conversations sync instantly across devices — desktop, tablet, and mobile.",
    button: "Start Messaging",
    features: [
      "Instant message sync",
      "Cross-device support",
      "Reliable notifications"
    ]
  },
  {
    heading: "Privacy by Design",
    subheading: "Your conversations are safe with Orbit. End-to-end encryption and transparent data policies.",
    button: "Learn More",
    features: [
      "End-to-end encryption",
      "No third-party tracking",
      "Full control over data"
    ]
  }
];
