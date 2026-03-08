import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

interface LazyInstagramEmbedProps {
  embedUrl: string;
  title: string;
  altText?: string;
}

const LazyInstagramEmbed = ({ embedUrl, title, altText }: LazyInstagramEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full h-full">
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center cursor-pointer group/play z-10"
          onClick={() => setIsLoaded(true)}
          role="button"
          aria-label={altText || `Play ${title}`}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg group-hover/play:scale-110 transition-transform duration-300">
            <Play className="h-7 w-7 text-white ml-1" />
          </div>
          <p className="font-poppins text-sm text-slate-500 mt-3">{title}</p>
          <p className="font-poppins text-xs text-slate-400 mt-1">Tap to load video</p>
        </div>
      )}
      {(isLoaded || isInView) && isLoaded && (
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy"
          title={altText || title}
        />
      )}
    </div>
  );
};

export default LazyInstagramEmbed;
