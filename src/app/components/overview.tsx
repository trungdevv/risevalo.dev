import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Box, ChevronDown } from "lucide-react";
import Image from "next/image";
import BorderRotation from "@/components/BorderRotation";
import { Typeing } from "@/components/ui/Typeing";
import DiscordIcon from "@/components/icon/Discord";
type Props = {};

function Overview({}: Props) {
  return (
    <div className="bg-[url('/hero.jpg')] bg-cover  bg-no-repeat relative pt-20">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container px-4 py-40">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center relative z-[1] text-[#141414]">
          <div className="flex max-w-3xl flex-col items-start">
            <h1 className="mb-4 text-4xl md:text-6xl md:!leading-[4.25rem] text-white font-title uppercase">
              Game-Changing
              <br />
              <span className="text-accent flex">
                <Typeing /> &nbsp;
              </span>
              <span className="text-stroke text-stroke-accent text-stroke-fill-transparent">
                Cheats
              </span>
            </h1>
            <p className="mb-6 text-lg md:text-xl text-white">
              Selling high quality cheats since 2023
            </p>
            <div className="flex gap-4">
              <Button variant={"destructive"} className="gap-2 bg-accent" asChild>
                <Link href="#product">
                  <Box size={16} />
                  Browse Products!
                </Link>
              </Button>
              <Button variant={"destructive"} className="gap-2 bg-secondary-foreground" asChild>
                <Link href="/"><DiscordIcon/>Join Discord!</Link>
              </Button>
            </div>
          </div>
          <BorderRotation>
            <Image
              src="/spoofer.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </BorderRotation>
        </div>
      </div>
    </div>
  );
}

export default Overview;
