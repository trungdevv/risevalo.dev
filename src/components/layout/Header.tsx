import Link from "next/link";
import Logo from "../Logo";

import { ExternalLink } from "lucide-react";
const Header = () => {
  return (
    <header className="fixed container left-0 right-0 top-0 z-50 flex w-full items-center justify-between p-5">
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
            DISCORD <ExternalLink></ExternalLink>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
