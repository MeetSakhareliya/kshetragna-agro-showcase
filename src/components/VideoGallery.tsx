import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

// To add videos: Place video files in public/videos/ folder
// They will automatically appear in the gallery
const getVideos = () => {
  // In a real scenario, you'd use a build-time script or API to list videos
  // For now, we'll use a static list that you can easily update
  const videoFiles = [
    {
      id: 1,
      filename: "farm-tour.mp4",
      title: "Farm Tour",
      thumbnail: "/videos/farm-tour-thumb.jpg", // Optional: add thumbnail images
    },
    {
      id: 2,
      filename: "harvest-season.mp4",
      title: "Harvest Season",
      thumbnail: "/videos/harvest-season-thumb.jpg",
    },
    {
      id: 3,
      filename: "organic-farming.mp4",
      title: "Organic Farming Practices",
      thumbnail: "/videos/organic-farming-thumb.jpg",
    },
  ];

  return videoFiles;
};

export const VideoGallery = () => {
  const [videos] = useState(getVideos());
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Video Gallery
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Watch our farming journey and sustainable practices
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedVideo(`/videos/${video.filename}`)}
            >
              <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500" />
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{video.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 animate-fade-in"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="max-w-5xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full rounded-2xl shadow-2xl"
              >
                Your browser does not support the video tag.
              </video>
              <button
                className="mt-6 mx-auto block px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Instructions for adding videos */}
        <div className="mt-12 p-6 bg-card border border-border rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-3 text-foreground">How to Add Videos</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Place your video files in the <code className="bg-muted px-2 py-1 rounded">public/videos/</code> folder</li>
            <li>Update the video list in <code className="bg-muted px-2 py-1 rounded">src/components/VideoGallery.tsx</code></li>
            <li>Optionally add thumbnail images for better presentation</li>
            <li>Videos will automatically appear in the gallery</li>
          </ol>
        </div>
      </div>
    </section>
  );
};
