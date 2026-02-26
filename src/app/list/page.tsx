import Image from "next/image"
import Filter from "@/components/Filter"
import ProductList from "@/components/ProductList"

const ListPage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/* CAMPAING */}
            <div className="hidden bg-orange-50 p-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-3xl text-center font-semibold leading-[48px] text-gray-700">
                        Descubre tu poder interior
                        <br />con ESSEN
                    </h1>
                    <button className="rounded-3xl bg-alert text-white w-max px-5 py-3 text-sm cursor-pointer">Ver Colección</button>
                </div>
                <div className="relative w-1/3">
                    <Image src="/woman.png" alt="" fill className="object-contain" />
                </div>
            </div>

            {/* FILTER */}
            <Filter />
            {/* PRODUCTOS */}
            <h1 className="mt-12 text-xl font-semibold">Encuentra tu prenda</h1>
            <ProductList />
        </div>
    )
}

export default ListPage