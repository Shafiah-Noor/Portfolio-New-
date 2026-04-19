"use client";

import DotPattern from "@/components/ui/dot-pattern-1";

export function Quote() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto mb-4 max-w-7xl px-6 md:mb-10 xl:px-0">
        <div className="relative flex flex-col items-center border border-primary-500">
          <DotPattern width={5} height={5} className="fill-primary-500/10" />

          {/* Sharp Edge Corner Accents */}
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-primary-600 text-white" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-primary-600 text-white" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-primary-600 text-white" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-primary-600 text-white" />

          <div className="relative z-20 mx-auto max-w-7xl rounded-none py-8 md:py-10 lg:py-12 text-center">
            <p className="text-[10px] md:text-xs lg:text-sm xl:text-base text-primary-600 font-bold uppercase tracking-[0.3em] mb-4">
              I believe
            </p>
            <div className="text-2xl tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl text-black uppercase italic">
              <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-4 lg:gap-x-6">
                <h1 className="font-bold">"Design should be</h1>
                <p className="font-extralight">easy to</p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-4 lg:gap-x-6">
                <p className="font-extralight">understand</p>
                <h1 className="font-bold">because</h1>
                <p className="font-extralight">simple</p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-4 lg:gap-x-6">
                <p className="font-extralight">ideas</p>
                <h1 className="font-bold">are quicker to</h1>
              </div>
              <h1 className="font-bold">grasp..."</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
