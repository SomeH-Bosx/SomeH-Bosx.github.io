"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

import { site } from "@/data/site";

const TOAST_MS = 1500;
const emptySubscribe = () => () => {};

export function CopyEmailButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

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
      <button type="button" onClick={copyEmail} className={className}>
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
