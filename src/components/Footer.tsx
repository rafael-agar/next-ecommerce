import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
            {/* TOP */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/* LEFT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/">
                        <Image src="/logo.png" alt="" width={100} height={100} />
                    </Link>
                    <p>
                        Ciudad de Valencia, Carabobo, Venezuela
                    </p>
                    <span className="font-semibold">info@esenconcept.com</span>
                    <span className="font-semibold">04220088773</span>
                    <div className="flex gap-6">
                        <Image src="/facebook.png" alt="" width={16} height={16} />
                        <Image src="/instagram.png" alt="" width={16} height={16} />
                        <Image src="/youtube.png" alt="" width={16} height={16} />
                        <Image src="/pinterest.png" alt="" width={16} height={16} />
                        <Image src="/x.png" alt="" width={16} height={16} />
                    </div>
                </div>
                {/* CENTER */}
                <div className="hidden lg:flex justify-between w-1/2">
                    {/* Se cambió justify-between por justify-start y se añadió gap para controlar el espacio con el título */}
                    <div className="flex flex-col justify-start gap-6">
                        <h1 className="font-medium text-lg">EMPRESA</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">Sobre Nosotros</Link>
                            <Link href="">Contáctanos</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-6">
                        <h1 className="font-medium text-lg">TIENDA</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">Novedades</Link>
                            <Link href="">Accesorios</Link>
                            <Link href="">Mujer</Link>
                            <Link href="">Todos los productos</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start gap-6">
                        <h1 className="font-medium text-lg">AYUDA</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">Servicio al Cliente</Link>
                            <Link href="">Mi Cuenta</Link>
                            <Link href="">Legal y Privacidad</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUSCRÍBETE</h1>
                    <p>
                        ¡Sé el primero en recibir las últimas noticias sobre tendencias, promociones y mucho más!
                    </p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Dirección de correo"
                            className="p-4 w-3/4"
                        />
                        <button className="w-1/4 bg-alert text-white rounded-tr-md rounded-br-md text-center">UNIRSE</button>
                    </div>
                    <span className="font-semibold">Pagos Seguros</span>
                    <div className="flex justify-between">
                        <Image src="/discover.png" alt="" width={40} height={20} />
                        <Image src="/skrill.png" alt="" width={40} height={20} />
                        <Image src="/paypal.png" alt="" width={40} height={20} />
                        <Image src="/mastercard.png" alt="" width={40} height={20} />
                        <Image src="/visa.png" alt="" width={40} height={20} />
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                <div className="">© 2026 Essen Concept</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="text-gray-500 mr-4">Idioma</span>
                        <span className="font-medium">Hecho en Venezuela</span>
                    </div>
                    <div className="">
                        <span className="text-gray-500 mr-4">Moneda</span>
                        <span className="font-medium">$ USD</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;