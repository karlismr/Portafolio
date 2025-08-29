export default function HomePage() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid place-items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hola, soy <span className="text-pink-400">Karlis Maldonado</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">
          Desarrolladora web especializada en{" "}
          <span className="text-pink-300">React</span>,{" "}
          <span className="text-pink-300">Next.js</span> y{" "}
          <span className="text-pink-300">TypeScript</span>. Me encanta crear
          UIs limpias, rápidas y accesibles.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="/projects"
            className="rounded-2xl bg-pink-600/90 px-5 py-2.5 hover:bg-pink-500 transition"
          >
            Ver proyectos
          </a>
          <a
            href="/contact"
            className="rounded-2xl bg-white/10 px-5 py-2.5 hover:bg-white/20 transition"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
}
