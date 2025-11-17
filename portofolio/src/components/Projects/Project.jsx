import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Landing Page",
      img: "https://via.placeholder.com/300x180?text=Landing+Page",
      link: "#"
    },
    {
      title: "Dashboard UI",
      img: "https://via.placeholder.com/300x180?text=Dashboard",
      link: "#"
    },
    {
      title: "Mini E‑Commerce",
      img: "https://via.placeholder.com/300x180?text=Ecommerce",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg bg-gray-100 transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="text-cyan-600 text-sm mt-2 inline-block hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
