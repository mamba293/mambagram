"use client"

import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const stories: Story[] = [
  {
    id: 1,
    username: "user1",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 2,
    username: "user2",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  // Добавьте больше историй
  {
    id: 3,
    username: "user3",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 4,
    username: "user4",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 5,
    username: "user5",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 6,
    username: "user6",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 7,
    username: "user7",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 8,
    username: "user8",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 9,
    username: "user8",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 10,
    username: "user8",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 11,
    username: "user8",
    avatar: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    storyImage: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
]

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        background: "transparent",
        zIndex: 4,
        right: "25px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "block", 
        background: "transparent",
        zIndex: 4,
        left: "25px",
       }}
      onClick={onClick}
    />
  );
}


const StoryCarousel = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return(
    <div className="max-w-[630px] w-full">
      <Slider {...settings}>
        {stories.map((story) => (
          <div key={story.id} className="px-1">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <img
                src={story.avatar}
                alt={story.username}
                className="w-16 h-16 rounded-full p-0.5 border-2 border-blue-500 object-cover"
              />
              <p className="text-sm mt-2 text-center">{story.username}</p>
            </div>
          </div>
        ))}
      </Slider>
  </div>
    );
};

export default StoryCarousel;