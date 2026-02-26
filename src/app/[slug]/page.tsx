import ProductImages from "@/components/ProductImages"
import CustomizeProducts from "@/components/CustomizeProducts"
import Add from "@/components/Add"

const SinglePage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/* TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Producto</h1>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aliquid blanditiis soluta enim. Eius, fugit aspernatur. Iure veniam aperiam quas ex commodi ad. Fuga sapiente fugiat quod dolorem earum pariatur!</p>

                <div className="h-[2px] bg-gray-100" />

                <div className="flex items-center gap-4">
                    <h2 className="font-medium text-gray-500 text-xl line-through">$89</h2>
                    <h3 className="text-xl font-bold">$99</h3>
                </div>

                <div className="h-[2px] bg-gray-100" />

                <CustomizeProducts />
                <Add />

                <div className="h-[2px] bg-gray-100" />

                <div className="text-sm">
                    <h4 className="mb-4 font-medium">Titulo</h4>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aliquid blanditiis soluta enim. Eius, fugit aspernatur. Iure veniam aperiam quas ex commodi ad. Fuga sapiente fugiat quod dolorem earum pariatur!</p>
                </div>

                <div className="text-sm">
                    <h4 className="mb-4 font-medium">Titulo</h4>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aliquid blanditiis soluta enim. Eius, fugit aspernatur. Iure veniam aperiam quas ex commodi ad. Fuga sapiente fugiat quod dolorem earum pariatur!</p>
                </div>

                <div className="text-sm">
                    <h4 className="mb-4 font-medium">Titulo</h4>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aliquid blanditiis soluta enim. Eius, fugit aspernatur. Iure veniam aperiam quas ex commodi ad. Fuga sapiente fugiat quod dolorem earum pariatur!</p>
                </div>
            </div>
            {/* INFO */}

            {/* REVIEWS */}
        </div>
    )
}

export default SinglePage