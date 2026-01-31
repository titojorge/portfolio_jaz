import foto2 from '../../assets/images/JorgeZoto (1).jpg'

export const About = () => {
  return (
    <>
        <section id="about" data-aos="fade-down-right" className="py-20 mx-auto container lg:max-w-4xl md:max-w-2xl ">
            <h2 className="text-4xl font-bold text-left text-white mb-8">Sobre mi</h2>
            <article className="flex flex-col md:flex-row items-center justify-center gap-8 text-white ">
                <div
                    className="[&>p]:mb-4 [&>p>strong]:text-yellow-200  [&>p>strong]:font-medium text-justify text-pretty order-2 md:order-1">
                    <p>
                        Con respecto a mis habilidades blandas, tengo mucha capacidad para trabajar en equipo, 
                        me adapto bien a los cambios, soy una persona autodidacta, proactiva, 
                        honesta y responsable, con buen sentido del humor, empática y sociable, 
                        <strong> con características de liderazgo y carismática.</strong>
                    </p>
                    <p>
                        Tal vez puede sonar contraproducente describirme a mí mismo, pero estoy seguro que 
                        con el correr del tiempo <strong>lo voy a poder demostrar</strong> en los equipos de trabajo 
                        donde me desempeñe. 
                    </p>
                    <p>
                        Tengo <strong>habilidad para resolver conflictos y problemas</strong>, debido a esto y a que soy una 
                        persona ordenada, en el ministerio de salud me dieron grupos de personas para poder 
                        coordinar sus tareas. Me gusta mucho comprometerme con los objetivos de la empresa.
                        Mi <strong>objetivo es seguir aprendiendo y contribuir al desarrollo</strong> de proyectos innovadores.
                    </p>
                </div>
                <img src={foto2} alt="Jorge Zoto Dev"
                    className="w-52 order-1 object-cover  p-1 md:order-2 rotate-6 lg:p-2 lg:w-64  rounded-full bg-yellow-500/5 ring-4 ring-white/30 " />
            </article>
        </section>
    </>
  )
}
