import type { DepartmentIcon as IconName } from "@/data/site";
import { Book, Dumbbell, Phone } from "./Icons";

const icons = { book: Book, phone: Phone, dumbbell: Dumbbell } as const;

export default function DepartmentIcon({
  icon,
  size = 20,
  className = "",
}: {
  icon: IconName;
  size?: number;
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon size={size} className={className} />;
}
