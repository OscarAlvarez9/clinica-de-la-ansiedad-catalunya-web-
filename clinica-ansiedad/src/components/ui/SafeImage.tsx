'use client';

import { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

export default function SafeImage({
    src,
    alt,
    fallbackSrc = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    className,
    ...props
}: SafeImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <img
            {...props}
            src={imgSrc}
            alt={alt}
            className={className}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
}
