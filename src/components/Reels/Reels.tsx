'use client'

import { Heart, MessageCircle, Share2 } from "lucide-react";
import React from "react";
import ReactPlayer from "react-player";

export type User = {
  name: string;
  image_utl: string;
};

export interface Reel {
  id: number;
  url: string;
  description: string;
  user: User;
}

interface ReelsProps {
  reel: Reel;
}

export default function Reels({ reel }: ReelsProps) {
  const { url, description, user } = reel;
  return (
    <div className="w-[450px] h-[600px] m-8 snap-start relative flex justify-center bg-slate-600 rounded-xl items-center ml-64 overflow-hidden pt-8" >
      <ReactPlayer
        url={url}
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="!object-cover !absolute !top-0 !left-0"
      />

      {/* Overlay UI */}
      <div className="absolute bottom-8 left-6 text-white flex flex-col gap-3 z-10">
        <div className="flex items-center gap-3">
          <img
            src={reel.user.image_utl}
            alt="user avatar"
            className="w-10 h-10 rounded-full object-cover border border-white"
          />
          <span className="text-base font-semibold">@{user.name}</span>
        </div>
        <p className="text-sm max-w-xs leading-snug text-neutral-200">
          {description}
        </p>
      </div>

      {/* Actions */}
      <div className="absolute bottom-24 right-5 flex flex-col items-center gap-6 text-white z-10">
        <button className="flex flex-col items-center hover:scale-110 transition-transform duration-200">
          <Heart className="w-7 h-7" />
          <span className="text-xs mt-1">Like</span>
        </button>
        <button className="flex flex-col items-center hover:scale-110 transition-transform duration-200">
          <MessageCircle className="w-7 h-7" />
          <span className="text-xs mt-1">Comment</span>
        </button>
        <button className="flex flex-col items-center hover:scale-110 transition-transform duration-200">
          <Share2 className="w-7 h-7" />
          <span className="text-xs mt-1">Share</span>
        </button>
      </div>

      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-0" />
    </div>
  );
}
