"use client";

import Lottie from "lottie-react";
import Animation from "@/app/lottie.json";
export default function Anim() {
  "use client";
  return <Lottie animationData={Animation} className="md:w-1/4 md:h-1/4" />;
}
