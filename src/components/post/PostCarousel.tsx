"use client";

import { useState } from "react";
import Image from "next/image";
import { Carousel } from "antd";
import { images } from "./tData";

interface IPostCarouselProps {
  slides: any[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function PostCarousel({ slides }: IPostCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <div className="border border-gray-300  rounded-lg" >
      <Carousel arrows infinite={false} className="rounded-md overflow-hidden">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt=" "
            width={450}
            height={500}
            className="rounded-md object-cover"
            priority
            loading="eager"
          />
        ))}
      </Carousel>
    </div>
  );
}
