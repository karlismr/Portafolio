export const metadata = {
  title: "Asistente personal — (En curso)",
  description:
    "Asistente tipo chat con notas, tareas, recordatorios y memoria conversacional. Python (Django/FastAPI).",
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
            persistente y tono configurable. Frontend y backend con
            Python/Django.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
            Quiero crear un{" "}
            <strong>asistente tipo chat (estilo WhatsApp)</strong> donde puedas
            elegir con quién “hablas” (p. ej., <strong>familiar</strong> o{" "}
            <strong>novia</strong>) y que te haga
            <strong> recordatorios</strong>, te dé <strong>seguimiento</strong>{" "}
            y verifique que cumpliste lo que dijiste (tareas, salidas, citas).
            Con este proyecto busco profundizar en <strong>Django</strong> y
            aprender <strong>IA aplicada</strong>: <em>NLP básico</em> para
            detectar intención, extraer fechas/horas, ajustar el{" "}
            <em>tono/persona</em> de la respuesta y priorizar recordatorios de
            forma inteligente.
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

      <div className="mt-6 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(420px,1fr))]">
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
