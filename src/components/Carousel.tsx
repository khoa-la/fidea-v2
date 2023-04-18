import React, { useEffect, useState } from "react";

type CarouselItem = {
  id: number;
  imageUrl: string;
  altText: string;
};

type Props = {
  items: CarouselItem[];
  autoplay?: boolean;
  interval?: number;
  style?: React.CSSProperties;
  className?: string;
};

export default function Carousel({
  items,
  autoplay = true,
  interval = 3000,
  style,
  className,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoplay, currentIndex, interval, items.length]);

  return (
    <div className={`group ${className}`} style={{ ...style }}>
      <div
        style={{ backgroundImage: `url(${items[currentIndex].imageUrl})` }}
        className="w-full h-full md:rounded-2xl bg-center bg-cover duration-500"
      ></div>
    </div>
  );
}
