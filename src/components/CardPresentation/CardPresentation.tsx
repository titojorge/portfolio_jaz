import foto from '../../assets/images/jorge_zoto_perfil.png'

export const CardPresentation = () => {
    return (
        <>
            <section id="inicio" className="section py-24 md:py-32  mx-auto container lg:max-w-4xl md:max-w-2xl">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full md:w-1/4 flex flex-col justify-around items-center gap-4 mb-4" >
                            <img className="rounded-full shadow-lg size-40" style={{ objectFit: "none" }} src={foto} alt="JorgeZoto" />
                        </div>
                        <div className="w-full md:w-3/4 ">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5x">
                                Hola, soy Jorge Zoto
                            </h1>
                            <p className="mt-6 text-xl text-white [&>strong]:text-yellow-200 [&>strong]:font-semibold">
                                <strong>Ingeniero en Informática</strong>. Especializado
                                en el Desarrollo Web Full Stack, con +6 años de experiencia.
                            </p>
                            <nav className="flex flex-wrap gap-4 mt-8">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jorge.zoto.jaz@gmail.com" target="_blank" rel="noopener noreferrer" role="link"
                                    className="flex items-center justify-center gap-2 px-4 py-1 border border-gray-600 rounded-full bg-gray-800 text-white text-md hover:bg-gray-100 hover:border-gray-300 hover:text-black group max-w-fit ">
                                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none"
                                        strokeLinecap="round"  strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                                        <path d="M3 6l9 6l9 -6"></path>
                                        <path d="M15 18h6"></path>
                                        <path d="M18 15l3 3l-3 3"></path>
                                    </svg>
                                    Contactame
                                </a>
                                <a href="https://www.linkedin.com/in/jorge-a-zoto/" target="_blank" rel="noopener noreferrer" role="link"
                                    className="flex items-center justify-center gap-2 px-4 py-1 border border-gray-600 rounded-full bg-gray-800 text-white text-md hover:bg-gray-100 hover:border-gray-300 hover:text-black group max-w-fit ">
                                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none"
                                        strokeLinecap="round"  strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                            d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                                        </path>
                                        <path d="M8 11l0 5"></path>
                                        <path d="M8 8l0 .01"></path>
                                        <path d="M12 16l0 -5"></path>
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                    </svg>
                                    LinkedIn
                                </a>
                                <a href="https://github.com/titojorge" target="_blank" rel="noopener noreferrer" role="link"
                                    className="flex items-center justify-center gap-2 px-4 py-1 border border-gray-600 rounded-full bg-gray-800 text-white text-md hover:bg-gray-100 hover:border-gray-300 hover:text-black group max-w-fit ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                        strokeLinecap="round"  strokeLinejoin="round"
                                        className="size-4 icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                    </svg>
                                    Github
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
