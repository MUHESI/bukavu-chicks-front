import React from 'react'
import { cn } from '../../lib/utils';


interface IProps {
    src: any
    alt?: string
    className?: string
}

function ImageCustom({ src, className, alt }: IProps) {
    return (
        <img src={src} alt={alt || "..."} className={cn(
            "cover bg-primary-100 rounded-full ",
            className
        )} />
    )
}

export default ImageCustom
