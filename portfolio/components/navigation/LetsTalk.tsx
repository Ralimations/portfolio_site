"use client";

import { profile } from "@/data/profile";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function LetsTalk({ className = "" }: { className?: string }) {
  return <Popover>
    <PopoverTrigger asChild>
      <button type="button" className={`lets-talk ${className}`}>Let’s talk <span aria-hidden="true">↗</span></button>
    </PopoverTrigger>
    <PopoverContent className="email-popover" align="end" sideOffset={12} collisionPadding={16} aria-label="Email Ral Angelo Lluisma">
      <p className="eyebrow">EMAIL RAL</p>
      <a className="revealed-email" href={`mailto:${profile.email}`}>{profile.email}</a>
      <a className="text-link" href={`mailto:${profile.email}`}>Write an email <span aria-hidden="true">↗</span></a>
    </PopoverContent>
  </Popover>;
}
