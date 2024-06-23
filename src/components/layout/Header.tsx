import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "../Logo";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header
      className={cn(
        "flex w-full items-center justify-between h-[80px] relative"
      )}
    >
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex flex-row items-center gap-2">
        <div className="hidden flex-row items-center gap-2 sm:flex">
          <Link className="px-4 py-2" href="/">
            Home
          </Link>
          <Link className="px-4 py-2" href="/#products">
            Products
          </Link>
          <Link className="px-4 py-2" href="/#reviews">
            Reviews
          </Link>
          <Link className="px-4 py-2" href="/#faq">
            Faq
          </Link>
          <Link className="px-4 py-2" href="/status">
            Status
          </Link>
        </div>
        <Link href="https://discord.gg/edgey">
          <Button className="">Discord</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
