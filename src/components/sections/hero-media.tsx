"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HeroMediaProps = {
  /** MP4 (H.264) source for the background video. */
  videoSrc?: string | null;
  /** Optional WebM source, served first when the browser supports it. */
  webmSrc?: string | null;
  /** Image shown instantly while the video loads (and if it fails). */
  poster: string;
  /** High-resolution landscape fallback image. */
  desktopImage: string;
  /** Portrait crop used on phones/tablets when there is no video. */
  mobileImage: string;
  alt: string;
};

const mediaClassName =
  "absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-center";

/**
 * Full-bleed hero background: an autoplaying, muted, looping video when a
 * source is provided, with an instant image poster and a responsive image
 * fallback.
 */
export function HeroMedia({
  videoSrc,
  webmSrc,
  poster,
  desktopImage,
  mobileImage,
  alt,
}: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const preventContext = (e: Event) => e.preventDefault();
    video.addEventListener("contextmenu", preventContext);
    return () => video.removeEventListener("contextmenu", preventContext);
  }, []);

  if (videoSrc || webmSrc) {
    return (
      <>
        <link rel="preload" as="image" href={poster} fetchPriority="high" />
        <video
          ref={videoRef}
          className={mediaClassName}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          aria-hidden="true"
          tabIndex={-1}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen"
        >
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
          {videoSrc ? <source src={videoSrc} type="video/mp4" /> : null}
        </video>
      </>
    );
  }

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopImage} />
      <img
        src={mobileImage}
        alt={alt}
        className={mediaClassName}
        fetchPriority="high"
        decoding="async"
      />
    </picture>
  );
}
