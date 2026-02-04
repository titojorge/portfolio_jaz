
export const NavBar = () => {
  return (
    <header >
        <nav id="menu"
            className="w-full flex justify-center space-x-4 text-white font-bold fixed top-0 z-50 py-3 bg-slate-900">
            <a href="#inicio" className="hover:text-yellow-200">Inicio</a>
            <a href="#stack" className="hover:text-yellow-200">Stack</a>
            <a href="#expirience" className="hover:text-yellow-200">Experiencia</a>
            <a href="#projects" className="hover:text-yellow-200">Proyectos</a>
            <a href="#about" className="hover:text-yellow-200">Sobre mí</a>
        </nav>
    </header>
  )
}
