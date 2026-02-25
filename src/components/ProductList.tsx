import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap ">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
                <div className="relative w-full h-80">
                    <Image src="/esen01.jpg" alt="" fill sizes="25vw" className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image src="/esen02.jpg" alt="" fill sizes="25vw" className="object-cover absolute rounded-md" />
                </div>

                <div className="flex justify-between">
                    <span className="font-medium">Nombre del producto</span>
                    <span className="font-semibold">$66</span>
                </div>
                <div className="text-sm text-gray-500">Descripción del producto</div>
                <button className="rounded-2xl ring-1 ring-alert py-2 px-4 w-max text-xs hover:bg-alert hover:text-white">Agregar al carrito</button>
            </Link>

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
                <div className="relative w-full h-80">
                    <Image src="/esen03.jpg" alt="" fill sizes="25vw" className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image src="/esen04.jpg" alt="" fill sizes="25vw" className="object-cover absolute rounded-md" />
                </div>

                <div className="flex justify-between">
                    <span className="font-medium">Nombre del producto</span>
                    <span className="font-semibold">$66</span>
                </div>
                <div className="text-sm text-gray-500">Descripción del producto</div>
                <button className="rounded-2xl ring-1 ring-alert py-2 px-4 w-max text-xs hover:bg-alert hover:text-white">Agregar al carrito</button>
            </Link>

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
                <div className="relative w-full h-80">
                    <Image src="/esen01.jpg" alt="" fill sizes="25vw" className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image src="/esen02.jpg" alt="" fill sizes="25vw" className="object-cover absolute rounded-md" />
                </div>

                <div className="flex justify-between">
                    <span className="font-medium">Nombre del producto</span>
                    <span className="font-semibold">$66</span>
                </div>
                <div className="text-sm text-gray-500">Descripción del producto</div>
                <button className="rounded-2xl ring-1 ring-alert py-2 px-4 w-max text-xs hover:bg-alert hover:text-white">Agregar al carrito</button>
            </Link>

            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] ">
                <div className="relative w-full h-80">
                    <Image src="/esen03.jpg" alt="" fill sizes="25vw" className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                    <Image src="/esen04.jpg" alt="" fill sizes="25vw" className="object-cover absolute rounded-md" />
                </div>

                <div className="flex justify-between">
                    <span className="font-medium">Nombre del producto</span>
                    <span className="font-semibold">$66</span>
                </div>
                <div className="text-sm text-gray-500">Descripción del producto</div>
                <button className="rounded-2xl ring-1 ring-alert py-2 px-4 w-max text-xs hover:bg-alert hover:text-white">Agregar al carrito</button>
            </Link>

        </div>
    )
}

export default ProductList