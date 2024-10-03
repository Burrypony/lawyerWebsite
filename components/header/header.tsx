'use client'

import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex items-center justify-between py-4">
      <div className="flex items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0">
        <Button
          variant="default"
          size="sm"
          aria-label="Menu"
          className="lg:hidden"
        >
          {/* <MenuIcon className="stroke-inherit" /> */}
        </Button>
      </div>
      <div className="hidden gap-10 md:flex flex justif">
        <div className="hidden gap-8 lg:flex">
          <Button variant="link">Послуги</Button>
          <Button variant="link">Блог</Button>
          <Button variant="link">Практикуми</Button>
        </div>
        <div>
          <Image
            src="/app/logoHeader.png"
            width={100}
            height={50}
            alt="Picture of the author"
          />
        </div>
      </div>
      <Button variant="link">Запис на консультацию</Button>
    </div>
  );
}
