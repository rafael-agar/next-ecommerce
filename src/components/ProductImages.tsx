"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = () => {

    const [index, setIndex] = useState(0);

    const images = [
        {
            id: 1,
            url: "/esen01.jpg",
        },
        {
            id: 2,
            url: "/esen02.jpg",
        },
        {
            id: 3,
            url: "/esen03.jpg",
        },
        {
            id: 4,
            url: "/esen04.jpg",
        },
    ];

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={images[index].url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md transition-all duration-300 ease-in-out"
                />
            </div>

            <div className="flex justify-between gap-4 mt-8">
                {images.map((img, index) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                        key={img.id}
                        onClick={() => setIndex(index)}
                    >
                        <Image
                            src={img.url}
                            alt={img.url}
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ProductImages;