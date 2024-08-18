"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex gap-2 flex-wrap flex-col w-min", className)} {...props}>
      <Link
        key="all"
        href="/"
        className={cn(
          buttonVariants({ variant: "outline" }),
          pathname === "/" ? "bg-accent" : "",
          "justify-start text-base p-4 font-thin"
        )}
        replace
      >
        All
      </Link>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "outline" }),
            pathname === item.href ? "" : "",
            "justify-start text-base p-4 font-thin"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
