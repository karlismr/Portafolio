type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "Gatitos Adoption",
    description: "Pagina de adopcion de gatos con manejo de bbdd.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    href: "https://gatitos-delta.vercel.app/",
  },
  {
    title: "Personal Assistant",
    description: "App de asistente personal conectado con IA.",
    tech: ["Python", "Django"],
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">Proyectos</h2>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href ?? "#"}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold group-hover:text-pink-300">
              {p.title}
            </h3>
            <p className="mt-2 text-neutral-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
