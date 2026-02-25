"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import CartModal from "./CartModal"

const NavIcons = () => {

    const router = useRouter()

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    // TEMPORAL
    const isLoggedIn = false
    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login")
        }
        setIsProfileOpen((prev) => !prev)
    }

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image
                src="/profile.png"
                alt="profile"
                width={22}
                height={22}
                className="cursor-pointer"
                onClick={handleProfile}
            />
            {isProfileOpen && (
                <div className="absolute rounded-md p-4 top-12 left-0 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20">
                    <Link href="/">Profile</Link>
                    <div className="cursor-pointer mt-2">Logout</div>
                </div>
            )}

            {/* <Image src="/notification.png" alt="notification" width={22} height={22} className="cursor-pointer" /> */}
            <div className="relative cursor-pointer">
                <Image src="/cart.png"
                    alt="cart"
                    width={22}
                    height={22}
                    onClick={() => setIsCartOpen((prev) => !prev)}
                />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-alert rounded-full text-white flex items-center justify-center">0</div>
            </div>
            {isCartOpen && (
                <div className="absolute right-0 z-30">
                    <CartModal />
                </div>
            )}
        </div>
    )
}

export default NavIcons