import * as React from "react";
import { Button } from "@/components/ui/button";
// import { FireIcon, MenuIcon } from '@/icons';
import {
  DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
// import { useTheme } from "next-themes";

export default function Header() {
  // const { setTheme } = useTheme();

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
      <div className="hidden gap-10 md:flex">
        <div className="hidden gap-8 lg:flex">
          <Button variant="link">Feature</Button>
          <Button variant="link">
            About
          </Button>
          <Button variant="link" >
            Pricing
          </Button>
          <Button variant="link">
            Contact
          </Button>
        </div>
        <Button variant="link">Get a Template</Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        {/* <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent> */}
      </DropdownMenu>
    </div>
  );
}
