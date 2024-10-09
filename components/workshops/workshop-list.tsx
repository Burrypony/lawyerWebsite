"use client";
import { Button } from "../ui/button";
import React from "react";

type workshop = {
  name: string;
  description: string;
  image: string;
  id: number;
};

export default function WorkshopList({ workshops }: { workshops: workshop[] }) {
  
  return (
      <div className="grid grid-flow-row items-center justify-items-center gap-x-0 gap-y-12 py-12 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:gap-x-28 xl:gap-x-44 2xl:py-16 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
        <div>Практикуми</div>
        {workshops.map((workshop) => {
          return (
            <div className="flex max-w-xs flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-4 md:gap-6">
                <p className="text-xl font-semibold">{workshop.name}</p>
                <p className="text-base text-slate-500">
                  {workshop.description}
                </p>
                <Button
                  size="lg"
                  variant="default"
                  className="p-0"
                >
                  Learn More
                </Button>
              </div>
            </div>
          );
        })}
      </div>
  );
}
