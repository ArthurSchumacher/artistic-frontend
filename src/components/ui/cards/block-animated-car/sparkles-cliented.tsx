"use client";

import dynamic from "next/dynamic";

export const SparklesCliented = dynamic(() => import("./sparkles"), {
  ssr: false,
});