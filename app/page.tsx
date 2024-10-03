// import Image from "next/image";
import Header from "@/components/header/header";
import ServicesList from "@/components/services/list";

export default function Home() {

  const services = [
    {name: 'service1', description: 'desc1', image: ''},
    {name: 'service2', description: 'desc2', image: ''},
    {name: 'service3', description: 'desc3', image: ''},
    {name: 'service4', description: 'desc4', image: ''},
    {name: 'service5', description: 'desc5', image: ''},
  ]


  return (
    <div className="flex flex-col grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <section className="flex w-full items-start justify-center bg-[url('https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat">
        <div className="m-auto flex max-w-screen-xl grow flex-col items-center justify-start gap-6 py-20 md:gap-12 px-3 sm:px-8 lg:px-16 xl:px-32">
          <div className="flex flex-1 flex-col items-center gap-6 text-center">
            <div className="flex max-w-lg flex-col gap-6">
              <h3 className="text-4xl font-semibold text-slate-950 md:text-6xl">
                Тут буде головна фотографія
              </h3>
              <h4 className="text-lg font-normal leading-7 text-slate-500">
                І може якийсь текст
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section
      className="flex w-full items-start justify-center bg-[url('https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat"
>
      <div
        className="m-auto flex max-w-screen-xl grow flex-col items-center justify-start gap-6 py-20 md:gap-12 px-3 sm:px-8 lg:px-16 xl:px-32"
      >
        <div className="flex flex-1 flex-col items-center gap-6 text-center">

          <div className="flex max-w-lg flex-col gap-6">
            <h3 className="text-4xl font-semibold text-slate-950 md:text-6xl">
            Тут буде текст про себе
            </h3>
            <h4 className="text-lg font-normal leading-7 text-slate-500">
              може ще текст або кнопка запису
            </h4>
          </div>
        </div>
      </div>
    </section>

    <ServicesList services={services}/>
    </div>
  );
}
