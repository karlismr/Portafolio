export const metadata = {
  title: "Portafolio web — Karlis",
  description:
    "Portafolio personal con diseño oscuro, gradientes rosados y microinteracciones. Optimizado para rendimiento y accesibilidad.",
};

type Clip = {
  id: string;
  title: string;
  summary: string;
  src: string;
  poster?: string;
};

export default function PortafolioPage() {
  const clips: Clip[] = [
    {
      id: "portafolio-inicio",
      title: "Arquitectura.",
      summary:
        "Next.js + TS + Tailwind; componentes reutilizables, rutas anidadas y fondo animado optimizado.",
      src: "../Video1KarlisArquitectura.mp4",
      poster: "../capportafolio1.jpeg",
    },
    {
      id: "portafolio-videosyux",
      title: "Videos MP4 + UX accesible.",
      summary:
        "MP4 con metadata+poster, inline en móvil, grid responsive y foco visible.",
      src: "../Video2KarlisUX.mp4",
      poster: "../capportafolio2.jpeg",
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
          <h1 className="text-2xl md:text-3xl font-bold">Portafolio web</h1>
          <p className="max-w-3xl text-neutral-300">
            Sitio personal con estética dark + pink, gradientes y componentes
            reutilizables. Enfoque en semántica, accesibilidad y performance con
            Next.js.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
            Proyecto de <strong>portafolio</strong> que <strong>explica</strong>{" "}
            mis decisiones técnicas con
            <strong> videos MP4 locales</strong>. Grilla de cards 16:9 (poster,
            controles, tags) en
            <strong> Next.js + Tailwind</strong> con estética dark/fucsia.
            Aprendí
            <strong> optimización de video</strong> (preload/metadata, posters
            ligeros),
            <strong> SEO básico</strong>, accesibilidad y responsive.
          </p>

          <p className="mt-2 text-xs italic text-neutral-400/90">
            Nota: 0% YouTube, 100% MP4 local (sin anuncios, sin sustos).
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
        Breves videos donde muestro decisiones de UI/UX y optimizaciones
        técnicas.
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
