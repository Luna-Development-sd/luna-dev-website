"use client";

import dynamic from "next/dynamic";

const ADUAnimation = dynamic(() => import("@/components/ADUAnimation"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-50">
      <div className="text-slate-400">Loading...</div>
    </div>
  ),
});

export default ADUAnimation;
