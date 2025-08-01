'use client';

interface YoutubePlayerProps {
  videoId: string;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoId }) => {
  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full rounded-lg shadow-2xl shadow-primary/20"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
