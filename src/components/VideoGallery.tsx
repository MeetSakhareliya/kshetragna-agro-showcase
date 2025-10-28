import { useState } from "react";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const instagramReels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DC0seBjtqVt/",
    embedUrl: "https://www.instagram.com/reel/DC0seBjtqVt/embed",
    title: "Agricultural Innovation",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/C8RSHfKNs8I/",
    embedUrl: "https://www.instagram.com/reel/C8RSHfKNs8I/embed",
    title: "Modern Farming Equipment",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/C8RQRNxtoDO/",
    embedUrl: "https://www.instagram.com/reel/C8RQRNxtoDO/embed",
    title: "Equipment in Action",
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/C7n9RwkNtey/",
    embedUrl: "https://www.instagram.com/reel/C7n9RwkNtey/embed",
    title: "Agricultural Technology",
  },
];

export const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Video Gallery
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Watch our equipment in action
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {instagramReels.map((reel) => (
            <Card
              key={reel.id}
              className="group cursor-pointer overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedVideo(reel.embedUrl)}
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground">{reel.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">Watch on Instagram</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            See More Videos →
          </a>
        </div>
      </div>

      {/* Instagram Embed Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="max-w-md w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={selectedVideo}
              className="w-full h-[600px] rounded-2xl shadow-2xl bg-white"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              allow="encrypted-media"
            />
            <button
              className="mt-6 mx-auto block px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
