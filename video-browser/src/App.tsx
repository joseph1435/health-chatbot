import { useState, useEffect } from 'react';
import type { Video } from './types/video';
import SearchBar from './components/SearchBar';
import VideoGrid from './components/VideoGrid';
import VideoDetails from './components/VideoDetails';

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set());
  const [displayCount, setDisplayCount] = useState(8);

  // Load videos from JSON
  useEffect(() => {
    fetch('/videos.json')
      .then((response) => response.json())
      .then((data: Video[]) => {
        setVideos(data);
        setFilteredVideos(data);
      })
      .catch((error) => console.error('Error loading videos:', error));
  }, []);

  // Load liked videos from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('likedVideos');
    if (saved) {
      setLikedVideos(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save liked videos to localStorage
  useEffect(() => {
    localStorage.setItem('likedVideos', JSON.stringify(Array.from(likedVideos)));
  }, [likedVideos]);

  // Filter videos based on search term
  useEffect(() => {
    const filtered = videos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filtered);
    setDisplayCount(8); // Reset display count when search changes
  }, [searchTerm, videos]);

  const handleLike = (id: number) => {
    setLikedVideos((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  const handleVideoClick = (id: number) => {
    const video = videos.find((v) => v.id === id);
    if (video) {
      setSelectedVideo(video);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setSelectedVideo(null);
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 8);
  };

  const displayedVideos = filteredVideos.slice(0, displayCount);
  const hasMore = displayCount < filteredVideos.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">
            🎬 Video Browser
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedVideo ? (
          <VideoDetails
            video={selectedVideo}
            isLiked={likedVideos.has(selectedVideo.id)}
            onLike={handleLike}
            onBack={handleBack}
          />
        ) : (
          <>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            
            <div className="mb-4 text-sm text-gray-600">
              Showing {displayedVideos.length} of {filteredVideos.length} videos
            </div>

            <VideoGrid
              videos={displayedVideos}
              likedVideos={likedVideos}
              onLike={handleLike}
              onVideoClick={handleVideoClick}
            />

            {hasMore && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Load more videos"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600">
            © 2025 Video Browser. Built with React + TypeScript + TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

