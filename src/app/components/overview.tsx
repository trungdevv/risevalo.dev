import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import BorderRotation from "@/components/BorderRotation";
type Props = {};

function Overview({}: Props) {
  return (
    <div className="bg-[url('/hero.jpg')] bg-cover  bg-no-repeat relative pt-20">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container px-4 py-40">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center relative z-[1] text-[#141414]">
          <div className="flex max-w-3xl flex-col items-start">
            <h1 className="mb-4 text-4xl md:text-6xl md:!leading-[4.25rem] text-white font-title uppercase">
              Win Big With
              <br />
              <span className="text-accent">Rise </span>
              <span className="text-stroke text-stroke-accent text-stroke-fill-transparent">
                Products
              </span>
            </h1>
            <h2 className="mb-6 text-lg md:text-xl font-medium text-white">
              We provide the best Valorant cheats on the market.
            </h2>

            <Button
              className="bg-gradient-to-b from-cyan-500 to-blue-500"
              asChild
            >
              <Link href="/">
                View Products <ChevronDown />
              </Link>
            </Button>
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
