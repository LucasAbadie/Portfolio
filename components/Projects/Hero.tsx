"use client";

import { SquareArrowOutUpRightIcon, GithubIcon } from "lucide-react";

interface HeroProjectProps {
  Name: string;
  Description: string;
  Categories: string[];
  Pitch: string;
  Banner: string;
  ProjectUrl?: string;
  GithubUrl?: string;
}

export default function Hero({
  Name,
  Description,
  Categories = [],
  Pitch,
  Banner,
  ProjectUrl,
  GithubUrl,
}: HeroProjectProps) {
  return (
    <div className="relative w-full">
      <header className="grid !min-h-[49rem] bg-[radial-gradient(circle_at_center,_#222_0%,_#000_100%)] mb-24 lg:mb-0">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <h1 className="text-white text-8xl font-bold mb-4 leading-tight tracking-tighter">
              {Name}
            </h1>
            <h3 className="mb-7 text-white font-normal text-2xl md:pr-16 xl:pr-28 max-w-2xl">
              {Description}
            </h3>
            <h6 className="mb-4 text-white">Categories</h6>
            <div className="flex flex-wrap gap-2 md:mb-2 md:w-10/12">
              {Categories.map((category, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {ProjectUrl && (
                <a
                  href={ProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-semibold border border-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  <SquareArrowOutUpRightIcon
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  />
                  Voir le projet
                </a>
              )}
              {GithubUrl && (
                <a
                  href={GithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-8 py-3 text-sm uppercase tracking-widest text-neutral-400 hover:border-neutral-600 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true" />
                  Voir sur GitHub
                </a>
              )}
            </div>
          </div>
          {/* <Image
                        width={470}
                        height={576}
                        src={Banner || "/assets/projects/RecovR/RecovR.webp"}
                        alt={Name + " Banner"}
                        className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
                    /> */}
        </div>
      </header>
      {/* Increase horizontal line contrast from 20% to 30% */}
      <div className="h-[2px] w-full bg-white/30"></div>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl border-2 border-white/30 bg-neutral-800 p-5 md:p-14 shadow-md">
        <div>
          <h3 className="mb-5 text-white text-lg md:text-xl lg:text-2xl font-bold">Présentation</h3>
          <p className="font-normal text-white/50 whitespace-pre-line">{Pitch}</p>
        </div>
      </div>
    </div>
  );
}
