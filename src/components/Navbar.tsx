import Link from "next/link"
import Menu from "./menu"
import Image from "next/image"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"


const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative z-20">
            <div className="h-full flex items-center justify-between md:hidden">
                {/* MOBILE  */}
                <Link href="/">
                    <div className="relative w-20 h-20">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                </Link>
                <Menu />
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between h-full gap-8">
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href="/" className="flex items-center">
                        <div className="relative w-20 h-20 md:w-24 md:h-28">
                            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                    </Link>
                    <div className="hidden xl:flex items-center gap-8">
                        <Link href="/">Inicio</Link>
                        <Link href="/">Tienda</Link>
                        <Link href="/">Nosotros</Link>
                        <Link href="/">Colecciones</Link>
                        <Link href="/">Contacto</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default Navbar