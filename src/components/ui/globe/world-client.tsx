"use client";

import dynamic from "next/dynamic";
import { GlobeConfig } from "./globe"; 
import { sampleArcs } from "@/data/globe";

const World = dynamic(() => import("./globe").then((mod) => mod.World), {
  ssr: false,
  loading: () => <div className="w-full flex items-center justify-center">...</div>,
});

type Props = {
  data: typeof sampleArcs;
  globeConfig: GlobeConfig;
};

export function WorldClient({ data, globeConfig }: Props) {
  return <World data={data} globeConfig={globeConfig} />;
}