"use client";
import { Button } from "@/components/ui/button";

type service = {
  name: string;
  description: string;
  image: string;
};

export default function ServicesList({services}: {services:service[]}) {
  return (
    <div className="flex flex-col gap-8 py-12 2xl:py-16 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
      <h3 className="text-4xl font-semibold tracking-tight sm:max-md:text-center">
        Послуги
      </h3>
      <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 sm:max-md:justify-items-center md:grid-cols-2 md:justify-items-start md:gap-6 lg:grid-cols-3">
        {services.map((el) => {
          return (
            <div className="flex max-w-lg flex-col items-start gap-6 overflow-hidden rounded-xl border border-slate-200">
              <div className="flex w-full items-center justify-center bg-[url('https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat py-20 2xl:py-28">
                <r className="size-32" />
              </div>
              <div className="flex flex-col items-start gap-4 px-4 py-6 md:gap-6 md:px-8">
                <p className="text-2xl font-semibold tracking-tight">
                  {el.name}
                </p>
                <p className="text-base text-slate-500">
                  {el.description}
                </p>
                <Button
                  size="large"
                  variant="text"
                  className="self-end p-0"
                >
                  Дізнатись більше
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
