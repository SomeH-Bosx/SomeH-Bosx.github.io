"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import { ProjectShot } from "@/components/project-shot";
import { ShotLightbox } from "@/components/shot-lightbox";

const emptySubscribe = () => () => {};

export function ShotGallery({
  shots,
  title,
}: {
  shots: string[];
  title: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    if (index === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") {
        setIndex((current) =>
          current === null ? current : (current + 1) % shots.length
        );
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) =>
          current === null
            ? current
            : (current - 1 + shots.length) % shots.length
        );
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, shots.length]);

  const current = index === null ? null : shots[index];

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map((shot, shotIndex) => (
          <button
            key={shot}
            type="button"
            onClick={() => setIndex(shotIndex)}
            className="cursor-zoom-in text-left"
          >
            <ProjectShot src={shot} alt={`${title} 截图 ${shotIndex + 1}`} />
          </button>
        ))}
      </div>
      {mounted && current
        ? createPortal(
            <ShotLightbox
              src={current}
              alt={`${title} 截图 ${(index ?? 0) + 1}`}
              onClose={() => setIndex(null)}
            />,
            document.body
          )
        : null}
    </>
  );
}
