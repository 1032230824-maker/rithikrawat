import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";

interface LazyInstagramEmbedProps {
  embedUrl: string;
  title: string;
  altText?: string;
}

const LazyInstagramEmbed = ({ embedUrl, title, altText }: LazyInstagramEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center z-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg animate-pulse">
            <Play className="h-5 w-5 text-white ml-0.5" />
          </div>
          <p className="font-poppins text-xs text-slate-400 mt-3">Loading {title}...</p>
        </div>
      )}
      {isLoaded && (
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
