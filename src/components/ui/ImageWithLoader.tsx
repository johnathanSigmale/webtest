import { useState } from "react";

export default function ImageWithLoader({ src, alt, title, className }: { src: string; alt?: string, title?: string, className?: string}) {
    const [loaded, setLoaded] = useState(false)
    return (
      <div className={`relative ${className}`}>
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-4 border-cream-200 border-t-terracotta-500 animate-spin" aria-hidden />
          </div>
        )}
        <img
          src={src}
          alt={alt}
          title={title}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    )
  }