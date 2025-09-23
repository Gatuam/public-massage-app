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