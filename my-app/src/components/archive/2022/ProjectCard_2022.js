import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from 'react-icons/fa';


export default function ProjectCard_2022(props) {
    return (
        <div className="flex flex-wrap mt-1">
            {props.projects.map(project => (
                <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg m-5" key={project.id}>
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={project.src} alt={project.alt}></img>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-xl font-semibold">
                                <a href={project.appLink} target="_blank" className="flex no-underline hover:text-violet-700 text-slate-900 text-xl font-semibold">{project.title} <TbExternalLink size="1.5em"/></a>
                            </div>
                            <p className="mt-2 text-slate-600 text-md">{project.description}</p>
                            <a href={project.repo} target="_blank" className="flex align-middle mt-1 text-md leading-tight font-medium text-black no-underline hover:text-violet-700"><FaGithub size="2em"/><p className="ml-1 mt-2 hover:text-violet-700">View on Github</p></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
