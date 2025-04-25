import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Array of actual image paths (custom filenames)
const topLogos = [
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
];

const bottomLogos = [
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
  "/icon/nexgen.png",
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
                  width={180}
                  height={190}
                  className="object-contain w-full h-full"
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
    <div className="py-16 space-y-8   max px-[5%] ">
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
