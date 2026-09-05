"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium tracking-tight text-foreground"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- brand mark */}
          <img
            src={site.avatar}
            alt=""
            className="size-7 rounded-full object-cover ring-1 ring-white/10"
            suppressHydrationWarning
          />
          {site.brandName}
        </Link>
        <nav aria-label="主导航" className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace(/\/$/, ""));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:px-3",
                  isActive && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
