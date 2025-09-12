export default function HomePage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="grid place-items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hola, soy <span className="text-pink-400">Karlis Maldonado</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">
            Desarrolladora <span className="text-pink-300">Fullstack</span>{" "}
            especializada en <span className="text-pink-300">React</span>,{" "}
            <span className="text-pink-300">Next.js</span> y{" "}
            <span className="text-pink-300">TypeScript</span>. Me encanta crear
            UIs limpias, rápidas y accesibles.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4">
          <header className="flex flex-col gap-2">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              <span className="size-1.5 rounded-full bg-gradient-to-r from-pink-300 to-fuchsia-400 shadow-[0_0_12px_rgba(244,114,182,.6)]" />
              Proyecto destacado
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              🐾 Gatitos — App de adopción
            </h2>
            <p className="max-w-3xl text-neutral-300">
              Aplicación fullstack para listar gatitos, gestionar adopciones y
              administración con roles. Construida con Next.js 15, TypeScript,
              Tailwind, NextAuth y MongoDB/Mongoose.
            </p>
          </header>

          <ClipsGatitos />
        </div>
      </section>
    </>
  );
}

type Clip = {
  id: string;
  title: string;
  summary: string;
  src: string; // ruta a tu video en /public/videos/
};

function ClipsGatitos() {
  // 👉 Aquí se edita la lista de videos
  const clips: Clip[] = [
    {
      id: "clip1",
      title: "Arquitectura del proyecto",
      summary:
        "Estructura con Next.js 15 (app router), TypeScript y organización de componentes.",
      src: "/videos/arquitectura.mp4",
    },
    {
      id: "clip2",
      title: "API: /api/cats y toggle adoptado",
      summary:
        "Explico los endpoints, el esquema del modelo y cómo actualizo el estado adoptado.",
      src: "/videos/api-toggle.mp4",
    },
    {
      id: "clip3",
      title: "UI/UX: Cards y formularios",
      summary:
        "Diseño dark + pink, accesibilidad y validación de formularios de adopción.",
      src: "/videos/ui-formularios.mp4",
    },
  ];

  return (
    <section className="mt-10">
      <h3 className="text-xl md:text-2xl font-semibold">
        🎥 Clips explicativos
      </h3>
      <p className="mt-1 text-sm text-neutral-400">
        Pequeños videos donde explico decisiones técnicas y cómo implementé cada
        parte.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {clips.map((clip) => (
          <article
            key={clip.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="aspect-video">
              <video
                className="h-full w-full"
                src={clip.src}
                controls
                preload="metadata"
                aria-label={clip.title}
              />
            </div>

            <div className="space-y-2 p-4">
              <h4 className="text-base font-semibold">{clip.title}</h4>
              <p className="text-sm text-neutral-300">{clip.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
