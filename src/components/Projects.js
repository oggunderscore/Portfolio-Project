import { BriefcaseIcon, CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Below are some of the projects have I worked on in the past.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <CodeIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{project.quote}</p>
                <div className="inline-flex items-center">
                  <BriefcaseIcon  className="block w-6 text-gray-500"/>
                  {/* <img
                    alt="experience"
                    src={project.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  /> */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {project.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {project.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
