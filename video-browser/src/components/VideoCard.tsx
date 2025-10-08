import React from 'react';
import type { Video } from '../types/video';

interface VideoCardProps {
  video: Video;
  isLiked: boolean;
  onLike: (id: number) => void;
  onClick: (id: number) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, isLiked, onLike, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      role="article"
      aria-label={`Video: ${video.title}`}
    >
      <div 
        onClick={() => onClick(video.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(video.id);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Play ${video.title}`}
      >
        <div className="relative">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
            {video.duration}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-800">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {video.genre}
            </span>
          </p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLike(video.id);
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
            isLiked 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label={isLiked ? 'Unlike video' : 'Like video'}
          aria-pressed={isLiked}
        >
          <svg 
            className="w-5 h-5" 
            fill={isLiked ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
          </svg>
          {isLiked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
