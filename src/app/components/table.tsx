"use client";

import * as React from "react";

export const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      border: "1px solid #333",
    }}
  >
    {children}
  </table>
);

export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead
    style={{
      backgroundColor: "#333",
      color: "#fff",
    }}
  >
    {children}
  </thead>
);

export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tr style={{ borderBottom: "1px solid #333" }}>{children}</tr>
);

export const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th
    style={{
      padding: "12px",
      border: "1px solid #333",
      textAlign: "left",
    }}
  >
    {children}
  </th>
);

export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tbody>{children}</tbody>
);

export const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <td
    style={{
      padding: "12px",
      border: "1px solid #333",
    }}
  >
    {children}
  </td>
);
