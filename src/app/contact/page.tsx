import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { CopyEmailButton } from "@/components/copy-email-button";
import { PageHeader } from "@/components/page-header";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: site.contactLine,
};

function ContactCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Card className="h-full rounded-[20px] bg-card/80 transition-colors hover:ring-brand/40">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-base font-normal">{value}</CardTitle>
      </CardHeader>
    </Card>
  );
}

function ExternalCard({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {children}
    </Link>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader title="Contact" kicker={site.contactLine} />

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ExternalCard href={site.github}>
          <ContactCard
            label="GitHub"
            value={site.github.replace("https://", "")}
          />
        </ExternalCard>

        <ExternalCard href={site.portfolioUrl}>
          <ContactCard
            label="Portfolio"
            value={site.portfolioUrl.replace("https://", "")}
          />
        </ExternalCard>

        <CopyEmailButton className="block w-full cursor-pointer appearance-none bg-transparent p-0 text-left">
          <ContactCard label="Email" value={site.email} />
        </CopyEmailButton>

        <Card className="rounded-[20px] bg-card/80 sm:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardDescription>Recruiting status</CardDescription>
            <CardTitle className="flex items-center gap-2 text-base font-normal">
              <Badge
                variant="outline"
                className="h-7 gap-1.5 border-white/10 bg-white/5 px-3 text-xs text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                {site.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {site.location}
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </PageShell>
  );
}
