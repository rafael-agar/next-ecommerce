"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="">
            <Image src="/menu.png"
                alt="Menu"
                width={28}
                height={28}
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-pointer" />
            {open && (
                <div className="">
                    {/* CENTER MENU */}
                    <Link href="/">Inicio</Link>
                    <Link href="/">Tienda</Link>
                    <Link href="/">Nosotros</Link>
                    <Link href="/">Colecciones</Link>
                    <Link href="/">Contacto</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart(1)</Link>
                </div>
            )}
        </div>
    )
}

export default Menu