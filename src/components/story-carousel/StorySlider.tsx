"use client";

import React from "react";
import { Avatar } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stories = [
  {
    id: 1,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 5,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 6,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 7,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 8,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 9,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 11,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 12,
    name: "user1",
    img: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
  },
];

const amountStories = stories.length > 8 ? 8 : stories.length;

const settings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: amountStories,
  slidesToScroll: 2,
  swipeToSlide: true,
  swipe: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

export default function StoryCarousel() {
  return (
     <div className="w-full max-w-[680px] mt-10 overflow-x-auto scrollbar-hide">
      <div className="flex gap-8 pl-4 "  style={{ minWidth: "fit-content" }}>
        {stories.map((story) => (
          <button key={story.id} className="flex-shrink-0">
            <div className="flex flex-col items-center cursor-pointer">
              <Avatar
                src={story.img}
                alt={story.name}
                className="w-16 h-16 rounded-full p-0.5 border-2 border-blue-400 object-cover"
              />
              <p className="text-sm mt-1 text-center">{story.name}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
