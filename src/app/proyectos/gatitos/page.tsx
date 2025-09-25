export const metadata = {
  title: "Adopta un gato",
  description:
    "Aplicación fullstack para adoptar gatitos, gestionar adopciones y administración con roles. Next.js + TypeScript + Tailwind + NextAuth + MongoDB/Mongoose.",
};

type Clip = {
  id: string;
  title: string;
  summary: string;
  src: string;
  poster?: string;
};

export default function GatitosPage() {
  const clips: Clip[] = [
    {
      id: "gatitos-arquitectura",
      title: "Arquitectura del proyecto",
      summary:
        "Estructura con App Router, organización por features y patrones de componentes reutilizables.",
      src: "/videos/gatitos-arquitectura.mp4",
      poster: "/videos/gatitos-arquitectura.jpg",
    },
    {
      id: "gatitos-api",
      title: "API: /api/cats y ‘adoptado’",
      summary:
        "Endpoints REST, esquema del modelo Mongoose y toggle del estado de adopción con validaciones.",
      src: "/videos/gatitos-api.mp4",
      poster: "/videos/gatitos-api.jpg",
    },
    {
      id: "gatitos-ui",
      title: "UI/UX: Cards y formularios",
      summary:
        "Diseño dark + pink, accesibilidad en formularios y feedback de estado (loading/success).",
      src: "/videos/gatitos-ui.mp4",
      poster: "/videos/gatitos-ui.jpg",
    },
  ];

  return (
    <main className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6 space-y-2">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <span className="size-1.5 rounded-full bg-green-400" />
            Publicado
          </span>
          <h1 className="text-2xl md:text-3xl font-bold">Adopta un gato</h1>
          <p className="max-w-3xl text-neutral-300">
            App para gestionar adopciones: listado, ficha, estados y panel con
            roles (owner/admin/user). Stack: Next.js 15, TypeScript, Tailwind,
            NextAuth y MongoDB/Mongoose.
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
        Breves videos con la explicación de las decisiones técnicas y su
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
