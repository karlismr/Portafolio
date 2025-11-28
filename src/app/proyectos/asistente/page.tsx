import Image from "next/image";

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
      summary: "En proceso",
      src: "/videos/asistente-flujo.mp4",
      poster: "/videos/asistente-flujo.jpg",
    },
    {
      id: "asistente-memoria",
      title: "Memoria conversacional",
      summary: "En proceso",
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
          <br />
          <p className="max-w-3xl text-neutral-300">
            Estoy creando un <strong>asistente con interfaz estilo chat</strong>{" "}
            donde puedas conversar como si fuese una persona (p. ej.{" "}
            <strong>familiar</strong> o <strong>amigo</strong>). Ya tengo{" "}
            <strong>el chat funcionando</strong> y está
            <strong> conectado a IA en tiempo real</strong> para responder según
            el contexto.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
            Actualmente estoy construyendo lo que más me emociona:
            <strong> llamadas a función (Function Calling)</strong> para que el
            asistente pueda{" "}
            <strong>guardar recordatorios y tareas en la base de datos</strong>{" "}
            y más adelante{" "}
            <strong>enviarte notificaciones cuando llegue el momento</strong>.
            Mi objetivo es que pueda <strong> recordar cosas por ti</strong>,
            dar
            <strong> seguimiento</strong> y preguntarte si cumpliste lo que
            dijiste; como un compañero que <strong>no olvida nada</strong>.
            <br />
            <br />
            Este proyecto me está ayudando a profundizar en
            <strong> Django, PWA</strong> e{" "}
            <strong>
              integración con IA real aplicada a problemas cotidianos
            </strong>
          </p>
          <div>
            <Image
              src="/llamadaafuncion.png"
              alt="Llamada a función"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover mx-auto"
            ></Image>
          </div>
          <br />
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
