// components/ManufacturerCarousel.jsx
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ManufacturerCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 1024px)": { slidesToScroll: 3 },
        "(min-width: 768px)": { slidesToScroll: 2 },
      },
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const cards = [
    {
      category: "Food Manufacturing",
      image: "/icon/food.png", // Replace with your actual image paths
      title: "514% More Qualified Leads in 5 Months",
      description:
        "How we repositioned a niche manufacturer as the go-to expert for food processing machinery and hygiene stations?",
      increase: "130%",
      increaseText: "Increase in Leads",
    },
    {
      category: "Food Manufacturing",
      image: "/icon/food.png",
      title: "514% More Qualified Leads in 5 Months",
      description:
        "How we repositioned a niche manufacturer as the go-to expert for food processing machinery and hygiene stations?",
      increase: "130%",
      increaseText: "Increase in Leads",
    },
    {
      category: "Food Manufacturing",
      image: "/icon/food.png",
      title: "514% More Qualified Leads in 5 Months",
      description:
        "How we repositioned a niche manufacturer as the go-to expert for food processing machinery and hygiene stations?",
      increase: "130%",
      increaseText: "Increase in Leads",
    },
    {
      category: "Food Manufacturing",
      image: "/icon/food.png",
      title: "514% More Qualified Leads in 5 Months",
      description:
        "How we repositioned a niche manufacturer as the go-to expert for food processing machinery and hygiene stations?",
      increase: "130%",
      increaseText: "Increase in Leads",
    },
    {
      category: "Food Manufacturing",
      image: "/icon/food.png", // Replace with your actual image paths
      title: "514% More Qualified Leads in 5 Months",
      description:
        "How we repositioned a niche manufacturer as the go-to expert for food processing machinery and hygiene stations?",
      increase: "130%",
      increaseText: "Increase in Leads",
    },
    {
      category: "Food Manufacturing",
      image: "/icon/food.png",
      title: "514% More Qualified Leads in 5 Months",
      description:
        "How we repositioned a niche manufacturer as the go-to expert for food processing machinery and hygiene stations?",
      increase: "130%",
      increaseText: "Increase in Leads",
    },
    {
      category: "Food Manufacturing",
      image: "/icon/food.png",
      title: "514% More Qualified Leads in 5 Months",
      description:
        "How we repositioned a niche manufacturer as the go-to expert for food processing machinery and hygiene stations?",
      increase: "130%",
      increaseText: "Increase in Leads",
    },
    {
      category: "Food Manufacturing",
      image: "/icon/food.png",
      title: "514% More Qualified Leads in 5 Months",
      description:
        "How we repositioned a niche manufacturer as the go-to expert for food processing machinery and hygiene stations?",
      increase: "130%",
      increaseText: "Increase in Leads",
    },
  ];

  return (
    <div className="max px-[5%] mx-auto py-16">
      <div className="mb-8">
        <h2 className="h2t font-semibold text-[#253844] leading-[135%]">
          Real Results for Manufacturers Like You
        </h2>
        <p className="para text-[#404A50] ">
          Read Our Business Transformation Stories
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]  px-2  md:pr-6"
              >
                <div className="rounded-lg border border-[#E7E9ED] overflow-hidden h-full flex flex-col">
                  <div className="relative  h-48 w-full">
                    <div className="absolute rounded-2xl  inset-0 bg-red-500/90 z-10 flex p-5">
                      <div className="text-center text-white font-medium">
                        <p className="para">{card.category}</p>
                      </div>
                    </div>
                    <Image
                      src={card.image}
                      alt={card.category}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      className="rounded-[10px]"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div className="p-5 bg-white shadow flex-1 flex flex-col">
                    <h3 className="font-semibold leading-[160%] para mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#404A50] text-[16px] mb-6 leading-[160%]">
                      {card.description}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="lg:text-[32px] md:text-[28px] sm:text-[25px] text-[22px] font-semibold text-[#253844]">
                            {card.increase} ↑
                          </p>
                          <p className="text-[16px] text-[#404A50]">
                            {card.increaseText}
                          </p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute top-1/2 -left-3 md:-left-3 -translate-y-1/2 bg-[#253844] rounded-full shadow p-1  z-10"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft size={28} className={"text-gray-300"} />
        </button>

        <button
          className="absolute top-1/2 -right-3 md:right-1 -translate-y-1/2 bg-[#253844] rounded-full shadow p-1 z-10"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight size={28} className={"text-gray-300"} />
        </button>
      </div>
    </div>
  );
};

export default ManufacturerCarousel;
