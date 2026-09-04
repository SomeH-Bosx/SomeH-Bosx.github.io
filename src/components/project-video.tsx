"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export function ProjectVideo({ src }: { src: string }) {
  const [ready, setReady] = useState(false);
  const hint = `放入 public${src} 后即可播放`;

  return (
    <div
      id="demo"
      className="relative aspect-video overflow-hidden rounded-[20px] bg-[#0c0c12] ring-1 ring-foreground/10"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.42_0.14_280/0.35),transparent_55%),radial-gradient(ellipse_at_80%_80%,oklch(0.38_0.1_230/0.22),transparent_50%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.07)_1px,transparent_0)] bg-size-[18px_18px]"
      />
      {!ready ? (
        <p className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
      <video
        controls={ready}
        src={src}
        preload="metadata"
        className={cn(
          "absolute inset-0 z-20 size-full object-cover",
          ready ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onLoadedData={() => setReady(true)}
      >
        你的浏览器不支持视频播放。
      </video>
    </div>
  );
}
