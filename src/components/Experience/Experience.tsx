import { useEffect, useState } from "react"

export const Experience = () => {

    
    interface Experience {
        id: number;
        rol: string;
        lugar: string;
        actualidad: boolean;
        periodo: string;
        descripcion: string
    }
    
    const API_URL = import.meta.env.VITE_API_URL;
    const [experiences, setExperiences] = useState<Experience[]>([])

    useEffect(() => {
        const fetchExperiences = async() => {
            try {
                const response = await fetch(`${API_URL}/experiencie`);
                const data = await response.json();
                setExperiences(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchExperiences();
    }, []);


    return (
        <>
            <section id="expirience" data-aos="fade-right" className="py-2 mx-auto container lg:max-w-4xl md:max-w-2xl ">
                <h2 className="text-4xl font-bold text-left text-white mb-8">Experiencia Laboral (Últimas 5)</h2>
                <div className="container  mt-16 ">
                    <ol className="relative border-s border-gray-700">
                        {experiences.map((experience) => (

                            <li key={experience.id} className="mb-10 ms-6">
                                <span
                                    className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-3 h-3 text-blue-300 icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
                                    </svg>
                                </span>
                                <h3
                                    className="flex flex-col md:flex-row justify-start md:items-center mb-1 text-lg font-semibold text-white [&>strong]:text-yellow-200  [&>strong]:font-semibold md:[&>strong]:px-1 md:[&>span]:mx-2">
                                    {experience.rol} |
                                    <strong> {experience.lugar}</strong>
                                    {experience.actualidad && <span className="w-fit bg-blue-900 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                                        Actual
                                    </span>}
                                </h3>
                                <time className="block mb-2 text-sm font-medium leading-none text-white">
                                    {experience.periodo}
                                </time>
                                <p className="mb-4 text-base font-normal text-gray-300">
                                    {experience.descripcion}
                                </p>

                            </li>
                        ))
                        }
                    </ol>
                </div>
            </section>
        </>
    )
}
