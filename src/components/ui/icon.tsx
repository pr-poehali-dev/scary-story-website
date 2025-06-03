import React from "react";
import {
  Home,
  Menu,
  User,
  Search,
  Settings,
  Heart,
  Star,
  Eye,
  Clock,
  Plus,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Skull,
  Ghost,
  BookOpen,
  PenTool,
  BookOpenCheck,
  CircleAlert,
} from "lucide-react";

const iconMap = {
  Home,
  Menu,
  User,
  Search,
  Settings,
  Heart,
  Star,
  Eye,
  Clock,
  Plus,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Skull,
  Ghost,
  BookOpen,
  PenTool,
  BookOpenCheck,
  CircleAlert,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  fallback?: keyof typeof iconMap;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback "${fallback}"`);
    return <iconMap.CircleAlert size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
