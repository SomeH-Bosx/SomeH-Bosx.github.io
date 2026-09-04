"use client";

import { useState } from "react";

export function ProjectShot({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex min-h-48 items-center justify-center rounded-[20px] bg-[#0c0c12] text-sm text-muted-foreground ring-1 ring-foreground/10">
        截图未找到
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[20px] bg-[#0c0c12] ring-1 ring-foreground/10">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="h-auto w-full object-contain"
        suppressHydrationWarning
      />
    </div>
  );
}
