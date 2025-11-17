import React from "react";

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      desc: "HTML, CSS, JavaScript, React, TailwindCSS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      desc: "Figma, Wireframing, Prototyping, User Flow",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a6 6 0 1112 0H6z"
          />
        </svg>
      )
    },
    {
      title: "Backend & Database",
      desc: "Node.js, Express, MongoDB, MySQL",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{skill.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
