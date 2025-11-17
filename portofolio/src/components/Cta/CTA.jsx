import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="w-full py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-gray-600 text-sm mb-8">
          Available for freelance projects & collaborations. Let's discuss how I can help
          bring your ideas to life.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-5 py-2 rounded-md bg-cyan-600 text-white hover:bg-cyan-700"
          >
            Start a Project
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
