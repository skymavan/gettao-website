import { photos, type PhotoKey } from "@/content/photos";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";

type PhotoProps = {
  name: PhotoKey;
  className?: string;
  /** Crop box aspect ratio, e.g. "4 / 3". Defaults to the photo's own ratio. */
  ratio?: string;
  /** CSS object-position for the crop focal point. */
  position?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Responsive licensed photograph: AVIF with WebP fallback at 800w and 1600w,
 * explicit dimensions to avoid layout shift, lazy by default.
 */
export function Photo({
  name,
  className,
  ratio,
  position = "center",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: PhotoProps) {
  const photo = photos[name];
  const base = withBasePath(photo.src);
  const srcSet = (ext: string) => `${base}-800.${ext} 800w, ${base}-1600.${ext} 1600w`;

  return (
    <picture
      className={cn("photo-frame", className)}
      style={{ aspectRatio: ratio ?? `${photo.width} / ${photo.height}` }}
    >
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`${base}-1600.webp`}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        style={{ objectPosition: position }}
      />
    </picture>
  );
}
