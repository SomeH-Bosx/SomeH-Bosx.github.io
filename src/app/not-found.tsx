import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col justify-center px-6 py-24">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        这个页面不存在，或还在后续阶段开发中。
      </p>
      <Link href="/" className={cn(buttonVariants(), "mt-8 w-fit")}>
        返回首页
      </Link>
    </main>
  );
}
