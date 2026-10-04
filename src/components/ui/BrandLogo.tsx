"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function BrandLogo({
  className = "",
  height = 36,
  width = 110,
}: BrandLogoProps) {
  return (
    <div
      style={{ height }}
      className={`flex items-center justify-start ${className}`}
    >
      <Image
        src="/brand-logo-dark.png"
        alt="MERO"
        width={width}
        height={height}
        priority
        style={{ width: "auto", height }}
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
