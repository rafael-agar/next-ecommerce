import Slider from "@/components/Slider"
import ProductList from "@/components/ProductList"
import CategoryList from "@/components/CategoryList"

const HomePage = () => {
  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">Productos Destacados</h2>
        <ProductList />
      </div>

      <div className="mt-24">
        <h2 className="text-2xl">Categorías</h2>
        <CategoryList />
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">Nuevos Productos</h2>
        <ProductList />
      </div>

    </div>
  )
}

export default HomePage