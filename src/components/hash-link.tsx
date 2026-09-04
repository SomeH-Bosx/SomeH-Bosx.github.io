"use client";

import type { MouseEvent, ReactNode } from "react";

type HashLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function HashLink({ href, className, children }: HashLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || "/";
    const hash = href.slice(hashIndex + 1);
    const target = document.getElementById(hash);
    if (!target) return;

    const current = window.location.pathname.replace(/\/$/, "") || "/";
    const destination = path.replace(/\/$/, "") || "/";
    if (current !== destination) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${hash}`);
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
