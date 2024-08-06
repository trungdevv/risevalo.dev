import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
type Props = {};

function Overview({}: Props) {
  return (
    <div className="bg-[url('/hero.jpg')] bg-cover relative">
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
            {/* <div>
              <a
                href="#products"
                className="flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-b from-accent-600 to-accent-800 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-md transition-all duration-300 ease-in-out lg:text-lg"
              >
                View Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </a>
            </div> */}
            <Button className="bg-gradient-to-b from-cyan-500 to-blue-500" asChild>
              <Link href="/">
                View Products <ChevronDown />
              </Link>
            </Button>
          </div>
          <div className="flex-1 max-w-lg">
            {/* <div className="flex justify-center animated-box">
                        <img src="/assets/img/spoofer.jpg" className="w-full">
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
