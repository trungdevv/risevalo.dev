import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
type Props = {};

function Overview({}: Props) {
  return (
    <div className="relative overflow-hidden border-primary border-b-4">
      <div className="absolute z-99 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#852180]" />
      <Image
        alt="fornite background"
        width="1920"
        height="1080"
        decoding="async"
        data-nimg="1"
        className="absolute z-0 opacity-10 min-w-[1920px] w-full "
        src="/images/bg-header.webp"
      />
      <div className="overflow-clip max-w-[1400px] mx-auto px-4">
        <Header />
        <div className="flex justify-between items-center pb-20">
          <div className="relative w-fit space-y-6 py-[140px] text-center sm:text-start">
            <div className="mx-auto w-fit select-none rounded-md bg-gradient-to-r from-primary/50 to-transparent p-[1px] text-xs drop-shadow-lg sm:mx-0">
              <div className="rounded-md bg-brandBackground px-3 py-1.5 font-semibold">
                Vivian Shop - Shop #1 in the Spoofer Market
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#979696] to-white bg-clip-text text-5xl font-semibold leading-[1.1] text-transparent lg:text-7xl">
              PROTECT YOURSELF
            </div>
            <div className="red-text-shadow text-5xl font-bold leading-[1.1] text-primary lg:text-7xl">
              MASTER YOUR SKILL
            </div>
            <div className="text-sm text-brandGray sm:text-base">
              We provide the opportunity to purchase only the best products. By
              choosing us, you choose quality!
            </div>
            <div className="flex flex-row items-center justify-center gap-6 sm:justify-start">
              <a href="/#products">
                <Button className="gap-2">
                  <ShoppingBag />
                  <span>Products</span>
                </Button>
              </a>
              <a target="_blank" href="/status">
                <Button variant={"outline"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-bar-chart2 "
                  >
                    <line x1="18" x2="18" y1="20" y2="10"></line>
                    <line x1="12" x2="12" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="14"></line>
                  </svg>
                  <span>Status</span>
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex relative h-[400px] w-[400px] flex-col items-center rounded-xl border border-[#1b1e20] bg-brandBackground p-4">
            <Image
              alt="logo"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="flex-1 w-[100px] object-contain"
              src="/images/banner.webp"
            />
            <Link className="w-full" href="/status">
              <div className="flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-md bg-brandGray/15 py-3 duration-200 hover:bg-brandGray/30">
                <span className="text-sm">View Status</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-bar-chart2 "
                >
                  <line x1="18" x2="18" y1="20" y2="10"></line>
                  <line x1="12" x2="12" y1="20" y2="4"></line>
                  <line x1="6" x2="6" y1="20" y2="14"></line>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
