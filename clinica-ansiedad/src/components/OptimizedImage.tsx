import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
    alt: string; // Make alt mandatory
    blurDataURL?: string;
}

export default function OptimizedImage({ alt, src, blurDataURL, ...props }: OptimizedImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            loading={props.priority ? undefined : "lazy"}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            {...props}
        />
    );
}
