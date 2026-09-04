"use client";

import { useState } from "react";

type ProjectCoverProps = {
  src: string;
  alt: string;
};

export function ProjectCover({ src, alt }: ProjectCoverProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0c12]">
      {failed ? (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.42_0.14_280/0.35),transparent_55%),radial-gradient(ellipse_at_80%_80%,oklch(0.38_0.1_230/0.22),transparent_50%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.07)_1px,transparent_0)] bg-size-[18px_18px]"
          />
        </>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- static export
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 size-full object-cover"
          suppressHydrationWarning
        />
      )}
    </div>
  );
}
