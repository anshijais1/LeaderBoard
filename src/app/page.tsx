"use client"
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../app/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../app/components/table";

import { Button } from "../app/components/ui/button"
import "../app/globals.css"

const Leaderboard = () => {
  const [players, setPlayers] = useState([
    { rank: 1, name: "John Doe", goals: 5, time: "3:42",erp:"123",mobile:"9123456789" },
    { rank: 2, name: "John Doe", goals: 5, time: "3:42",erp:"123",mobile:"9123456789" },
    { rank: 3, name: "John Doe", goals: 5, time: "3:42",erp:"123",mobile:"9123456789" },
    { rank: 4, name: "John Doe", goals: 5, time: "3:42",erp:"123",mobile:"9123456789" },
    { rank: 5, name: "John Doe", goals: 5, time: "3:42",erp:"123",mobile:"9123456789" },
   
  ]);

  useEffect(() => {
    // Fetch leaderboard data from API when integrated
  }, []);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title1">RoboSoccer - The Ultimate Bot Showdown</h1>

      <Card className="leaderboard-card">
        <CardContent>
          <h2 className="leaderboard-title">Leaderboard</h2>
          <Table className="leaderboard-table">
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Player</TableHead>
                <TableHead>Goals</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>ERP ID</TableHead>
                <TableHead>Mobile Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.rank}>
                  <TableCell>{player.rank}</TableCell>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>{player.goals}</TableCell>
                  <TableCell>{player.time}</TableCell>
                  <TableCell>{player.erp}</TableCell>
                  <TableCell>{player.mobile}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Button className="dashboard-button">Go Back</Button>
    </div>
  );
};

export default Leaderboard;
