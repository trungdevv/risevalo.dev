import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "../Logo";

const Header = () => {
  return (
    <header
      className={cn(
        "h-header bg-secondary sticky left-0 right-0 top-0 z-50 flex w-full items-center justify-between py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex flex-row items-center gap-2">
          <div className="hidden flex-row items-center gap-2 sm:flex">
            <a href="/">
              <button className="inline-flex items-center select-none justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                Home
              </button>
            </a>
            <a href="/#products">
              <button className="inline-flex items-center select-none justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                Products
              </button>
            </a>
            <a href="/#reviews">
              <button className="inline-flex items-center select-none justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                Reviews
              </button>
            </a>
            <a href="/#faq">
              <button className="inline-flex items-center select-none justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                Faq
              </button>
            </a>
            <a href="/status">
              <button className="inline-flex items-center select-none justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                Status
              </button>
            </a>
          </div>
          <a href="https://discord.gg/edgey">
            <button className="inline-flex items-center select-none justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-brand text-brand-foreground shadow-sm hover:bg-brand/80 h-9 px-4 py-2">
              Discord
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
