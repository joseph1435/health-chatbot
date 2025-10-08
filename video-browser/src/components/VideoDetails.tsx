import React from 'react';
import type { Video } from '../types/video';

interface VideoDetailsProps {
  video: Video;
  isLiked: boolean;
  onLike: (id: number) => void;
  onBack: () => void;
}

const VideoDetails: React.FC<VideoDetailsProps> = ({ video, isLiked, onLike, onBack }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        aria-label="Back to video list"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Back to Videos
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-video bg-black">
          <iframe
            src={video.videoUrl}
            title={video.title}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {video.title}
              </h1>
              <div className="flex items-center gap-3">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {video.genre}
                </span>
                <span className="text-gray-600 text-sm">
                  Duration: {video.duration}
                </span>
              </div>
            </div>
            
            <button
              onClick={() => onLike(video.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${
                isLiked 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label={isLiked ? 'Unlike video' : 'Like video'}
              aria-pressed={isLiked}
            >
              <svg 
                className="w-6 h-6" 
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

          <div className="border-t pt-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {video.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
