import { useRef, useEffect, useState } from "react";

interface LazyInstagramEmbedProps {
  embedUrl: string;
  title: string;
  altText?: string;
}

const LazyInstagramEmbed = ({ embedUrl, title, altText }: LazyInstagramEmbedProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      {isVisible ? (
        <iframe
          src={embedUrl}
          className="w-full h-full border-0"
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          title={altText || title}
          style={{ overflow: "hidden" }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg animate-pulse">
            <svg className="h-4 w-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <p className="font-poppins text-xs text-slate-400 mt-2">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default LazyInstagramEmbed;
