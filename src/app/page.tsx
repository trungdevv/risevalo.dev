import Image from "next/image";

export default function Home() {
  return (
    <main> 
      <div className="w-fit space-y-6 py-[140px] text-center sm:text-start">
        <div>
          <div className="mx-auto w-fit select-none rounded-md bg-gradient-to-r from-brand/50 to-transparent p-[1px] text-xs drop-shadow-lg sm:mx-0">
            <div className="rounded-md bg-brandBackground px-3 py-1.5 font-semibold">
              Edgey Shop - Shop #1 in the Spoofer Market
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#979696] to-white bg-clip-text text-5xl font-semibold leading-[1.1] text-transparent lg:text-7xl">
            PROTECT YOURSELF
          </div>
        </div>
        <div>
          <div className="red-text-shadow text-5xl font-bold leading-[1.1] text-brand lg:text-7xl">
            MASTER YOUR SKILL
          </div>
        </div>
        <div>
          <div className="text-sm text-brandGray sm:text-base">
            We provide the opportunity to purchase only the best products. By
            choosing us, you choose quality!
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 sm:justify-start">
          <div>
            <a href="/#products">
              <button className="select-none justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-brand text-brand-foreground shadow-sm hover:bg-brand/80 h-9 px-4 py-2 flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-shopping-bag "
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>Products</span>
              </button>
            </a>
          </div>
          <div>
            <a target="_blank" href="/status">
              <button className="select-none justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex flex-row items-center gap-2">
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
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
