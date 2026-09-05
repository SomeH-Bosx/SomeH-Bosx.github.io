"use client";

import { useEffect, useRef, useState } from "react";

const MIN_SCALE = 1;
const MAX_SCALE = 6;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ShotLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const overlayRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef({ scale: 1, x: 0, y: 0 });
  const dragging = useRef(false);
  const lastPoint = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    transformRef.current = { scale: 1, x: 0, y: 0 };
  }, [src]);

  useEffect(() => {
    const node = overlayRef.current;
    if (!node) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const current = transformRef.current;
      const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12;
      const nextScale = clamp(current.scale * factor, MIN_SCALE, MAX_SCALE);
      const ratio = nextScale / current.scale;
      const cx = event.clientX - window.innerWidth / 2;
      const cy = event.clientY - window.innerHeight / 2;
      const next = {
        scale: nextScale,
        x: nextScale === MIN_SCALE ? 0 : cx - (cx - current.x) * ratio,
        y: nextScale === MIN_SCALE ? 0 : cy - (cy - current.y) * ratio,
      };
      transformRef.current = next;
      setScale(next.scale);
      setOffset({ x: next.x, y: next.y });
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLImageElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = true;
    lastPoint.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLImageElement>) => {
    if (!dragging.current) return;
    const dx = event.clientX - lastPoint.current.x;
    const dy = event.clientY - lastPoint.current.y;
    lastPoint.current = { x: event.clientX, y: event.clientY };
    const next = {
      ...transformRef.current,
      x: transformRef.current.x + dx,
      y: transformRef.current.y + dy,
    };
    transformRef.current = next;
    setOffset({ x: next.x, y: next.y });
  };

  const onPointerUp = (event: React.PointerEvent<HTMLImageElement>) => {
    dragging.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/80"
      onClick={onClose}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- lightbox preview */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        onClick={(event) => event.stopPropagation()}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
        }}
        className="max-h-[90vh] max-w-[90vw] cursor-grab object-contain select-none active:cursor-grabbing"
      />
    </div>
  );
}
