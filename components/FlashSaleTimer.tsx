"use client";

import { useState, useEffect } from "react";

interface FlashSaleTimerProps {
  endTime: number;
}

export function FlashSaleTimer({ endTime }: FlashSaleTimerProps) {
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(endTime - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex items-center justify-center">
      <div className="text-2xl font-bold mr-4">Flash Sale Ends In:</div>
      <div className="flex space-x-2">
        <div className="bg-primary text-primary-foreground px-3 py-2 rounded-md">
          <span className="text-2xl font-bold">
            {hours.toString().padStart(2, "0")}
          </span>
          <span className="text-sm ml-1">h</span>
        </div>
        <div className="bg-primary text-primary-foreground px-3 py-2 rounded-md">
          <span className="text-2xl font-bold">
            {minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-sm ml-1">m</span>
        </div>
        <div className="bg-primary text-primary-foreground px-3 py-2 rounded-md">
          <span className="text-2xl font-bold">
            {seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-sm ml-1">s</span>
        </div>
      </div>
    </div>
  );
}
