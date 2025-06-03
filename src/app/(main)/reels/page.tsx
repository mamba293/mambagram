'use client'

import Reels from "@/components/Reels/Reels"


const ReelsData = [
  {
    id: 1,
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'First reel showcasing cool animation!',
    user: {
      name: 'john_doe',
      image_utl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: 2,
    url: 'https://www.w3schools.com/html/movie.mp4',
    description: 'Relaxing nature scenes 🌿',
    user: {
      name: 'nature_lover',
      image_utl: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
  },
  {
    id: 3,
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Funny moment caught on camera 😂',
    user: {
      name: 'funny_videos',
      image_utl: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
  },
];

export default function ReelsPage(){
    return(
        <div  className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white scrollbar-hide ">
            {
                ReelsData.map((reel)=>(
                    <Reels key={reel.id} reel={reel}/>
                ))
            }
        </div>
    )
}