"use client";

import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, style, ...props }, ref) => (
    <button
      ref={ref}
      style={{
        padding: "10px 16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "background 0.3s ease",
        ...style,
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";
