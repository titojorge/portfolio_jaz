import { useEffect, useState } from "react";

export const Projects = () => {
    
    interface Projects {
        id: number;
        image: string;
        url_view_prev: string;
        url_git_hub: string;
        title: string;
        description: string
    }
    
    const API_URL = import.meta.env.VITE_API_URL;
    const [projects, setProjects] = useState<Projects[]>([])

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${API_URL}/projects`);
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProjects();
    }, []);



    return (
        <>
            <section id="projects" data-aos="fade-down-right" className="py-20 mx-auto container lg:max-w-4xl md:max-w-2xl ">
                <h3 className="text-3xl font-bold text-left mb-8 text-white">Mis Proyectos</h3>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    {projects.map((project) => (

                        <div key={project.id+project.title} className="block rounded-lg shadow-secondary-1 bg-slate-900 ">
                            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                                <img className="rounded-t-lg object-cover object-center w-full h-56 " src={`../../../public/${project.image}`}
                                    alt="Proyecto Ecommerce DH" />
                                <a href={project.url_view_prev} target="_blank" role="link">
                                    <div
                                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                    </div>
                                </a>
                            </div>
                            <div className="p-6 text-surface text-white">
                                <h4 className="mb-2 text-2xl font-bold text-yellow-200">{project.title}</h4>
                                <p className="mb-4 text-base">
                                    {project.description}
                                </p>
                                <div className="flex gap-4">
                                    <a href={project.url_view_prev} target="_blank"
                                        rel="noopener noreferrer" role="link"
                                        className="flex items-center justify-center gap-2 px-4 py-1 border border-gray-600 rounded-full bg-gray-800 text-white text-md hover:bg-gray-100 hover:border-gray-300 hover:text-black group max-w-fit ">
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 15l6 -6" />
                                            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                            <path
                                                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                        </svg>
                                        Vista Previa
                                    </a>
                                    <a href={project.url_git_hub} target="_blank" role="link"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-1 border border-gray-600 rounded-full bg-gray-800 text-white text-md hover:bg-gray-100 hover:border-gray-300 hover:text-black group max-w-fit ">
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path
                                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                                            </path>
                                        </svg>
                                        Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                    }



                </div>

            </section>
        </>
    )
}
