export default function AboutPage() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">Sobre mí</h2>
      <p className="mt-4 max-w-3xl text-neutral-300">
        Soy desarrolladora web Full Stack con experiencia en React, Next.js,
        Tailwind, y bases de datos como MongoDB. Me gustan las interfaces
        elegantes, los detalles visuales y las buenas prácticas.
      </p>
      <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-neutral-200">
        <li className="bg-white/5 rounded-xl px-3 py-2">React</li>
        <li className="bg-white/5 rounded-xl px-3 py-2">Next.js</li>
        <li className="bg-white/5 rounded-xl px-3 py-2">TypeScript</li>
        <li className="bg-white/5 rounded-xl px-3 py-2">Tailwind CSS</li>
        <li className="bg-white/5 rounded-xl px-3 py-2">Node.js</li>
        <li className="bg-white/5 rounded-xl px-3 py-2">MongoDB</li>
        <li className="bg-white/5 rounded-xl px-3 py-2">Vercel</li>
        <li className="bg-white/5 rounded-xl px-3 py-2">Python</li>
        <li className="bg-white/5 rounded-xl px-3 py-2">Django</li>
      </ul>
    </section>
  );
}
