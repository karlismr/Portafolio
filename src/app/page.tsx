import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main id="inicio">
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 grid place-items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hola, soy <span className="text-pink-400">Karlis Maldonado</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">
            Desarrolladora <span className="text-pink-300">Fullstack</span>{" "}
            especializada en <span className="text-pink-300">Python</span>,{" "}
            <span className="text-pink-300">React</span>,{" "}
            <span className="text-pink-300">Next.js</span> y{" "}
            <span className="text-pink-300">TypeScript</span>. Me encanta crear
            UIs limpias, rápidas y accesibles.
          </p>
        </div>
      </section>

      {/* PROYECTOS */}
      <ProjectsSection />
    </main>
  );
}

type Project = {
  id: string;
  title: string;
  summary: string;
  href: string; // página interna
  image: string; // ruta en /public
  status?: "En curso" | "Publicado";
};

function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "gatitos",
      title: "🐾 Adopta un gato",
      summary:
        "Aplicación fullstack para adoptar gatitos, gestionar adopciones y administración con roles (Next.js 15, TypeScript, Tailwind, NextAuth, MongoDB/Mongoose).",
      href: "/proyectos/gatitos",
      image: "/screenshotGatitos.jpg",
      status: "Publicado",
    },
    {
      id: "portafolio",
      title: "💼 Portafolio web",
      summary:
        "Sitio personal con diseño oscuro, gradientes rosados y microinteracciones. Optimizado para rendimiento y accesibilidad.",
      href: "/proyectos/portafolio",
      image: "/screenshotPortafolioweb.jpg",
      status: "Publicado",
    },
    {
      id: "asistente",
      title: "💬 Asistente personal",
      summary:
        "Asistente tipo chat con notas, tareas, recordatorios y memoria. PWA con Next.js + backend en Python (Django/FastAPI).",
      href: "/proyectos/asistente",
      image: "/shinji.jpg",
      status: "En curso",
    },
  ];

  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Proyectos</h2>
          <p className="mt-1 text-neutral-300">
            Selección de trabajos recientes y en progreso.
          </p>
        </header>

        {/* Grilla fluida */}
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              aria-label={`Abrir ${p.title}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/40"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={p.image}
                  alt={`Imagen del proyecto ${p.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  priority
                />
                {p.status && (
                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-xs text-neutral-200 backdrop-blur">
                    {p.status}
                  </span>
                )}
              </div>

              <div className="p-4 space-y-1.5">
                <h3 className="text-base md:text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-300">{p.summary}</p>
                <span className="inline-flex items-center gap-1 text-pink-300 text-sm">
                  Ver detalles
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M8 5l8 7-8 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
