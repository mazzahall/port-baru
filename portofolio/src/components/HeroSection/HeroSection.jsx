import React from 'react';


export default function HeroSection() {
  return (
    <section id="about" className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Hi, I’m Azzam</h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Saya seorang Web Developer dan UI/UX Designer. Saya mengembangkan website modern,
              cepat, dan responsif dengan pengalaman pengguna yang nyaman.
            </p>
          </div>

          <div className="flex justify-center">
          </div>
        </div>

        <div className="mt-12 bg-gray-200 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-gray-800">Web Developer & UI/UX Designer</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Mengubah ide menjadi tampilan UI/UX yang intuitif dan website fungsional.
            Fokus pada kecepatan, kerapian, dan pengalaman pengguna.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-5 py-2 rounded-md bg-cyan-600 text-white hover:bg-cyan-700"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
