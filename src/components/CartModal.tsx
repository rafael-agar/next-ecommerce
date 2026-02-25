"use client"
import Image from "next/image"

const CartModal = () => {

    const cartItems = true
    return (
        <div className="w-max absolute rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.2)] z-30 top-8 right-0 flex flex-col gap-4 bg-white p-4">
            {cartItems ? (
                <>
                    <h2 className="text-xl font-semibold">Carrito de Compras</h2>
                    <div className="flex flex-col gap-6">
                        {/* ITEM 1 */}
                        <div className="flex gap-4">
                            <Image
                                src="https://i.pinimg.com/1200x/a5/26/41/a526418b0f8e9bac0dc55ed9f6260ff3.jpg"
                                alt=""
                                width={72}
                                height={72}
                                className="object-cover rounded-md"
                            />

                            <div className="flex flex-col justify-between flex-1">
                                {/* TOP */}
                                <div className="">
                                    {/* TITLE */}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="py-1 px-2 rounded-sm bg-gray-50">$49</div>
                                    </div>
                                    {/* DESCRIPTION */}
                                    <div className="text-sm text-gray-500">
                                        disponible
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className="flex items-center justify-between mt-2 text-sm">
                                    <span className="text-gray-500">Cant. 2</span>
                                    <span className="text-alert cursor-pointer">Remover</span>
                                </div>
                            </div>

                        </div>

                        {/* ITEM 2 */}
                        <div className="flex gap-4">
                            <Image
                                src="https://i.pinimg.com/1200x/a5/26/41/a526418b0f8e9bac0dc55ed9f6260ff3.jpg"
                                alt=""
                                width={72}
                                height={72}
                                className="object-cover rounded-md"
                            />

                            <div className="flex flex-col justify-between flex-1">
                                {/* TOP */}
                                <div className="">
                                    {/* TITLE */}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="py-1 px-2 rounded-sm bg-gray-50">$49</div>
                                    </div>
                                    {/* DESCRIPTION */}
                                    <div className="text-sm text-gray-500">
                                        disponible
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className="flex items-center justify-between mt-2 text-sm">
                                    <span className="text-gray-500">Cant. 2</span>
                                    <span className="text-alert cursor-pointer">Remover</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* BUTTOM TOTAL */}
                    <div className="">
                        <div className="flex justify-between items-center font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">$99</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                        <div className="flex justify-between text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 cursor-pointer hover:bg-gray-50">Verificar pedido</button>
                            <button className="rounded-md bg-alert text-white p-3 px-6 cursor-pointer hover:bg-alert/80">Checkout</button>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    Carrito vacio
                </div>
            )}
        </div>
    )
}

export default CartModal