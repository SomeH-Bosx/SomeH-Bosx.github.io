"use client";

import { useEffect, useState } from "react";

import { ShotLightbox } from "@/components/shot-lightbox";
import { cn } from "@/lib/utils";

export function AvatarPortrait({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "shrink-0 overflow-hidden rounded-full ring-1 ring-white/10 transition-opacity hover:opacity-90",
          className
        )}
        aria-label={`放大查看${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static avatar */}
        <img
          src={src}
          alt={alt}
          className="size-full object-cover"
          suppressHydrationWarning
        />
      </button>
      {open ? (
        <ShotLightbox src={src} alt={alt} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
