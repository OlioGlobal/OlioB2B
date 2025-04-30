import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Array of actual image paths (custom filenames)
const topLogos = [
  "/icon/p1.png",
  "/icon/p2.png",
  "/icon/p3.png",
  "/icon/p4.png",
  "/icon/p5.png",
  "/icon/p6.png",
  "/icon/p7.png",
  "/icon/p8.png",
  "/icon/p9.png",
  "/icon/p10.png",
  "/icon/p11.png",
  "/icon/p12.png",
  "/icon/p13.png",
  "/icon/p14.png",
  "/icon/p15.png",
  "/icon/p16.png",
  "/icon/p17.png",
  "/icon/p18.png",
  "/icon/p19.png",
  "/icon/p20.png",
  "/icon/p21.png",
];

const bottomLogos = [
  "/icon/p21.png",
  "/icon/p20.png",
  "/icon/p19.png",
  "/icon/p18.png",
  "/icon/p17.png",
  "/icon/p16.png",
  "/icon/p15.png",
  "/icon/p14.png",
  "/icon/p13.png",
  "/icon/p12.png",
  "/icon/p11.png",
  "/icon/p10.png",
  "/icon/p9.png",
  "/icon/p8.png",
  "/icon/p7.png",
  "/icon/p6.png",
  "/icon/p5.png",
  "/icon/p4.png",
  "/icon/p3.png",
  "/icon/p2.png",
  "/icon/p1.png",
];

const LogoCarouselRow1 = ({ logos, reverse = false }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      direction: reverse ? "rtl" : "ltr",
      dragFree: true,
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div className="overflow-hidden" dir={reverse ? "rtl" : "ltr"}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {logos.map((src, index) => (
            <div
              key={index}
              className="embla__slide shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2"
            >
              <div className="  p-2  flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  width={250}
                  height={250}
                  className="object-contain h-[50px] md:h-[100px]  w-full "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Our_clients() {
  return (
    <div className="rm md:space-y-8   max px-[5%] ">
      <div className="text-center mb-8">
        <h2 className="font-bold mb-2 text-[#163123] h2t text-center  leading-[135%] ">
          Our Clients
        </h2>
        <p className="para font-normal leading-[160%] text-[#404A50]">
          We attract them systematically while you focus on delivery.
        </p>
      </div>
      <LogoCarouselRow1 logos={topLogos} reverse={true} />
      <LogoCarouselRow1 logos={bottomLogos} reverse={false} />
    </div>
  );
}
