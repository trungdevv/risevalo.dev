import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-[#121212]">
      <div className="px-4 py-6 lg:py-8 container">
        <div className="flex justify-between  items-end ">
          <Link className="flex justify-between items-center gap-2" href="/">
            <Logo /> VIVIANWARE
          </Link>
          <Link href="/tos">Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-4 items-center md:flex-row md:items-baseline md:justify-between">
          <p className="text-sm text-gray-300">
            © 2024&nbsp;
            <a href="https://risevalo.dev" className="hover:underline">
              Vivianware
            </a>
            . All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400">
            Powered by&nbsp;
            <a
              href="https://sellcustom.dev"
              target="_blank"
              className="underline"
            >
              Vivianware
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
