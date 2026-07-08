import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type ImageWithSkeletonProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  skeletonClassName?: string;
  wrapperClassName?: string;
};

const ImageWithSkeleton = ({
  src,
  alt,
  className,
  skeletonClassName,
  wrapperClassName,
  ...props
}: ImageWithSkeletonProps) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const isLoaded = Boolean(src) && loadedSrc === src;

  return (
    <div className={cn("relative", wrapperClassName)}>
      {!isLoaded && (
        <Skeleton
          aria-hidden
          className={cn("absolute inset-0", skeletonClassName)}
        />
      )}
      <img
        key={src}
        src={src}
        alt={alt}
        onLoad={() => src && setLoadedSrc(src)}
        onError={() => src && setLoadedSrc(src)}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
