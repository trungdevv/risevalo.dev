import { Clock, Cog, ShieldCheck } from "lucide-react";

async function ChoseUs({}) {

  return (
    <div className="container py-12 lg:py-24">
      <h2 className="text-2xl font-bold text-center md:text-5xl  font-title uppercase mb-6 md:mb-10">
        <span className="">WHY </span>
        <span className="text-stroke text-stroke-accent text-stroke-fill-transparent">
          CHOOSE
        </span>
        <span className=""> US</span>
      </h2>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="flex items-center flex-col">
          <ShieldCheck fill="#02c2d8" size={"64"} />
          <h3 className="text-xl font-semibold font-title uppercase mb-2">
            Secure &amp; Trusted
          </h3>
          <p className="text-sm text-gray-300 text-center max-w-64">
            Our cheat operates without altering game memory, relying on DMA card
            firmware for detection.
          </p>
        </div>

        <div className="flex items-center flex-col">
          <Cog fill="#02c2d8" size={"64"} />
          <h3 className="text-xl font-semibold font-title uppercase mb-2">
            EASILY &amp; CUSTOMIZABLE
          </h3>
          <p className="text-sm text-gray-300 text-center max-w-64">
            Every user can customize their settings to tailor the experience
            exactly how they like it.
          </p>
        </div>
        <div className="flex items-center flex-col">
          <Clock fill="#02c2d8" size={"64"} />
          <h3 className="text-xl font-semibold font-title uppercase mb-2">
            QUICK &amp; SUPPORT
          </h3>
          <p className="text-sm text-gray-300 text-center max-w-64">
            We&apos;re here to resolve any issues swiftly and keep your systems
            running smoothly at all times.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChoseUs;
