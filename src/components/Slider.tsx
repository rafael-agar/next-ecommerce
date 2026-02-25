"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"

const slides = [
    {
        id: 1,
        title: "Nueva Colección Confía",
        description: "¡Atrévete a ser tu misma!",
        img: "/esen02.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Colecciones de Rebajas de Invierno",
        description: "¡Oferta! ¡Hasta 50% de descuento!",
        img: "/esen03.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Colecciones de Rebajas de Primavera",
        description: "¡Oferta! ¡Hasta 50% de descuento!",
        img: "/esen04.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

const Slider = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[calc(100vh-80px)] relative overflow-hidden">
            <div
                className="w-max h-full flex transition-all duration-1000 ease-in-out"
                style={{ transform: `translateX(-${current * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div
                        className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                        key={slide.id}
                    >
                        {/* TEXT CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center p-4">
                            <h2 className="text-xl lg:text-xl xl:text-3xl">
                                {slide.description}
                            </h2>
                            <h1 className="text-5xl lg:text-4xl xl:text-8xl font-semibold">
                                {slide.title}
                            </h1>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-black text-white py-3 px-4 ">
                                    COMPRAR YA
                                </button>
                            </Link>
                        </div>
                        {/* IMAGE CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image
                                src={slide.img}
                                alt=""
                                fill
                                sizes="100%"
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4 -translate-x-1/2">
                {
                    slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`}
                            onClick={() => setCurrent(index)}
                        >
                            {current === index && (
                                <div className="w-[6px] h-[6px] rounded-full bg-gray-600"></div>
                            )}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Slider