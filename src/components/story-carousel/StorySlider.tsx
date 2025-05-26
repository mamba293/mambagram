"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  { name: "user1", img: "https://www.google.com/imgres?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&imgurl=https%3A%2F%2Fcakeshop.com.ua%2Fimages%2FAcpSe7kFpmzMfgJUwhyXbNbja_gwkleunua5ZVM9jTQ%2Fh%3A5000%2FbG9jYWw%2F6Ly8vY2FrZXNob3AuY29tLnVhL3B1YmxpY19odG1sL3N0b3JhZ2UvYXBwL3B1YmxpYy9pbWcvcHJvZHVjdC81NzEzXzEuanBn&imgrefurl=https%3A%2F%2Fcakeshop.com.ua%2Fru%2Fproduct%2Fvafelnaya-kartinka-gubka-bob-2%2F&docid=VGs1mc43f7nRfM&tbnid=fQb6-7VOhlG14M&vet=12ahUKEwjLseuPm8GNAxWu6wIHHT1eAY0QM3oECEQQAA..i&w=595&h=842&hcb=2&ved=2ahUKEwjLseuPm8GNAxWu6wIHHT1eAY0QM3oECEQQAA" },
  { name: "user2", img: "https://placekitten.com/201/200" },
  { name: "user3", img: "https://placekitten.com/202/200" },
  { name: "user4", img: "https://placekitten.com/203/200" },
  { name: "user5", img: "https://placekitten.com/204/200" },
  { name: "user6", img: "https://placekitten.com/205/200" },
  { name: "user7", img: "https://placekitten.com/206/200" },
];

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "9999px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray",borderRadius: "9999px",  }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  swipeToSlide: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function StorySlider() {
  return (
    <div className="w-full max-w-[650px] mx-auto  mt-10">
      <Slider {...settings}>
        {data.map((story) => (
          <button>
            <div
              key={story.name}
              className="flex flex-col items-center justify-center px-1"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-700">
                <img
                  src={story.img}
                  alt={story.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="mt-1 text-[10px] md:text-xs text-center truncate w-[60px]">
                {story.name}
              </span>
            </div>
          </button>
        ))}
      </Slider>
    </div>
  );
}
