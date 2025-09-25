export default function AboutPage() {
  const CATEGORIES: { title: string; items: string[] }[] = [
    {
      title: "Lenguajes",
      items: ["HTML5", "JavaScript", "Python", "TypeScript"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "NextAuth", "SWR"],
    },
    {
      title: "Backend & Datos",
      items: [
        "Node.js",
        "Next.js API Routes",
        "Python + Django",
        "MongoDB",
        "Mongoose",
        "Cloudinary",
        "Vercel Blob",
      ],
    },
    {
      title: "DevOps & Herramientas",
      items: ["Vercel", "Git", "GitHub"],
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">Sobre mí</h2>
      <p className="mt-4 max-w-3xl text-neutral-300">
        Soy desarrolladora web Full Stack con experiencia en React, Next.js y
        Tailwind, trabajando con APIs y bases de datos como MongoDB. Me gustan
        las interfaces elegantes, los detalles visuales y las buenas prácticas.
      </p>

      {/* Grid de categorías (sin niveles) */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 shadow-[0_10px_30px_rgba(244,114,182,0.15)]"
          >
            <h3 className="text-lg font-medium text-pink-300">{cat.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {cat.items.map((name) => (
                <li
                  key={name}
                  className="inline-flex items-center rounded-xl bg-white/5 hover:bg-white/10 transition px-3 py-1.5 text-sm text-neutral-200"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
