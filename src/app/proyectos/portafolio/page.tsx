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
      title: "Inicio y semántica accesible",
      summary:
        "Estructura con main/header/section, tipografía y contenedores; foco visible y navegación de teclado.",
      src: "/videos/portafolio-inicio.mp4",
      poster: "/videos/portafolio-inicio.jpg",
    },
    {
      id: "portafolio-animaciones",
      title: "Microinteracciones y rendimiento",
      summary:
        "Animaciones sutiles, uso de `will-change`, tamaños de imagen con next/image y lazy para LCP.",
      src: "/videos/portafolio-animaciones.mp4",
      poster: "/videos/portafolio-animaciones.jpg",
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
