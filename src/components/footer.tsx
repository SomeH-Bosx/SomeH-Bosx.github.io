import Link from "next/link";

import { CopyEmailButton } from "@/components/copy-email-button";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-4">
          <Link href={site.github} className="hover:text-foreground">
            GitHub
          </Link>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Resume
          </a>
          <CopyEmailButton className="cursor-pointer appearance-none bg-transparent p-0 text-inherit hover:text-foreground">
            Contact
          </CopyEmailButton>
        </div>
      </div>
    </footer>
  );
}
