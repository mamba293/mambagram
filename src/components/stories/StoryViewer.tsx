"use client"

import React, { useEffect, useState } from "react";


const StoryViewer = ({ story, onClose }: StoryViewerProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onClose();
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Увеличиваем прогресс каждые 50 мс

    return () => clearInterval(interval);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      
      <div className="absolute top-4 left-4 right-4">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-white h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <img
        src={story.storyImage}
        alt={story.username}
        className="max-w-full max-h-full"
      />

      <div className="absolute bottom-4 left-4 text-white">
        <h2>{story.username}</h2>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        &times;
      </button>
    </div>
  );
};

export default StoryViewer;