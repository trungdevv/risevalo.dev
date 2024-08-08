import Link from "next/link";
import Logo from "../Logo";

import { ExternalLink, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <header className="fixed container left-0 right-0 top-0 z-50 flex w-full items-center justify-between p-2 sm:p-5 bg-[#121212] sm:bg-transparent">
      <Link className="flex justify-between items-center gap-2" href="/">
        <Logo /> VIVIANWARE
      </Link>
      <div className="flex flex-row items-center gap-2">
        <div className="hidden flex-row items-center gap-2 sm:flex">
          <Link className="px-4 py-2 hover:text-accent" href="/">
            HOME
          </Link>
          <Link className="px-4 py-2 hover:text-accent" href="/#products">
            PRODUCTS
          </Link>
          <Link className="px-4 py-2 hover:text-accent" href="/#reviews">
            REVIEWS
          </Link>
          <Link className="px-4 py-2 hover:text-accent" href="/status">
            FAQ
          </Link>
          <Link className="px-4 py-2 hover:text-accent" href="/">
            TOS
          </Link>
          <Link
            className="px-4 py-2 hover:text-accent flex justify-between items-center gap-2"
            href="/"
          >
            DISCORD <ExternalLink size={16}></ExternalLink>
          </Link>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="sm:hidden hover:text-accent">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="bg-[#121212] w-full max-h-fit border-b-0"
        >
          <div className="flex flex-col gap-2 ">
            <Link className="px-4 py-2 hover:text-accent" href="/">
              HOME
            </Link>
            <Link className="px-4 py-2 hover:text-accent" href="/#products">
              PRODUCTS
            </Link>
            <Link className="px-4 py-2 hover:text-accent" href="/#reviews">
              REVIEWS
            </Link>
            <Link className="px-4 py-2 hover:text-accent" href="/status">
              FAQ
            </Link>
            <Link className="px-4 py-2 hover:text-accent" href="/">
              TOS
            </Link>
            <Link
              className="px-4 py-2 hover:text-accent flex items-center gap-2"
              href="/"
            >
              DISCORD <ExternalLink size={16}></ExternalLink>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
