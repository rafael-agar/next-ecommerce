"use client"
import { useState } from "react";

const CustomizeProducts = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    return (
        <div className="flex flex-col gap-6">
            {/* COLOR */}
            <div className="flex flex-col gap-4">
                <h4 className="font-medium">Choose a Color</h4>

                <ul className="flex items-center gap-3">
                    {/* GREEN */}
                    <li
                        onClick={() => setSelectedColor("green")}
                        className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-pointer"
                        style={{ backgroundColor: "green" }}
                    >
                        {selectedColor === "green" && (
                            <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                    </li>

                    {/* BLUE */}
                    <li
                        onClick={() => setSelectedColor("blue")}
                        className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-pointer"
                        style={{ backgroundColor: "blue" }}
                    >
                        {selectedColor === "blue" && (
                            <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                    </li>

                    {/* WHITE */}
                    <li className="w-8 h-8 rounded-full ring-1 ring-grey-300 relative cursor-not-allowed bg-white ">
                        <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </li>
                </ul>

                <p>Color seleccionado: {selectedColor}</p>
            </div>

            {/* SIZE (estático) */}
            <div className="flex flex-col gap-4">
                <h4 className="font-medium">Choose a Size</h4>
                <ul className="flex items-center gap-3">
                    <li className="ring-1 ring-alert text-alert rounded-md py-1 px-4 text-sm cursor-pointer">
                        Small
                    </li>
                    <li className="ring-1 ring-alert text-white bg-alert rounded-md py-1 px-4 text-sm cursor-pointer">
                        Medium
                    </li>
                    <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
                        Large
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CustomizeProducts