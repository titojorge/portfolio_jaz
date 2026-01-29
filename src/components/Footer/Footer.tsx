
export const Footer = () => {
    return (
        <>
            <footer className="pl-8 md:pl-0 mt-16 mx-auto container lg:max-w-4xl md:max-w-2xl pb-12 flex justify-center">
                <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span
                    className="text-sm sm:text-center text-white">© 2026 <a href="#"
                        className="hover:underline">Jorge Zoto</a>
                </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                        <li> <a href="/#about" className="hover:underline me-4 md:me-6">Sobre mí</a> </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
