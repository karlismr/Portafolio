export const metadata = {
  title: "Asistente personal — (En curso)",
  description:
    "Asistente tipo chat con notas, tareas, recordatorios y memoria conversacional. PWA con Next.js + backend en Python (Django/FastAPI).",
};

type Clip = {
  id: string;
  title: string;
  summary: string;
  src: string;
  poster?: string;
};

export default function AsistentePage() {
  const clips: Clip[] = [
    {
      id: "asistente-flujo",
      title: "Flujo: notas, tareas y recordatorios",
      summary:
        "Demostración del flujo principal de creación/edición y cómo se guardan en MongoDB con validaciones.",
      src: "/videos/asistente-flujo.mp4",
      poster: "/videos/asistente-flujo.jpg",
    },
    {
      id: "asistente-memoria",
      title: "Memoria conversacional",
      summary:
        "Estrategia de memoria (resúmenes + slots clave) para personalizar respuestas y reducir tokens.",
      src: "/videos/asistente-memoria.mp4",
      poster: "/videos/asistente-memoria.jpg",
    },
  ];

  return (
    <main className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6 space-y-2">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <span className="size-1.5 rounded-full bg-yellow-400" />
            En curso
          </span>
          <h1 className="text-2xl md:text-3xl font-bold">Asistente personal</h1>
          <p className="max-w-3xl text-neutral-300">
            PWA estilo chat: notas, tareas y recordatorios con memoria
            persistente y tono configurable. Frontend con Next.js 15 + Tailwind;
            backend en Python (Django/FastAPI) y MongoDB.
          </p>
        </header>

        <ClipsSection clips={clips} />
      </div>
    </main>
  );
}

function ClipsSection({ clips }: { clips: Clip[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl md:text-2xl font-semibold">
        🎥 Clips explicativos
      </h2>
      <p className="mt-1 text-sm text-neutral-400">
        Videos cortos con una vista previa de funcionalidades clave y su
        implementación.
      </p>

      <div className="mt-6 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {clips.map((clip) => (
          <article
            key={clip.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus-within:ring-2 focus-within:ring-pink-400/40"
          >
            <div className="aspect-video">
              <video
                className="h-full w-full bg-black/20"
                src={clip.src}
                controls
                preload="metadata"
                playsInline
                poster={clip.poster}
                aria-label={clip.title}
              />
            </div>
            <div className="space-y-1.5 p-4">
              <h3 className="text-base font-semibold">{clip.title}</h3>
              <p className="text-sm text-neutral-300">{clip.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
