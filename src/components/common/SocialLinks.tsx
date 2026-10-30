import { cn } from "cn";
import { socials } from "@/data/site";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

/** Accessible GitHub / LinkedIn / Email icon links, shared by Hero and Footer. */
export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noreferrer" : undefined}
              aria-label={social.label}
              title={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
            >
              <Icon size={iconSize} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
