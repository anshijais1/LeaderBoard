"use client";

import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      backgroundColor: "#1a1a1a",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      border: "1px solid #333",
    }}
    {...props}
  />
));
Card.displayName = "Card";

// ✅ Add CardContent
export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: "16px" }}>{children}</div>
);

export { Card };
