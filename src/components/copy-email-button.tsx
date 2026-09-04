"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const TOAST_MS = 1500;

const defaultClassName = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-10 px-4"
);

export function CopyEmailButton({
  className,
  children = "Contact",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => setOpen(false), TOAST_MS);
    return () => window.clearTimeout(timer);
  }, [open]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const input = document.createElement("textarea");
      input.value = site.email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={copyEmail}
        className={className ?? defaultClassName}
      >
        {children}
      </button>
      {mounted && open
        ? createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
              <div
                role="status"
                className="rounded-[20px] bg-card px-8 py-6 text-center ring-1 ring-foreground/10"
              >
                <p className="text-base font-medium tracking-tight">
                  {site.email}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">邮箱已复制</p>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
