import {
  Activity,
  CircuitBoard,
  Droplets,
  Gauge,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

type IconName = "gauge" | "level" | "valve" | "safety" | "control";

const icons = {
  gauge: Gauge,
  level: Droplets,
  valve: SlidersHorizontal,
  safety: ShieldCheck,
  control: CircuitBoard,
} satisfies Record<IconName, typeof Gauge>;

export function IconBadge({ icon, label }: { icon: IconName; label: string }) {
  const Icon = icons[icon] ?? Activity;

  return (
    <span className="icon-badge" aria-label={label}>
      <Icon size={20} strokeWidth={1.8} />
    </span>
  );
}
