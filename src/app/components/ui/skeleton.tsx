"use client";

import * as React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ width = "100%", height = "20px", style, ...props }) => (
  <div
    style={{
      width,
      height,
      backgroundColor: "#333",
      borderRadius: "4px",
      animation: "pulse 1.5s infinite",
      ...style,
    }}
    {...props}
  />
);
